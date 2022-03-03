/* eslint-disable */

import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

import Tr from "./Tr";
import Post from "./Post";
import Modal from "./Modal";

function Board() {
  const [info, setInfo] = useState([]);
  let nextId = useRef(11);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setInfo(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleRemove = (clickedId) => {
    setInfo(info.filter((item) => item.id !== clickedId));
  };

  const handleSave = (data) => {
    setInfo((prev) => {
      return [
        ...prev,
        {
          id: nextId.current,
          name: data.name,
          email: data.email,
          phone: data.phone,
          website: data.website,
        },
      ];
    });
    nextId.current += 1;
  };

  return (
    <div>
      <div className="text-2xl font-extrabold mt-3 mb-5">고객 정보 리스트</div>
      <table>
        <thead>
          <tr>
            <th>Id.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone No.</th>
            <th>Website</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <Tr info={info} handleRemove={handleRemove}></Tr>
      </table>
      <Post onSaveData={handleSave}></Post>
      <Modal></Modal>
    </div>
  );
}

export default Board;
