import styled from "styled-components";

export const TechZone = styled.div`
border:1px blue solid;


.carCard{
  position:relative;
  border-radius:3vw;
   
  
  border:2px red solid;
margin-left:10px;
  
  width:25vw;
  height:45vh;
  
  overflow:hidden;
  
}
.PhotoButton{
 position:absolute;
 left:1vw;
 top:1vh;

  
}
  
 
  
  .rdv{
    background-color:red;
  }
  .srdv{
    background-color:yellow;
    
  }
p{
  font-size:1.8vw;
 
}

@media screen and (max-width: 515px) {
  {
    background-color: lightgreen;
    
  }}



.iconList{
  position:absolute;
  padding-right:5px;
  
  
  top:0px;
}
.icon{
  width:3vw;
  
  
  
}
.visualData{
  position: relative;
  
  
  

}
.carPhoto{
  width:15vw;
  height:18vh;
  
}

.cardInfos{

 
  width:22vw;
  height:15vh;
  font-size:1.7vw;
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

