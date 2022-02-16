import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./RollingBanner.css";
import img1 from "./1.jpeg";
import img2 from "./2.jpeg";
import img3 from "./3.jpeg";
import img4 from "./4.jpeg";

function RollingBanner() {
  let [버튼표시, 버튼표시변경] = useState(true);
  let [배너이미지, 배너이미지변경] = useState(0);
  let bannerArray = [img1, img2, img3, img4];
  let history = useNavigate();

  // useEffect(() => {
  //   let timer = setInterval(() => {
  //     if (배너이미지 < 3) {
  //       배너이미지변경(배너이미지++);
  //     } else {
  //       배너이미지변경(0);
  //     }
  //     console.log(배너이미지);
  //   });
  // }, []);

  return (
    <div
      className="banner"
      onMouseOver={() => {
        버튼표시변경(true);
      }}
      onMouseLeave={() => {
        버튼표시변경(false);
      }}
      style={{ backgroundImage: `url(${bannerArray[배너이미지]})` }}
      onClick={(e) => {
        history(`/${배너이미지}`);
        console.log(e.target);
        console.log(e.currentTarget);
      }}
    >
      <h1>롤링 배너 만들기</h1>

      {버튼표시 === true && (
        <div className="btn-box">
          <button
            type="button"
            className="btn-left"
            onClick={(e) => {
              if (배너이미지 > 0) {
                배너이미지변경(배너이미지--);
              }
              console.log(e);

              console.log(배너이미지);
            }}
          >
            ◀
          </button>
          <button
            type="button"
            className="btn-right"
            onClick={(e) => {
              배너이미지변경(배너이미지++);
              console.log(배너이미지);
              console.log(e);
            }}
          >
            ▶
          </button>
        </div>
      )}
      <h1>{`(${배너이미지 + 1}/4)`}</h1>
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
