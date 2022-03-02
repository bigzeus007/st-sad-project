import React from "react";
import ReactCardFlip from "react-card-flip";
import Image from "next/image";

import { MainCarCard } from "../../../styles/MainCarCard";
import CardComponent from "../../../styles/CardComponent";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import { useState } from "react";

import { initialTech } from "../flipCard/content";
import { initialCar } from "../flipCard/newContent";
import { auth } from "../../../firebase";
import { Timestamp } from "firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import { carModification } from "../../../src/userReducer";
import CarToChange from "../genericComponents/CarToChange";

function CustomerWithoutCs({ props }, { techList = initialTech }) {
  const [carImage, setCarImage] = useState(
    "https://firebasestorage.googleapis.com/v0/b/one-touch-work.appspot.com/o/files%2Fimages%20(2).png?alt=media&token=c0ce54d8-4f47-4bd2-b997-776f8f6b65a9"
  );

  // user identification

  const storage = getStorage();
  const [change, setChange] = useState(false);

  const dispatch = useDispatch();
  const toModify = useSelector((state) => state.userOptions.onModification);
  const carToLab = useSelector((state) => state.userOptions.carToModify);
  

  const spaceRef = ref(storage, `cars/${props.customerName}`);
  getDownloadURL(spaceRef)
    .then((url) => setCarImage(url))
    .catch((err) =>
      setCarImage(
        "https://firebasestorage.googleapis.com/v0/b/one-touch-work.appspot.com/o/files%2Fimages%20(2).png?alt=media&token=c0ce54d8-4f47-4bd2-b997-776f8f6b65a9"
      )
    );

  const user = auth.currentUser;

  function checkProfilTech(checking) {
    return checking.email === user.email;
  }
  const userBdd = techList.find(checkProfilTech);

  const arrivedTime = props.createdAt.toDate().toLocaleTimeString();

  // Drag and drop functions

  // const [dragged, setDragged] = useState();
  // const [isFlipped, setFlipped] = React.useState(false);

  // function allowDrop(ev) {
  //   ev.preventDefault();
  // }

  // function drag(ev) {
  //   setDragged(props.id);

  //   ev.dataTransfer.setData("text", ev.target.id);
  // }

  // function drop(ev) {
  //   ev.preventDefault();
  //   var data = ev.dataTransfer.getData("text");
  //   const myData = document.getElementById(data);

    //ev.target.appendChild(document.getElementById(data));
  // }

  return(
    <div
      style={{
        position: "relative",
        width: "15%",
        heigth: "100%",
        border: "2px red solid",
      }}
    >
      <div className="" onDrop={(e) => drop(e)}>
        <button id={props.customerName} onClick={(e) => dispatch(carModification(props))}>
          <img
            alt={props.customerName}
            name={props.customerName}
            src={carImage}
            width="75%"
            height="100%"
            quality={10}
          />
        </button>

        <>
          <br />
          {props.customerName}
          <br />
          {`Heure Arriver : ${arrivedTime}`}
        </>
      </div>
    </div>)
  
}

export default CustomerWithoutCs;
