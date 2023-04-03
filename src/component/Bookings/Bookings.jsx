import React from "react";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import NearMeIcon from "@mui/icons-material/NearMe";
import LuggageIcon from "@mui/icons-material/Luggage";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LinearProgress from "@mui/material/LinearProgress";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import Image2 from "../../assets/image2.jpg";
import Image3 from "../../assets/image3.png";
import BookBack from "../../assets/bookBack.png";

const Bookings = () => {
  console.log("Bookings");
  return (
    <div
      className="flex my-20 mx-auto items-center w-10/12 p-10"
      style={{
        backgroundImage: `url(${BookBack})`,
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "top",
        backgroundPositionX: "right",
      }}
    >
      <div className="flex flex-col gap-y-8 w-3/5 ml-4">
        <div>
          <h5
            className="text-lg font-semibold"
            style={{ color: "#5E6282", fontFamily: "Poppins" }}
          >
            Easy and Fast
          </h5>
          <h1
            className="text-5xl font-bold capitalize w-3/5"
            style={{ color: "#14183E", fontFamily: "Volkhov" }}
          >
            Book your next trip in 3 easy steps
          </h1>
        </div>

        <div className="flex gap-x-4">
          <div
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "#F0BB1F",
              borderRadius: "15px",
              color: "white",
            }}
          >
            <GpsFixedIcon style={{ marginLeft: "12px", marginTop: "12px" }} />
          </div>
          <div>
            <p
              className="text-lg font-bold"
              style={{ color: "#5E6282", fontFamily: "Poppins" }}
            >
              Choose Destination
            </p>
            <p
              className="w-80 font-medium text-base"
              style={{ color: "#5E6282", fontFamily: "Poppins" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
              tortor tempus.{" "}
            </p>
          </div>
        </div>
        <div className="flex gap-x-4">
          <div
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "#F15A2B",
              borderRadius: "15px",
              color: "white",
            }}
          >
            <LocalAtmIcon style={{ marginLeft: "12px", marginTop: "12px" }} />
          </div>
          <div>
            <p
              className="text-lg font-bold"
              style={{ color: "#5E6282", fontFamily: "Poppins" }}
            >
              Make Payment
            </p>
            <p
              className="w-80 font-medium text-base"
              style={{ color: "#5E6282", fontFamily: "Poppins" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
              tortor tempus.{" "}
            </p>
          </div>
        </div>
        <div className="flex gap-x-4">
          <div
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "#006380",
              borderRadius: "15px",
              color: "white",
            }}
          >
            <LocalAirportIcon
              style={{ marginLeft: "12px", marginTop: "12px" }}
            />
          </div>
          <div>
            <p
              className="text-lg font-bold"
              style={{ color: "#5E6282", fontFamily: "Poppins" }}
            >
              Reach Airport on Selected Date
            </p>
            <p
              className="w-80 font-medium text-base"
              style={{ color: "#5E6282", fontFamily: "Poppins" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
              tortor tempus.{" "}
            </p>
          </div>
        </div>
      </div>
      <div
        className="w-2/5"
        style={{
          position: "relative",
        }}
      >
        <div
          className="shadow-xl rounded-2xl w-80 p-4"
          style={{
            background: "#FFFFFF",
          }}
        >
          <img src={Image2} alt="" />
          <div className="flex flex-col gap-y-2">
            <p
              className="text-lg font-medium"
              style={{ color: "#080809", fontFamily: "Poppins" }}
            >
              Trip To Greece
            </p>
            <p
              className="text-base font-medium"
              style={{ color: "#84829A", fontFamily: "Poppins" }}
            >
              14-29 June | by Robbin joseph
            </p>

            <span className="flex gap-x-4">
              <span
                style={{
                  width: "35px",
                  height: "35px",
                  borderRadius: "50%",
                  backgroundColor: "#F5F5F5",
                  color: "#84829A",
                }}
              >
                <EnergySavingsLeafIcon style={{ margin: "5px" }} />
              </span>
              <span
                style={{
                  width: "35px",
                  height: "35px",
                  borderRadius: "50%",
                  backgroundColor: "#F5F5F5",
                  color: "#84829A",
                }}
              >
                <LuggageIcon style={{ margin: "5px" }} />
              </span>
              <span
                style={{
                  width: "35px",
                  height: "35px",
                  borderRadius: "50%",
                  backgroundColor: "#F5F5F5",
                  color: "#84829A",
                }}
              >
                <NearMeIcon style={{ margin: "5px" }} />
              </span>
            </span>
            <p
              className="text-base font-medium items-center flex gap-x-1"
              style={{ color: "#84829A", fontFamily: "Poppins" }}
            >
              <ApartmentIcon />
              <span>24 people going</span>
              <FavoriteBorderOutlinedIcon
                style={{
                  marginLeft: "auto",
                  color: "#4152CA",
                  marginRight: "20px",
                }}
              />
            </p>
          </div>
        </div>
        <div
          className="shadow-xl rounded-2xl flex gap-x-4 w-56"
          style={{
            background: "#FFFFFF",
            position: "absolute",
            left: "35%",
            top: "55%",
            padding: "10px",
          }}
        >
          <div>
            <img src={Image3} alt="" style={{ borderRadius: "50%" }} />
          </div>
          <div>
            <p
              className="text-base font-medium"
              style={{ color: "#84829A", fontFamily: "Poppins" }}
            >
              Ongoing
            </p>
            <p
              className="text-lg font-medium"
              style={{ color: "#080809", fontFamily: "Poppins" }}
            >
              Trip to rome
            </p>
            <p className="text-base" style={{ fontFamily: "Poppins" }}>
              <span style={{ color: "#8A79DF", fontWeight: "bold" }}>40%</span>
              &nbsp; completed
            </p>{" "}
            <LinearProgress />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
