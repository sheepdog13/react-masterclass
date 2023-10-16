import { fetchCoinInfo } from "api";
import { info } from "console";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";

interface RouteParams {
  coinId: string;
}

interface InfoData {
  id: string;
  name: string;
  market_cap_rank: Number;
  market_data: {
    current_price: {
      usd: Number;
    };
    ath_change_percentage: {
      usd: Number;
    };
  };
  description: {
    en: string;
  };
}

const ContBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.cardBgColor};
`;

const RankNameBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const RankBox = styled.div`
  width: 30px;
  height: 15px;
  background-color: ${(props) => props.theme.cardBgColor};
`;

function CoinCont() {
  const { coinId } = useParams<RouteParams>();
  const { isLoading: infoIsLoading, data: infoData } = useQuery<InfoData>(
    ["info", coinId],
    () => fetchCoinInfo(coinId)
  );
  return (
    <>
      {infoIsLoading ? (
        <>loadingComp</>
      ) : (
        <>
          <ContBox>
            <RankNameBox>
              <RankBox>
                <span>Rank # {infoData?.market_cap_rank + ""}</span>
                <span>{infoData?.name + ""}</span>
              </RankBox>
            </RankNameBox>
          </ContBox>
        </>
      )}
    </>
  );
}
export default CoinCont;
