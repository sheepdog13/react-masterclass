import styled from "styled-components";

const WelcomContent = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  padding: 80px 100px;
  background-color: ${(props) => props.theme.cardBgColor};
`;
const WelTextBox = styled.div`
  padding-top: 50px;
  width: 50%;
  word-break: keep-all;
`;
const WelTitle = styled.span`
  font-size: 48px;
  font-weight: bold;
`;
const WelDesc = styled.p`
  padding-top: 20px;
  color: rgb(90, 97, 122);
`;

function WelcomeComp() {
  return (
    <>
      <WelcomContent>
        <WelTextBox>
          <WelTitle>
            Welcom to
            <br /> SHEEP FINANCE!
          </WelTitle>
          <WelDesc>
            Are you looking for crypto infos? <br /> SHEEP FINANCE provides you
            with real-time and up-to-date information on your favorite cryptos.
          </WelDesc>
        </WelTextBox>
      </WelcomContent>
    </>
  );
}
export default WelcomeComp;
