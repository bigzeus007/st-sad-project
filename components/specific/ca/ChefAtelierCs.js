import React from "react";
import ReactCardFlip from "react-card-flip";
import Image from "next/image";
import myPicture from "../../../public/carPicture.jpg";

const initialPhoto = myPicture;

const CardStyle = {
  border: "1px solid #03506f",
  borderRadius: "30px",
  padding: "2vw",
  margin: "2vw",
  width: "15vw",
  height: "40vh",
  backgroundColor: "#75cfb8",
};

const initialCar = {
  id: 89,
  csName:"TARHI",
  note:[{
    sender:"NOTE DE TEXT",
    senderTime:"note created at: ",
    noteText:"MY TEXT",
  }],
  photo:{
    carPhoto: initialPhoto,
    createdaT:"created at: ",
  },
 
  deliveryTimeAdjustment:[{
    deadLineTime:"17:00",
    deadLineDay:"Lundi 07/08/22",
    who:"Said",
    when:"now",
    why:"Explication",
    isCustomerInformed:"Non", }],

  emoji: "😅",
  carTasks:{

    myService:false,
    mecanical:false,
    electrical:false,
    bodyCar:false,
    divers:{
      newOne:false,
      diversNote:"divers note",
    },
    EstimatedTime:"EstimatedTime",
  },
  

};

function ChefAtelierCs({ props = initialCar}) {
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
    console.log(myData)
    console.log(ev.target)
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
          <div
            id={props.id}
            style={CardStyle}
            className="CardFront"
            onClick={() => setFlipped((prev) => !prev)}
          >
            <div >
              <Image
                alt="Mountains"
                src={initialPhoto}
                layout="fill"
                
                quality={10}
              />
            </div>
          </div>

          <div
            style={CardStyle}
            onClick={() => setFlipped((prev) => !prev)}
            className="CardBack"
          >
            <p>{props.emoji}</p>

            <p>{props.carTasks.myService && "Vidange"}</p>
            <p>{props.carTasks.mecanical && "Mecanique"}</p>
            <p>{props.carTasks.electrical && "electrique"}</p>
            <p>{props.carTasks.bodyCar && "carrosserie"}</p>
            <p>{props.carTasks.divers.newOne && props.carTasks.divers.diversNote}</p>
            <p>{props.deliveryTimeAdjustment.map((adjustment=>{return adjustment.deadLineTime}))}</p>
            

          </div>
        </ReactCardFlip>
      </div>
    </div>
  );
}

export default ChefAtelierCs;
