import React from "react";
import ReactDOM from "react-dom";
import Card from "../flipCard/FlipCard";
import Carousel from './Carousel';
import styles from "./MyCarousel.module.css";


export default function MyCarousel(){
    
    const items = [89, 39, 887, 'four', 'five']

    const setting = {
      dragSpeed: 1.25,
      itemWidth: 300,
      itemHeight: 180,
      itemSideOffsets: 15,
    }

    const itemStyle = {
      width: `${setting.itemWidth}px`,
      height: `${setting.itemHeight}px`,
      margin: `0px ${setting.itemSideOffsets}px`
    }

    return(
      <div className={styles.container}>
        <h1>Drag the carousel along the x-axies...</h1>
        <Carousel _data={items} {...setting}>
          {
            items.map((i, _i) => (
              <div
                key={_i}
                className={styles.item}
                style={{ ...itemStyle }}>
                <Card ></Card>
              </div>
            ))
          }
        </Carousel>
      </div>
    )
}

