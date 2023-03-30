import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {
  console.log("NAVBAR");
  return (
    <>
      <div style={{display:"flex",gap:"100px"}}>
        <Button color="inherit" component={Link} to={"/"}>
          Jadoo
        </Button>
        <Button color="inherit" component={Link} to={"/desitnations"}>
          Desitnations
        </Button>
        <Button color="inherit" component={Link} to={"/hotels"}>
          Hotels
        </Button>
        <Button color="inherit" component={Link} to={"/flights"}>
          Flights
        </Button>
        <Button color="inherit" component={Link} to={"/bookings"}>
          Bookings
        </Button>
        <Button color="inherit" component={Link} to={"/login"}>
          Login
        </Button>
        <Button color="inherit" component={Link} to={"/signup"}>
          Sign up
        </Button>
        <Button color="inherit" component={Link} to={"/language"}>
          EN
        </Button>
      </div>
    </>
  );
};

export default NavBar;
