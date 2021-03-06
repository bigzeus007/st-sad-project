import styled from "styled-components";

const MyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MyButton = styled.button`
 
  position:absolute;
  bottom:-3vh;
 
  /* left:10px;
  top:-80vh; */

 

  width: 15vw;
  height: 8vh;
  font-family: 'Nunito', sans-serif;
  font-size: 1.5vw;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  color: #313133;
  background: #4FD1C5;
background: linear-gradient(90deg, rgba(129,230,217,1) 0%, rgba(79,209,197,1) 100%);
  border: none;
  border-radius: 1000px;
  box-shadow: 12px 12px 24px rgba(79,209,197,.64);
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
 
  }
  @media screen and (max-width: 520px) {
  {    width: 20vw;
  height: 7vh;


  }}
  @media screen and (max-width: 350px) {
     {
       
      
    }
  }

  @keyframes ring {
  0% {
    width: 3vw;
    height: 3vw;
    opacity: 1;
  }
  100% {
    width: 7vw;
    height: 7vw;
    opacity: 0;
  }
}

::before {
content: '';
  border-radius: 100vw;
  min-width: calc(15vw + 3vw);
  min-height: calc(10vh + 3vh);
  border: 6px solid #00FFCB;
  box-shadow: 0 0 60px rgba(0,255,203,.64);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all .3s ease-in-out 0s;
}

:hover, :focus {
  color: #313133;
  transform: translateY(-6px);
}

:hover::before, :focus::before {
  opacity: 1;
  animation: ring 1.5s infinite;
}

::after {
  content: '';
  width: 7vw; height: 7vh;
  border-radius: 100%;
  border: 1vw solid #00FFCB;
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ring 1.5s infinite;
}

:hover::after, button:focus::after {
  animation: none;
  display: none;
}





`;

export const MySubmitButton = ({ props }) => {
  return (
    <MyContainer>
      <MyButton> {props} </MyButton>
    </MyContainer>
  );
};
