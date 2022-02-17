import React from "react";
import { techList } from "../tech/techList"; 
import { getAuth } from "firebase/auth";
import Card from "../../commun/flipCard/FlipCard";
import content from "../../commun/flipCard/content";



export default function Pisteur({props}) {

    const getUser = getAuth().currentUser;
    console.log(getUser.email)

    



    function checkProfilTech(checking) {
        return checking.email === getUser.email;
      }
      const user = techList.find(checkProfilTech)
      console.log(user)

      function checkParkTech(checking) {
        return checking.nom === getUser.email;
      }

    const parkPisteur = content.filter(checkProfilTech)
    console.log(parkPisteur)

    console.log(parkPisteur)


    return (
        <div>

            <Card ></Card>

            




        </div>
    );
    
}