import React, { useEffect, useState } from "react";
import { techList } from "../../commun/flipCard/techList";
import { getAuth } from "firebase/auth";

import MainCar from "../../commun/MainCar/MainCar";
import { TechZone } from "../../../styles/TechZone";
import { db } from "../../../firebase";

import {
  collection,
  doc,
  onSnapshot,
  query,
  where,
  getDocs,
  FieldPath,
} from "firebase/firestore";
import { getStorage, ref} from "firebase/storage";
import CustomerWithoutCs from "../../commun/MainCar/CustomerWithoutCs";

export default function Accueil() {
  //   q.get().then((querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //         // doc.data() is never undefined for query doc snapshots
  //         console.log(doc);
  //     });
  // });

  const [isLoadin, setIsLoading] = useState(false);
  const [carsList, setCarsList] = useState([]);
  
  

  const carsRef = collection(db, "cars");
  const myParking = query(carsRef, where("serviceAdvisor", "==", ""));




  useEffect(()=>
    onSnapshot(myParking,(snapshot)=>setCarsList(snapshot.docs.map(doc=>doc.data())))
    
  ,[])

  // const unsub = onSnapshot(
  //   testCarRef, 
  //   { includeMetadataChanges: true }, 
  //   (doc) => { console.log(doc)
  //     // ...
  //   });



  // const docSnap = async()=> getDoc(testCarRef);

  // if (docSnap.exists()) {
  //   console.log("Document data:", docSnap.data());
  // } else {
  //   // doc.data() will be undefined in this case
  //   console.log("No such document!");
  // }

  //   const myDoc = query(collection(db, "cars"), where("whereIsTheCar", "==", "Parking-E"));

  // function getDataCollection(){
  //   myDoc.onSnapshot().then((querySnapshot)=>{
  //     const items=[];
  //     querySnapshot.forEach((doc)=>{
  //       console.log(doc)
  //     })

  //   })
  // }
  // getDataCollection()

  // const unsub = onSnapshot(doc(myDoc, "JE SUIS SANS RDV"), (doc) => {
  //   console.log("Current data: ", doc);
  // });

  const getUser = getAuth().currentUser;

  function checkProfilTech(checking) {
    return checking.email === getUser.email;
  }
  const user = techList.find(checkProfilTech);

  function checkParkTech(checking) {
    return checking.affectationChefAtelier.includes(`${user.nom}`);
  }

  // const parkPisteur = props.filter(checkParkTech)

  return isLoadin ? (
    <div> isLoading...</div>
  ) : (
    <TechZone>
      {carsList.map((car)=>(<CustomerWithoutCs key={car.customerName} props={car}></CustomerWithoutCs>))}
    </TechZone>
  );
}
