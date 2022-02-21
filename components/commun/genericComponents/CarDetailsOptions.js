import React, { useState } from "react";

export default function CarDetailsOptions({props}) {
    const [rdv,setRdv]=useState(false)

  const buttonRdvStyl = {
    color: "red",
  };

  return (
    <div>
      <button style={buttonRdvStyl} onClick={()=>setRdv(false)}>SANS RDV</button>
      <button onClick={()=>setRdv(true)}>AVEC RDV</button>
      <div style={{display:`${rdv?"flex":"none"}`}}>
        <input type="time"></input>
        <div>
          <button>ELMOURZBANI</button>
          <button>HILALI</button>
          <button>ESSAIH</button>
          <button>BASSIR</button>
        </div>
      </div>
    </div>
  );
}
