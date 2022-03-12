import React from "react";
import "firebase/firestore";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./Login";
import Accueil from "./Accueil";
export default function Home() {
  const [user] = useAuthState(auth);
  return (
    <>
      
      <section>{user ? <Accueil /> : <Login />}</section>
    </>
  );
}

/*


function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>ST-project Using React and Firebase</h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}

export default App;
*/
