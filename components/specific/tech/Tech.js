import React from "react";
import styled from "styled-components";
import Card from "../../commun/flipCard/FlipCard";
import { initialCar } from "../../commun/MainCar/MainCar";

import { techList } from "./techList";
import { auth } from "../../../firebase";

export default function Tech({props}) {
  

  function checkProfilTech(checking) {
    return checking.email == auth.currentUser.email;
  }
  const actual = techList.find(checkProfilTech);

  function checkDoing(checking) {
    return checking.whereIsTheCar === `${actual.nom}`;
  }

  const doing = props.find(checkDoing);
  console.log(doing);

  const TechZone = styled.div`
    position: absolute;
    top: 8vh;
    left: 0px;
    width: 29vw;

    display: grid;

    grid-template-columns: 100% 100% 100%;
    justify-items: center;
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
      <div>
        {doing.note.map(({ noteText }) => {
          return (
            <Note>
              {noteText.toLowerCase()}
              <br />
            </Note>
          );
        })}
        <TechButton>TERMINER</TechButton>
      </div>

      <Card props={doing}/>
      <div>
        CS : {doing.csName}
        <br />
        {doing.carTasks.EstimatedTime}
        <br />
        {actual.availability ? "OCCUPE" : "LIBRE"}
        <TechButton>BLOQUER</TechButton>
      </div>
    </TechZone>
  );
}
