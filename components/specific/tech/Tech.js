import React from "react";
import styled from "styled-components";
import Card from "../../commun/flipCard/FlipCard";
import { initialCar } from "../../commun/MainCar/MainCar";
import content from "../../commun/flipCard/content";

export default function Tech(props){

    const TechZone = styled.div`
    position:absolute;
    top:8vh;
    left:0px;
    width:29vw;
    
    display:grid;
   
    grid-template-columns:100% 100% 100%;
    justify-items:center;
    >div{
        border:5px solid red;
    }
    `
    
    return(

        <TechZone>
            <div></div>
            <Card/>
            <div>ZONE 2</div>
            

        </TechZone>

    )
}