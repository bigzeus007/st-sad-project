import React from "react";
import styled from "styled-components";
import { techList } from "../tech/techList";
import { useState } from "react";

export default function ChefAtelierGarage() {

    const [techArea, setTechArea]=useState(false);

    const techSelected = (e)=>{
        setTechArea(!techArea);

    };

  const GlobalAtelier = styled.div`

    position: relative;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 40vw 40vw;

    margin: 10px 0px 0px 15px;
    border: 2px blue solid;
  `;
  const Atelier = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 32% 32% 32%;
    grid-template-rows: auto;
    padding: 5px;

    justify-content: space-evenly;

    height: 100%;
    width: 100%;

    border: 2px blue solid;
  `;
  const Button = styled.button`
    font-size: 1.5vw;
    box-shadow: 0px 5px 5px 0px;
    border-radius: 10px 10px 10px 10px;
    background-color: ${(props) => (props.availability ? "green" : "red")};
    :hover {
      opacity: 0.7;
    }
  `;

  const listAtelier = ["express", "mecanique", "electrique", "bodyCar"];

  return (
    <GlobalAtelier >
      {listAtelier.map((atelier) => (
        <Atelier className={atelier} >
          {techList
            .filter(
              (tech) =>
                tech.active === true && tech.atelierAffectation == `${atelier}`
            )
            .map((filtredList) => (
              <Button onClick={(e)=>setTechArea(!techArea)} availability={filtredList.availability} >
                <h3>{filtredList.nom}</h3>
                <br />
                <h4>{`En attente : ${filtredList.enAttente}`}</h4>
                <h4>{`Termine : ${filtredList.termines}`}</h4>
              </Button>
            ))}
        </Atelier>
      ))}
    </GlobalAtelier>
  );
}
