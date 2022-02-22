import React from "react";
import styles from "./RdvOrNot.module.css";

export default function RdvOrNotInput(){

    return(
    <div className={styles["container"]}>
        <p className={styles["btn-switch"]}>					
  <input type="radio" id="yes" name="switch" className={styles["btn-switch__radio","btn-switch__radio_yes"]} hidden />
  <input type="radio" checked id="no" name="switch" className={styles["btn-switch__radio","btn-switch__radio_no"]} hidden/>		
  <label for="yes" className={styles["btn-switch__label","btn-switch__label_yes"]}><span className={styles["btn-switch__txt"]}>RDV</span></label>								  
  <label for="no" className={styles["btn-switch__label","btn-switch__label_no"]}><span className={styles["btn-switch__txt"]}>Sans RDV</span></label>							
</p>
</div>

)

}