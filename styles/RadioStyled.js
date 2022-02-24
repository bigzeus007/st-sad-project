import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { selectCs } from "../src/csReducer";

export default function RadioStyled() {
  const theCs = useSelector((state) => state.csSelected.value);
  const dispatch = useDispatch();

  const Selection = styled.section`
    display: flex;

    color: hsla(215, 5%, 50%, 1);

    h2 {
      color: hsla(215, 5%, 10%, 1);
      font-size: 1.5vw;
    }

    input[type="radio"] {
      display: none;
    }
    label {
      height: 5vh;
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
  `;

  return (
    <div style={{ position: "absolute", top: "20vh" }}>
      <Selection>
        <button
          onClick={() => dispatch(selectCs("MOURZBANI"), console.log(theCs))}
        >
          <input type="radio" id="control_01" name="select" value="1" />
          <label htmlFor="control_01">
            <h2>ELMOURZBANI</h2>
          </label>
        </button>
        <button
          onClick={() => dispatch(selectCs("HILALI"), console.log(theCs))}
        >
          <div>
            <input type="radio" id="control_02" name="select" value="2" />
            <label htmlFor="control_02">
              <h2>HILALI</h2>
            </label>
          </div>
        </button>

        <button
          onClick={() => dispatch(selectCs("ESSAIH"), console.log(theCs))}
        >
          <div>
            <input type="radio" id="control_03" name="select" value="3" />
            <label htmlFor="control_03">
              <h2>ESSAIH</h2>
            </label>
          </div>
        </button>
        <button
          onClick={() => dispatch(selectCs("BASSIR"), console.log(theCs))}
        >
          <div>
            <input type="radio" id="control_04" name="select" value="4" />
            <label htmlFor="control_04">
              <h2>BASSIR</h2>
            </label>
          </div>
        </button>
        <div>
          <input type="radio" id="control_05" name="select" value="5" />
          <label htmlFor="control_05"></label>
        </div>
      </Selection>
    </div>
  );
}
