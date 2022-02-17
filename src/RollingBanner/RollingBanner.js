/* eslint-disable */

import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RollingBanner.module.css";
import img1 from "./1.jpeg";
import img2 from "./2.jpeg";
import img3 from "./3.jpeg";
import img4 from "./4.jpeg";

function RollingBanner() {
  let [버튼표시, 버튼표시변경] = useState(false);
  let [몇번째, 몇번째변경] = useState(0);
  let [배너이미지, 배너이미지변경] = useState([img1, img2, img3, img4]);
  let timer;

  /*  useEffect(() => {
    timer = setInterval(changeImgRight, 2000);
  }, []);
  clearInterval(timer); */

  function changeImgLeft() {
    if (몇번째 < 0) {
      몇번째변경(3);
    } else {
      몇번째변경(몇번째--);
    }
    console.log(몇번째);
  }

  function changeImgRight() {
    if (몇번째 > 3) {
      몇번째변경(0);
    } else {
      몇번째변경(몇번째++);
    }
    console.log(몇번째);
  }

  return (
    <div className={styles.container}>
      <div
        className={styles.banner}
        style={{ backgroundImage: `url(${배너이미지[몇번째]})` }}
        onMouseOver={() => {
          버튼표시변경(true);
        }}
        onMouseLeave={() => {
          버튼표시변경(false);
        }}
      >
        <h1>롤링 배너 만들기</h1>
        <h3>{`(${몇번째 + 1}/4)`}</h3>
        {버튼표시 == true ? (
          <>
            <button onClick={changeImgLeft} className={styles.left}>
              ◀
            </button>
            <button onClick={changeImgRight} className={styles.right}>
              ▶
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
}

/* 
1. 배너 슬라이드가 일정 시간 초마다 스스로 넘어가기
2. 배너 슬라이드 화살표 버튼 누를시 이전으로 혹은 다음으로 넘어가기
3. 배너 슬라이드 화살표가 배너에 마우스가 hover 되었을시 등장하기.
4. 배너 슬라이드 클릭시 해당 이벤트 혹은 사이트로 이동하기
 */

export default RollingBanner;
