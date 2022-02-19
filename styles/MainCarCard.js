import styled from "styled-components";


export const MainCarCard = styled.div`

  color: blue;
  
  display: flex;
  word-wrap: break-word;
  

  position: relative;
  height: 35vh;
  width: 40%;
  border: 1px solid #03506f;
  margin: 20px;
  border-radius: 50px;
  box-shadow: 20px 20px 20px 10px black;
  box-sizing: border-box;


  #ventesAdd, .interventions{
    position: absolute;
    left:10px;
    background-color:royalblue;
    box-sizing:border-box;
    border-radius:10px;
    border:2px solid royalblue;
    display:flex;
    
    z-index:1;
    opacity:0.75;

  }
  .interventions{
    top: -25px;
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
