import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { Button } from "../../../styles/Button.styled";
import { MySubmitButton } from "../../../styles/MySubmitButton.styled";
import {
  getStorage,
  getDownloadURL,
  ref,
  uploadString,
} from "firebase/storage";
import { storage } from "../../../firebase";
import CarDetailsOptions from "./CarDetailsOptions";
import RadioStyled from "../../../styles/RadioStyled";

import { useSelector, useDispatch } from "react-redux";
import{rdvTimeSelected} from "../../../src/csReducer";



export default function TakePicture() {
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const [hasPhoto, setHasPhoto] = useState(false);
  const [image, setImage] = useState(null);
  const [customer, setCustomer] = useState(null);
  const inputRef = useRef(null);
  const [csName, setCsName] = useState("");
  const [rdvTime, setRdvTime] = useState("");

  const csChoice = (e) => {
    setCsName(e.target.id === csName ? "green" : "grey");
  };

  const [rdv, setRdv] = useState(false);

  const buttonRdvStyl = {
    color: "red",
  };

  const storageRef = ref(storage, customer);

  const submitMyCarPhot = (photo) => {
    console.log(photo);
    uploadString(storageRef, photo, "data_url").then((snapshot) => {
      console.log("Uploaded a data_url string!");
    });
  };

  const getVideo = () => {
    const constraints = {
      audio: false,
      video: {
        facingMode: "environment",
      },
    };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        let video = videoRef.current;

        video.srcObject = stream;

        video.play();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const emptyInput = () => {
    let myInput = inputRef.current;
    myInput.value = null;
    setCustomer(null);
  };

  const takePhoto = () => {
    const width = 250;
    const height = 480;
    let photo = photoRef.current;
    let video = videoRef.current;
    photo.width = width;
    photo.height = height;

    let ctx = photo.getContext("2d");
    ctx.drawImage(video, 0, 0, photo.width, photo.height);

    const imageCaptured = photo.toDataURL();

    setImage(imageCaptured);
    emptyInput();
    setHasPhoto(true);
  };

  const closePhoto = () => {
    let photo = photoRef.current;
    let ctx = photo.getContext("2d");
    ctx.clearRect(0, 0, photo.width, photo.height);
    setHasPhoto(false);
  };

  

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  const [carStatus, setCarStatus] = useState("none");
  const takePictureSwitch = hasPhoto ? "flex" : "none";

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
          display: `${takePictureSwitch}`,
          width: "100%",
          height: "100%",
        }}
      >
        <div style={{display:"flex",position:"absolute", left:"20%"}}>
          <button onClick={() => setRdv(false)}>
            SANS RDV
          </button>
          <button onClick={() => setRdv(true)}>AVEC RDV</button>

          <div style={{ display: `${rdv ? "flex" : "none"}`, flexWrap:"wrap"}}>
            <input type="time" onChange={(e)=>setRdvTime(e.target.value)} ></input>
            
            <RadioStyled></RadioStyled>

          </div>
        

        <div>
          <button onClick={closePhoto}>
            Annuler
          </button>
          <div >
            <button
              onClick={() => submitMyCarPhot(image)}
              disabled={customer ? false : true}
            >
              Submit
            </button>
            <input
              ref={inputRef}
              type="text"
              onChange={(e) => setCustomer(e.target.value)}
              placeholder="NOM CLIENT"
            ></input>
          </div>
        </div>
        </div>
      </div>
      <div id="laboZone" style={{ display: "flex", borderRadius: "20%" }}>
        <button
          onClick={takePhoto}
          style={{
            borderRadius: "20%",
            display: `${hasPhoto ? "none" : "flex"}`,
          }}
        >
          <video
            ref={videoRef}
            style={{ borderRadius: "20%", objectFit: "fill" }}
            width="197vw"
            height="277vw"
          />
        </button>

        <canvas
          style={{
            borderRadius: "20%",
            width: "13vw",
            height: "18vw",
            display: `${takePictureSwitch}`,
          }}
          ref={photoRef}
        />
      </div>
    </div>
  );
}
