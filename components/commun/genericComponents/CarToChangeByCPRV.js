import React, { useEffect, useMemo, useState } from "react";
import { useRef } from "react";
import { Button } from "../../../styles/Button.styled";
import { MySubmitButton } from "../../../styles/MySubmitButton.styled";
import { auth, db } from "../../../firebase";
import {getStorage, ref,getDownloadURL} from "firebase/storage";
import { storage } from "../../../firebase";
import CarDetailsOptions from "./CarDetailsOptions";
import RadioStyled from "../../../styles/RadioStyled";
import { doc, setDoc, serverTimestamp,collection } from "firebase/firestore";
import { MyCarToChange } from "../../../styles/MyCarToChange.styled";
import { useSelector, useDispatch } from "react-redux";
import {
  rdvTimeSelected,
  rdvStatus,
  customerName,
  selectCs,
} from "../../../src/csReducer";
import {carModification} from "../../../src/userReducer"
import { async } from "@firebase/util";
import { TakePitureButton } from "../../../styles/TakePitureButton.styled";
import NewButtonColored from "../../../styles/NewButtonColored.styled";
import { ChooseRdvStatus, RdvInfo } from "../../../styles/ChooseRdvStatus.style";
import RdvOrNotInput from "../../../styles/RdvOrNotInput";
import CsAffected from "./csAffected";

