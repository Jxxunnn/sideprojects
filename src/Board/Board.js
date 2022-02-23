import axios from "axios";
import React, { useEffect, useState } from "react";
import Tr from "./Tr";

function Board() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setInfo(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleRemove = (id) => {
    setInfo((info) => info.filter((item) => item.id !== id));
  };

  return (
    <div className="container max-w-screen-lg mx-auto">
      <div className="text-xl font-bold mt-5 mb-3 text-center">
        고객 정보 리스트
      </div>
      <table className="min-w-full table-auto text-gray-800">
        <thead className="justify-between">
          <tr className="bg-gray-800">
            <th className="text-gray-300 px-4 py-3">Id.</th>
            <th className="text-gray-300 px-4 py-3">Name</th>
            <th className="text-gray-300 px-4 py-3">Email</th>
            <th className="text-gray-300 px-4 py-3">Phone No.</th>
            <th className="text-gray-300 px-4 py-3">Website</th>
            <th className="text-gray-300 px-4 py-3">Edit</th>
            <th className="text-gray-300 px-4 py-3">Delete</th>
          </tr>
        </thead>
        <Tr info={info} handleRemove={handleRemove}></Tr>
      </table>
    </div>
  );
}

export default Board;

// tailwind 사용법도 좀 익히고
// CRUD 차근차근 먼저 해본 다음에 따라해보자.
// 먼저 데이터 받아오고 기본화면 만들고 삭제 기능 부터.
