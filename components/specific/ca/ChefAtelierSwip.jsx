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
import { useDispatch, useSelector } from "react-redux";
import { carModification } from "../../../src/userReducer";
import CarToAffect from "../../commun/genericComponents/CarToAffect";




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
.rdvFixedIcon{
    position:absolute;
    font-size:1vw;
    color:red;
    padding-top:0.8vw;
    height:3vw;
    width:3vw;
    bottom:0vw;
    right:0vw;
    border-radius:50%;
    background-color:yellow;
    z-index:10;
    
    
}
.carPhoto{
    
    position:absolute;
    z-index:-1;
    left:0vw;
    top:0vh;
    height:37vh;
    width:100%;

}
.iconList{
    position:absolute;
    display:flex;
    flex-direction:column;
    float:right;
    right:0px;
    top:0px;
}
icon{
    width:auto;
}
.mySwiper{
    
}

.swiper {
  width: 100%;
  height: 100%;
  /* border-radius:30vw; */
  margin-left: auto;
  margin-right: auto;
}
button{
    position:absolute;
    top:36vh;
    color:green;
}

.swiper-slide {
    
  text-align: left;
  font-size: 1.2vw;

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

`

export default function ChefAtelierSwip() {
    const [carsList, setCarsList] = useState([]);
    const carsRef = collection(db, "cars");
    const myParking = query(carsRef, where("whereIsTheCar", "==", "Parking-E"));
    useEffect(
        () =>
          onSnapshot(myParking, (snapshot) =>
            setCarsList(snapshot.docs.map((doc) => doc.data()))
          ),
    
        []
      );





      const dispatch = useDispatch();
      const toModifyStatus = useSelector(
        (state) => state.userOptions.carToModifyStatus
      );
    


      const [toModify, setTomodify] = useState("");

      const handlCarToModify = (car, e) => {
        setTomodify(car);
        dispatch(carModification());
        console.log("here i am")
      };

  return (
    toModifyStatus ? (     
        <CarToAffect props={toModify}></CarToAffect>
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
              <button
              
          key={car.customerName}
          disabled={car.restitutionTime==""}
          style={{height:"3vw",width:"6vw"}}
          onClick={(e) => {
            handlCarToModify(car, e);
          }}
        ></button>
              <CarInSwiper key={car.customerName} props={car}></CarInSwiper>
              
          </SwiperSlide>
        
      ))}
      </Swiper>
    </SwiperStyle>
  ))
}
