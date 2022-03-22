import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { carModification } from "../../../src/userReducer";
import MyIcons from "../../../src/images";
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
import { MyCarToChange } from "../../../styles/MyCarToChange.styled";

export default function CarToChangeByCs({ props }) {
  const [carImage, setCarImage] = useState(
    "https://firebasestorage.googleapis.com/v0/b/one-touch-work.appspot.com/o/files%2Fimages%20(2).png?alt=media&token=c0ce54d8-4f47-4bd2-b997-776f8f6b65a9"
  );
  const toDay = new Date().toISOString().substring(0, 10);

  const [carsList, setCarsList] = useState([]);
  const [express, setExpress] = useState(props.express);
  const [diagnostic, setDiagnostic] = useState(props.diagnostic);
  const [mecanique, setMecanique] = useState(props.mecanique);
  const [carrosserie, setCarrosserie] = useState(props.carrosserie);
  const [restitutionTime, setRestitutionTime] = useState("");
  const [restitutionDate, setRestitutionDate] = useState(toDay);

  const [customerNameToModify, setCustomerNameToModify] = useState(
    props.customerName
  );

  const inputRef = useRef(null);
  // const [csName, setCsName] = useState("");

  const rdvState = useSelector((state) => state.csSelected.rdvFixed);
  // const carsRef = doc(db, "cars",`${props.customerName}`);
  // DANGEROUS getDoc(carsRef).then((doc)=>setMyCarToChange(doc.data()))
  const dispatch = useDispatch();
  const customerIdentity = useSelector(
    (state) => state.csSelected.customerSetName
  );
  // const choosenCs=useSelector((state)=>state.csSelected.serviceAdvisor)

  // const csChoice = (e) => {
  //   setCsName(e.target.id === csName ? "green" : "grey");
  // };

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
      doc(docref, `${props.id}`),
      {
        // serviceAdvisor:choosenCs,
        workToDo:{express:express,diagnostic: diagnostic,carrosserie: carrosserie,mecanique: mecanique},
       
        basyCar: false,
        affected:"CA",
        express: express,
        diagnostic: diagnostic,
        carrosserie: carrosserie,
        mecanique: mecanique,
        restitutionTime: restitutionTime,
        restitutionDate: restitutionDate,
        carStory:[{who:`${props.serviceAdvisor}`,when:new Date().toISOString().substring(0, 16),what:"FROM CS TO ATELIER"}],
      },
      { merge: true }
    ).then(dispatch(carModification()));
  };

  return (
    <MyCarToChange>
      <button
        className="returnBack"
        id={props.customerName}
        onClick={(e) => dispatch(carModification())}
      ></button>
      <div>
        <div>
          {props.rdvFixed ? <p>RDV : {props.rdvTimeFixed}</p> : "SANS RDV"}
        </div>
        <div>
          <p>Client : {props.customerName}</p>{" "}
        </div>
        <div>
          <p>Emplacement : {props.whereIsTheCar}</p>
        </div>
        <div>
          <p>TRAVAUX</p>
          <input
            className="trvx"
            type="checkbox"
            id="Revision"
            name="Revision"
            value={express}
            checked={express}
            onChange={() => setExpress(!express)}
          />
          <label htmlFor="Revision">Revision</label>
          <br />
          <input
            className="trvx"
            type="checkbox"
            id="diagnostic"
            name="diagnostic"
            value={diagnostic}
            checked={diagnostic}
            onChange={() => setDiagnostic(!diagnostic)}
          />
          <label htmlFor="diagnostic">Diag</label>
          <br />
          <input
            className="trvx"
            type="checkbox"
            id="Carrosserie"
            name="Carrosserie"
            value={carrosserie}
            checked={carrosserie}
            onChange={() => setCarrosserie(!carrosserie)}
          />
          <label htmlFor="Carrosserie">Carrosserie</label>
          <br />
          <input
            className="trvx"
            type="checkbox"
            id="mecanique"
            name="mecanique"
            value={mecanique}
            checked={mecanique}
            onChange={() => setMecanique(!mecanique)}
          />
          <label htmlFor="mecanique">Mecanique</label>
          <br />
        </div>

        <div
          onClick={() =>
            restitutionTime
              ? handleSubmit()
              : alert("Ajouter heure de restitution")
          }
        >
          <MySubmitButton props="Enregistrer"></MySubmitButton>
        </div>
      </div>
      <div>
        <p>Responsabilite :{props.serviceAdvisor}</p>
        <input
          className="dateNdTime"
          type="time"
          onChange={(e) => setRestitutionTime(e.target.value)}
          value={restitutionTime}
        ></input>
        <br />
        <input
          className="dateNdTime"
          type="date"
          placeholder="dd-mm-yyyy"
          onChange={(e) => setRestitutionDate(e.target.value)}
          defaultValue={restitutionDate}
          min={restitutionDate}
        ></input>
      </div>
      <img
        alt="photoVehicle"
        name="photoVehicle"
        src={carImage}
        width="55%"
        height="100%"
        quality={10}
      />
    </MyCarToChange>
  );
}
