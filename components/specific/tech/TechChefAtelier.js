// import React from "react";
// import styled from "styled-components";
// import Card from "../../commun/flipCard/FlipCard";
// import MainCar, { initialCar } from "../../commun/MainCar/MainCar";
// import content from "../../commun/flipCard/content";
// import { techList } from "../../commun/flipCard/techList";
// import { auth } from "../../../firebase";
// import { getAuth } from "firebase/auth";
// import { TechZone } from "../../../styles/TechZone";

// export default function TechChefAtelier({props}) {
  
//   const auth = getAuth();
//   const user = auth.currentUser;
//   console.log(user.email)

//   function checkProfilTech(checking) {
//     return checking.email === user.email;
//   }
//   const actual = techList.find(checkProfilTech);

//   function checkDoing(checking) {
//     return checking.responsibility === `${actual.nom}`;
//   }

//   const doing = content.find(checkDoing);
//   console.log(doing);

  

//   return (
//     <TechZone>
//       {content
//         .filter(({affectationChefAtelier}) => {
//           return affectationChefAtelier.includes(actual.nom);
//         })
//         .filter(({whereIsTheCar})=>{
//           return whereIsTheCar === "Pending";
//         })
//         .map((element) => (
//           <MainCar key={element.id} props={element}></MainCar>
//         ))}
//     </TechZone>
//   );
// }
