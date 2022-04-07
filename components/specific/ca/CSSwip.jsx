import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { db } from "../../commun/genericComponents/firebase";
// import required modules
import { Grid, Pagination } from "swiper";
import styled from "styled-components";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import CarInSwiper from "../../commun/genericComponents/CarInSwiper";
import { useDispatch, useSelector } from "react-redux";
import { carModification } from "../../../src/userReducer";
import CarToAffect from "../../commun/genericComponents/CarToAffect";
import CarToChangeByCPRV from "../../commun/genericComponents/CarToChangeByCPRV";
import CarToChangeByCs from "../../commun/genericComponents/CarToChangeByCs";

const SwiperStyle = styled.div`
  position: relative;
  height: 100%;

  body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
  }
  .cardInfos {
    position: absolute;
    top: 0;
  }
  .masterCard {
    color: white;
  }
  .rdvFixedIcon {
    position: absolute;
    font-size: 1vw;
    color: white;
    padding-top: 0.8vw;
    padding-left: 0.5vw;
    height: 3vw;
    width: 3vw;
    bottom: 6vw;
    right: 3vw;
    border-radius: 50%;
    background-color: #4088cc;
    z-index: 1;
  }
  .carPhoto {
    position: absolute;
    z-index: -1;
    left: 0vw;
    top: 0vh;
    height: 37vh;
    width: 100%;
  }
  .iconList {
    position: absolute;
    display: flex;
    flex-direction: column;
    float: right;
    right: 0px;
    top: 0px;
  }

  .mySwiper {
  }

  .swiper {
    width: 100%;
    height: 100%;
    /* border-radius:30vw; */
    margin-left: auto;
    margin-right: auto;
  }
  button {
    position: absolute;
    top: 36vh;
    color: green;
  }

  .swiper-slide {
    /* text-align: left; */
    font-size: 1.2vw;
    padding-left: 1vw;

    height: calc((100% - 30px) / 2) !important;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: left;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .icon {
    width: 3vw;
    background-color: transparent;
    opacity: 0.5;
  }
`;

export default function CSSwip({user}) {
  const [carsList, setCarsList] = useState([]);
  const carsRef = collection(db, "cars");
  const myParking = query(
    carsRef,
    where("serviceAdvisor", "==", `${user.nom}`),
    where("restitutionTime", "==", "")
  );
  useEffect(
    () =>
      onSnapshot(myParking, (snapshot) =>
        setCarsList(snapshot.docs.map((doc) => doc.data()))
      )
  );

  const dispatch = useDispatch();
  const toModifyStatus = useSelector(
    (state) => state.userOptions.carToModifyStatus
  );

  const [toModify, setTomodify] = useState("");

  const handlCarToModify = (car, e) => {
    setTomodify(car);
    dispatch(carModification());
    console.log("here i am");
  };

  return toModifyStatus ? (
    <CarToChangeByCs props={toModify}></CarToChangeByCs>
  ) : (
    <SwiperStyle>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {carsList.map((car) => (
          <SwiperSlide key={car.customerName}>
            <div
              className=""
              key={car.customerName}
              // disabled={car.restitutionTime == ""}
              style={{ height: "auto", width: "auto" }}
              onClick={(e) => {
                handlCarToModify(car, e);
              }}
            >
              <CarInSwiper key={car.customerName} props={car}></CarInSwiper>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperStyle>
  );
}
