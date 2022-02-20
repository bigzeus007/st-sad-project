import React from "react";
import ReactDOM from "react-dom";
import Card from "../flipCard/FlipCard";
import ToDo from "../genericComponents/ToDo";
import Carousel from './Carousel';
import styles from "./MyCarousel.module.css";


export default function MyCarousel(){
    
    const items = [89, 39, 887, 'four', 'five']

    const setting = {
      dragSpeed: 1.25,
      itemWidth: 300,
      itemHeight: 500,
      itemSideOffsets: 15,
    }

    const itemStyle = {
      width: `${setting.itemWidth}px`,
      height: `${setting.itemHeight}px`,
      margin: `0px ${setting.itemSideOffsets}px`
    }

    return(
      <div >
       
        <Carousel _data={items} {...setting}>
          {
            items.map((i, _i) => (
              <div
                key={_i}
               
                style={{ ...itemStyle }}>
                <ToDo ></ToDo>
              </div>
            ))
          }
        </Carousel>
      </div>
    )
}

