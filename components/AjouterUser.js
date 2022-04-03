import React from "react";
import {
  doc,
  addDoc,
  setDoc,
  serverTimestamp,
  collection,
} from "firebase/firestore";
import { db } from "../firebase";
import { techList } from "./commun/flipCard/techList";

export default function AjouterUser({ user }) {
  const [sadUsers] = techList;

  const handleSubmit = async () => {
    techList.forEach((tech) => addDoc(collection(db, "users"), tech));
  };
  return (
    <div className="adduser">
      <button onClick={() => handleSubmit()}>ADD USER</button>
    </div>
  );
}
