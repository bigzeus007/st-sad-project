import React from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./commun/genericComponents/firebase";
import { techList } from "./commun/flipCard/techList";

export default function AjouterUser({ user }) {
  const handleSubmit = async () => {
    techList.forEach((tech) => addDoc(collection(db, "users"), tech));
  };
  return (
    <div className="adduser">
      <button onClick={() => handleSubmit()}>ADD USER</button>
    </div>
  );
}
