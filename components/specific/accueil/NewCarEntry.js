import React, { useState } from "react";
import { MySubmitButton } from "../../../styles/MySubmitButton.styled";
import TakePicture from "../../commun/genericComponents/TakePicture";

export default function NewCarEntry({}) {
  const [camera, setCamera] = useState(false);

  // STOP CAMERA
  const stopCamera=()=>{

  navigator.getUserMedia({audio: false, video: true},
    function() {
        let stream = window.srcObject;
         // can also use getAudioTracks() or getVideoTracks()
        var track = stream.getTracks()[0];  // if only one media track
        // ...
        track.stop();
        setCamera(false);
      
    },
    function(error){
        console.log('getUserMedia() error', error);
    });}


  return camera ? (
    <div >
        <button onClick={()=>stopCamera()} style={{position:"absolute", top:"px",right:"0px"}}>Annuler</button>
    <TakePicture props={camera}></TakePicture>
  </div>
    
  ) : (
    <div onClick={()=>setCamera(true)}>
      <MySubmitButton />
    </div>
  );
}
