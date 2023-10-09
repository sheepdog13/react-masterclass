import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchCoins } from "../api";
import { useRecoilState, useSetRecoilState } from "recoil";
import { isDarkAtom } from "atom";
import WelcomComp from "components/WelcomeComp";
import SideComp from "components/SideComp";
import CoinListComp from "components/CoinListComp";

interface Icoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
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
  height: 150px;
  padding: 20px;
  background-color: rgb(26, 32, 53);
  color: white;
  gap: 12px;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

function Coins() {
  const { isLoading, data } = useQuery<Icoin[]>("allCoins", fetchCoins);
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
                <Coin key={coin.id}>
                  <Link
                    to={{
                      pathname: `/${coin.id}`,
                      state: { name: coin.name },
                    }}
                  >
                    <Img
                      src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                    />
                    {coin.name} &rarr;
                  </Link>
                </Coin>
              ))}
            </CoinListBox>
          </ContentBox>
        </>
      )}
    </Wrap>
  );
}
export default Coins;
