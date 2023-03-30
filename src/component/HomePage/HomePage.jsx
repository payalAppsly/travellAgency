import React from "react";
import TravellImg from "../../assets/Traveller 1.png";
import Play from "../../assets/Play button.png";
import { Button, Typography } from "@mui/material";

const HomePage = () => {
  console.log("HOMEPAGE");
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <Typography variant="h6" gutterBottom>
            Best Destinations around the world
          </Typography>
          
          
          <Typography variant="h1" gutterBottom>
            Travel, enjoy and live a new and full life
          </Typography>
          <Typography variant="body1" gutterBottom>
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </Typography>
          <Button color="inherit">Find out more</Button>
          <Button color="inherit">Play Demo</Button>
        </div>
        <div>
          <img src={TravellImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
