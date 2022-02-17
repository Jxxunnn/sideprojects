import React, { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  display: block;
  margin: 0 auto;
  margin-bottom: 10px;
  padding: 5px;
`;
const StyledButton = styled.button`
  display: block;
  margin: 0 auto;
  margin-bottom: 10px;
`;
const StyledDiv = styled.div``;

const StyledModal = styled.div``;

function Todos() {
  const [isModal, setIsModal] = useState(false);
  const [isLoginWindow, setIsLoginWindow] = useState(true);
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState(0);

  const showSignUpModal = () => {
    setIsModal(true);
    setIsLoginWindow(false);
  };
  const saveSignUpData = () => {
    localStorage.setItem("user");
  };

  return (
    <>
      {isLoginWindow === true && (
        <StyledDiv>
          <h1>todos and log-in</h1>
          <h2>ID 로그인</h2>
          <StyledInput type="text" placeholder="아이디"></StyledInput>
          <StyledInput type="password" placeholder="비밀번호"></StyledInput>
          <StyledButton>로그인</StyledButton>
          <StyledButton onClick={showSignUpModal}>회원가입</StyledButton>
        </StyledDiv>
      )}

      {isModal === true && (
        <StyledModal>
          <h1>회원 가입</h1>
          <StyledInput
            onChange={(e) => {
              setUserId(e.target.value);
            }}
            type="text"
            placeholder="새로운 아이디"
          ></StyledInput>
          <StyledInput
            onChange={(e) => {
              setUserPassword(e.target.value);
            }}
            type="password"
            placeholder="새로운 비밀번호"
          ></StyledInput>
          <StyledButton onClick={saveSignUpData}>확인</StyledButton>
          <button
            onClick={() => {
              setIsModal(false);
              setIsLoginWindow(true);
            }}
          >
            닫기
          </button>
        </StyledModal>
      )}
    </>
  );
}

export default Todos;

//로컬스토리지 이용한 로그인, 투두리스트 만들어보자!!

/* 회원가입 기능 구현가기.
1.회원가입 버튼 누르면 모달 창 띄워주자.
2.인풋에 넣어준 값을 로컬스토리지에 저장해주자.
(이 과정에서 이미 값이 저장되어있다면 알림창을 띄워주자.)  */

/* 로그인 기능 구현가기.
1.회원 정보를 로그인 창에 넣어, 로컬스토리지에 값이 있으면 
todo창으로 넘어가자.
2.만약 값이 없다면 알림창을 띄워주자. */

/* 인터넷에 로그인 기능 구현, 투두리스트 기능 구현한 코드 참고하여
답을 맞춰보자! */
