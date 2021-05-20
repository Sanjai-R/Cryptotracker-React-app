import axios from "axios";
const url =
  " https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false";
export const fetchApi = async () => {
  const data = await axios.get(url);
  console.log(data);
};
