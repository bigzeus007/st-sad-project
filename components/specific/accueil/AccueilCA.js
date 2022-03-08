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
import { getStorage, ref } from "firebase/storage";
import CustomerWithoutCs from "../../commun/MainCar/CustomerWithoutCs";
import { async } from "@firebase/util";
import CarToChange from "../../commun/genericComponents/CarToChange";
import CarToAffect from "../../commun/genericComponents/CarToAffect";
import { resetState } from "../../../src/caReducer";

export default function AccueilCA({ user }) {
  //   q.get().then((querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //         // doc.data() is never undefined for query doc snapshots
  //         console.log(doc);
  //     });
  // });

  const [isLoadin, setIsLoading] = useState(false);
  const [carsList, setCarsList] = useState([]);

  const carsRef = collection(db, "cars");

  const myParking = query(carsRef, where("affected", "!=", "technicians"));

  // where("restitutionTime", "!=", ""),
  // const unsub = onSnapshot(
  //   myParking,
  //     { includeMetadataChanges: true },
  //     doc=>console.log(doc.docs)
  //       // ...
  //     );

  useEffect(
    () =>
      onSnapshot(myParking, (snapshot) =>
        setCarsList(snapshot.docs.map((doc) => doc.data()))
      ),

    []
  );

  console.log(carsList);

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

  function checkProfilTech(checking) {
    return checking.email === getUser.email;
  }

  function checkParkTech(checking) {
    return checking.affectationChefAtelier.includes(`${user.nom}`);
  }

  // const parkPisteur = props.filter(checkParkTech)

  const dispatch = useDispatch();
  const toModifyStatus = useSelector(
    (state) => state.userOptions.carToModifyStatus
  );

  const [toModify, setTomodify] = useState("");

  const handlCarToModify = (car, e) => {
    setTomodify(car);
    dispatch(carModification());
  };

  // const carRef = doc(db, "cars", `${toModify}`);
  // const myCarToModify = async ()=> await getDoc(carRef)

  return toModifyStatus ? (
    <>
      <button
        id="toModify"
        onClick={(e) => (dispatch(carModification()), dispatch(resetState()))}
      >
        Retour
      </button>
      <CarToAffect props={toModify}></CarToAffect>
    </>
  ) : (
    <TechZone>
      {carsList.map((car) => (
        <button
          key={car.customerName}
          disabled={car.restitutionTime==""}
          style={{ width: "20vw", heigth: "100%",background:`${car.restitutionTime==""?"pink":"green"}`,opacity:`${car.restitutionTime==""?"70%":"100%"}`,color:`${car.restitutionTime==""?"blue":"black"}`}}
          onClick={(e) => {
            handlCarToModify(car, e);
          }}
        >
          <CustomerWithoutCs
            key={car.customerName}
            props={car}
          ></CustomerWithoutCs>
        </button>
      ))}
    </TechZone>
  );
}
