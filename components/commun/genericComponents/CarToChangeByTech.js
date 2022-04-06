import React, { useState } from "react";
import { useRef } from "react";
import Image from "next/image"
import { MySubmitButton } from "../../../styles/MySubmitButton.styled";
import { db } from "../../../firebase";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { doc, setDoc, collection, updateDoc } from "firebase/firestore";
import { MyCarToChange } from "../../../styles/MyCarToChange.styled";
import { useSelector, useDispatch } from "react-redux";
import { rdvStatus, selectCs } from "../../../src/csReducer";
import { carModification } from "../../../src/userReducer";

export default function CarToChangeByTech({ props, user }) {
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

  const storage = getStorage();
  const spaceRef = ref(storage, `cars/${props.id}`);

  getDownloadURL(spaceRef)
    .then((url) => setCarImage(url))
    .catch((err) =>
      setCarImage(
        "https://firebasestorage.googleapis.com/v0/b/one-touch-work.appspot.com/o/files%2Fimages%20(2).png?alt=media&token=c0ce54d8-4f47-4bd2-b997-776f8f6b65a9"
      )
    );
  console.log(props, user);

  const docref = collection(db, "cars");

  const handleSubmit = async () => {
    if (user.atelierAffectation == "express") {
      await updateDoc(doc(docref, `${props.id}`), {
        express: "",
        "workToDo.express": "",
        "workDone.express": `${user.nom}`,
      });
    }
    if (user.atelierAffectation == "mecanique") {
      await updateDoc(doc(docref, `${props.id}`), {
        mecanique: "",
        "workToDo.mecanique": "",
        "workDone.mecanique": `${user.nom}`,
      });
    }
    if (user.atelierAffectation == "diagnostic") {
      await updateDoc(doc(docref, `${props.id}`), {
        diagnostic: "",
        "workToDo.diagnostic": "",
        "workDone.diagnostic": `${user.nom}`,
      });
    }
    if (user.atelierAffectation == "carrosserie") {
      await updateDoc(doc(docref, `${props.id}`), {
        carrosserie: "",
        "workToDo.carrosserie": "",
        "workDone.carrosserie": `${user.nom}`,
      });
    }

    await setDoc(
      doc(docref, `${props.id}`),
      {
        isItInGoodPlace: false,

        basyCar: false,
        carStory: [
          {
            who: `${user.nom}`,
            when: new Date().toISOString().substring(0, 16),
            what: "workDone",
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
          <input
            className="trvx"
            type="checkbox"
            id="Revision"
            name="Revision"
            value={express}
            checked={express}
            readOnly={true}
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
            readOnly={true}
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
            readOnly={true}
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
            readOnly={true}
          />
          <label htmlFor="mecanique">Mecanique</label>
          <br />
          <div>Heure de restitution : {props.restitutionTime}</div>
        </div>

        <div onClick={() => handleSubmit()}>
          <MySubmitButton props="Terminer"></MySubmitButton>
        </div>
      </div>
      <div>
        <h2>{props.serviceAdvisor}</h2>
      </div>
      <Image
        alt="photoVehicle"
        name="photoVehicle"
        src={carImage}
        width="55%"
        height="100%"
        layout='fill'
        quality={10}
      />
    </MyCarToChange>
  );
}
