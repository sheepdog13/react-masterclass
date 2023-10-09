import { useEffect, useState } from "react";
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

function Coins() {
  const { isLoading, data } = useQuery<Icoin[]>("allCoins", fetchCoins);
  const aaa = false;
  return (
    <Wrap>
      <SideComp />
      <ContentBox>
        <WelcomComp />
        <ListTitleBox>
          <span>Coin List</span>
        </ListTitleBox>
        <CoinListComp />
      </ContentBox>
    </Wrap>
  );
}
export default Coins;
