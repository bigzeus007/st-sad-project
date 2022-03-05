import React from "react";
import ReactCardFlip from "react-card-flip";
import Image from "next/image";
import MyIcons from "../../../src/images.js";

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
import MyServiceCarIcons from "../MyServiceCarIcons/MyServiceCarIcons";

function CustomerWithoutCs({ props }, { techList = initialTech }) {
  const [carImage, setCarImage] = useState(
    "https://firebasestorage.googleapis.com/v0/b/one-touch-work.appspot.com/o/files%2Fimages%20(2).png?alt=media&token=c0ce54d8-4f47-4bd2-b997-776f8f6b65a9"
  );

  // user identification

  const storage = getStorage();
  const [change, setChange] = useState(false);

  const dispatch = useDispatch();
  const toModify = useSelector((state) => state.userOptions.carToModifyStatus);
  // const carToLab = useSelector((state) => state.userOptions.carToModify);
  

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
        width: "100%",
        heigth: "100%",
        border: "2px red solid",
      }}
    >
      <div className="" >
        <div style={{display:"flex", position:"absolute",top:"0px",}}>
          {props.myService&&(<img style={{width:"3vw"}} src="https://firebasestorage.googleapis.com/v0/b/one-touch-work.appspot.com/o/carServiceIcons%2FtechExpress.jpg?alt=media&token=bf4f24de-7902-4285-afe6-e3e965cf9ca8" alt="image-revision"></img>)}
          {props.mecanical&&(<img style={{width:"3vw"}} src="https://firebasestorage.googleapis.com/v0/b/one-touch-work.appspot.com/o/carServiceIcons%2FtechMecAlt.jpg?alt=media&token=0a2e1dc8-8309-4b19-841a-7582dde13481" alt="image-mecanique"></img>)}
          {props.electrical&&(<img style={{width:"3vw"}} src="https://firebasestorage.googleapis.com/v0/b/one-touch-work.appspot.com/o/carServiceIcons%2FtechDiag.png?alt=media&token=a5bdaf9d-2345-4602-899b-0ced2aecb112" alt="image-Diag-Auto"></img>)}
          {props.body&&(<img style={{width:"3vw"}} src="https://firebasestorage.googleapis.com/v0/b/one-touch-work.appspot.com/o/carServiceIcons%2FtechBody.png?alt=media&token=da893cc1-2903-4027-90dc-2d822e9a8c87" alt="image-carrosserie"></img>)}
          </div>
        <div id={props.customerName} >
          <img
            alt={props.customerName}
            name={props.customerName}
            src={carImage}
            width="100%"
            height="100%"
            quality={10}
          />
        </div>

        <>
          <br />
          {props.customerName}
          <br />
          {`Heure Arriver : ${arrivedTime}`}
          <br />
          {props.rdvTimeFixed&&`RDV A: ${props.rdvTimeFixed}`}
          <br />
        </>
      </div>
    </div>)
  
}

export default CustomerWithoutCs;
