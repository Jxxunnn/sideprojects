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
const StyledBtnBox = styled.div`
  display: flex;
`;

const StyledModal = styled.div``;

function Todos() {
  //로그인 관련
  const [isModal, setIsModal] = useState(false);
  const [isLoginWindow, setIsLoginWindow] = useState(true);
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState(0);
  const [users, setUsers] = useState([]);
  const [isUser, setIsUser] = useState(false);

  //투두리스트 관련

  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [isTodo, setIsTodo] = useState(false);

  //투두리스트 관련 함수

  const paintTodo = () => {
    let array = [...todoList];
    array.push(todo);
    setTodoList(array);
    console.log(todoList);
  };

  //로그인 관련 함수

  const showSignUpModal = () => {
    setIsModal(true);
    setIsLoginWindow(false);
  };
  const saveSignUpData = () => {
    const array = [...users];
    array.push({ id: userId, password: userPassword });
    setUsers(array);
    console.log(users);
    localStorage.setItem("users", JSON.stringify(users));
    setUserId("");
    setUserPassword(0);
  };

  const logIn = () => {
    const myLocalStrage = JSON.parse(localStorage.getItem("users"));
    console.log(isUser);

    const found = myLocalStrage.find(
      (e) => e.id == userId && e.password == userPassword
    );

    if (found == undefined) {
      alert("로그인 실패");
    } else {
      setIsUser(true);
      alert(`환영합니다 ${userId}님!`);
    }
  };

  return (
    <>
      {isLoginWindow === true && isUser === false ? (
        <StyledDiv>
          <h1>todos</h1>
          <h2>ID 로그인</h2>
          <StyledInput
            onChange={(e) => {
              setUserId(e.target.value);
              console.log(userId);
            }}
            type="text"
            placeholder="아이디"
          ></StyledInput>
          <StyledInput
            onChange={(e) => {
              setUserPassword(e.target.value);
            }}
            type="password"
            placeholder="비밀번호"
            minlength="4"
          ></StyledInput>
          <StyledButton onClick={logIn}>로그인</StyledButton>
          <StyledButton onClick={showSignUpModal}>회원가입</StyledButton>
        </StyledDiv>
      ) : null}

      {isModal === true && (
        <StyledModal>
          <h1>회원 가입</h1>
          <StyledInput
            onChange={(e) => {
              setUserId(e.target.value);
              console.log(userId);
            }}
            type="text"
            placeholder="새로운 아이디"
          ></StyledInput>
          <StyledInput
            onChange={(e) => {
              setUserPassword(e.target.value);
              console.log(userPassword);
            }}
            type="password"
            placeholder="새로운 비밀번호"
            minlength="4"
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
      {isUser === true && (
        <>
          <h1>todos</h1>
          <input
            onKeyDown={(e) => {
              setTodo(e.target.value);
              if (e.key === "Enter") {
                paintTodo();
              }
            }}
            type="text"
            placeholder="What needs to be done?"
          ></input>
          <button onClick={paintTodo}>+</button>
          <ul>{isTodo === true && <h1>하이</h1>}</ul>
        </>
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

// 나중에 개선하고 싶은사항들.

/* 
1.새로고침 했을 때 로그인 창으로 안돌아가게 하기. useRef를 사용하면 딜 것 같다.
2.각 유저의 데이터 키를 user(i)로 주고, 투두 리스트를 오브젝트 안에 담으면 로그인 한 유저의
저장된 투두리스트를 보여줄 수 있을 것 같다.  */
