import React from "react";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import NearMeIcon from "@mui/icons-material/NearMe";
import LuggageIcon from "@mui/icons-material/Luggage";
import Image2 from "../../assets/image2.jpg";
import Image3 from "../../assets/image3.png";

import LinearProgress from "@mui/material/LinearProgress";

const Bookings = () => {
  console.log("Bookings");
  return (
    <div className="flex my-10 mx-auto items-center">
      <div className="flex flex-col gap-y-8">
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
            }}
          ></div>
          <div>
            <p>Choose Destination</p>
            <p>
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
            }}
          ></div>
          <div>
            <p>Make Payment</p>
            <p>
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
            }}
          ></div>
          <div>
            <p>Reach Airport on Selected Date</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
              tortor tempus.{" "}
            </p>
          </div>
        </div>
      </div>
      <div>
        <div
          className="shadow-xl rounded-2xl"
          style={{
            background: "#FFFFFF",
            position: "relative",
          }}
        >
          <img src={Image2} alt="" />
          <div>
            <p>Trip To Greece</p>
            <p>14-29 June</p>
            <p>by Robbin joseph</p>
            <span className="flex">
              <span
                style={{
                  width: "35px",
                  height: "35px",
                  backgroundColor: "#84829A",
                  borderRadius: "50%",
                }}
              >
                <EnergySavingsLeafIcon style={{ margin: "4px" }} />
              </span>
              <span
                style={{
                  width: "35px",
                  height: "35px",
                  backgroundColor: "#84829A",
                  borderRadius: "50%",
                }}
              >
                <LuggageIcon style={{ margin: "4px" }} />
              </span>
              <span
                style={{
                  width: "35px",
                  height: "35px",
                  backgroundColor: "#84829A",
                  borderRadius: "50%",
                }}
              >
                <NearMeIcon style={{ margin: "4px" }} />
              </span>
            </span>
            <p>24 people going</p>
          </div>
        </div>
        <div
          className="shadow-xl rounded-2xl flex gap-x-4"
          style={{
            background: "#FFFFFF",
            position: "absolute",
            left: "60%",
            top: "35%",
            padding: "10px",
          }}
        >
          <div>
            <img src={Image3} alt="" style={{ borderRadius: "50%" }} />
          </div>
          <div>
            <p>Ongoing</p>
            <p>Trip to rome</p>
            <p>40% completed</p> <LinearProgress />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
