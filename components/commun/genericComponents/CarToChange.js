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

export default function CarToChange({ props }) {
  const [carImage, setCarImage] = useState(
    "https://firebasestorage.googleapis.com/v0/b/one-touch-work.appspot.com/o/files%2Fimages%20(2).png?alt=media&token=c0ce54d8-4f47-4bd2-b997-776f8f6b65a9"
  );

  const [carsList, setCarsList] = useState([]);
  const [myService, setMyService] = useState(props.myService);
  const [electric, setElectric] = useState(props.electrical);
  const [mecanique, setMecanique] = useState(props.mecanical);
  const [bodyCar, setBodyCar] = useState(props.bodyCar);

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
  const choosenCs=useSelector((state)=>state.csSelected.serviceAdvisor)

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
        serviceAdvisor:choosenCs,
        myService: myService,
        electrical: electric,
        bodyCar: bodyCar,
        mecanical: mecanique,
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
        justifyContent: "center",
        fontSize:"1.5vw",
      }}
    >
      <div style={{position:"absolute",left:"110px"}}>
        <div>{props.rdvFixed ? <p>RDV : {props.rdvTimeFixed}</p> : "SANS RDV"}</div>
        <input
        style={{width:"20vw"}}
          type="text"
          onChange={(e) => setCustomerNameToModify(e.target.value)}
          // value={setCustomerName} // was added on 05/03/22
          defaultValue={props.customerName}
        ></input>

        <p>Emplacement : {props.whereIsTheCar}</p>
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
            value={bodyCar}
            checked={bodyCar}
            onChange={() => setBodyCar(!bodyCar)}
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

        

        <div onClick={() => handleSubmit()}>
          <MySubmitButton props="Enregistrer"></MySubmitButton>
        </div>
      </div>
     <div style={{position:"absolute",left:"10px"}}> <CsAffected  defaultCs={props.serviceAdvisor}/></div>
      <img
      style={{position:"absolute",left:"10px",top:"5vh",borderRadius:"30px"}}
        alt="photoVehicle"
        name="photoVehicle"
        src={carImage}
        width="100vw"
        height="200vh"
        quality={10}
      />
    </div>
  );
}
