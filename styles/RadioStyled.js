import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { selectCs } from "../src/csReducer";



const Selection = styled.section`
position:relative;

    display: flex;
    flex-direction:row;
    

    color: hsla(215, 5%, 50%, 1);

    h2 {
      color: hsla(215, 5%, 10%, 1);
      font-size: 1.2vw;
      
      
    }
   
   


    input[type="radio"] {
      display: none;
    }
    label {
      height: 10vh;
      cursor: pointer;
      display: block;
      background: white;
      border: 2px solid hsla(150, 75%, 50%, 1);
      border-radius: 20px;
      padding: 1vw;
      margin-bottom: 1vh;

      text-align: center;
      box-shadow: 0px 3px 10px -2px hsla(150, 5%, 65%, 0.5);
    }
    input[type="radio"]:checked + label {
      background: hsla(150, 75%, 50%, 1);
      color: hsla(215, 0%, 100%, 1);
      box-shadow: 0px 0px 20px hsla(150, 100%, 50%, 0.75);
    }
    input[type="radio"]#control_05:checked + label {
      background: red;
      border-color: red;
    }

    @media screen and (max-width: 620px) {
     {
      
    
      
    }
  }
  @media screen and (max-width: 450px) {
     {
      
    
    height:20px;
    
    label {
      height: 5vh;}
      
    }
  }
  `;



export default function RadioStyled() {
  const theCs = useSelector((state) => state.csSelected.serviceAdvisor);
  const dispatch = useDispatch();

  

  return (
    <div >
      <Selection>



            
          <input type="radio" id="control_01" name="select" value="1" checked={theCs=="ELMOURZBANI"}  onChange={() => dispatch(selectCs("ELMOURZBANI"))}/>
          <label htmlFor="control_01">
            <h2>ELMOURZBANI</h2>
          </label>
        
       
          <div>
            <input type="radio" id="control_02" name="select" value="2"  checked={theCs=="HILALI"} onChange={() => dispatch(selectCs("HILALI"))}/>
            <label htmlFor="control_02">
              <h2>HILALI</h2>
            </label>
          </div>
        
          <div>
            <input type="radio" id="control_03" name="select" value="3" checked={theCs=="ESSAIH"} onChange={() => dispatch(selectCs("ESSAIH"))}/>
            <label htmlFor="control_03">
              <h2>ESSAIH</h2>
            </label>
          </div>
        
        
          <div style={{display:"none"}}>
            <input type="radio" id="control_04" name="select" value="4" checked={theCs=="BASSIR"} onChange={() => dispatch(selectCs("BASSIR"))}/>
            <label htmlFor="control_04">
              <h2>BASSIR</h2>
            </label>
          </div>
        
        <div style={{display:"none"}}>
          <input type="radio" id="control_05" name="select" value="5" />
          <label htmlFor="control_05"></label>
        </div>
      </Selection>
    </div>
  );
}
