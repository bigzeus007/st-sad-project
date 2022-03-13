import styled from "styled-components";

export const ChooseRdvStatus = styled.div`
  position: absolute;
  left: 21.5vw;
`;

export const RdvInfo = styled.div`
  position: absolute;
  top: 5vh;
  left: 25vw;
  .customerName {
    position: absolute;
    top: -3.5vh;
    left: 32vw;
    width: 20vw;
    font-size: 1.7vw;
  }
  .rdvTime {
    position: absolute;
    left: 32vw;
    top: 2vh;
    width: 17vw;
    font-size: 1.7vw;
  }
  @media screen and (max-width: 620px) {
     {

      .customerName {
    
    top: 1vh;
    left: 0vw;
    width: 100px;
    font-size: 10px;
  }
  .rdvTime {
    
    left: 0vw;
    top: 5vh;
    width: 100px;
    font-size: 10px;
  }
    }
  }
`;
