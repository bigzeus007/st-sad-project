import React from "react";
import ReactCardFlip from "react-card-flip";
import Image from "next/image";
import myPicture from "../../../public/carPicture.jpg";
import myCar from "../images/start.svg"
import carIcon from "../images/carIcon.png";
import styled from "styled-components";

const initialPhoto = myPicture;

const MainCarCard = styled.div`
  color: blue;
  border: 1px solid #03506f;
  display: flex;
  align-items: center;
  position: relative;
  height: 40vh;
  width: 200px;
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
const initialCar = {
  id: 89,
  position:"",
  responsibility:"",
  csName:"TARHI",
  
  
  note:[{
    sender:"NOTE DE TEXT",
    senderTime:"note created at: ",
    noteText:"MY TEXT",
  }],
  photo:{
    carPhoto: myCar,
    createdaT:"created at: ",
  },
 
  deliveryTimeAdjustment:[{
    deadLineTime:"17:00",
    deadLineDay:"Lundi 07/08/22",
    who:"Said",
    when:"now",
    why:"Explication",
    isCustomerInformed:"Non", }],

  emoji: carIcon,
  carTasks:{

    myService:false,
    mecanical:false,
    electrical:false,
    body:false,
    divers:{
      newOne:false,
      diversNote:"divers note",
    },
    EstimatedTime:"EstimatedTime",
  },
  

};

function Card({ props = initialCar}) {
  const [isFlipped, setFlipped] = React.useState(false);
  console.log(props);

  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    const myData = document.getElementById(data);

    //ev.target.appendChild(document.getElementById(data));
  }

  return (
    <div 
    onDrop={(e) => drop(e)}
    >
      <div
        draggable="true"
        onDragStart={(e) => drag(e)}
        onDragOver={(e) => allowDrop(e)}
        
      >
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <MainCarCard
            id={props.id}
            className="CardFront"
            onClick={() => setFlipped((prev) => !prev)}
          >
            <div>
              
              <Image
                alt="Car"
                src={props.photo.carPhoto}
                layout="fill"
                quality={10}
              />
            </div>
          </MainCarCard>

          <MainCarCard
            onClick={() => setFlipped((prev) => !prev)}
            className="CardBack"
          >
          
            <p>{props.carTasks.myService==false && "Vidange"}</p>
            <p>{props.carTasks.mecanical==false && "Mecanique"}</p>
            <p>{props.carTasks.electrical==true && "electrique"}</p>
            <p>{props.carTasks.body == true && "carrosserie"}</p>
            <p>{props.carTasks.divers.newOne == true && props.carTasks.divers.diversNote}</p>
            <p>{props.deliveryTimeAdjustment.map((adjustment=>{return adjustment.deadLineTime}))}</p>
            

          </MainCarCard>
        </ReactCardFlip>
      </div>
    </div>
  );
}

export default Card;
