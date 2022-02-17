import React, { useState, useEffect, useRef } from "react";
import styles from "./Carousel.module.css";
import img1 from "./1.jpeg";
import img2 from "./2.jpeg";
import img3 from "./3.jpeg";
import img4 from "./4.jpeg";

//useRef에 대해 더 공부하고 내일 carousel 끝내기!

function Carousel() {
  const [배너, 배너변경] = useState([img1, img2, img3, img4]);
  const [현재슬라이드, 현재슬라이드변경] = useState(0);
  const [width, setWidth] = useState(0);
  const [x, x변경] = useState(0);
  const bannerWidthRef = useRef();
  const countRef = useRef(1);

  const prevSlide = () => {
    if (현재슬라이드 > 0) {
      현재슬라이드변경(현재슬라이드 - 1);
    } else {
      현재슬라이드변경(배너.length - 1);
    }
    console.log(현재슬라이드);
  };
  const nextSlide = () => {
    if (현재슬라이드 < 3) {
      현재슬라이드변경(현재슬라이드 + 1);
    } else {
      현재슬라이드변경(0);
    }
  };

  useEffect(() => {
    setWidth(-bannerWidthRef.current.offsetWidth);
  }, [현재슬라이드]);

  return (
    <div className={styles.container}>
      <div
        ref={bannerWidthRef}
        style={{
          transform: `translateX(${width * 현재슬라이드}px)`,
        }}
        className={styles.slideContainer}
      >
        <div>
          <h1>11111111</h1>
          <img className={styles.banner} src={배너[0]}></img>
        </div>
        <div>
          <h1>22222222</h1>
          <img className={styles.banner} src={배너[1]}></img>
        </div>
        <div>
          <h1>33333333333</h1>
          <img className={styles.banner} src={배너[2]}></img>
        </div>
        <div>
          <h1>44444444</h1>
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
