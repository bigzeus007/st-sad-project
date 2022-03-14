import { getDownloadURL, getStorage, ref } from "firebase/storage";
import React, { useState } from "react";

export default function CarInSwiper({props}){
    const [carImage, setCarImage] = useState(
        "https://firebasestorage.googleapis.com/v0/b/one-touch-work.appspot.com/o/files%2Fimages%20(2).png?alt=media&token=c0ce54d8-4f47-4bd2-b997-776f8f6b65a9"
      );
    
    
    
      const storage = getStorage();
    //   const [change, setChange] = useState(false);
    
  
      const spaceRef = ref(storage, `cars/${props.customerName}`);
      getDownloadURL(spaceRef)
        .then((url) => setCarImage(url))
        .catch((err) =>
          setCarImage(
            "https://firebasestorage.googleapis.com/v0/b/one-touch-work.appspot.com/o/files%2Fimages%20(2).png?alt=media&token=c0ce54d8-4f47-4bd2-b997-776f8f6b65a9"
          )
        );
    
    //   const user = auth.currentUser;
    
    //   function checkProfilTech(checking) {
    //     return checking.email === user.email;
    //   }
    //   const userBdd = techList.find(checkProfilTech);
    
      const arrivedTime = props.createdAt.toDate().toLocaleTimeString();
    



    return(
        <div className="masterCard"  >
            <button style={{backgroundColor:`${props.rdvFixed?"green":"gray"}` }}>Editer</button>
          <div id={props.customerName}>
            <p>Arr:{arrivedTime} </p>
            <p>RDV: {props.rdvTimeFixed}</p>
            <div className="visualData">
              <img
                alt={props.customerName}
                name={props.customerName}
                src={carImage}
                className="carPhoto"
                quality={10}
              />
              <div className="iconList">
                {props.myService && (
                  <img
                    className="icon"
                    src="https://firebasestorage.googleapis.com/v0/b/one-touch-work.appspot.com/o/carServiceIcons%2FtechExpress.jpg?alt=media&token=bf4f24de-7902-4285-afe6-e3e965cf9ca8"
                    alt="image-revision"
                  ></img>
                )}
                {props.mecanical && (
                  <img
                    className="icon"
                    src="https://firebasestorage.googleapis.com/v0/b/one-touch-work.appspot.com/o/carServiceIcons%2FtechMecAlt.jpg?alt=media&token=0a2e1dc8-8309-4b19-841a-7582dde13481"
                    alt="image-mecanique"
                  ></img>
                )}
                {props.electrical && (
                  <img
                    className="icon"
                    src="https://firebasestorage.googleapis.com/v0/b/one-touch-work.appspot.com/o/carServiceIcons%2FtechDiag.png?alt=media&token=a5bdaf9d-2345-4602-899b-0ced2aecb112"
                    alt="image-Diag-Auto"
                  ></img>
                )}
                {props.bodyCar && (
                  <img
                    className="icon"
                    src="https://firebasestorage.googleapis.com/v0/b/one-touch-work.appspot.com/o/carServiceIcons%2FtechBody.png?alt=media&token=da893cc1-2903-4027-90dc-2d822e9a8c87"
                    alt="image-carrosserie"
                  ></img>
                )}
              </div>
            </div>
          </div>
    
          <div className="cardInfos">
            {props.customerName}
            <br />
            {props.rdvTimeFixed && `RDV A: ${props.rdvTimeFixed}`}
          </div>
        </div>)
}