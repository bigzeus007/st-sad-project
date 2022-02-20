import styled from "styled-components";

// carPhoto :unit

export const MainCarCard = styled.div`

  color: blue;
  
  display: flex;
  word-wrap: break-word;
  flex-wrap:nowrap;
  

  position: relative;
  height: 35vh;
  width: 190px;
  
 
  border-radius: 50px;
  box-shadow: 15px 15px 15px 10px black;
  box-sizing: border-box;


  #ventesAdd, .interventions{
    position: absolute;
    left:10px;
    background-color:royalblue;
    box-sizing:border-box;
    border-radius:10px;
    
    display:flex;
    
    z-index:1;
    opacity:0.75;

  }
  .interventions{
    top: 0px;
  }
  #ventesAdd{
  
    bottom: -5px;
  }
  
  img {
  border-radius: 20%;
}
#cardDescription{
  display:grid;
  position:absolute;
  margin:10px;
 
  p{
    position:relative;
  }
}

`;
