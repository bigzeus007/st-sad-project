import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { auth } from "../../../firebase";
import techPhoto from "../../../public/images/carPicture.jpg";

import { useState, useRef, useEffect } from "react";

const CardTechStyled = styled.div`
 width:20%;
 height:25%;
 min-width:100px;
 max-height:25vh;
 
 
  
  .techCard {
    position: relative;
    border: 1px blue solid;
  }

  .progressIndicators {
    position: absolute;
    display:flex;
    background-color: red;
    top: 0;
    right: 0;
    width: 10%;
    height: 100%;
  }
  .progressBar{
    width:50%;
    height:100%;

  }
  .tauDeChargeRestant{
    height:100%;
    background-color:greenyellow;
  }
  .tauOcuupationJournee{
    height:100%;
    background-color:green;
  }

  .techIdentity {
    width: 90%;
    height: 50%;
  }

  .techAffected {
    position:absolute;
    top:0;
    background-color:transparent;
    padding-top:25%;
    color:white;
    width: 100%;
    height: 100%;
    font-size: 2vw;
    :hover{
      color:green;
    }
  }

  .techParkStat {
    height: 40%;
    display: flex;
    justify-content: space-evenly;
  }
`;

export default function TechCard() {
  const props = {
    photo: techPhoto,
    nom: "SAID",
    availability: false,
    doingStartWorking:9.5,
    toDo: 2,
    done: 3,
    hToDo:3,
    hDone:1.5,
    hDoing:1,
    workDayHours:9,

    cardsHistory: ["cardID1", "cardID2"],
  };

  let DoingProgress="30%";
  let txOccupation="50%";

  // Future use For adding progress bar
  // const date=new Date();
  // let minutes = date.getMinutes();
  // let hour = date.getHours();
  // let nowTimeConverter=minutes/60+hour;





  //user check
  const checkUserEmail = auth.currentUser.email;
  function checkProfilTech(checking) {
    return checking.email === checkUserEmail;
  }
  return (
    <CardTechStyled>
      <div className="techCard">
        <section
          className="techInfos"
          style={{
            backgroundColor: `${props.availability ? "red" : "yellow"}`,
          }}
        >
          <div className="techIdentity">
            {!props.photo ? (
              <p>{props.nom}</p>
            ) : (
              <Image
                // width={100}
                // height={100}
                className="techPhoto"
                src={props.photo}
                alt="techPhoto"
              />
            )}
          </div>
          <div className="progressIndicators">
            <div  className="progressBar"><div className="tauDeChargeRestant" style={{height:`${DoingProgress}`}}></div></div>
            <div className="progressBar"><div className="tauOcuupationJournee"style={{height:`${txOccupation}`}}></div></div>
          </div>
          <button className="techAffected">Ajouter</button>
          <div className="techParkStat">
            <label className="carNumer carsDoneNumber">{props.done}</label>
            <label className="carNumer carsToNumber">{props.toDo}</label>
          </div>
        </section>
      </div>
    </CardTechStyled>
  );
}
