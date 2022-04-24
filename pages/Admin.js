import React, { useEffect,useState } from "react";

import { db,auth } from "../components/commun/genericComponents/firebase"


import {
  doc,
  setDoc,
  getDocs,
  query,
  where,
  collection,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import styled from "styled-components";
import Link from "next/link";


const ChangeUserStyled=styled.div`
position:relative;

form{
  margin:20%;
display:inline-block;
flex-direction:row;
}

`



export default function Admin() {

    
    const [user, setUser] = useState({});

    const docref = query(collection(db, "users"),where("id", "==", 999));
   
    
   
    const [job,setJob]=useState(user.job)
    const [myName,setMyName]=useState(user.nom)
  
    useEffect(() =>
  getDocs(docref).then((elem) =>
      elem.forEach((inUser) => setUser(inUser.data()))
    ).then(console.log(user))
  ,[]);
  
  const docUserRef = doc(db, "users", "nUPYK8Tc5A7qghbS2LHU");

    const handleSubmit = async (e) => {
     e.preventDefault();
      await setDoc(docUserRef,
        {
          job : job,
          nom : myName,
        },{merge:true}
      )

    };

  

  return(
  <ChangeUserStyled>
    <Link href={"/"}>
      <a>Retour page accueil</a>
    </Link>
  <form onSubmit={(e)=>handleSubmit(e)}>
      <label>Enter your name:
        <br/>
        <input 
          type="text" 
          value={myName}
          placeholder={user.nom}
          onChange={(e) => setMyName(e.target.value)}
        />
      </label>
      <br/>
      <label>Enter your job:
      <br/>
        <input 
          type="text" 
          value={job}
          placeholder={user.job}
          onChange={(e) => setJob(e.target.value)}
        />
      </label>
      <br/>
      
      <input type="submit" />
    </form>
  </ChangeUserStyled>)
}
