import { collection, query, where, getDocs } from "firebase/firestore";

import { db } from "../components/commun/genericComponents/firebase";

const techsRef = query(
  collection(db, "users"),
  where("job", "==", "technicien")
);
const techListFb = [];
let onceDone=true;
function doItOnce(check){
  check?(getDocs(techsRef).then((techJob) => {
    techJob.docs.forEach((tech) => techListFb.push(tech.data()));
    check=false;
  })): check=false}

  doItOnce(onceDone)

export default techListFb;
