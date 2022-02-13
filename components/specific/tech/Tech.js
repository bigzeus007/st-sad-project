import React from "react";
import styled from "styled-components";
import Card from "../../commun/flipCard/FlipCard";
import { initialCar } from "../../commun/MainCar/MainCar";
import content from "../../commun/flipCard/content";

export default function Tech(){

    const myContent = content;
    const actual = "yassine";

    function checkDoing(checking){return checking.responsibility===`${actual}` };

    const doing = myContent.find(checkDoing)
    console.log(doing)

    

   

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
    const Note=styled.div`
    position: relative;
    display:flex;
    font-size:1em;
    color:royalblue;
    font-weight:bold;
    
    `
    const TechButton = styled.button`
    position: absolute;
    bottom:0px;
    width:22vw;
    display:block;
    font-size:2vw;
    
    background-color:greenyellow;
    color:blue;
    font-weight:bolder;
    border-radius:35%35%;
    :hover{
        background-color:green;
    };

    `
    
    return(

        <TechZone>
            
            <div>
                {doing.note.map(({noteText}) => {return <Note>{noteText.toLowerCase()}<br/></Note> })}
                <TechButton>TERMINER</TechButton>
                </div>
            
            <Card/>
            <div>
                {doing.note.map(({noteText}) => {return <Note>{noteText.toLowerCase()}<br/></Note> })}
                <TechButton>BLOQUER</TechButton>
                </div>
            

        </TechZone>

    )
}