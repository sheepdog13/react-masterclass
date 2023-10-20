import { fetchCoinTickers } from "api";
import { isDarkAtom } from "atom";
import ApexCharts from "react-apexcharts";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
interface CharProps {
  coinId: string;
}

function CandleComp({ coinId }: CharProps) {
  const isDark = useRecoilValue(isDarkAtom);
  const { isLoading, data } = useQuery<number[][]>(
    ["ohlcv", coinId],
    () => fetchCoinTickers(coinId, "1"),
    {
      refetchInterval: 100000,
    }
  );
  const close_prices = data?.map((data) => ({
    x: data[0],
    y: [
      data[data.length - 4],
      data[data.length - 3],
      data[data.length - 2],
      data[data.length - 1],
    ],
  }));
  console.log(close_prices);
  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <>
          <ApexCharts
            type={"candlestick"}
            options={{
              chart: {
                type: "candlestick",
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
            }}
            series={[
              {
                name: "ohlcv",
                data: data ?? [],
              },
            ]}
          />
        </>
      )}
    </>
  );
}

export default CandleComp;
