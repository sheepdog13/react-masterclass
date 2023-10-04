import Circle from "Circle";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "theme";
import Router from "Router";
import React, { useState } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { ReactQueryDevtools } from "react-query/devtools";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "atom";
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

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400&display=swap');
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
      display: none;
  }
  body {
    line-height: 1;
  }
  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  *{
    box-sizing: border-box;
  }
  body {
    font-family: 'Noto Sans', sans-serif;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  `;
function App() {
  /* const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", value); 
  }; */
  const isDark = useRecoilValue(isDarkAtom);
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
      {/* <Container>
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
      </form> */}{" "}
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Router />
        <ReactQueryDevtools initialIsOpen={true} />{" "}
      </ThemeProvider>
    </>
  );
}

export default App;
