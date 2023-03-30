import React from "react";
import Desti1 from "../../assets/desti1.png";
import Desti2 from "../../assets/desti2.png";
import Desti3 from "../../assets/desti3.png";
import NearMeIcon from "@mui/icons-material/NearMe";

const Desitnations = () => {
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
          className="flex  w-10/12 mx-auto justify-evenly text-lg font-semibold"
          style={{ color: "#5E6282", fontFamily: "Poppins" }}
        >
          <div className="shadow-xl rounded-2xl">
            <img src={Desti1} alt="" className="rounded-tl-lg rounded-tr-lg" />
            <div className="p-5">
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
          <div className="shadow-xl rounded-2xl">
            <img src={Desti2} alt="" className="rounded-tl-lg rounded-tr-lg" />
            <div className="p-5">
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
          <div className="shadow-xl rounded-2xl">
            <img src={Desti3} alt="" className="rounded-tl-lg rounded-tr-lg" />
            <div className="p-5">
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

export default Desitnations;
