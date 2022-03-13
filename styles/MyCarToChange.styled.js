import styled from "styled-components";

export const MyCarToChange = styled.div`
  display: flex;
  flex-direction: row;
  float: right;
  
  height: 40vh;
  padding-left: 2vw;
  font-size: 14px;

  img {
    width: 20vw;
    
  }
  .dateNdTime {
    
    width: 20vw;
  }
  .trvx {
    width: 20px;
  }

  .returnBack {
      cursor: pointer;
    position: absolute;
    top: 0px;
    left: 2.5vw;
    width: 13vw;
    height: 13vw;
    border-radius: 100%;
    font-size: 0vw;
    background-image: url("images/returnBack.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transition:1.cubic-bezier(0.55, 0.055, 0.675, 0.19);
    :hover{
        border-radius: 0%;
    }
  }

  @media screen and (max-width: 650px) {
     {
      font-size: 12px;
      background-color: lightgreen;
      .dateNdTime {
        font-size: 10px;
      }
    }
  }

  @media screen and (max-width: 520px) {
     {
      font-size: 12px;
      background-color: red;
      padding-left: 4vw;
      width: 100%;

      .trvx {
        width: 10px;
      }
      .returnBack {
        

        
        background-color: royalblue;
        
        font-size: 2vw;
        font-weight: bolder;
        width: 15vw;
        border-radius: 30%;
        height: 8vh;

        
        left: 80%;
      }
    }
  }
  @media screen and (max-width: 350px) {
     {

      font-size: 10px;
      background-color: pink;
      .returnBack {
          top:40%;
      }
      img {
        display: none;
      }
    }
  }
`;
