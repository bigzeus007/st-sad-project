import React, { useEffect, useMemo, useState } from "react";
import { useRef } from "react";
import { Button } from "../../../styles/Button.styled";
import { MySubmitButton } from "../../../styles/MySubmitButton.styled";
import { auth, db } from "../../../firebase";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase";
import CarDetailsOptions from "./CarDetailsOptions";
import RadioStyled from "../../../styles/RadioStyled";
import { doc, setDoc, serverTimestamp, collection } from "firebase/firestore";
import { MyCarToChange } from "../../../styles/MyCarToChange.styled";
import { useSelector, useDispatch } from "react-redux";
import {
  rdvTimeSelected,
  rdvStatus,
  customerName,
  selectCs,
} from "../../../src/csReducer";
import { carModification } from "../../../src/userReducer";
import { async } from "@firebase/util";
import { TakePitureButton } from "../../../styles/TakePitureButton.styled";
import NewButtonColored from "../../../styles/NewButtonColored.styled";
import {
  ChooseRdvStatus,
  RdvInfo,
} from "../../../styles/ChooseRdvStatus.style";
import RdvOrNotInput from "../../../styles/RdvOrNotInput";
import CsAffected from "./csAffected";

export default function CarToAffectByPisteur({props,user}) {
  const [carImage, setCarImage] = useState(
    "https://firebasestorage.googleapis.com/v0/b/one-touch-work.appspot.com/o/files%2Fimages%20(2).png?alt=media&token=c0ce54d8-4f47-4bd2-b997-776f8f6b65a9"
  );
  const [express, setExpress] = useState(props.workDone.express);
  const [diagnostic, setDiagnostic] = useState(props.workDone.diagnostic);
  const [mecanique, setMecanique] = useState(props.workDone.mecanique);
  const [carrosserie, setCarrosserie] = useState(props.workDone.carrosserie);
  const[techSelected,setTechSelected]=useState(null)
  const [customerNameToModify, setCustomerNameToModify] = useState(
    props.customerName
  );

  const inputRef = useRef(null);

  const rdvState = useSelector((state) => state.csSelected.rdvFixed);

  const dispatch = useDispatch();
  const customerIdentity = useSelector(
    (state) => state.csSelected.customerSetName
  );

  const storage = getStorage();
  const spaceRef = ref(storage, `cars/${props.id}`);

  getDownloadURL(spaceRef)
    .then((url) => setCarImage(url))
    .catch((err) =>
      setCarImage(
        "https://firebasestorage.googleapis.com/v0/b/one-touch-work.appspot.com/o/files%2Fimages%20(2).png?alt=media&token=c0ce54d8-4f47-4bd2-b997-776f8f6b65a9"
      )
    );
  console.log(props,user)

  const docref = collection(db, "cars");

  const handleSubmit = async () => {

  
   await setDoc(
      doc(docref, `${props.id}`),
      {
        isItInGoodPlace: false,
        affected:"Parking",
        
        basyCar: false,
        carStory: [
          {
            who: `${user.nom}`,
            when: new Date().toISOString().substring(0, 16),
            what: `${"CHECKED BY "+techSelected}`,
          },
        ],
      },
      { merge: true }
    ).then(dispatch(carModification()));
  };

  const photoRef = useRef(null);

  const [csName, setCsName] = useState("");
  const [rdvTime, setRdvTime] = useState("");

  const theCs = useSelector((state) => state.csSelected.serviceAdvisor);

  function handlReturn() {
    setRdvTime("");

    dispatch(selectCs(""));
    dispatch(rdvStatus(false));
  }

  const toggleSubmit = () => {
    return (
      customerIdentity != "" && ((theCs != "" && rdvTime != "") || !rdvState)
    );
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
          <p>Emplacement : Poste {props.whereIsTheCar}</p>
        </div>
        <div>
          <p>TRAVAUX</p>
          {express&&<><input
            className="trvx"
            type="checkbox"
            id="Revision"
            name="Revision"
            value={express}
            checked={express}
            readOnly={true}
          />
          <label htmlFor="express">Express{" "}</label><span className="">{props.workDone.express}</span>
          <br /></>}
          {diagnostic&&<><input
            className="trvx"
            type="checkbox"
            id="diagnostic"
            name="diagnostic"
            value={diagnostic}
            checked={diagnostic}
            readOnly={true}
          />
          <label htmlFor="diagnostic">Diag{" "}</label><span className="">{props.workDone.diagnostic}</span>
          <br /></>}
          {carrosserie&&<><input
            className="trvx"
            type="checkbox"
            id="Carrosserie"
            name="Carrosserie"
            value={carrosserie}
            checked={carrosserie}
            readOnly={true}
          />
          <label htmlFor="Carrosserie">Carrosserie{" "}</label><span  className="">{props.workDone.carrosserie}</span>
          <br /></>}
          {mecanique&&<><input
            className="trvx"
            type="checkbox"
            id="mecanique"
            name="mecanique"
            value={mecanique}
            checked={mecanique}
            readOnly={true}
          />
          <label htmlFor="mecanique">Mecanique{" "}</label><span className="">{props.workDone.mecanique}</span>
          <br /></>}
          <div>Heure de restitution : {props.restitutionTime}</div>
        </div>

        <div onClick={() => handleSubmit()}>
          <MySubmitButton props="TERMINER"></MySubmitButton>
        </div>
      </div>
      <div>
        <h2>{props.serviceAdvisor}</h2>
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
