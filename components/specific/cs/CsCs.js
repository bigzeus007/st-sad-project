// import React, { useEffect, useState } from "react";
// import { techList } from "../../commun/flipCard/techList";
// import { getAuth } from "firebase/auth";
// import { useDispatch, useSelector } from "react-redux";
// import { carModification } from "../../../src/userReducer";
// import { TechZone } from "../../../styles/TechZone";
// import { db } from "../../../firebase";

// import {
//   collection,
//   doc,
//   onSnapshot,
//   query,
//   where,
//   getDoc,
//   getDocs,
//   FieldPath,
// } from "firebase/firestore";
// import { getStorage, ref} from "firebase/storage";
// import CustomerWithoutCs from "../../commun/MainCar/CustomerWithoutCs";
// import { async } from "@firebase/util";
// import CarToChange from "../../commun/genericComponents/CarToChange";
// import CarToChangeByCs from "../../commun/genericComponents/CarToChangeByCs";

// export default function CsCs({user}) {


//   const [isLoadin, setIsLoading] = useState(false);
//   const [carsList, setCarsList] = useState([]);


//   // const getUser = getAuth().currentUser;

//   // function checkProfilTech(checking) {
//   //   return checking.email === getUser.email;
//   // }
//   // const user = techList.find(checkProfilTech);
//   const carsRef = collection(db, "cars");
//   const myParking = query(carsRef, where("serviceAdvisor", "==", `${user.nom}`),where("restitutionTime", "!=", ""));

//   useEffect(()=>
//   onSnapshot(myParking,(snapshot)=>setCarsList(snapshot.docs.map(doc=>doc.data())))
  
// ,[])

 
//   function checkParkTech(checking) {
//     return checking.affectationChefAtelier.includes(`${user.nom}`);
//   }

//   // const parkPisteur = props.filter(checkParkTech)

//   const dispatch = useDispatch();
//    const toModifyStatus = useSelector((state) => state.userOptions.carToModifyStatus);

//   const [toModify,setTomodify]=useState("")

//   const handlCarToModify=(car)=>{
//     setTomodify(car);
//     dispatch(carModification());
//   }



//   return toModifyStatus ? (
//     <>
//       <button
//         id={toModify.customerName}
//         onClick={(e) => dispatch(carModification())}
//       >
//         Retour
//       </button>
//       <CarToChangeByCs props={toModify}></CarToChangeByCs>
//     </>
//   ) : (
//     <TechZone>
//       {carsList.map((car)=>(<div key={car.customerName} className={car.rdvTimeFixed?"carCard srdv":"cardCard rdv"} ><button  onClick={()=>{handlCarToModify(car)}}><CustomerWithoutCs  key={car.customerName} props={car}></CustomerWithoutCs></button></div>))}
//     </TechZone>
//   );
// }


