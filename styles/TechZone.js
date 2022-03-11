import styled from "styled-components";

export const TechZone = styled.div`

position: relative;
display: flex;
  flex-direction:row;
  flex-wrap:wrap;
  
 
  
  .rdv{
    background-color:red;
  }
  .srdv{
    background-color:green;
    
  }
p{
  font-size:1.8vw;
}
.carCard{
  position:relative;
  
  
  border:2px red solid;
  width:16vw;
  height:25vw;
  overflow:hidden;
}
.icon{
  width:3.5vw;
  position:absolute;
  
}
.carPhoto{
  width:11vw;
  height:15vw;
  
}
.cardInfos{
  font-size:1.9vw;
  color:blue;
}




`;
const Note = styled.div`
position: relative;
display: flex;
font-size: 1vw;
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