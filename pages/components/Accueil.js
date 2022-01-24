import Link from "next/link";
import SignOut from "./SignOut";
import { db } from "../../firebase";
import { collection, getDocs, addDoc, } from "firebase/firestore"; 
import { NotificationTwoTone } from "@ant-design/icons";



export default function Accueil(){
    
    const firestore=db;
    
   /* (async function test(){
try {
    const docRef = await addDoc(collection(firestore, "users2"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815,
      createat: new Date(),
      pic:"Hey you"
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }


   // console.log(firestore)
  })();
  */
    return(
        <>
        <SignOut/>

        

        

        
        </>
    )
}

/*
<Link href="/components/Test">
            <a> RETOUR </a>
        </Link>


        

const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});

*/