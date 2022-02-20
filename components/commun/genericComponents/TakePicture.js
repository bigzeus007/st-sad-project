import React, { useEffect, useState } from "react";
import { useRef } from "react";
import styled from "styled-components";
export default function TakePicture() {
  const videoRef = useRef(null);
  const pictureRef = useRef(null);
  const [hasPhoto, setHasPhoto] = useState(false);
  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 400, height: 550 },
      })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getVideo();
  }, [videoRef]);
  const takePhoto = () => {
    const width = 414;
    const height = width / (16 / 9);
    let video = videoRef.current;
    let photo = pictureRef.current;
    photo.width=width;
    photo.height=height;

    let ctx = photo.getContext("2d");
    ctx.drawImage(video, 0, width, height);
    setHasPhoto(true);
  };

  const MainCarCard = styled.div`
    
  

    height: (20*16/9)vw;

  
    width:20vw;
  

    border-radius: 50px;
    box-shadow: 15px 15px 15px 10px black;

    video{
        width:100%;
        height:100%;
        
    }

  `;

  return (
    <>
      <MainCarCard>
        <video ref={videoRef}></video>
        <button onClick={takePhoto}>STart</button>
      </MainCarCard>
      <MainCarCard className={""}>
        <canvas ref={pictureRef}></canvas>
        <button onClick={()=>takePhoto}>teak picture</button>
      </MainCarCard>
    </>
  );
}
