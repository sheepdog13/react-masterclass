import Circle from "Circle";
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
/*
const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Text = styled.span`
  color: white;
`;

// Box의 style을 상속받는다.
const Circle = styled(Box)`
  border-radius: 50px;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

// 속성 attribute를 설정할 수도 있다.
const Input = styled.input.attrs({ required: true })`
  background-color: tomato;
`;
*/

const Wrapper = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    border-radius: 100px;

  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;

  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 100px;
  width: 100px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  // 박스안의 span을 선택할 수 있다
  /* span */
  // styled component를 선택할 수 있다.
  ${Emoji} {
    // span을 hover했을때 span:hover를 쓸수 있지만 &:hover가 shortcut이다.
    &:hover {
      font-size: 96px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

const Title = styled.h1`
  // theme의 textColor를 가져온 모습이다.
  color: ${(props) => props.theme.textColor};
`;
const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", value);
  };

  return (
    // <Father>
    //   <Box bgColor="teal" />
    //   <Circle bgColor="tomato" />
    //   <Btn>Log in</Btn>
    //   {/* html 태그만 바꾸고 싶을때 as prop를 사용한다 */}
    //   <Btn as="a" href="/login">
    //     a태그 Log in
    //   </Btn>
    // </Father>
    // <Wrapper>
    //   <Title>제목</Title>
    //   <Box>
    //     <Emoji as="p">😃</Emoji>
    //   </Box>
    // </Wrapper>
    <>
      {/* <Circle bgColor="teal" borderColor="yellow" />
      <Circle bgColor="tomato" text="text" /> */}
      <Container>
        <H1>protected</H1>
      </Container>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={value}
          placeholder="username"
          onChange={onChange}
        />
        <button>Log in</button>
      </form>
    </>
  );
}

export default App;
