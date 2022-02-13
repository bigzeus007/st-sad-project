import React from "react";
import styled from "styled-components";

export default function ChefAtelierGarage(){

    const GlobalAtelier= styled.div`
    position: relative;
    height: 35vh;
    width:100%;
    display:flex;
    justify-content:space-around;
    margin:5px;
    padding:5px;
    border:2px blue solid;

    `


    return (
        <GlobalAtelier>Global atelier</GlobalAtelier>

    )
}