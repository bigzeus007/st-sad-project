import React from "react";
import { techList } from "../tech/techList"; 
import { getAuth } from "firebase/auth";
import Card from "../../commun/flipCard/FlipCard";
import content from "../../commun/flipCard/content";
import MainCar from "../../commun/MainCar/MainCar";
import { TechZone } from "../../../styles/TechZone";



export default function Pisteur({props}) {

    const getUser = getAuth().currentUser;


    



    function checkProfilTech(checking) {
        return checking.email === getUser.email;
      }
      const user = techList.find(checkProfilTech)
     

      function checkParkTech(checking) {
        return checking.affectationChefAtelier.includes(`${user.nom}`);
      }
      

    const parkPisteur = props.filter(checkParkTech)
 


    return (
        <TechZone>

            {parkPisteur.map((car)=>(<MainCar key={car.id} props={car}></MainCar>))}

            




        </TechZone>
    );
    
}