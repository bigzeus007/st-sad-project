import React, { useState } from "react";
import { MySubmitButton } from "../../../styles/MySubmitButton.styled";
import TakePicture from "../../commun/genericComponents/TakePicture";

export default function NewCarEntry() {
  const [camera, setCamera] = useState(false);

  return camera ? (
    <div >
        <button onClick={()=>setCamera(false)} style={{position:"absolute"}}>Annuler</button>
    <TakePicture></TakePicture>
  </div>
    
  ) : (
    <div onClick={()=>setCamera(true)}>
      <MySubmitButton />
    </div>
  );
}
