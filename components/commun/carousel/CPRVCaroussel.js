import ToDo from "../genericComponents/ToDo";
import Carousel from "./Carousel";
import MyIcons from "../../../src/images";

// import styles from "./MyCarousel.module.css";
import React, { useEffect, useState } from "react";
// import { techList } from "../../commun/flipCard/techList";
// import { getAuth } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { carModification } from "../../../src/userReducer";
// import { TechZone } from "../../../styles/TechZone";
import { db } from "../../../firebase";

import {
  collection,
  // doc,
  onSnapshot,
  query,
  where,
  // getDoc,
  // getDocs,
  // FieldPath,
} from "firebase/firestore";
import CustomerWithoutCs from "../MainCar/CustomerWithoutCs";
import { TechZone } from "../../../styles/TechZone";
// import { getStorage, ref} from "firebase/storage";
// import CustomerWithoutCs from "../../commun/MainCar/CustomerWithoutCs";
// import { async } from "@firebase/util";
// import CarToChange from "../../commun/genericComponents/CarToChange";
import CarToChangeByCs from "../genericComponents/CarToChangeByCs";
import CarToChangeByCPRV from "../genericComponents/CarToChangeByCPRV";

export default function CPRVCaroussel({ user }) {
  const [isLoadin, setIsLoading] = useState(false);
  const [carsList, setCarsList] = useState([]);

  // const getUser = getAuth().currentUser;

  // function checkProfilTech(checking) {
  //   return checking.email === getUser.email;
  // }
  // const user = techList.find(checkProfilTech);
  const carsRef = collection(db, "cars");
  const myParking = query(
    carsRef,
    where("serviceAdvisor", "==", ""),
  );

  useEffect(
    () =>
      onSnapshot(myParking, (snapshot) =>
        setCarsList(snapshot.docs.map((doc) => doc.data()))
      ),

    []
  );
  
  console.log(carsList)

  function checkParkTech(checking) {
    return checking.affectationChefAtelier.includes(`${user.nom}`);
  }

  // const parkPisteur = props.filter(checkParkTech)

  const dispatch = useDispatch();
  const toModifyStatus = useSelector(
    (state) => state.userOptions.carToModifyStatus
  );

  const [toModify, setTomodify] = useState("");

  const handlCarToModify = (car) => {
    setTomodify(car);
    dispatch(carModification());
  };

  const items = carsList;

  const setting = {
    dragSpeed: 1.25,
    itemWidth: 300,
    itemHeight: 500,
    itemSideOffsets: 15,
  };

  const itemStyle = {
    width: `${setting.itemWidth}px`,
    height: `${setting.itemHeight}px`,
    margin: `0px ${setting.itemSideOffsets}px`,
  };

  

  return toModifyStatus ? (
    <>
      <CarToChangeByCPRV props={toModify}></CarToChangeByCPRV>
      
    </>
  ) : (
    <TechZone>
      <Carousel _data={items} {...setting}>
        {carsList.map((car) => (
          <div
            key={car.customerName}
            className={car.rdvTimeFixed ? "carCard rdv" : "carCard srdv"}
          >
            <button
              className="PhotoButton"
              onClick={() => {
                handlCarToModify(car);
              }}
            >
              <CustomerWithoutCs
                key={car.customerName}
                props={car}
              ></CustomerWithoutCs>
            </button>
          </div>
        ))}
      </Carousel>
    </TechZone>
  );
}
