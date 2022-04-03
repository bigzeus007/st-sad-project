// import React from "react";

// import MainCar, { initialCar } from "../../commun/MainCar/MainCar";
// import { techList } from "../flipCard/techList";
// import content from "../flipCard/content";


// import { auth } from "../../../firebase";
// import { TechZone } from "../../../styles/TechZone";

// export default function ToDo({props}) {
  
  
 
//   const user = auth.currentUser;
//   console.log(user.email)

//   function checkProfilTech(checking) {
//     return checking.email === user.email;
//   }
//   const actual = techList.find(checkProfilTech);


  

//   return (
//     <TechZone>
//       {props
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
