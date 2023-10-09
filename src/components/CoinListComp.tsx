import styled from "styled-components";
import { fetchCoins } from "../api";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

interface Icoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

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

function CoinListComp() {
  const { isLoading, data } = useQuery<Icoin[]>("allCoins", fetchCoins);

  return (
    <>
      {isLoading ? (
        <>loadComp만들기</>
      ) : (
        <>
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
        </>
      )}
    </>
  );
}

export default CoinListComp;
