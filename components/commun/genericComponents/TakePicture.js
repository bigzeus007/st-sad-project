import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { Button } from "../../../styles/Button.styled";
import { MySubmitButton } from "../../../styles/MySubmitButton.styled";
import { getStorage,getDownloadURL, ref, uploadString } from "firebase/storage";
import { storage } from "../../../firebase";


export default function TakePicture() {
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const [hasPhoto, setHasPhoto] = useState(false);
  const [image,setImage]=useState(null);
  const [customer,setCustomer]=useState(null);
  const inputRef=useRef(null);
 

  
const storageRef = ref(storage, customer);
  
  const submitMyCarPhot = (photo)=>{

    console.log(photo)
    uploadString(storageRef, photo, 'data_url').then((snapshot) => {
      console.log('Uploaded a data_url string!');
    });
  }

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

  const emptyInput = ()=>{
      let myInput = inputRef.current;
      myInput.value=null;
      setCustomer(null);
  }

  const takePhoto = () => {
    const width = 450;
    const height = 320;
    let photo = photoRef.current;
    let video = videoRef.current;
    photo.width=width;
    photo.height=height;

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
    getVideo()
  }, [videoRef]);

  const [carStatus, setCarStatus] = useState("none");
  const takePictureSwitch = hasPhoto? "flex":"none";
  

  return (
    <div style={{display:"flex",width:"100%",height:"100%",justifyContent:"center" }}>
     
        <div style={{display:`${takePictureSwitch}`,width:"auto",height:"80%",}}>
          <canvas style={{borderRadius:"20%", width:"375px"}} ref={photoRef}/>
          <button style={{position:"absolute", }} onClick={closePhoto}>Annuler</button>
          <div style={{position:"absolute", bottom:"20%",left:"44%"}}>
          <button onClick={()=>submitMyCarPhot(image)} disabled={customer?false:true}>Submit</button>
          <input ref={inputRef} type="text" onChange={(e)=>(setCustomer(e.target.value))} placeholder="NOM CLIENT"></input>
          </div>
        </div>
        
      
      <div style={{display:`${hasPhoto? "none":"flex"}`,width:"40%",height:"80%"}}>
        <video ref={videoRef} style={{borderRadius:"20%"}}/>
        <button style={{position:"absolute"}}  onClick={takePhoto}>>Prendre photo</button>
      </div>
    </div>
  );
}
