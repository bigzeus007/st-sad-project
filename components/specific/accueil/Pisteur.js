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
import { getStorage, ref } from "firebase/storage";

export default function Pisteur() {


  const [isLoadin, setIsLoading] = useState(false);
  const [carsList, setCarsList] = useState([]);

  const carsRef = collection(db, "cars");
  const myParking = query(carsRef, where("whereIsTheCar", "==", "Parking-E"));

  useEffect(() =>
    onSnapshot(myParking, (snapshot) =>
      setCarsList(snapshot.docs.map((doc) => doc.data()))
    )
  );

  return isLoadin ? (
    <div> isLoading...</div>
  ) : (
    <TechZone>
      {carsList.map((car) => (
        <MainCar key={car.customerName} props={car}></MainCar>
      ))}
    </TechZone>
  );
}
