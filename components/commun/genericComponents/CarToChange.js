import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useRef } from "react";
import { Button } from "../../../styles/Button.styled";
import { MySubmitButton } from "../../../styles/MySubmitButton.styled";
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
} from "firebase/firestore";

import { useSelector, useDispatch } from "react-redux";
import {
  rdvTimeSelected,
  rdvStatus,
  customerName,
  selectCs,
} from "../../../src/csReducer";
import { async } from "@firebase/util";

export default function CarToChange({ props }) {
  const [carImage, setCarImage] = useState(
    "https://firebasestorage.googleapis.com/v0/b/one-touch-work.appspot.com/o/files%2Fimages%20(2).png?alt=media&token=c0ce54d8-4f47-4bd2-b997-776f8f6b65a9"
  );

  const [carsList, setCarsList] = useState([]);
  const carsRef = collection(db, "cars");
  const myCarToChange = query(carsRef, where("customerName", "==", `${props}`));
  useEffect(
    () =>
      onSnapshot(myCarToChange, (snapshot) =>
        setCarsList(snapshot.docs.map((doc) => doc.data()))
      ),

    []
  );
  console.log(props);

  const [image, setImage] = useState(null);
  const [customer, setCustomer] = useState(null);

  const inputRef = useRef(null);
  const [csName, setCsName] = useState("");
  const [rdvTime, setRdvTime] = useState("");
  const rdvState = useSelector((state) => state.csSelected.rdvFixed);
  const dispatch = useDispatch();
  const customerIdentity = useSelector(
    (state) => state.csSelected.customerSetName
  );
  const theCs = useSelector((state) => state.csSelected.serviceAdvisor);

  const csChoice = (e) => {
    setCsName(e.target.id === csName ? "green" : "grey");
  };
  const storage = getStorage();
  const spaceRef = ref(storage, `cars/${props.customerName}`);
  getDownloadURL(spaceRef)
    .then((url) => setCarImage(url))
    .catch((err) =>
      setCarImage(
        "https://firebasestorage.googleapis.com/v0/b/one-touch-work.appspot.com/o/files%2Fimages%20(2).png?alt=media&token=c0ce54d8-4f47-4bd2-b997-776f8f6b65a9"
      )
    );

  const emptyInput = () => {
    let myInput = inputRef.current;
    myInput.value = null;
    setCustomer(null);
  };

  const handleSubmit = async (image) => {
    await setDoc(doc(db, "cars", `${customerIdentity}`), {
      customerName: customerIdentity,
      createdAt: serverTimestamp(),
      rdvFixed: rdvState,
      serviceAdvisor: theCs,
      rdvTimeFixed: rdvTime,
      whereIsTheCar: "Parking-E",
      affected: [`${theCs}`],
      isItInGoodPlace: true,
      basyCar: false,
      myService: false,
      electrical: false,
      body: false,
      mecanical: false,
      pneus: false,
      plaquettes: false,
      batterie: false,
      lavage: false,
    });
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
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <div style={{ display: "flex", position: "absolute", left: "20%" }}>
          <button onClick={() => dispatch(rdvStatus(false))}>SANS RDV</button>
          <button onClick={() => dispatch(rdvStatus(true))}>AVEC RDV</button>

          <div
            style={{
              display:  "none",
              flexWrap: "wrap",
            }}
          >
            <input
              type="time"
              onChange={(e) => setRdvTime(e.target.value)}
            ></input>

            <RadioStyled csStatus={props.serviceAdvisor}></RadioStyled>
          </div>

          <div>
            <button
              onClick={() => {
                
              }}
            >
              Annuler
            </button>
            <div>
              <button
                onClick={() => handleSubmit()}
                disabled={customerIdentity ? false : true}
              >
                Submit
              </button>
              <input
                ref={inputRef}
                type="text"
                onChange={(e) => (
                  dispatch(customerName(e.target.value)),
                  
                )}
                placeholder="NOM CLIENT"
              ></input>
            </div>
          </div>
        </div>
      </div>

      <div id="laboZone" style={{ display: "flex", borderRadius: "20%" }}>
      

      <Image
                alt={props.customerName}
                name={props.customerName}
                src={carImage}
                layout="fill"
                width={20}
                height={20}
                
              />
      </div>
    </div>
  );
}
