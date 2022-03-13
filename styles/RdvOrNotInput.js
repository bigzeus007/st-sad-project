import React, { useState } from "react";
import styles from "./RdvOrNot.module.css";
import { selectCs,rdvStatus } from "../src/csReducer";
import { useSelector, useDispatch } from "react-redux";

export default function RdvOrNotInput({setRdvTime:setRdvTime,rdvTime:rdvTime}){

  
  const dispatch=useDispatch();

  function handlReturn(){
    setRdvTime("");
   
    dispatch(selectCs(""));
    dispatch(rdvStatus(false));
    
    
    
  }

    return(
    <div className={styles["container"]}>
        <p className={styles["btn-switch"]}>					
  <input type="radio" id="yes" name="switch" className={styles["btn-switch__radio","btn-switch__radio_yes"]}  hidden onClick={() => dispatch(rdvStatus(true))}/>
  <input type="radio" checked id="no" name="switch" className={styles["btn-switch__radio","btn-switch__radio_no"]}  hidden onClick={() => handlReturn()}/>		
  <label for="yes" className={styles["btn-switch__label","btn-switch__label_yes"]}><span className={styles["btn-switch__txt"]}>RDV</span></label>								  
  <label for="no" className={styles["btn-switch__label","btn-switch__label_no"]}><span className={styles["btn-switch__txt"]}>Sans RDV</span></label>							
</p>
</div>

)

}