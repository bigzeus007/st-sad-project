import styled from "styled-components";

export const CarToAffectStyled = styled.div`
  display: flex;
  flex-direction: column;

  height: 38vh;

  padding-left: 2vw;
  font-size: 14px;

  img {
    position: absolute;
    top: 2vh;
    right: 0px;
    width: 20vw;
    height:43vh;
  }
  .workToDo{
    margin-left:20px;
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
    z-index:3;
    top: 0vh;
    left: 89%;
    width: 10vw;
    height: 7vw;
    border-radius: 100%;
    font-size: 0vw;
    background-image: url("images/returnBack.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: 1cubic-bezier(0.55, 0.055, 0.675, 0.19);
    :hover {
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
        
      }
      
    }
  }
`;
