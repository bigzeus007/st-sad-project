import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";



import { db } from "../../../firebase";



// import required modules
import { Grid, Pagination } from "swiper";
import styled from "styled-components";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import CarInSwiper from "../../commun/genericComponents/CarInSwiper";




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
.carPhoto{
    
    position:absolute;
    z-index:-1;
    left:0vw;
    top:4vh;
    height:37vh;
    width:100%;

}
.mySwiper{
    
}

.swiper {
  width: 100%;
  height: 100%;
  border-radius:30vw;
  margin-left: auto;
  margin-right: auto;
}
button{
    position:absolute;
    top:36vh;
    color:green;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background:#fff;
  height: calc((100% - 30px) / 2) !important;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

`

export default function ChefAtelierSwip() {
    const [carsList, setCarsList] = useState([]);
    const carsRef = collection(db, "cars");
    const myParking = query(carsRef, where("whereIsTheCar", "==", "Parking-E"),where("restitutionTime", "!=", ""));
    useEffect(
        () =>
          onSnapshot(myParking, (snapshot) =>
            setCarsList(snapshot.docs.map((doc) => doc.data()))
          ),
    
        []
      );
  return (
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
        // <button
        //   key={car.customerName}
        //   disabled={car.restitutionTime==""}
        //   style={{ width: "20vw", heigth: "100%",background:`${car.restitutionTime==""?"pink":"green"}`,opacity:`${car.restitutionTime==""?"70%":"100%"}`,color:`${car.restitutionTime==""?"blue":"black"}`}}
        //   onClick={(e) => {
        //     // handlCarToModify(car, e);
        //   }}
        // >
          <SwiperSlide>
              <CarInSwiper key={car.customerName} props={car}></CarInSwiper>
          </SwiperSlide>
        // {/* </button> */}
      ))}
      </Swiper>
    </SwiperStyle>
  );
}
