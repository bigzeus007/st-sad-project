import styled from "styled-components";

export const TechZone = styled.div`
position: relative;
overflow-x:scroll;

width: 93%;


display: flex;



> div {
  border: 5px solid red;
  width: 100%;
  font-size: 2vw;
}
`;
const Note = styled.div`
position: relative;
display: flex;
font-size: 1em;
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
border-radius: 35%35%;
:hover {
  background-color: green;
}
`;