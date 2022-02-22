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

export default function TakePicture() {
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const [hasPhoto, setHasPhoto] = useState(false);
  const [image, setImage] = useState(null);
  const [customer, setCustomer] = useState(null);
  const inputRef = useRef(null);
  const [csName, setCsName] = useState("");

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
    const width = 320;
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
        <div>
          <button style={buttonRdvStyl} onClick={() => setRdv(false)}>
            SANS RDV
          </button>
          <button onClick={() => setRdv(true)}>AVEC RDV</button>
          <div style={{ display: `${rdv ? "flex" : "none"}` }}>
            <input type="time"></input>
            <div>
              <button
                id="ELMOURZBANI"
                style={{ backgroundColor: "yellowgreen" }}
                onClick={(e) => csChoice(e)}
              >
                ELMOURZBANI
              </button>
              <button
                id="HILALI"
                style={{ backgroundColor: "grey" }}
                onClick={(e) => setCsName(e.target.id)}
              >
                HILALI
              </button>
              <button
                id="ESSAIH"
                style={{ backgroundColor: `${csChoice}` }}
                onClick={(e) => setCsName(e.target.id)}
              >
                ESSAIH
              </button>
              <button
                id="BASSIR"
                style={{ backgroundColor: `${csChoice}` }}
                onClick={(e) => setCsName(e.target.id)}
              >
                BASSIR
              </button>
            </div>
          </div>
        </div>

        <div>
          <button style={{ position: "absolute" }} onClick={closePhoto}>
            Annuler
          </button>
          <div style={{ position: "absolute", bottom: "20%", left: "44%" }}>
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
      <div id="laboZone" style={{display:"flex",justifyContent: "flex-end",borderRadius: "20%",
              }}>
        <div
          style={{
            display: `${hasPhoto ? "none" : "flex"}`,
            
          }}
        >
          <button
            style={{
              position: "absolute",
              
            }}
            onClick={takePhoto}
          >
            <video
              ref={videoRef}
              style={{ borderRadius: "20%", objectFfit:"fill",width:"320px",height:"480px"}}
              width="320px" height="480px"
            />
          </button>
        </div>
        <canvas style={{ borderRadius: "20%",objectFfit:"fill" }} width="320px" height="480px" ref={photoRef} />
      </div>
    </div>
  );
}
