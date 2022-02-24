import React from "react";
import Td from "./Td";

function Tr({ info, handleRemove }) {
  return (
    <tbody>
      {info.map((item) => {
        return <Td key={item.id} item={item} handleRemove={handleRemove}></Td>;
      })}
    </tbody>
  );
}

//딜리트 버튼을 누르면. 딜리트 버튼 녀석의 id를.
//useState info에서 제거한다.
/*  info[i].id !== item.id */

export default Tr;
