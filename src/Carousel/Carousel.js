import React, { useState, useEffect, useRef } from "react";
import styles from "./Carousel.module.css";
import img1 from "./1.jpeg";
import img2 from "./2.jpeg";
import img3 from "./3.jpeg";
import img4 from "./4.jpeg";

//useRef에 대해 더 공부하고 내일 carousel 끝내기!

function Carousel() {
  let [배너, 배너변경] = useState([img1, img2, img3, img4]);
  let [현재슬라이드, 현재슬라이드변경] = useState(0);
  let [x, x변경] = useState(0);
  let 초기값 = -100;
  let countRef = useRef(null);
  let totalSlides = 배너.length;

  function prevSlide() {
    x변경(100);
    초기값 += 100;
    return 초기값;
  }
  function nextSlide() {
    x변경(초기값);
    초기값 -= 100;
    console.log(초기값);
    return 초기값;
  }

  return (
    <div className={styles.container}>
      <div
        style={{ transform: `translateX(${x}%)` }}
        className={styles.slideContainer}
      >
        <div>
          <img className={styles.banner} src={배너[0]}></img>
        </div>
        <div>
          <img className={styles.banner} src={배너[1]}></img>
        </div>
        <div>
          <img className={styles.banner} src={배너[2]}></img>
        </div>
        <div>
          <img className={styles.banner} src={배너[3]}></img>
        </div>
      </div>
      <button onClick={prevSlide} className={styles.btn}>
        Previous Slide
      </button>
      <button onClick={nextSlide} className={styles.btn}>
        Next Slide
      </button>
    </div>
  );
}

export default Carousel;
