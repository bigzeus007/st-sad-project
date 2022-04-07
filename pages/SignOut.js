import { auth } from "../components/commun/genericComponents/firebase";
import React from "react";


export default function SignOut() {
    return auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
    )
  }