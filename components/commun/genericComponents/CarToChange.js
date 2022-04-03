import React, { useState, useRef } from "react";
import Image from "next/image";
import { carModification } from "../../../src/userReducer";

import { db } from "../../../firebase";
import { getStorage, getDownloadURL, ref } from "firebase/storage";

import { doc, setDoc, collection } from "firebase/firestore";

import { useSelector, useDispatch } from "react-redux";

import { MySubmitButton } from "../../../styles/MySubmitButton.styled";
import CsAffected from "./csAffected";

export default function CarToChange({ props }) {
  const [carImage, setCarImage] = useState(
    "https://firebasestorage.googleapis.com/v0/b/one-touch-work.appspot.com/o/files%2Fimages%20(2).png?alt=media&token=c0ce54d8-4f47-4bd2-b997-776f8f6b65a9"
  );

  const [carsList, setCarsList] = useState([]);
  const [express, setExpress] = useState(props.express);
  const [diagnostic, setDiagnostic] = useState(props.diagnostic);
  const [mecanique, setMecanique] = useState(props.mecanique);
  const [carrosserie, setCarrosserie] = useState(props.carrosserie);

  const [customerNameToModify, setCustomerNameToModify] = useState(
    props.customerName
  );

  const inputRef = useRef(null);
  const [csName, setCsName] = useState("");

  const rdvState = useSelector((state) => state.csSelected.rdvFixed);

  const dispatch = useDispatch();
  const customerIdentity = useSelector(
    (state) => state.csSelected.customerSetName
  );
  const choosenCs = useSelector((state) => state.csSelected.serviceAdvisor);


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
        serviceAdvisor: choosenCs,
        express: express,
        diagnostic: diagnostic,
        carrosserie: carrosserie,
        mecanique: mecanique,
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
        fontSize: "1.5vw",
      }}
    >
      <div style={{ position: "absolute", left: "110px" }}>
        <div>
          {props.rdvFixed ? <p>RDV : {props.rdvTimeFixed}</p> : "SANS RDV"}
        </div>
        <input
          style={{ width: "20vw" }}
          type="text"
          onChange={(e) => setCustomerNameToModify(e.target.value)}
        
          defaultValue={props.customerName}
        ></input>

        <p>Emplacement : {props.whereIsTheCar}</p>
        <div>
          <p>TRAVAUX</p>
          <input
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
      <div style={{ position: "absolute", left: "10px" }}>
        {" "}
        <CsAffected defaultCs={props.serviceAdvisor} />
      </div>
      <Image
        style={{
          position: "absolute",
          left: "10px",
          top: "5vh",
          borderRadius: "30px",
        }}
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
