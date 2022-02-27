import React, { useEffect, useMemo, useState } from "react";
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
import { doc, setDoc } from "firebase/firestore";

import { useSelector, useDispatch } from "react-redux";
import {
  rdvTimeSelected,
  rdvStatus,
  customerName,
  selectCs,
} from "../../../src/csReducer";
import { async } from "@firebase/util";

export default function TakePicture() {
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const [hasPhoto, setHasPhoto] = useState(false);
  const [cameraStatus, setCameraStatus] = useState(false);
  const [laboZone, setLaboZone] = useState(false);
  const [image, setImage] = useState(null);
  const [customer, setCustomer] = useState(null);
  const [createdAt,setCreatedAt]=useState(null);
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

  const storageRef = ref(storage, `cars/${customerIdentity}`);

  const submitMyCarPhot = (photo) => {
    uploadString(storageRef, photo, "data_url").then(closePhoto);
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
        var video = videoRef.current;

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

  // STOP CAMERA

  const stopStreamedVideo = (videoElem) => {
    const stream = videoElem.srcObject;
    const tracks = stream.getTracks();

    tracks.forEach(function(track) {
      track.stop();
    });

    videoElem.srcObject = null;
  };

  const takePhoto = () => {
    const picTime=new Date();
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
    setCreatedAt(picTime);
    emptyInput();
    setHasPhoto(true);
    stopStreamedVideo(video);
  };

  const closePhoto = () => {
    let photo = photoRef.current;

    let ctx = photo.getContext("2d");
    ctx.clearRect(0, 0, photo.width, photo.height);
    setHasPhoto(false);
    setLaboZone(false);
  };

  const meMoCamStatus = useMemo(() => hasPhoto, [hasPhoto]);

  useEffect(() => {
    if (laboZone) {
      getVideo();
    }
  }, [videoRef]);

  const [carStatus, setCarStatus] = useState("none");
  const takePictureSwitch = hasPhoto ? "flex" : "none";

  const handleSubmit = async (image) => {
    await setDoc(doc(db, "cars", `${customerIdentity}`), {
      customerName: customerIdentity,
      createdAt:createdAt,
      rdvFixed: rdvState,
      serviceAdvisor: theCs,
      rdvTimeFixed: rdvTime,
      whereIsTheCar:"Parking-E",
      affected:[`${theCs}`],
      isItInGoodPlace:false,
      basyCar:false,
    });
    console.log(theCs);
    await submitMyCarPhot(image);
  };

  return laboZone ? (
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
        <div style={{ display: "flex", position: "absolute", left: "20%" }}>
          <button onClick={() => dispatch(rdvStatus(false))}>SANS RDV</button>
          <button onClick={() => dispatch(rdvStatus(true))}>AVEC RDV</button>

          <div
            style={{
              display: `${rdvState ? "flex" : "none"}`,
              flexWrap: "wrap",
            }}
          >
            <input
              type="time"
              onChange={(e) => setRdvTime(e.target.value)}
            ></input>

            <RadioStyled></RadioStyled>
          </div>

          <div>
            <button
              onClick={() => {
                closePhoto(), setLaboZone(false);
              }}
            >
              Annuler
            </button>
            <div>
              <button
                onClick={() => handleSubmit(image)}
                disabled={customerIdentity ? false : true}
              >
                Submit
              </button>
              <input
                ref={inputRef}
                type="text"
                onChange={(e) => (
                  dispatch(customerName(e.target.value)),
                  console.log(customerIdentity)
                )}
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
  ) : (
    <div
      onClick={() => {
        setLaboZone(true), getVideo();
      }}
    >
      <MySubmitButton />
    </div>
  );
}
