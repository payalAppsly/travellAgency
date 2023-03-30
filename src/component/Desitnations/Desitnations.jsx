import React from "react";
import Desti1 from "../../assets/desti1.png";
import Desti2 from "../../assets/desti2.png";
import Desti3 from "../../assets/desti3.png";

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
            className="text-5xl font-bold"
            style={{ color: "#14183E", fontFamily: "Volkhov" }}
          >
            Top Destinations
          </h2>
        </div>
        <div className="flex  w-10/12 mx-auto justify-evenly">
          <div className="shadow-xl ">
            <img src={Desti1} alt="" />
            <div className="py-10">
              <span>
                <span>Rome, Italty</span>
                <span>$5,42k</span>
              </span>
              <p>10 Days Trip</p>
            </div>
          </div>
          <div className="shadow-xl">
            <img src={Desti2} alt="" />
            <div className="py-10">
              <span>
                <span>Rome, Italty</span>
                <span>$5,42k</span>
              </span>
              <p>10 Days Trip</p>
            </div>
          </div>
          <div className="shadow-xl">
            <img src={Desti3} alt="" />
            <div className="py-10">
              <span>
                <span>Rome, Italty</span>
                <span>$5,42k</span>
              </span>
              <p>10 Days Trip</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Desitnations;
