import React from "react";
import Td from "./Td.js";

function Tr({ info, handleRemove }) {
  return (
    <tbody>
      {info.map((item, i) => {
        return <Td key={item.id} item={item} handleRemove={handleRemove}></Td>;
      })}
    </tbody>
  );
}

export default Tr;
