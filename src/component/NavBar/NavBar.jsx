import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Jadoo from "../../assets/Jadoo.png";

const NavBar = () => {
  console.log("NAVBAR");
  return (
    <>
      <div className="flex py-10 items-center">
        <div className="w-1/3 ml-5">
          <Button color="inherit" component={Link} to={"/"}>
            <img src={Jadoo} alt="" />
          </Button>
        </div>
        <div className="flex justify-evenly w-2/3 mr-2">
          <Button
            color="inherit"
            component={Link}
            to={"/destinations"}
            style={{
              color: "#212832",
              fontFamily: "Google Sans",
              fontWeight: "800",
              textTransform: "none",
              fontSize: "16px",
            }}
          >
            Destinations
          </Button>
          <Button
            color="inherit"
            component={Link}
            to={"/hotels"}
            style={{
              color: "#212832",
              fontFamily: "Google Sans",
              fontWeight: "800",
              textTransform: "none",
              fontSize: "16px",
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
              textTransform: "none",
              fontSize: "16px",
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
              textTransform: "none",
              fontSize: "16px",
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
              textTransform: "none",
              fontSize: "16px",
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
              border: "1px solid #212832",
              borderRadius: "5px",
              padding: "1px 25px",
              textTransform: "none",
              fontSize: "16px",
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
              textTransform: "none",
              fontSize: "16px",
            }}
          >
            EN
          </Button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
