import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Jadoo from "../../assets/Jadoo.png";

const NavBar = () => {
  console.log("NAVBAR");
  return (
    <>
      <div className="flex justify-evenly">
        <Button
          color="inherit"
          component={Link}
          to={"/"}
          style={{
            color: "#212832",
            fontFamily: "Google Sans",
            fontWeight: "800",
          }}
        >
          <img src={Jadoo} alt="" />
        </Button>
        <Button
          color="inherit"
          component={Link}
          to={"/desitnations"}
          style={{
            color: "#212832",
            fontFamily: "Google Sans",
            fontWeight: "800",
          }}
        >
          Desitnations
        </Button>
        <Button
          color="inherit"
          component={Link}
          to={"/hotels"}
          style={{
            color: "#212832",
            fontFamily: "Google Sans",
            fontWeight: "800",
          }}
        >
          Hotels
        </Button>
        <Button
          color="inherit"
          component={Link}
          to={"/flights"}
          style={{
            color: "#212832",
            fontFamily: "Google Sans",
            fontWeight: "800",
          }}
        >
          Flights
        </Button>
        <Button
          color="inherit"
          component={Link}
          to={"/bookings"}
          style={{
            color: "#212832",
            fontFamily: "Google Sans",
            fontWeight: "800",
          }}
        >
          Bookings
        </Button>
        <Button
          color="inherit"
          component={Link}
          to={"/login"}
          style={{
            color: "#212832",
            fontFamily: "Google Sans",
            fontWeight: "800",
          }}
        >
          Login
        </Button>
        <Button
          color="inherit"
          component={Link}
          to={"/signup"}
          style={{
            color: "#212832",
            fontFamily: "Google Sans",
            fontWeight: "800",
          }}
        >
          Sign up
        </Button>
        <Button
          color="inherit"
          component={Link}
          to={"/language"}
          style={{
            color: "#212832",
            fontFamily: "Google Sans",
            fontWeight: "800",
          }}
        >
          EN
        </Button>
      </div>
    </>
  );
};

export default NavBar;
