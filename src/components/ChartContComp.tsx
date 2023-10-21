import { faChartLine, faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import styled from "styled-components";
import ChartComp from "./ChartComp";
import { inherits } from "util";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "atom";

interface RouteParams {
  coinId: string;
  type: string;
  day: string;
}

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
  background-color: ${(props) => props.theme.secondColor};
  padding: 8px;
  border-radius: 8px;
`;

const Btn = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 400;
  background-color: ${(props) =>
    props.isActive ? props.theme.sideBarColor : props.theme.secondColor};
  height: 36px;
  padding: 8px;
  border-radius: 10px;
  border-width: thick;
  color: ${(props) => (props.isActive ? "white" : "#9da2b4")};
  &:hover {
    color: ${(props) => (props.isActive ? "none" : "white")};
  }
`;

function ChartContComp() {
  const chartMatch = useRouteMatch("/:coinId/chart");
  const candleMatch = useRouteMatch("/:coinId/candle");
  const { coinId } = useParams<RouteParams>();
  const { day } = useParams<RouteParams>();
  const { type } = useParams<RouteParams>();
  return (
    <Warp>
      <NavBox>
        <BtnBox>
          <Btn isActive={chartMatch !== null}>
            <Link to={`/${coinId}/chart/${day}`}>
              <FontAwesomeIcon icon={faChartLine} />
            </Link>
          </Btn>
          <Btn isActive={candleMatch !== null}>
            <Link to={`/${coinId}/candle/${day}`}>
              <FontAwesomeIcon icon={faChartSimple} />
            </Link>
          </Btn>
        </BtnBox>
        <BtnBox>
          <Btn isActive={day === "1" ? true : false}>
            <Link to={`/${coinId}/${type}/1`}>1D</Link>
          </Btn>
          <Btn isActive={day === "7" ? true : false}>
            <Link to={`/${coinId}/${type}/7`}>1W</Link>
          </Btn>
          <Btn isActive={day === "30" ? true : false}>
            <Link to={`/${coinId}/${type}/30`}>1M</Link>
          </Btn>
          <Btn isActive={day === "365" ? true : false}>
            <Link to={`/${coinId}/${type}/365`}>1Y</Link>
          </Btn>
          <Btn isActive={day === "max" ? true : false}>
            <Link to={`/${coinId}/${type}/max`}>ALL</Link>
          </Btn>
        </BtnBox>
      </NavBox>
      <Switch>
        <Route path={`/:coinId/chart/:day`}>
          <ChartComp coinId={coinId} isLine={true} day={day} />
        </Route>
        <Route path={`/:coinId/candle/:day`}>
          <ChartComp coinId={coinId} isLine={false} day={day} />
        </Route>
      </Switch>
    </Warp>
  );
}

export default ChartContComp;
