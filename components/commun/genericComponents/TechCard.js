import React from "react";

import styled from "styled-components";
import { auth } from "../../../firebase";
import techPhoto from "../../../public/images/carPicture.jpg"

import { useState, useRef, useEffect } from "react";

const CardTechStyled = styled.section`
  display: inline-block;
  word-wrap: break-word;
  width:20%;
  height:100%;
  border-radius: 50px;
  box-shadow: 15px 15px 15px 10px black;
  box-sizing: border-box;
  .techIdentity{
    width:80%;
    height:50%;

  }
  .techAffected{
    width:90%;
    height:10%;
    margin-left:5%;

  }
  .techPhoto{
    width:100%;
    height:100%;
  }
  .techParkStat{
    display:flex;
    justify-content:space-evenly;
  }

`;



export default function TechCard() {
  const props = {
    photo: techPhoto,
    nom: "SAID",
    availability: false,
    toDo: 2,
    done: 3,
    cardsHistory: ["cardID1", "cardID2"],
  };
  //user check
  const checkUserEmail = auth.currentUser.email;
  function checkProfilTech(checking) {
    return checking.email === checkUserEmail;
  }
  return (
    <CardTechStyled>
      <div className="techCard">
        <section className="progressIndicators">
          <div className="tauDeChargeRestant progressBar"></div>
          <div className="tauDeChargeRestant progressBar"></div>
        </section>
        <section
          className="techInfos"
          style={{ backgroundColor: `${props.availability ? "red" : "green"}` }}
        >
          <div className="techIdentity">
            {
              (!props.photo ? (
                <p>{props.nom}</p>
              ) : (
                <img
                  className="techPhoto"
                  src={props.photo}
                  alt="techPhoto"
               />
              ))
            }
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
