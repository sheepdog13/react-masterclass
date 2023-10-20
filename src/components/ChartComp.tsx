import { fetchCoinTickers } from "api";
import { useQuery } from "react-query";
import ApexCharts from "react-apexcharts";
import { isDarkAtom } from "atom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

interface CharProps {
  coinId: string;
  isLine: boolean;
  day: string;
}
const ChartBlock = styled.div`
  justify-items: flex-end;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding-top: 60px;
`;

function ChartComp(props: CharProps) {
  const isDark = useRecoilValue(isDarkAtom);
  const { isLoading, data } = useQuery<number[][]>(
    ["ohlcv", props.coinId + props.day],
    () => fetchCoinTickers(props.coinId, props.day),
    {
      refetchInterval: 100000,
    }
  );
  const close_prices = data?.map((data) => ({
    x: data[0],
    y: data[data.length - 1],
  }));

  return (
    <>
      {isLoading ? (
        <>LoadingComp</>
      ) : (
        <>
          <ChartBlock>
            <ApexCharts
              type={props.isLine ? "line" : "candlestick"}
              options={{
                chart: {
                  type: "line",
                  toolbar: {
                    show: false,
                  },
                  background: "none",
                  width: "400px",
                },
                theme: {
                  mode: isDark ? "dark" : "light",
                },
                yaxis: {
                  labels: {
                    formatter: function (val: number) {
                      return val
                        .toLocaleString("en-US", {
                          minimumFractionDigits: 6,
                        })
                        .replace(/\.?0+$/, "");
                    },
                  },
                },
                xaxis: {
                  type: "datetime",
                  axisTicks: { show: false },
                },
                grid: {
                  show: false,
                },
                stroke: {
                  curve: "smooth",
                  width: 3,
                },
              }}
              series={[
                {
                  name: props.isLine ? "Closing Price" : "ochlv",
                  data: props.isLine
                    ? close_prices
                      ? close_prices
                      : []
                    : data
                    ? data
                    : [],
                },
              ]}
              width="1000"
              height="300"
            />
          </ChartBlock>
        </>
      )}
    </>
  );
}

export default ChartComp;
