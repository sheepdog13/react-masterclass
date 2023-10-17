import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchCoins, fetchConinsgecko } from "../api";
import { useRecoilState, useSetRecoilState } from "recoil";
import { isDarkAtom } from "atom";
import WelcomComp from "components/WelcomeComp";
import SideComp from "components/SideComp";

interface Icoin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: null;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: null;
  last_updated: string;
}
const Wrap = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.bgColor};
`;

const ContentBox = styled.div`
  width: 80%;
  margin-left: 20vw;
  padding: 20px;
`;

const ListTitleBox = styled.div`
  display: flex;
  margin-top: 10px;
  padding-left: 15px;
  height: 50px;
  background-color: ${(props) => props.theme.cardBgColor};
  span {
    display: flex;
    font-size: 20px;
    color: ${(props) => props.theme.textColor};
    align-items: center;
  }
`;

const CoinListBox = styled.div`
  margin-top: 4px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 4px;
`;
const Coin = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  padding: 20px;
  height: 150px;
  gap: 12px;
  background-color: ${(props) => props.theme.cardBgColor};
  color: ${(props) => props.theme.textColor};
  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
  }
`;

const CoinInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CoinImgNameBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const Img = styled.img`
  display: flex;
  width: 15px;
  height: 15px;
  margin-right: 5px;
  justify-content: center;
  align-items: center;
`;

const CurrentPrice = styled.h1`
  font-size: 20px;
  font-weight: 500;
`;

const PercentBox = styled.div`
  display: flex;
  gap: 5px;
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-end;
`;

const PriceChange = styled.span`
  text-align: right;
  font-size: 15px;
  color: #5a617a;
`;

const PercentChange = styled.span`
  text-align: right;
  font-size: 28px;
  color: ${(props) => props.color};
`;

function Coins() {
  const { isLoading, data } = useQuery<Icoin[]>("allCoins", fetchConinsgecko);
  return (
    <Wrap>
      {isLoading ? (
        <>LodingComp만들기</>
      ) : (
        <>
          <SideComp />
          <ContentBox>
            <WelcomComp />
            <ListTitleBox>
              <span>Coin List</span>
            </ListTitleBox>
            <CoinListBox>
              {data?.slice(0, 100).map((coin) => (
                <Link
                  to={{
                    pathname: `/${coin.id}`,
                    state: { name: coin.name },
                  }}
                >
                  <Coin key={coin.id}>
                    <CoinInfoBox>
                      <CoinImgNameBox>
                        <Img
                          src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                        />
                        <span>{coin.name} &rarr;</span>
                      </CoinImgNameBox>
                      <CurrentPrice>
                        $ {coin.current_price.toLocaleString()}
                      </CurrentPrice>
                    </CoinInfoBox>
                    <PercentBox>
                      <PriceChange>
                        {"$" + coin.price_change_24h.toFixed(6)}
                      </PriceChange>
                      <PercentChange
                        color={
                          coin.price_change_percentage_24h <= 0
                            ? "#DC4F45"
                            : "#52B455"
                        }
                      >
                        {coin.price_change_percentage_24h.toFixed(2) + " %"}
                      </PercentChange>
                    </PercentBox>
                  </Coin>
                </Link>
              ))}
            </CoinListBox>
          </ContentBox>
        </>
      )}
    </Wrap>
  );
}
export default Coins;
