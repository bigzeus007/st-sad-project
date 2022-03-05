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

export default function CarToChangeByCs({ props }) {
  const [carImage, setCarImage] = useState(
    "https://firebasestorage.googleapis.com/v0/b/one-touch-work.appspot.com/o/files%2Fimages%20(2).png?alt=media&token=c0ce54d8-4f47-4bd2-b997-776f8f6b65a9"
  );
    const toDay= new Date().toISOString().substring(0, 10);
    console.log(toDay)
  const [carsList, setCarsList] = useState([]);
  const [myService, setMyService] = useState(props.myService);
  const [electric, setElectric] = useState(props.electrical);
  const [mecanique, setMecanique] = useState(props.mecanical);
  const [body, setBody] = useState(props.body);
  const [restitutionTime, setRestitutionTime]=useState(null)
  const [restitutionDate, setRestitutionDate]=useState(null)
  
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
        // serviceAdvisor:choosenCs,
        myService: myService,
        electrical: electric,
        body: body,
        mecanical: mecanique,
        restitutionTime:restitutionTime,
        restitutionDate:restitutionDate,
      },
      { merge: true }
    ).then(dispatch(carModification()));
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "40vh",
        justifyContent: "flex-end",
      }}
    >
      <div>
        <div>{props.rdvFixed ? <p>RDV : {props.rdvTimeFixed}</p> : "SANS RDV"}</div>
        <input
          type="text"
          onChange={(e) => setCustomerNameToModify(e.target.value)}
          defaultValue={props.customerName}
        ></input>
        <div>
        <p>Emplacement : {props.whereIsTheCar}</p>
        
        </div>
        <div>
          <p>TRAVAUX</p>
          <input
            type="checkbox"
            id="Revision"
            name="Revision"
            value={myService}
            checked={myService}
            onChange={() => setMyService(!myService)}
          />
          <label htmlFor="Revision">Revision</label>
          <br />
          <input
            type="checkbox"
            id="electric"
            name="electric"
            value={electric}
            checked={electric}
            onChange={() => setElectric(!electric)}
          />
          <label htmlFor="electric">Diag</label>
          <br />
          <input
            type="checkbox"
            id="Carrosserie"
            name="Carrosserie"
            value={body}
            checked={body}
            onChange={() => setBody(!body)}
          />
          <label htmlFor="Carrosserie">Carrosserie</label>
          <br />
          <input
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

        

        <div onClick={() => restitutionTime?handleSubmit():alert("Ajouter heurerestitution")}>
          <MySubmitButton props="Enregistrer"></MySubmitButton>
        </div>
      </div>
      <div>
      <p>Responsabilite :{props.serviceAdvisor}</p>
      <input
              type="time"
              onChange={(e) => setRestitutionTime(e.target.value)}
              value={restitutionTime}
              
              
            ></input>
            <input
            
              type="date"
              placeholder="dd-mm-yyyy"
              onChange={(e) => setRestitutionDate(e.target.value)}
              value={restitutionDate}
              defaultValue={toDay}
              
              
            ></input>
            
            
            
            
            
            
            </div>
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
