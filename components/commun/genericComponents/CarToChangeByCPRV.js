import React, { useState } from "react";
import { useRef } from "react";
import Image from "next/image";
import { MySubmitButton } from "../../../styles/MySubmitButton.styled";
import { db } from "./firebase";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { doc, setDoc, collection } from "firebase/firestore";
import { MyCarToChange } from "../../../styles/MyCarToChange.styled";
import { useSelector, useDispatch } from "react-redux";
import { rdvStatus, selectCs } from "../../../src/csReducer";
import { carModification } from "../../../src/userReducer";

import CsAffected from "./CsAffected";

export default function CarToChangeByCPRV({ props }) {
  const [carImage, setCarImage] = useState(
    "https://firebasestorage.googleapis.com/v0/b/one-touch-work.appspot.com/o/files%2Fimages%20(2).png?alt=media&token=c0ce54d8-4f47-4bd2-b997-776f8f6b65a9"
  );
  const [express, setExpress] = useState(props.express);
  const [diagnostic, setDiagnostic] = useState(props.diagnostic);
  const [mecanique, setMecanique] = useState(props.mecanique);
  const [carrosserie, setCarrosserie] = useState(props.carrosserie);
  const [customerNameToModify, setCustomerNameToModify] = useState(
    props.customerName
  );

  const inputRef = useRef(null);

  const rdvState = useSelector((state) => state.csSelected.rdvFixed);

  const dispatch = useDispatch();
  const customerIdentity = useSelector(
    (state) => state.csSelected.customerSetName
  );
  // const choosenCs=useSelector((state) => state.csSelected.serviceAdvisor)

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
        serviceAdvisor: theCs,
        workToDo: {
          express: express,
          diagnostic: diagnostic,
          carrosserie: carrosserie,
          mecanique: mecanique,
        },

        express: express,
        diagnostic: diagnostic,
        carrosserie: carrosserie,
        mecanique: mecanique,
      },
      { merge: true }
    ).then(dispatch(carModification()));
  };

  const photoRef = useRef(null);

  const [csName, setCsName] = useState("");
  const [rdvTime, setRdvTime] = useState("");

  const theCs = useSelector((state) => state.csSelected.serviceAdvisor);

  //   const csChoice = (e) => {
  //     setCsName(e.target.id === csName ? "green" : "grey");
  //   };

  function handlReturn() {
    setRdvTime("");

    dispatch(selectCs(""));
    dispatch(rdvStatus(false));
  }

  //     const emptyInput = () => {
  //     let myInput = inputRef.current;
  //     myInput.value = null;
  //     setCustomer(null);
  //   };

  const toggleSubmit = () => {
    return (
      customerIdentity != "" && ((theCs != "" && rdvTime != "") || !rdvState)
    );
  };

  //   const [carStatus, setCarStatus] = useState("none");
  //   const takePictureSwitch = hasPhoto ? "flex" : "none";

  //   const handleSubmit = async (image) => {
  //     await setDoc(doc(db, "cars", `${customerIdentity}`), {
  //       customerNameModify:customerIdentity,//to use to modify customerName
  //       customerCategory: "Normal",
  //       rdvFixed: rdvState,
  //       serviceAdvisor: rdvState ? theCs:"",
  //       rdvTimeFixed: rdvTime,
  //       affected: theCs,
  //       express: "",
  //       diagnostic: "",
  //       carrosserie: "",
  //       mecanique: "",
  //       carStory:[{who:"CPRV",when:new Date().toISOString().substring(0, 16),what:"CarAffected"}],
  //     });
  //     dispatch(selectCs(null));
  //   };

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

        <div onClick={() => handleSubmit()}>
          <MySubmitButton props="Enregistrer"></MySubmitButton>
        </div>
      </div>
      <div>
        <CsAffected defaultCs={props.serviceAdvisor}></CsAffected>
        
      </div>
      <Image
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
