import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";
import { useRecoilState, useSetRecoilState } from "recoil";
import { isDarkAtom } from "atom";
import SideComp from "components/SideComp";

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
  margin: 0 auto;
  background-color: #191729;
`;

const ContentBox = styled.div`
  width: 80%;
  margin: 20px;
`;

const WelcomContent = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  padding: 80px 100px;
  background-color: #1d1f33;
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
const ListTitle = styled.div`
  margin-top: 10px;
  height: 50px;
  background-color: #1d1f33;
`;
const CoinListBox = styled.div`
  height: 1000px;
  margin-top: 5px;
  background-color: #1d1f33;
`;
function Coins() {
  const { isLoading, data } = useQuery<Icoin[]>("allCoins", fetchCoins);

  return (
    <Wrap>
      <SideComp />
      <ContentBox>
        <WelcomContent>
          <WelTextBox>
            <WelTitle>
              Welcom to
              <br /> SHEEP FINANCE!
            </WelTitle>
            <WelDesc>
              Are you looking for crypto infos? <br /> SHEEP FINANCE provides
              you with real-time and up-to-date information on your favorite
              cryptos.
            </WelDesc>
          </WelTextBox>
        </WelcomContent>
        <ListTitle></ListTitle>
        <CoinListBox></CoinListBox>
      </ContentBox>
    </Wrap>
  );
}
export default Coins;
