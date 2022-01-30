import React from "react";
import ReactCardFlip from "react-card-flip";

const CardStyle = {
  border: "1px solid #03506f",
  borderRadius: "30px",
  padding: "20px",
  margin: "20px",
  width: "270px",
  height: "170px",
  backgroundColor: "#75cfb8"
};

function Card(props) {
  const [isFlipped, setFlipped] = React.useState(false);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div
        id="card"
        style={CardStyle}
        className="CardFront"
        onClick={() => setFlipped((prev) => !prev)}
      >
        <div>
          <span className="emoji" role="img" aria-label="emojis">
            {props.emoji}
          </span>
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
  );
}

export default Card;