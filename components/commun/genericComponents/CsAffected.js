import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux"
import {selectCs} from "../../../src/csReducer"




export default function CsAffected({defaultCs}) {
  const dispatch = useDispatch();
  const csToCheck= useSelector((state)=>state.csSelected.serviceAdvisor)

// const originalCs="HILALI"

const [csSelected,setCsSelected] = useState(defaultCs)

const handlSelectCs=(conseiller)=>{
  setCsSelected(conseiller);
  dispatch(selectCs(conseiller));
  


}
useEffect(()=>{console.log(csToCheck)},[csSelected])


  return (
    <select defaultValue={defaultCs} onChange={(e)=>handlSelectCs(e.target.value)} required>
        
        
      <option value="ELMOURZBANI">ELMOURZBANI</option>
      <option value="HILALI">HILALI</option>
      <option value="ESSAIH">ESSAIH</option>
      <option value="BASSIR">BASSIR</option>
    </select>
  );
}
