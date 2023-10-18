import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  market_cap_rank: number;
  market_data: {
    current_price: {
      usd: number;
    };
    ath_change_percentage: {
      usd: number;
    };
    market_cap_change_percentage_24h_in_currency: {
      usd: number;
    };
    high_24h: {
      usd: number;
    };
    low_24h: {
      usd: number;
    };
    market_cap: {
      usd: number;
    };
    fully_diluted_valuation: {
      usd: number;
    };
    total_volume: {
      usd: number;
    };
    circulating_supply: number;
    max_supply: number;
    total_supply: number;
  };
  description: {
    en: string;
  };
}

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
const ImgNameBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
  margin-bottom: 5px;
`;

const Name = styled.h1`
  font-size: 36px;
  color: ${(props) => props.theme.textColor};
`;

const Price = styled.span`
  font-size: 36px;
  color: ${(props) => props.color};
`;

const Percent = styled.div`
  display: flex;
  font-size: 20px;
  color: white;
  background-color: ${(props) => props.color};
  padding: 6px 12px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  span:first-child {
    padding-right: 12px;
  }
`;

const PriceInfoCont = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 4px;
`;

const PriceInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  background-color: #151829;
`;

const High = styled.span`
  color: #52b455 !important;
`;

const Low = styled.span`
  color: #dc4f45 !important;
`;

const PriceInfoForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  span:first-child {
    font-size: 14px;
    color: #5b627b;
  }
  span:last-child {
    font-size: 18px;
    color: white;
  }
`;
function CoinContComp() {
  const { coinId } = useParams<RouteParams>();
  const { isLoading: infoIsLoading, data: infoData } = useQuery<InfoData>(
    ["info", coinId],
    () => fetchCoinInfo(coinId),
    {
      refetchInterval: 50000,
    }
  );
  console.log(infoData?.market_data);
  const changePercent = Number(
    infoData?.market_data.market_cap_change_percentage_24h_in_currency.usd
  );
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
              <ImgNameBox>
                <Img src={infoData?.image.small} />
                <Name>{infoData?.name}</Name>
              </ImgNameBox>
              <Price color={changePercent >= 0 ? "#52B455" : "#DC4F45"}>
                ${" "}
                {infoData?.market_data.current_price.usd.toLocaleString() ?? ""}
              </Price>
              <Percent color={changePercent >= 0 ? "#52B455" : "#DC4F45"}>
                <span>
                  {changePercent >= 0 ? (
                    <FontAwesomeIcon icon={faCaretUp} />
                  ) : (
                    <FontAwesomeIcon icon={faCaretDown} />
                  )}
                </span>
                <span>{changePercent.toFixed(2)}%</span>
              </Percent>
            </ImgPriceBox>
            <PriceInfoCont>
              <PriceInfoBox>
                <PriceInfoForm>
                  <span>High</span>
                  <High>
                    ${" "}
                    {infoData?.market_data.high_24h.usd.toLocaleString() ?? ""}
                  </High>
                </PriceInfoForm>
                <PriceInfoForm>
                  <span>Low</span>
                  <Low>
                    $ {infoData?.market_data.low_24h.usd.toLocaleString() ?? ""}
                  </Low>
                </PriceInfoForm>
              </PriceInfoBox>
              <PriceInfoBox>
                <PriceInfoForm>
                  <span>Market Cap</span>
                  <span>
                    {infoData?.market_data.market_cap.usd.toLocaleString() ??
                      ""}
                  </span>
                </PriceInfoForm>
                <PriceInfoForm>
                  <span>Fully Diluted Market Cap</span>
                  <span>
                    {infoData?.market_data.fully_diluted_valuation.usd.toLocaleString() ??
                      ""}
                  </span>
                </PriceInfoForm>
              </PriceInfoBox>
              <PriceInfoBox>
                <PriceInfoForm>
                  <span>Total Volume</span>
                  <span>
                    {infoData?.market_data.total_volume.usd.toLocaleString() ??
                      ""}
                  </span>
                </PriceInfoForm>
              </PriceInfoBox>
              <PriceInfoBox>
                <PriceInfoForm>
                  <span>Circulating Supply</span>
                  <span>
                    {infoData?.market_data.circulating_supply.toLocaleString() ??
                      ""}
                  </span>
                </PriceInfoForm>
                <PriceInfoForm>
                  <span>Max Supply</span>
                  <span>
                    {infoData?.market_data.max_supply === null
                      ? "N/a"
                      : infoData?.market_data.max_supply.toLocaleString()}
                  </span>
                </PriceInfoForm>
                <PriceInfoForm>
                  <span>Total Supply</span>
                  <span>
                    {infoData?.market_data.total_supply.toLocaleString() ?? ""}
                  </span>
                </PriceInfoForm>
              </PriceInfoBox>
            </PriceInfoCont>
          </InfoBox>
        </>
      )}
    </>
  );
}
export default CoinContComp;
