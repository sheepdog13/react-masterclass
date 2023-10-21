import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import SideComp from "components/SideComp";
import CoinContComp from "components/CoinContComp";
import ChartContComp from "components/ChartContComp";
import { isDarkAtom } from "atom";
import { useRecoilValue } from "recoil";

const Wrap = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.bgColor};
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 40px 20px;
  margin-left: 20vw;
  flex: 1 1 0%;
`;
const HomeBtn = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color};
  color: white;
  font-size: 15px;
  &:hover {
    background-color: white;
    color: ${(props) => props.theme.sideBarColor};
  }
`;

function Coin() {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <Wrap>
      <SideComp />
      <ContentBox>
        <Link to="/">
          <HomeBtn color={isDark ? "#1d1f33" : "#173582"}>
            <FontAwesomeIcon icon={faHouse} />
          </HomeBtn>
        </Link>
        <CoinContComp />
        <ChartContComp />
      </ContentBox>
    </Wrap>
  );
}
export default Coin;
