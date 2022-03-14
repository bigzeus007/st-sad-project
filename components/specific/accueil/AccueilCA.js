import React, { useEffect, useState } from "react";
import { techList } from "../../commun/flipCard/techList";
import { getAuth } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { carModification } from "../../../src/userReducer";
import { resetState } from "../../../src/caReducer";

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


export default function AccueilCA({ user }) {

  const [isLoadin, setIsLoading] = useState(false);
  const [carsList, setCarsList] = useState([]);

  const carsRef = collection(db, "cars");

  const myParking = query(carsRef, where("whereIsTheCar", "==", "Parking-E"),where("restitutionTime", "!=", ""));

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
   
     
      <CarToAffect props={toModify}></CarToAffect>
   
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
