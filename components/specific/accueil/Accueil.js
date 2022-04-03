import React, { useEffect, useState } from "react";
import { techList } from "../../commun/flipCard/techList";
import { getAuth } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { carModification } from "../../../src/userReducer";


import { TechZone } from "../../../styles/TechZone";
import { db } from "../../../firebase";

import {
  collection,
  doc,
  onSnapshot,
  query,
  where,
  getDoc,
  getDocs,
  FieldPath,
} from "firebase/firestore";
import { getStorage, ref} from "firebase/storage";
import CustomerWithoutCs from "../../commun/MainCar/CustomerWithoutCs";
import { async } from "@firebase/util";
import CarToChange from "../../commun/genericComponents/CarToChange";

export default function Accueil({user}) {
  //   q.get().then((querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //         // doc.data() is never undefined for query doc snapshots
  //         console.log(doc);
  //     });
  // });

  const [isLoadin, setIsLoading] = useState(false);
  const [carsList, setCarsList] = useState([]);
  
  

  const carsRef = collection(db, "cars");
  const myParking = query(carsRef, where("serviceAdvisor", "==", `${user.nom}`));


// const unsub = onSnapshot(
//   myParking, 
//     { includeMetadataChanges: true }, 
//     doc=>console.log(doc.docs)
//       // ...
//     );


   

  useEffect(()=>
    onSnapshot(myParking,(snapshot)=>setCarsList(snapshot.docs.map(doc=>doc.data())))
    
  )

  console.log(carsList)

//   const unsub = onSnapshot(collection(db, "cars"), (doc) => {
//     console.log("Current data: ", doc.docChanges);
// });


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

  // const getUser = getAuth().currentUser;

  // function checkProfilTech(checking) {
  //   return checking.email === getUser.email;
  // }
  // const user = techList.find(checkProfilTech);

  function checkParkTech(checking) {
    return checking.affectationChefAtelier.includes(`${user.nom}`);
  }

  // const parkPisteur = props.filter(checkParkTech)

  const dispatch = useDispatch();
   const toModifyStatus = useSelector((state) => state.userOptions.carToModifyStatus);

  const [toModify,setTomodify]=useState("")

  const handlCarToModify=(car)=>{
    setTomodify(car);
    dispatch(carModification());
  }

  


// const carRef = doc(db, "cars", `${toModify}`);
// const myCarToModify = async ()=> await getDoc(carRef) 





  return (
    
    
    toModifyStatus ? (
    <>
      <button
        id="toModify"
        
        onClick={(e) => dispatch(carModification())}
      >
        Retour
      </button>
      <CarToChange props={toModify}></CarToChange>
    </>
  ) : (
    <TechZone>
      {carsList.map((car)=>(<button key={car.customerName} style={{width:"20vw",heigth:"100%"}} onClick={()=>{handlCarToModify(car)}}><CustomerWithoutCs  key={car.customerName} props={car}></CustomerWithoutCs></button>))}
    </TechZone>
  )
  
  
  
  )
}


