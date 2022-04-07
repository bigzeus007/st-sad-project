import React, { useState, useRef } from "react"; 
import Image from "next/image";
import { carModification } from "../../../src/userReducer";
import { db } from "./firebase";
import { getStorage, getDownloadURL, ref } from "firebase/storage";
import { doc, setDoc, collection } from "firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import { MySubmitButton } from "../../../styles/MySubmitButton.styled";
import { resetState, selectTech } from "../../../src/caReducer";
import { CarToAffectStyled } from "../../../styles/CarToAffectStyled.styled";
export default function CarToAffect({ props }) {
  const [carImage, setCarImage] = useState(
    "https://firebasestorage.googleapis.com/v0/b/one-touch-work.appspot.com/o/files%2Fimages%20(2).png?alt=media&token=c0ce54d8-4f47-4bd2-b997-776f8f6b65a9"
  );



 
  // const carsRef = doc(db, "cars",`${props.customerName}`);
  // DANGEROUS getDoc(carsRef).then((doc)=>setMyCarToChange(doc.data()))
  const dispatch = useDispatch();
  
  // const techsToAffect= useSelector((state)=>state.selectTech)
 
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
      doc(docref, `${props.id}`),
      {
        isItInGoodPlace: false,
        affected: "technicien",
        workToDo: {
          express: techAffected.express,
          diagnostic: techAffected.diagnostic,
          carrosserie: techAffected.carrosserie,
          mecanique: techAffected.mecanique,
        },

        express: techAffected.express,
        diagnostic: techAffected.diagnostic,
        carrosserie: techAffected.carrosserie,
        mecanique: techAffected.mecanique,
      },
      { merge: true }
    ).then(dispatch(carModification()), dispatch(resetState()));
  };

  // const listTechByWS = [{ nom: "", atelierAffectation: "" }];
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
      <div onDrop={(e) => drop(e)} onDragOver={(e) => allowDrop(e)}>
        <button
          className="returnBack"
          id="toModify"
          onClick={(e) => (dispatch(carModification()), dispatch(resetState()))}
        ></button>
        <div>
          <h3>
            {props.rdvFixed ? <p>RDV : {props.rdvTimeFixed}</p> : "SANS RDV"}
          </h3>
          <h3>{props.customerName}</h3>
          <h3> {props.serviceAdvisor}</h3>
          <p>Emplacement : {props.whereIsTheCar}</p>
          <div className="workToDoList">
            <p>TRAVAUX</p>
            {props.express && (
              <div className="workToDo">
                Express:{" "}
                <button onClick={() => dispatch(selectTech(["express", ""]))}>
                  {techAffected.express}
                </button>
              </div>
            )}
            {props.mecanique && (
              <div className="workToDo">
                Mecanique:{" "}
                <button onClick={() => dispatch(selectTech(["mecanique", ""]))}>
                  {techAffected.mecanique}
                </button>
              </div>
            )}
            {props.diagnostic && (
              <div className="workToDo">
                Diag:{" "}
                <button
                  onClick={() => dispatch(selectTech(["diagnostic", ""]))}
                >
                  {techAffected.diagnostic}
                </button>
              </div>
            )}
            {props.carrosserie && (
              <div className="workToDo">
                Carrosserie:{" "}
                <button
                  onClick={() => dispatch(selectTech(["carrosserie", ""]))}
                >
                  {techAffected.carrosserie}
                </button>
              </div>
            )}
            <br />
          </div>

          <div onClick={() => handleSubmit()}>
            <MySubmitButton props="Enregistrer"></MySubmitButton>
          </div>
        </div>

        <Image
          alt="photoVehicle"
          name="photoVehicle"
          src={carImage}
          quality={10}
        />
      </div>
    </CarToAffectStyled>
  );
}
