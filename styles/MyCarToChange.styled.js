import styled from "styled-components";

export const MyCarToChange = styled.div`
  display: flex;
  flex-direction:row;
  float: right;
  width: 80%;
  height: 35vh;
  padding-left:2vw;
  font-size:14px;
  

  img{
      width:20vw;
  }
  .dateNdTime{
      width:20vw;
  }
  .trvx{
      width:1vw;
  }

  .returnBack{
    position: absolute;
    top: 0px;
    left: 2.5vw;
    width: 13vw;
    height: 13vw;
    border-radius: 100%;
    font-size: 3vw;
    background-image: url("images/returnBack.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

  }
  

  @media screen and (max-width: 650px) {
  {

      font-size:12px;
    background-color: lightgreen;
    .dateNdTime{
      font-size:10px;
  }
    
  }}

  @media screen and (max-width: 520px) {
  {

      font-size:10px;
    background-color: red;
    
  }}
  @media screen and (max-width: 350px) {
  {

      font-size:12px;
    background-color: blue;
    
  }}



`;
