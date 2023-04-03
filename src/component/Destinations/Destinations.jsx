import React from "react";
import NearMeIcon from "@mui/icons-material/NearMe";
import Desti1 from "../../assets/desti1.png";
import Desti2 from "../../assets/desti2.png";
import Desti3 from "../../assets/desti3.png";
import DestiBack from "../../assets/destiBack.png";

const Destinations = () => {
  return (
    <>
      <div className="my-10">
        <div className="text-center my-10">
          <h6
            className="text-lg font-semibold"
            style={{ color: "#5E6282", fontFamily: "Poppins" }}
          >
            Top Selling
          </h6>
          <h2
            className="text-5xl font-bold capitalize"
            style={{ color: "#14183E", fontFamily: "Volkhov" }}
          >
            Top Destinations
          </h2>
        </div>
        <div
          className="flex  w-10/12 mx-auto justify-evenly text-lg font-medium"
          style={{
            color: "#5E6282",
            fontFamily: "Poppins",
            backgroundImage: `url(${DestiBack})`,
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "right",
            backgroundPositionY:"bottom"
          }}
        >
          <div className="" style={{ position: "relative" }}>
            <img src={Desti1} alt="" className="shadow-xl rounded-2xl w-80" />
            <div
              className="p-5 bg-white w-80 h-32 rounded-br-2xl rounded-bl-2xl"
              style={{ position: "absolute", bottom: "0%" }}
            >
              <span className="flex justify-between">
                <span>Rome, Italty</span>
                <span>$5,42k</span>
              </span>
              <span className="flex gap-3">
                <NearMeIcon />
                <p>10 Days Trip</p>
              </span>
            </div>
          </div>
          <div className="" style={{ position: "relative" }}>
            <img src={Desti2} alt="" className="shadow-xl rounded-2xl w-80" />
            <div
              className="p-5 bg-white w-80 h-32 rounded-br-2xl rounded-bl-2xl"
              style={{ position: "absolute", bottom: "0%" }}
            >
              <span className="flex justify-between">
                <span>London, UK</span>
                <span>$4.2k</span>
              </span>
              <span className="flex gap-3">
                <NearMeIcon />
                <p>12 Days Trip</p>
              </span>
            </div>
          </div>
          <div className="" style={{ position: "relative" }}>
            <img src={Desti3} alt="" className="shadow-xl rounded-2xl w-80" />
            <div
              className="p-5 bg-white w-80 h-32 rounded-br-2xl rounded-bl-2xl"
              style={{ position: "absolute", bottom: "0%" }}
            >
              <span className="flex justify-between">
                <span>Full Europe</span>
                <span>$15k</span>
              </span>
              <span className="flex gap-3">
                <NearMeIcon />
                <p>28 Days Trip</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destinations;
