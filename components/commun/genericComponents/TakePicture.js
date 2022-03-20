import React, { useEffect, useMemo, useState } from "react";
import { useRef } from "react";
import { Button } from "../../../styles/Button.styled";
import { MySubmitButton } from "../../../styles/MySubmitButton.styled";
import { auth, db } from "../../../firebase";
import {
  getStorage,
  getDownloadURL,
  ref,
  uploadString,
} from "firebase/storage";
import { storage } from "../../../firebase";
import CarDetailsOptions from "./CarDetailsOptions";
import RadioStyled from "../../../styles/RadioStyled";
import { doc,addDoc, setDoc, serverTimestamp, collection } from "firebase/firestore";

import { useSelector, useDispatch } from "react-redux";
import {
  rdvTimeSelected,
  rdvStatus,
  customerName,
  selectCs,
} from "../../../src/csReducer";
import { async } from "@firebase/util";
import { TakePitureButton } from "../../../styles/TakePitureButton.styled";
import NewButtonColored from "../../../styles/NewButtonColored.styled";
import { ChooseRdvStatus, RdvInfo } from "../../../styles/ChooseRdvStatus.style";
import RdvOrNotInput from "../../../styles/RdvOrNotInput";

export default function TakePicture() {
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const [hasPhoto, setHasPhoto] = useState(false);
  const [cameraStatus, setCameraStatus] = useState(false);
  const [laboZone, setLaboZone] = useState(false);
  const [image, setImage] = useState(null);
  const [customer, setCustomer] = useState(null);
  const [createdAt, setCreatedAt] = useState(null);
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

  

  const submitMyCarPhot = (photo,photoId) => {
    const storageRef = ref(storage, `cars/${photoId}`);
    uploadString(storageRef, photo, "data_url").then(closePhoto);
  };

  function handlReturn(){
    setRdvTime("");
   
    dispatch(selectCs(""));
    dispatch(rdvStatus(false));

  }

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
    const picTime = Date.now(); // old one = new Date()
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

  const toggleSubmit=()=>{
return(
  customerIdentity!=""&&((theCs!=""&&rdvTime!="")||(!rdvState))
)
  }
  

  const closePhoto = () => {
    let photo = photoRef.current;

    let ctx = photo.getContext("2d");
    ctx.clearRect(0, 0, photo.width, photo.height);
    setRdvTime("");
    setHasPhoto(false);
    setLaboZone(false);
    
    dispatch(selectCs(""));
    
  };



  useEffect(() => {
    if (laboZone) {
      getVideo();
    }
  }, [videoRef]);

  const [carStatus, setCarStatus] = useState("none");
  const takePictureSwitch = hasPhoto ? "flex" : "none";
 

  const handleSubmit = async (image) => {
    const docRef= await addDoc(collection(db, "cars"), {
      
      customerName: customerIdentity,
      customerNameModify:customerIdentity,//to use to modify customerName
      customerCategory: "Normal",
      createdAt: serverTimestamp(),
      rdvFixed: rdvState,
      serviceAdvisor: rdvState ? theCs:"",
      rdvTimeFixed: rdvTime,
      whereIsTheCar: "Parking-E",
      affected: theCs,
      isItInGoodPlace: true,
      basyCar: false,
      express: "",
      diagnostic: "",
      carrosserie: "",
      mecanique: "",
      lavage: false,
      restitutionTime:"",
      restitutionDate:"",
     
   workingTeam:["CRV","CA","Pisteur"],  
      carStory:[{who:"Pisteur",when:new Date().toISOString().substring(0, 16),what:"CarAdded"}],

      historyComments:[{initiator:"",time:"",text:""}],


    });
    await submitMyCarPhot(image,docRef.id);
    await setDoc(doc(db, "cars",docRef.id), {
      id:docRef.id,
    },{merge:true});
    
    dispatch(selectCs(null));
    
    
  };


  return laboZone ? (
    <div style={{display: "flex",justifyContent: "center",}} >
      <div style={{display: `${takePictureSwitch}`,}}
                      >
            <ChooseRdvStatus>
            <button onClick={() => handlReturn()}>SANS RDV</button>
            <button onClick={() => dispatch(rdvStatus(true))}>AVEC RDV</button>
            </ChooseRdvStatus>

            <NewButtonColored>

                <div className="subscribe">
          
                      <a href="#" onClick={() => {closePhoto();}} className="btn-3d-can"><span>cancel</span></a>
                      <a href="#" onClick={() => handleSubmit(image)} style={{display:`${toggleSubmit() ? "block" : "none"}`}} className="btn-3d-sub"><span>submit</span></a><br />
          
                  </div>
            </NewButtonColored>
            <RdvInfo>
                <div>
             
                <input className="customerName" ref={inputRef} type="text" onChange={(e) => ( dispatch(customerName(e.target.value)),)} placeholder="NOM CLIENT"></input>
               
                <div
                      style={{
                        display: `${rdvState ? "flex" : "none"}`,
                        flexWrap: "wrap",
                      }}>
                 <input
                 
                 className="rdvTime"
                    type="time"
                    onChange={(e) => setRdvTime(e.target.value)}
                    value={rdvTime}>
                  </input>
                  <br/>
                  <RadioStyled></RadioStyled>
                </div>
                </div>   
                </RdvInfo>
                      
        
      </div>

      <div id="laboZone" style={{ display: "flex", borderRadius: "20%" }}>
        <button
          onClick={takePhoto}
          style={{
            borderRadius: "20%",
            height:"47vh",
            display: `${hasPhoto ? "none" : "flex"}`,
          }}
        >
          <video
            ref={videoRef}
            style={{ borderRadius: "20%", objectFit: "fill" }}
            width="100%"
            height="100%"
          />
        </button>

        <canvas
          style={{
            borderRadius: "20%",
            width: "20vw",
            height: "47vh",
            position:"absolute",
            left:"10px",
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
      <TakePitureButton props={"Demarrer"}/>
    </div>
  );
}
