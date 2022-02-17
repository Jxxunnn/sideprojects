import React, { useState, useMemo } from "react";
import "./App.css";
import Carousel from "./Carousel/Carousel";

const hardCalculate = (number) => {
  console.log("어려운 계산");
  for (let i = 0; i < 999999999; i++) {}
  return number + 10000;
};

const easyCalculate = (number) => {
  console.log("쉬운 계산");
  return number + 1;
};

function App() {
  const [hardNumber, setHardNumber] = useState(1);
  /*  const hardSum = hardCalculate(hardNumber); */
  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber);
  }, [hardNumber]);
  const [easyNumber, setEasyNumber] = useState(1);
  const easySum = easyCalculate(easyNumber);

  return (
    <div className="App">
      <div>
        <h3>어려운 계산기</h3>
        <input
          type="number"
          value={hardNumber}
          onChange={(e) => {
            setHardNumber(e.target.value);
          }}
        ></input>
        <span> + 10000 = {hardSum}</span>
        <h3>쉬운 계산기</h3>
        <input
          type="number"
          value={easyNumber}
          onChange={(e) => {
            setEasyNumber(e.target.value);
          }}
        ></input>
        <span> + 10000 = {easySum}</span>
      </div>
    </div>
  );
}

export default App;
