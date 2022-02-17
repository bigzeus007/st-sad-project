import React from "react";
import ReactCardFlip from "react-card-flip";
import Image from "next/image";
import myPicture from "../../../public/carPicture.jpg";
import styled from "styled-components";
import MyServiceCarIcons from "../../commun/MyServiceCarIcons/MyServiceCarIcons";
import MyIcons from "../../commun/images/images";
import techMec from "../../commun/images/techMec.png";
import techPneus from  "../../../public/techPneus.jpg"
import { useState, useEffect } from "react";

const initialPhoto = myPicture;



const MainCarCard = styled.div`
  color: blue;
  border: 1px solid #03506f;
  display: flex;
  right:-70px;
  

  position: relative;
  height: 40vh;
  width: 40%;
  border: 1px solid #03506f;
  margin: 20px;
  border-radius: 50px;
  box-shadow: 0 15px 15px 0 rgba(0, 0, 0, 0.6);
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



export const initialCar = {
  id: 89,
  position:1,//a supprimer
  whereIsTheCar:1,
  responsabilitiesHistory:[{name:"",startingTime:""}],
  affectationChefAtelier:["Amine","yassine","TARHI"],
  csName: "TARHI", // a supprimer
  responsability:"Amine",
  startingTime:"startedAt ",
  note: [
    {
      sender: "NOTE DE TEXT",
      senderTime: "note created at: ",
      noteText: "MY TEXT",
    },
  ],
  photo: {
    carPhoto: initialPhoto,
    createdaT: "created at: ",
  },

  deliveryTimeAdjustment: [
    {
      deadLineTime: "17:00",
      deadLineDay: "Lundi 07/08/22",
      who: "Said",
      when: "now",
      why: "Explication",
      isCustomerInformed: "Non",
    },
  ],

  emoji: "😅😅😅😅😅😅😅😅😅😅",
  carTasks: {
    myService: true,
    mecanical: true,
    electrical: true,
    body: true,
    divers: {
      pneus: true,
      plaquettes: true,
      batterie: true,
      lavage:true,
      divers: {
        newOne: false,
        diversNote: "divers note",
      },
    },
    EstimatedTime: "EstimatedTime",
  },
};

function MainCar({ props = initialCar }) {

  const [dragged,setDragged] = useState()



  

  const [isFlipped, setFlipped] = React.useState(false);
  
  console.log(props);

  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    console.log(props.id)
    setDragged(props.id)

    ev.dataTransfer.setData("text", ev.target.id);
  }

  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    const myData = document.getElementById(data);

    console.log(`myData : ${myData}`);
    console.log(props.id);
    
    //ev.target.appendChild(document.getElementById(data));
  }

  return (
    <div onDrop={(e) => drop(e)}>
      <div
        draggable="true"
        onDragStart={(e) => drag(e)}
        onDragOver={(e) => allowDrop(e)}
      >
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <MainCarCard
            className="CardFront"
            key={props.id}
            id={props.id}
            onClick={() => setFlipped((prev) => !prev)}
          >
            <div className="interventions" >
              
              {props.carTasks.myService &&<img src="https://firebasestorage.googleapis.com/v0/b/one-touch-work.appspot.com/o/carServiceIcons%2FtechExpress.jpg?alt=media&token=bf4f24de-7902-4285-afe6-e3e965cf9ca8" alt="alt"/>}
              {props.carTasks.electrical&&<img src="https://firebasestorage.googleapis.com/v0/b/one-touch-work.appspot.com/o/carServiceIcons%2FtechDiag.png?alt=media&token=a5bdaf9d-2345-4602-899b-0ced2aecb112" alt="alt"/>}
              {props.carTasks.mecanical&&<img src="https://firebasestorage.googleapis.com/v0/b/one-touch-work.appspot.com/o/carServiceIcons%2FtechMecAlt.jpg?alt=media&token=0a2e1dc8-8309-4b19-841a-7582dde13481" alt="alt"/>}
              {props.carTasks.body&&<img src="https://firebasestorage.googleapis.com/v0/b/one-touch-work.appspot.com/o/carServiceIcons%2FtechBody.png?alt=media&token=da893cc1-2903-4027-90dc-2d822e9a8c87" alt="alt"/>}
              
            </div>

            
              <Image
                alt="carToAffect"
                src={props.photo.carPhoto}
                layout="fill"
                width={100}
                height={100}
                quality={10}
              />
              <div id="ventesAdd" className="ventesAdd">
              {props.carTasks.divers.pneus&&<img src="https://firebasestorage.googleapis.com/v0/b/one-touch-work.appspot.com/o/carServiceIcons%2FtechPneus.jpg?alt=media&token=23822ca7-c965-46cb-af3d-368b64cc97f1" alt="alt"/>}
              {props.carTasks.divers.plaquettes&&<img src="https://firebasestorage.googleapis.com/v0/b/one-touch-work.appspot.com/o/carServiceIcons%2Fplaquettes.png?alt=media&token=34a631ca-9487-4e38-a833-33b58616818b" alt="alt"/>}
              {props.carTasks.divers.batterie&&<img src="https://firebasestorage.googleapis.com/v0/b/one-touch-work.appspot.com/o/carServiceIcons%2FchargingBattery.png?alt=media&token=c5fb0fa1-5fd3-4c48-8504-5c896d7d9075" alt="alt"/>}
              {props.carTasks.divers.lavage&&<img src="https://firebasestorage.googleapis.com/v0/b/one-touch-work.appspot.com/o/carServiceIcons%2Flavage.jpg?alt=media&token=08d4e304-19c7-4e2e-a75d-40784c998c5b" alt="alt"/>}

              </div>
            
          </MainCarCard>
         
          <MainCarCard
          className="CardBack"
          key={props.id}
          id={props.id}
          onClick={() => setFlipped((prev) => !prev)}
          >
          <>
              {props.csName}
              <br/>
              {props.startingTime}
              </>
          </MainCarCard>
        </ReactCardFlip>
      </div>
    </div>
  );
}


export default MainCar;
