import React, { useEffect, useState } from "react";
import { useRef } from "react";
import styled from "styled-components";



export default function TakePicture() {
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const [hasPhoto, setHasPhoto] = useState(false);
  
  

  const getVideo = () => {
      const constraints={
        audio: false,
        video: {
            facingMode: "environment",
         
        }
      }
      
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

  const takePhoto = () => {
    const width = 450;
    const height = 320;
    let photo = photoRef.current;
    let video = videoRef.current;
    photo.width=width;
    photo.height=height;

    let ctx = photo.getContext("2d");
    ctx.drawImage(video, 0, 0, photo.width, photo.height);
   
    setHasPhoto(true);
  };

  const closePhoto = () => {
    let photo = photoRef.current;
    let ctx = photo.getContext("2d");
    ctx.clearRect(0, 0, photo.width, photo.height);
    setHasPhoto(false);
  };

  useEffect(() => {
    getVideo()
  }, [videoRef]);

  const [carStatus, setCarStatus] = useState("none");

  

  return (
    <div style={{display:"flex",width:"100%",height:"100%",justifyContent:"space-around" }}>
     
        <div style={{display:"flex",width:"25%",height:"80%",}}>
          <canvas style={{borderRadius:"20%"}} ref={photoRef}/>
          <button style={{position:"absolute", }} onClick={closePhoto}>Annuler</button>
        </div>
      
      <div style={{display:"flex",width:"25%",height:"80%"}}>
        <video ref={videoRef} style={{borderRadius:"20%"}}/>
        <button style={{position:"absolute"}}  onClick={takePhoto}>>Prendre photo</button>
      </div>
    </div>
  );
}
