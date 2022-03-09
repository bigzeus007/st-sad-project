import React from "react";
import styled from "styled-components";
import { techList } from "../../commun/flipCard/techList";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTech } from "../../../src/caReducer";


const Atelier = styled.div`
  display:inline-block;
 

  padding: 5px;
  
  background-color:transparent;
`;
const Button = styled.div`
  position:relative;
  box-sizing:border-box;
 
  margin:2px;
  padding:5px;
  font-size: 0.5em;
  box-shadow: 0px 10px 15px 0px;
  border-radius: 10px 10px 10px 10px;
  background-color: ${(props) => (props.availability ? "green" : "red")};
  :hover {
    opacity: 0.7;
  }
`;

export default function ChefAtelierGarage() {
  // const [techArea, setTechArea] = useState(false);
  const dispatch = useDispatch();

  // const techSelected = (e) => {
  //   setTechArea(!techArea);
  // };

  const listAtelier = ["myService", "mecanical", "electrical", "bodyCar"];
  const techName = useSelector((state)=>state.selectedByCa)

  // const toggleTech=(element)=> techName.includes({nom:element.nom,atelier:element.atelierAffectation})


  return (
    <>
    
      {listAtelier.map((atelier) => (
        <Atelier key={atelier} className={atelier}>
          {techList
            .filter(
              (tech) =>
                tech.active === true && tech.atelierAffectation == `${atelier}`
            )
            .map((filtredList) => (
              <button style={{backgroundColor:"transparent",height:"5em",width:"5em",boxSizing:"border-box"}} key={filtredList.nom}  draggable={true} onDragStart={()=>dispatch(selectTech([atelier,filtredList.nom]))}>
              <Button
                key={filtredList.id.toString()}
                // onClick={(e) => setTechArea(!techArea)}
                availability={filtredList.availability}
              >
                <h3>{filtredList.nom}</h3>
                <br />
                <h4>{`En attente : ${filtredList.enAttente}`}</h4>
                <h4>{`Termine : ${filtredList.termines}`}</h4>
              </Button>
              </button>
            ))}
        </Atelier>
      ))}
    
    </>);
}
