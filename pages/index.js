import React from "react";
import "firebase/firestore";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./Login";
import Accueil from "../components/commun/navBar/Accueil"; 
export default function Home() {
  const [user] = useAuthState(auth);
  return (
    <>
      
      <section>{user ? <Accueil /> : <Login />}</section>
    </>
  );
}

