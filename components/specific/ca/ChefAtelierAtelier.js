import React from "react";
import ReactCardFlip from "react-card-flip";
import Image from "next/image";
import myPicture from "../../../public/carPicture.jpg";
import styled from "styled-components";
import MyServiceCarIcons from "../../commun/MyServiceCarIcons/MyServiceCarIcons";
import MyIcons from "../../commun/images/images";
import techMec from "../../commun/images/techMec.png";
import techPneus from  "../../../public/techPneus.jpg"

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
  border-radius: 12px 50px 50px 50px;
  box-shadow: 0 15px 15px 0 rgba(0, 0, 0, 0.6);
  box-sizing: border-box;

  div{
    position: absolute;
    background-color:royalblue;
    box-sizing:border-box;
    border-radius:10px;
    border:2px solid royalblue;
    display:flex;
    top: -25px;
    z-index:1;
    opacity:0.75;

  }
  img {
  border-radius: 20%;
}

`;

const initialCar = {
  id: 89,
  csName: "TARHI",
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
    mecanical: false,
    electrical: false,
    body: false,
    divers: {
      newOne: false,
      diversNote: "divers note",
    },
    EstimatedTime: "EstimatedTime",
  },
};

function ChefAtelierAtelier({ props = initialCar }) {


  

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
    console.log(myData);
    console.log(ev.target);
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
            <div >
              
              {props.carTasks.myService&&<img src="https://firebasestorage.googleapis.com/v0/b/one-touch-work.appspot.com/o/carServiceIcons%2FtechExpress.jpg?alt=media&token=bf4f24de-7902-4285-afe6-e3e965cf9ca8" alt="alt"/>}
              <img src="https://firebasestorage.googleapis.com/v0/b/one-touch-work.appspot.com/o/carServiceIcons%2FchefAtelierNotNeeded.png?alt=media&token=87d0a6b7-74da-44a3-89d4-6231394cae58" alt="alt"/>

            </div>

            
              <Image
                alt="carToAffect"
                src={props.photo.carPhoto}
                layout="fill"
                width={100}
                height={100}
                quality={10}
              />
            
          </MainCarCard>

          <MainCarCard
            onClick={() => setFlipped((prev) => !prev)}
            className="CardBack"
          >
            <p>{props.emoji}</p>

            <p>{props.carTasks.myService && "Vidange"}</p>
            <p>{props.carTasks.mecanical == true && "Mecanique"}</p>
            <p>{props.carTasks.electrical == true && "electrique"}</p>
            <p>{props.carTasks.body == true && "carrosserie"}</p>
            <p>
              {props.carTasks.divers.newOne == true &&
                props.carTasks.divers.diversNote}
            </p>
            <p>
              {props.deliveryTimeAdjustment.map((adjustment) => {
                return adjustment.deadLineTime;
              })}
            </p>
          </MainCarCard>
        </ReactCardFlip>
      </div>
    </div>
  );
}

console.log(MyIcons)

export default ChefAtelierAtelier;
