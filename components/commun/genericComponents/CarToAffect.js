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
import { resetState } from "../../../src/caReducer";

export default function CarToAffect({ props }) {
  const [carImage, setCarImage] = useState(
    "https://firebasestorage.googleapis.com/v0/b/one-touch-work.appspot.com/o/files%2Fimages%20(2).png?alt=media&token=c0ce54d8-4f47-4bd2-b997-776f8f6b65a9"
  );

  const [carsList, setCarsList] = useState([]);
  const [myService, setMyService] = useState(props.myService);
  const [electric, setElectric] = useState(props.electrical);
  const [mecanique, setMecanique] = useState(props.mecanical);
  const [body, setBody] = useState(props.body);

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
  const spaceRef = ref(storage, `cars/${props.customerName}`);

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
        
        myService: techAffected.express,
        electrical: techAffected.electrique,
        body: techAffected.bodyCar,
        mecanical: techAffected.mecanique,
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
    <div
      onDrop={(e) => drop(e)}
      onDragOver={(e) => allowDrop(e)}
      style={{
        display: "flex",
        width: "100%",
        height: "40vh",
        justifyContent: "flex-end",
      }}
    >
      <div>
        <h3>
          {props.rdvFixed ? <p>RDV : {props.rdvTimeFixed}</p> : "SANS RDV"}
        </h3>
        <h3>{props.customerName}</h3>
        <p>Emplacement : {props.whereIsTheCar}</p>
        <div>
          <p>TRAVAUX</p>
          {props.myService && <div>Express: {techAffected.express}<button>-</button></div>}
          {props.myService && <div>Mecanique: {techAffected.mecanique}</div>}
          {props.myService && <div>Diag: {techAffected.electrique}</div>}
          {props.myService && <div>Carrosserie: {techAffected.bodyCar}</div>}
          <br />
        </div>

        <div onClick={() => handleSubmit()}>
          <MySubmitButton props="Enregistrer"></MySubmitButton>
        </div>
      </div>
      <h2 style={{ color: "blue" }}> {props.serviceAdvisor}</h2>
      <img
        alt="photoVehicle"
        name="photoVehicle"
        src={carImage}
        width="75%"
        height="100%"
        quality={10}
      />
    </div>
  );
}
