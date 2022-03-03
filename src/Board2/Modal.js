import React from "react";

function Modal() {
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-70">
      <div className="bg-white rounded shadow-lg w-10/12 md:w-1/3">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg">고객 정보 수정하기</h3>
          <span className="block">❌</span>
        </div>
        <form>
          <div className="p-3 text-left">
            <div>ID:3</div>
            <div>
              Name:
              <input className="border-2 border-gray-300" id="name"></input>
            </div>
            <div>
              Email:
              <input className="border-2 border-gray-300" id="name"></input>
            </div>
            <div>
              Phone:
              <input className="border-2 border-gray-300" id="name"></input>
            </div>
            <div>
              Website:
              <input className="border-2 border-gray-300" id="name"></input>
            </div>
            <div className="flex justify-end items-center w-100 border-t p-3">
              <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white mr-1">
                수정
              </button>
              <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white close-modal">
                취소
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
