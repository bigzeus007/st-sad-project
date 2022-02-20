import React from "react";

import styled from "styled-components";
import { auth } from "../../../firebase";
import { MainCarCard } from "../../../styles/MainCarCard";
import { useState, useRef, useEffect } from "react";

export default function CarEntry() {
//user check
 const checkUserEmail = auth.currentUser.email;
  function checkProfilTech(checking) {
    return checking.email === checkUserEmail;
  }



 
  const CarToCreat = styled.button`


  display: flex;
  word-wrap: break-word;
 
  min-height:25vw;
  
  min-width:15vw;
  
 
  border-radius: 50px;
  box-shadow: 15px 15px 15px 10px black;
  box-sizing: border-box;


  


`;


  

  return (
    <div>
        <CarToCreat />
    </div>
  );
}
