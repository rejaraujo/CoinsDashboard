import { rest } from "msw";

export const handlers = [
  rest.get("*", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: "success",
        data: {
          stats: {
            total: 27587,
            totalCoins: 27587,
            totalMarkets: 36567,
            totalExchanges: 160,
            totalMarketCap: "1208098025150",
            total24hVolume: "41190398598",
          },
          coins: [
            {
              uuid: "Qwsogvtv82FCd",
              symbol: "BTC",
              name: "Bitcoin",
              color: "#f7931A",
              iconUrl: "https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg",
              marketCap: "597368497083",
              price: "30747.130176568906",
              listedAt: 1330214400,
              tier: 1,
              change: "0.82",
              rank: 1,
              sparkline: [
                "30488.384927631112",
                "30496.31528350015",
                "30410.328378785387",
                "30318.317897175897",
                "30347.823423852493",
                "30361.960578743652",
                "30380.4458145053",
                "30393.44699477336",
                "30358.652122657684",
                "30360.69128343525",
                "30320.552131603297",
                "30298.339981077985",
                "30296.55356655323",
                "30333.3187601977",
                "30390.420422840543",
                "30387.51153739157",
                "30496.987599716977",
                "30570.008356067017",
                "30573.535917830162",
                "30560.180094502957",
                "30581.388052975995",
                "30588.62688995306",
                "30675.00292106386",
                "30804.204604599767",
              ],
              lowVolume: false,
              coinrankingUrl:
                "https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc",
              "24hVolume": "16431080834",
              btcPrice: "1",
            },
            {
              uuid: "razxDUgYGNAdQ",
              symbol: "ETH",
              name: "Ethereum",
              color: "#3C3C3D",
              iconUrl: "https://cdn.coinranking.com/rk4RKHOuW/eth.svg",
              marketCap: "238516839154",
              price: "1954.368515857781",
              listedAt: 1438905600,
              tier: 1,
              change: "3.52",
              rank: 2,
              sparkline: [
                "1888.7867550769226",
                "1888.4380514700117",
                "1879.7981855432135",
                "1871.8245053707792",
                "1869.8096983465975",
                "1870.9042573150714",
                "1871.348455415501",
                "1873.4868828421702",
                "1871.7026162000188",
                "1872.0169408193913",
                "1869.0240043406009",
                "1867.3437051586245",
                "1866.257046182552",
                "1869.174269348102",
                "1871.9592092135101",
                "1871.862621136196",
                "1877.4467300516726",
                "1881.857367758173",
                "1884.0225984120484",
                "1883.2456062130877",
                "1882.9743684739317",
                "1883.4372711959495",
                "1898.3179516242285",
                "1946.2923107294425",
              ],
              lowVolume: false,
              coinrankingUrl:
                "https://coinranking.com/coin/razxDUgYGNAdQ+ethereum-eth",
              "24hVolume": "13574657114",
              btcPrice: "0.06356263185001645",
            },
          ],
        },
      }),
      ctx.delay(30)
    );
  }),
];