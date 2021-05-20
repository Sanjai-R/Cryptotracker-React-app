import React, { useEffect, useState } from "react";
import CoinCard from "./coincard";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import "./dashboard.css";
const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

export default function Dashboard() {
  const [coin, setcoin] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get(url).then((res) => setcoin(res.data));
  }, []);
  const filteredCoins = coin.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <h1>Crypto tracker</h1>
      <div className = 'Search-bar'>
        <form>
          <input
            className="coin-input"
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="Search a Crypto"
          />
        </form>
        </div>
        <div className="coin-card">
          <Grid container direction="row" justify="center"  xs={8} >
            {filteredCoins.map((coin) => {
              return (
                <CoinCard
                  key={coin.id}
                  name={coin.name}
                  price={coin.current_price}
                  symbol={coin.symbol}
                  marketcap={coin.total_volume}
                  volume={coin.market_cap}
                  image={coin.image}
                  priceChange={coin.price_change_percentage_24h}
                />
              );
            })}
          </Grid>
        
        </div>
        <div><h3 className="footer">Developed by Sanjai❤</h3></div>
    </div>
    
  );
}
