import React from "react";
import ReactCardFlip from "react-card-flip";
import Image from "next/image";
import myPicture from "../../../public/carPicture.jpg";

const CardStyle = {
  border: "1px solid #03506f",
  borderRadius: "30px",
  padding: "2vw",
  margin: "2vw",
  width: "20vw",
  height: "50vh",
  backgroundColor: "#75cfb8",
};

function Card({ props }) {
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
            <div>
              <span className="emoji" role="img" aria-label="emojis">
                {props.emoji}
              </span>

              

              <Image
                alt="Mountains"
                src={myPicture}
                layout="fill"
                width={2}
                height={2}
              />
            </div>
          </div>

          <div
            style={CardStyle}
            onClick={() => setFlipped((prev) => !prev)}
            className="CardBack"
          >
            <p>{props.back}</p>
          </div>
        </ReactCardFlip>
      </div>
    </div>
  );
}

export default Card;
