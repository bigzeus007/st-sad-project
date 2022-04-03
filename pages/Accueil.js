import SignOut from "./SignOut";
import { db } from "../firebase";
import NavBar from "../components/commun/navBar/NavBar";

export default function Accueil() {
  const firestore = db;

  return (
    <>
      <SignOut />
      <NavBar />
    </>
  );
}
