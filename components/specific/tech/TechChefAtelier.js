import React from "react";
import styled from "styled-components";
import Card from "../../commun/flipCard/FlipCard";
import MainCar, { initialCar } from "../../commun/MainCar/MainCar";
import content from "../../commun/flipCard/content";
import { techList } from "./techList";

export default function TechChefAtelier() {
  const myContent = content;

  function checkProfilTech(checking) {
    return checking.nom == "Amine";
  }
  const actual = techList.find(checkProfilTech);

  function checkDoing(checking) {
    return checking.responsibility === `${actual.nom}`;
  }

  const doing = myContent.find(checkDoing);
  console.log(doing);

  const TechZone = styled.div`
    position: relative;
   overflow-x:scroll;
   
    width: 93%;
  

    display: flex;

 
   
    > div {
      border: 5px solid red;
      width: 100%;
      font-size: 2vw;
    }
  `;
  const Note = styled.div`
    position: relative;
    display: flex;
    font-size: 1em;
    color: royalblue;
    font-weight: bold;
  `;
  const TechButton = styled.button`
    position: absolute;
    bottom: 0px;
    width: 22vw;
    display: block;
    font-size: 2vw;

    background-color: greenyellow;
    color: blue;
    font-weight: bolder;
    border-radius: 35%35%;
    :hover {
      background-color: green;
    }
  `;

  return (
    <TechZone>
      {myContent
        .filter(({affectationChefAtelier}) => {
          return affectationChefAtelier.includes(actual.nom);
        })
        .filter(({whereIsTheCar})=>{
          return whereIsTheCar === "Pending";
        })
        .map((element) => (
          <MainCar props={element}></MainCar>
        ))}
    </TechZone>
  );
}