export default function CarToChangeByCPRV({props}) {

  const [carImage, setCarImage] = useState(
    "https://firebasestorage.googleapis.com/v0/b/one-touch-work.appspot.com/o/files%2Fimages%20(2).png?alt=media&token=c0ce54d8-4f47-4bd2-b997-776f8f6b65a9"
  );
  const [myService, setMyService] = useState(props.myService);
  const [electric, setElectric] = useState(props.electrical);
  const [mecanique, setMecanique] = useState(props.mecanical);
  const [bodyCar, setBodyCar] = useState(props.bodyCar);
  const [customerNameToModify, setCustomerNameToModify] = useState(props.customerName);

  const inputRef = useRef(null);
 

  const rdvState = useSelector((state) => state.csSelected.rdvFixed);
  
  const dispatch = useDispatch();
  const customerIdentity = useSelector(
    (state) => state.csSelected.customerSetName
  );
  const choosenCs=useSelector((state)=>state.csSelected.serviceAdvisor)

  const storage = getStorage();
  const spaceRef = ref(storage, `cars/${props.customerName}`);

  getDownloadURL(spaceRef)
    .then((url) => setCarImage(url))
    .catch((err) =>
      setCarImage(
        "https://firebasestorage.googleapis.com/v0/b/one-touch-work.appspot.com/o/files%2Fimages%20(2).png?alt=media&token=c0ce54d8-4f47-4bd2-b997-776f8f6b65a9"
      )
    );

    const docref = collection(db, "cars");

    const handleSubmit = async () => {
      await setDoc(
        doc(docref, `${props.customerName}`),
        {
          serviceAdvisor:choosenCs,
          myService: myService,
          electrical: electric,
          bodyCar: bodyCar,
          mecanical: mecanique,
        },
        { merge: true }
      ).then(dispatch(carModification()));
    };





  const photoRef = useRef(null);

const [csName, setCsName] = useState("");
  const [rdvTime, setRdvTime] = useState("");



   const theCs = useSelector((state) => state.csSelected.serviceAdvisor);

//   const csChoice = (e) => {
//     setCsName(e.target.id === csName ? "green" : "grey");
//   };

 const storageRef = ref(storage, `cars/${customerIdentity}`);


  function handlReturn(){
    setRdvTime("");
   
    dispatch(selectCs(""));
    dispatch(rdvStatus(false));    
  }

//     const emptyInput = () => {
//     let myInput = inputRef.current;
//     myInput.value = null;
//     setCustomer(null);
//   };

  const toggleSubmit=()=>{
return(
  customerIdentity!=""&&((theCs!=""&&rdvTime!="")||(!rdvState))
)
  }

//   const [carStatus, setCarStatus] = useState("none");
//   const takePictureSwitch = hasPhoto ? "flex" : "none";
 

//   const handleSubmit = async (image) => {    
//     await setDoc(doc(db, "cars", `${customerIdentity}`), {
//       customerNameModify:customerIdentity,//to use to modify customerName
//       customerCategory: "Normal",
//       rdvFixed: rdvState,
//       serviceAdvisor: rdvState ? theCs:"",
//       rdvTimeFixed: rdvTime,
//       affected: theCs,
//       myService: "",
//       electrical: "",
//       bodyCar: "",
//       mecanical: "",
//       carStory:[{who:"CPRV",when:new Date().toISOString().substring(0, 16),what:"CarAffected"}],
//     });
//     dispatch(selectCs(null));    
//   };


  return ( <MyCarToChange>
    <button
     className="returnBack"
      id={props.customerName}
      onClick={(e) => dispatch(carModification())}
    ></button>
    <div>
      <div>
        {props.rdvFixed ? <p>RDV : {props.rdvTimeFixed}</p> : "SANS RDV"}
      </div>
      <div>   
        <p>Client : {props.customerName}</p> </div>
      <div>
        <p>Emplacement : {props.whereIsTheCar}</p>
      </div>
      <div>
        <p>TRAVAUX</p>
        <input
        className="trvx"
          type="checkbox"
          id="Revision"
          name="Revision"
          value={myService}
          checked={myService}
          onChange={() => setMyService(!myService)}
        />
        <label htmlFor="Revision">Revision</label>
        <br />
        <input
        className="trvx"
          type="checkbox"
          id="electric"
          name="electric"
          value={electric}
          checked={electric}
          onChange={() => setElectric(!electric)}
        />
        <label htmlFor="electric">Diag</label>
        <br />
        <input
        className="trvx"
          type="checkbox"
          id="Carrosserie"
          name="Carrosserie"
          value={bodyCar}
          checked={bodyCar}
          onChange={() => setBodyCar(!bodyCar)}
        />
        <label htmlFor="Carrosserie">Carrosserie</label>
        <br />
        <input
        className="trvx"
          type="checkbox"
          id="mecanique"
          name="mecanique"
          value={mecanique}
          checked={mecanique}
          onChange={() => setMecanique(!mecanique)}
        />
        <label htmlFor="mecanique">Mecanique</label>
        <br />
      </div>

      <div
        onClick={() =>handleSubmit()}
      >
        <MySubmitButton props="Enregistrer"></MySubmitButton>
      </div>
    </div>
    <div>
      <CsAffected></CsAffected>
      {/* <input
      className="dateNdTime"
        type="time"
        onChange={(e) => setRestitutionTime(e.target.value)}
        value={restitutionTime}
      ></input> */}
      {/* <input
      className="dateNdTime"
        type="date"
        placeholder="dd-mm-yyyy"
        onChange={(e) => setRestitutionDate(e.target.value)}
        defaultValue={restitutionDate}
        min={restitutionDate}
      ></input> */}
    </div>
    <img
        alt="photoVehicle"
        name="photoVehicle"
        src={carImage}
        width="55%"
        height="100%"
        quality={10}
      />
  </MyCarToChange>








    // <div style={{display: "flex",justifyContent: "center",}} >
    //   <div >
    //         <ChooseRdvStatus>
    //         <button onClick={() => handlReturn()}>SANS RDV</button>
    //         <button onClick={() => dispatch(rdvStatus(true))}>AVEC RDV</button>
    //         </ChooseRdvStatus>

    //         <NewButtonColored>

    //             <div className="subscribe">
          
    //                   <a href="#" onClick={() => dispatch(carModification())} className="btn-3d-can"><span>cancel</span></a>
    //                   <a href="#" onClick={() => handleSubmit(image)} style={{display:`${toggleSubmit() ? "block" : "none"}`}} className="btn-3d-sub"><span>submit</span></a><br />
          
    //               </div>
    //         </NewButtonColored>
    //         <RdvInfo>
    //             <div>
             
    //             <input className="customerName" ref={inputRef} type="text" onChange={(e) => ( dispatch(customerName(e.target.value)),)} placeholder={`${customerNameToModify}`}></input>
               
    //             <div
    //                   style={{
    //                     display: `${rdvState ? "flex" : "none"}`,
    //                     flexWrap: "wrap",
    //                   }}>
    //              <input
                 
    //              className="rdvTime"
    //                 type="time"
    //                 onChange={(e) => setRdvTime(e.target.value)}
    //                 value={rdvTime}>
    //               </input>
    //               <br/>
    //               <RadioStyled></RadioStyled>
    //             </div>
    //             </div>   
    //             </RdvInfo>
                      
        
    //   </div>

    //   <div id="laboZone" style={{ display: "flex", borderRadius: "20%" }}>
        

        
    //   </div>
    //   <div >
    //       <p>TRAVAUX</p>
    //       <input
    //         type="checkbox"
    //         id="Revision"
    //         name="Revision"
    //         value={myService}
    //         checked={myService}
    //         onChange={() => setMyService(!myService)}
    //       />
    //       <label htmlFor="Revision">Revision</label>
    //       <br />
    //       <input
    //         type="checkbox"
    //         id="electric"
    //         name="electric"
    //         value={electric}
    //         checked={electric}
    //         onChange={() => setElectric(!electric)}
    //       />
    //       <label htmlFor="electric">Diag</label>
    //       <br />
    //       <input
    //         type="checkbox"
    //         id="Carrosserie"
    //         name="Carrosserie"
    //         value={bodyCar}
    //         checked={bodyCar}
    //         onChange={() => setBodyCar(!bodyCar)}
    //       />
    //       <label htmlFor="Carrosserie">Carrosserie</label>
    //       <br />
    //       <input
    //         type="checkbox"
    //         id="mecanique"
    //         name="mecanique"
    //         value={mecanique}
    //         checked={mecanique}
    //         onChange={() => setMecanique(!mecanique)}
    //       />
    //       <label htmlFor="mecanique">Mecanique</label>
    //       <br />
    //     </div>



      
    //   <img
    //   style={{position:"absolute",left:"10px",top:"5vh",borderRadius:"30px"}}
    //     alt="photoVehicle"
    //     name="photoVehicle"
    //     src={carImage}
    //     width="100vw"
    //     height="200vh"
    //     quality={10}
    //   />




    // </div>
  ) 
  
}
