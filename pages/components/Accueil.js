import Link from "next/link";
import SignOut from "./SignOut";
import { db } from "../../firebase";
import { collection, getDocs, addDoc, } from "firebase/firestore"; 
import { NotificationTwoTone } from "@ant-design/icons";



export default function Accueil(){
    
    const firestore=db;

    (async function getdata(){

    const querySnapshot = await getDocs(collection(db, "users2"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});
    })();


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




    /*
    FriendlyEats.prototype.getDocumentsInQuery = function(query, renderer) {
  query.onSnapshot(function(snapshot) {
    if (!snapshot.size) return renderer.empty(); // Display "There are no restaurants".

    snapshot.docChanges().forEach(function(change) {
      if (change.type === 'removed') {
        renderer.remove(change.doc);
      } else {
        renderer.display(change.doc);
      }
    });
  });
};

*/
/////////////////////////////////////////
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

*/
        

