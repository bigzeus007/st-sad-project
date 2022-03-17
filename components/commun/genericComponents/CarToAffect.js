import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { carModification } from "../../../src/userReducer";

import { db } from "../../../firebase";
import {
  getStorage,
  getDownloadURL,
  ref,
  uploadString,
} from "firebase/storage";
import { storage } from "../../../firebase";
import CarDetailsOptions from "./CarDetailsOptions";
import RadioStyled from "../../../styles/RadioStyled";
import {
  doc,
  setDoc,
  serverTimestamp,
  collection,
  query,
  where,
  onSnapshot,
  getDoc,
} from "firebase/firestore";

import { useSelector, useDispatch } from "react-redux";
import {
  rdvTimeSelected,
  rdvStatus,
  customerName,
  selectCs,
} from "../../../src/csReducer";
import { async } from "@firebase/util";
import { MySubmitButton } from "../../../styles/MySubmitButton.styled";
import CsAffected from "./csAffected";
import { resetState, selectTech } from "../../../src/caReducer";
import { CarToAffectStyled } from "../../../styles/CarToAffectStyled.styled";

export default function CarToAffect({ props }) {
  const [carImage, setCarImage] = useState(
    "https://firebasestorage.googleapis.com/v0/b/one-touch-work.appspot.com/o/files%2Fimages%20(2).png?alt=media&token=c0ce54d8-4f47-4bd2-b997-776f8f6b65a9"
  );

  const [carsList, setCarsList] = useState([]);
  const [myService, setMyService] = useState(props.myService);
  const [electric, setElectric] = useState(props.electrical);
  const [mecanique, setMecanique] = useState(props.mecanical);
  const [bodyCar, setbodyCar] = useState(props.bodyCar);

  const [customerNameToModify, setCustomerNameToModify] = useState(
    props.customerName
  );

  const inputRef = useRef(null);
  const [csName, setCsName] = useState("");

  const rdvState = useSelector((state) => state.csSelected.rdvFixed);
  // const carsRef = doc(db, "cars",`${props.customerName}`);
  // DANGEROUS getDoc(carsRef).then((doc)=>setMyCarToChange(doc.data()))
  const dispatch = useDispatch();
  const customerIdentity = useSelector(
    (state) => state.csSelected.customerSetName
  );
  // const techsToAffect= useSelector((state)=>state.selectTech)
  const choosenCs = useSelector((state) => state.csSelected.serviceAdvisor);
  const techAffected = useSelector((state) => state.selectedByCa);

  //import car pictur from firestore
  const storage = getStorage();
  const spaceRef = ref(storage, `cars/${props.id}`);

  getDownloadURL(spaceRef)
    .then((url) => setCarImage(url))
    .catch((err) =>
      setCarImage(
        "https://firebasestorage.googleapis.com/v0/b/one-touch-work.appspot.com/o/files%2Fimages%20(2).png?alt=media&token=c0ce54d8-4f47-4bd2-b997-776f8f6b65a9"
      )
    );

  const docref = collection(db, "cars");

  const handleSubmit = async () => {
    await setDoc(
      doc(docref, `${props.customerName}`),
      {
        isItInGoodPlace:false,
        affected: "technicians",
        whereIsTheCar:"Pending",
        myService: techAffected.myService,
        electrical: techAffected.electrical,
        bodyCar: techAffected.bodyCar,
        mecanical: techAffected.mecanical,
      },
      { merge: true }
    ).then(dispatch(carModification()),dispatch(resetState()));
  };

  const listTechByWS = [{ nom: "", atelierAffectation: "" }];
  function allowDrop(event) {
    event.preventDefault();
  }

  function drop(event) {
    event.preventDefault();

    console.log(techAffected);
  }
  //const myElement= techAffected.filter((tech)=>tech.atelier=="express").map(element=>element.nom)

  return (
    <CarToAffectStyled>
    <div
      onDrop={(e) => drop(e)}
      onDragOver={(e) => allowDrop(e)}
       >
          <button
          className="returnBack"
        id="toModify"
        onClick={(e) => (dispatch(carModification()), dispatch(resetState()))}
      >
      </button>
      <div>
        <h3>
          {props.rdvFixed ? <p>RDV : {props.rdvTimeFixed}</p> : "SANS RDV"}
        </h3>
        <h3>{props.customerName}</h3>
        <h3> {props.serviceAdvisor}</h3>
        <p>Emplacement : {props.whereIsTheCar}</p>
        <div className="workToDoList">
          <p>TRAVAUX</p>
          {props.myService && <div className="workToDo">Express: <button onClick={()=>dispatch(selectTech(["myService",""]))}>{techAffected.myService}</button></div>}
          {props.myService && <div className="workToDo">Mecanique: <button onClick={()=>dispatch(selectTech(["mecanical",""]))}>{techAffected.mecanical}</button></div>}
          {props.myService && <div className="workToDo">Diag: <button onClick={()=>dispatch(selectTech(["electrical",""]))}>{techAffected.electrical}</button></div>}
          {props.myService && <div className="workToDo">Carrosserie: <button onClick={()=>dispatch(selectTech(["bodyCar",""]))}>{techAffected.bodyCar}</button></div>}
          <br />
        </div>

        <div onClick={() => handleSubmit()}>
          <MySubmitButton props="Enregistrer"></MySubmitButton>
        </div>
      </div>
      
      <img

        alt="photoVehicle"
        name="photoVehicle"
        src={carImage}
        
        quality={10}
      />
    </div>
    </CarToAffectStyled>
  );
}
