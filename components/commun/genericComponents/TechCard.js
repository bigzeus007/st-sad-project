import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { auth } from "../../../firebase";
import { useState } from "react";

const CardTechStyled = styled.div`
  position: absolute;
  width:20%;
  



  .techInfos, .techCard {
    position: relative;
    border-radius: 3px 0px 0px 30px;
    

    
  }


  .progressIndicators {
    position: absolute;
    display: flex;
    background-color: gray;
    top: 0;
    right: 0;
    width: 10%;
    height: 100%;
    
  }
  .progressBar {
    width: 50%;
    height: 100%;
  }
  .tauDeChargeRestant {
    background-color: greenyellow;
  }
  .tauOcuupationJournee {
    height: 100%;
    background-color: green;
  }



  .techAffected {
    border:0px;
    position: absolute;
    top: 0;
    background-color: transparent;
    padding-top: 25%;
    color: white;
    width: 100%;
    height: 100%;
    font-size: 10px;
    :hover {
      color: green;
    }
  }
  .carNumer{
    padding-top:0px;
  }
  .techParkStat {
    display:inline-block;
    margin-top:-10%;
    height:25px;
    font-size:14px;
    display: flex;
    justify-content: space-evenly;
    
  
  }
`;

export default function TechCard({props}) {
 

  const [doingProgress, setDoingProgress] = useState("0");

  // Future use For adding progress bar

  // let minutes = date.getMinutes();
  // let hour = date.getHours();
  // let nowTimeConverter=minutes/60+hour;
  const [txOccupation, setTxOccupation] = useState(0);

  setInterval(() => {
    const date = new Date();
    let secondes = date.getSeconds();
    let minutes = date.getMinutes();
    setDoingProgress(`${(secondes / 60) * 100}%`);
    setTxOccupation(`${(minutes / 60) * 100}%`);
  }, 200);

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
                 width={110}
                  height={90}
                  
                // layout="fill"
                // objectFit="fill"
                className="techPhoto"
                src={props.photo}
                alt="techPhoto"
              />
            )}
          </div>
          <div className="progressIndicators">
            <div className="progressBar">
              <div
                className="tauDeChargeRestant"
                style={{ height: `${doingProgress}` }}
              ></div>
            </div>
            <div className="progressBar">
              <div
                className="tauOcuupationJournee"
                style={{ height: `${txOccupation}` }}
              ></div>
            </div>
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
