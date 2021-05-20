import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "./coincard.css";
import { Typography } from "@material-ui/core";
import Countup from "react-countup";
export default function CoinCard({
  volume,
  marketcap,
  priceChange,
  price,
  name,
  image,
}) {
  return (
    <div className="coin-card">
      <Card className="coin-cantainer">
        <Grid gap={3}>
          <CardContent>
            <img src={image} alt=""></img>
            <br />
            <Typography variant="inherit" color="textPrimary" gutterBottom>
              <h2>{name}</h2>
            </Typography>
            
            <Typography variant="inherit" gutterBottom>
              $
              <Countup start={0} end={price} duration={1.6} separator="," />
            </Typography>
         
            <Typography variant="inherit">
            <h4>Market capital</h4>
              <h6>
                
                <Countup
                  start={0}
                  end={marketcap}
                  duration={1.6}
                  separator=","
                />
              </h6>
            </Typography>

            <Typography variant="inherit" >
            <h4>Total Volume</h4>
              <h6>
                
                <Countup start={0} end={volume} duration={1.6} separator="," />
              </h6>
            </Typography>

            {priceChange < 0 ? (
              <h3 className="lowPrice">{priceChange}%</h3>
            ) : (
              <h3 className="highPrice">{priceChange}%</h3>
            )}
          </CardContent>
        </Grid>
      </Card>
    </div>
  );
}
