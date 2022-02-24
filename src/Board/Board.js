import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import Tr from "./Tr";
import Post from "./Post";
import Modal from "./Modal";

function Board() {
  const [info, setInfo] = useState([]);
  const [selected, setSelected] = useState("");
  const [modalOn, setModalOn] = useState(false);

  const nextId = useRef(11);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setInfo(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSave = (data) => {
    if (data.id) {
      setInfo(
        info.map((row) =>
          data.id === row.id
            ? {
                id: data.id,
                name: data.name,
                email: data.email,
                phone: data.phone,
                website: data.website,
              }
            : row
        )
      );
    } else {
      setInfo((info) =>
        info.concat({
          id: nextId.current,
          name: data.name,
          email: data.email,
          phone: data.phone,
          website: data.website,
        })
      );
      nextId.current += 1;
    }
  };

  const handleRemove = (id) => {
    setInfo((info) => info.filter((data) => data.id !== id));
  };

  const handleEdit = (item) => {
    setModalOn(true);
    const selectedData = {
      id: item.id,
      name: item.name,
      email: item.email,
      phone: item.phone,
      website: item.website,
    };
    console.log(selectedData);
    setSelected(selectedData);
  };

  const handleCancel = () => {
    setModalOn(false);
  };

  const handleEditSubmit = (item) => {
    console.log(item);
    handleSave(item);
    setModalOn(false);
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
        <Tr
          info={info}
          handleRemove={handleRemove}
          handleEdit={handleEdit}
        ></Tr>
      </table>
      <Post onSaveData={handleSave}></Post>
      {modalOn && (
        <Modal
          selectedData={selected}
          handleCancel={handleCancel}
          handleEditSubmit={handleEditSubmit}
        ></Modal>
      )}
    </div>
  );
}

export default Board;

// tailwind 사용법도 좀 익히고
// CRUD 차근차근 먼저 해본 다음에 따라해보자.
// 먼저 데이터 받아오고 기본화면 만들고 삭제 기능 부터.

// item.id를 손쉽게 받아오기 위해서 하위컴포넌트를 만든 것이었구나!
// 다음으로 데이터 추가하기.

// 다음으로 수정 기능.
// 버튼을 누르면 input text 네 개의 모달 창을 띄운다.
//
