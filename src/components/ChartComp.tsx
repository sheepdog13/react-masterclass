import { faChartLine, faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Warp = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.cardBgColor};
  margin-top: 5px;
`;

const NavBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
`;

const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin: 8px 0px;
  background-color: #151829;
  padding: 8px;
  border-radius: 8px;
`;

const Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 400;
  background-color: rgb(21, 25, 42);
  height: 36px;
  padding: 8px;
  border-radius: 10px;
  border-width: thick;
  border-color: rgb(17, 19, 34);
  color: rgb(90, 97, 122);
`;

function ChartComp() {
  return (
    <Warp>
      <NavBox>
        <BtnBox>
          <Btn>
            <FontAwesomeIcon icon={faChartLine} />
          </Btn>
          <Btn>
            <FontAwesomeIcon icon={faChartSimple} />
          </Btn>
        </BtnBox>
        <BtnBox>
          <Btn>1D</Btn>
          <Btn>1W</Btn>
          <Btn>1M</Btn>
          <Btn>1Y</Btn>
          <Btn>ALL</Btn>
        </BtnBox>
      </NavBox>
    </Warp>
  );
}

export default ChartComp;
