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
  symbol: string;
  image: {
    small: string;
  };
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

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 20px 40px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.cardBgColor};
`;

const RankNameBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
`;

const Rank = styled.span`
  padding: 8px 12px;
  background-color: #202740;
  border-radius: 4px;
  &:first-child {
    margin-right: 10px;
  }
`;

const ImgPriceBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
  height: 12vh;
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
`;

const Name = styled.h1`
  font-size: 36px;
  color: ${(props) => props.theme.textColor};
`;

const Price = styled.span`
  font-size: 36px;
  color: ${(props) => props.color};
`;
function CoinContComp() {
  const { coinId } = useParams<RouteParams>();
  const { isLoading: infoIsLoading, data: infoData } = useQuery<InfoData>(
    ["info", coinId],
    () => fetchCoinInfo(coinId)
  );
  console.log(infoData?.market_data.ath_change_percentage.usd);
  return (
    <>
      {infoIsLoading ? (
        <>loadingComp</>
      ) : (
        <>
          <InfoBox>
            <RankNameBox>
              <Rank>Rank # {infoData?.market_cap_rank + ""}</Rank>
              <Rank>{infoData?.symbol.toUpperCase() + ""}</Rank>
            </RankNameBox>
            <ImgPriceBox>
              <Img src={infoData?.image.small} />
              <Name>{infoData?.name}</Name>
              <Price
                color={
                  !!infoData?.market_data.ath_change_percentage.usd
                    ? "#52B455"
                    : "#DC4F45"
                }
              >
                $ {infoData?.market_data.current_price.usd.toLocaleString()}
              </Price>
            </ImgPriceBox>
          </InfoBox>
        </>
      )}
    </>
  );
}
export default CoinContComp;
