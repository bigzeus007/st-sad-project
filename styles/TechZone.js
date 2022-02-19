import styled from "styled-components";

export const TechZone = styled.div`
position: relative;
overflow-x:scroll;

width: 100%;


display: flex;
align-content: space-around;




> div {
  
  width: 100%;
  font-size: 2rem;
}
`;
const Note = styled.div`
position: relative;
display: flex;
font-size: 1rem;
color: royalblue;
font-weight: bold;
`;
const TechButton = styled.button`
position: absolute;
bottom: 0px;
width: 22vw;
display: block;
font-size: 2vw;

background-color: greenyellow;
color: blue;
font-weight: bolder;
border-radius: 35% 35%;
:hover {
  background-color: green;
}
`;