import React from "react";
import TravellImg from "../../assets/Traveller1.png";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const Banner = () => {
  return (
    <div className="ml-2 p-5" style={{ display: "flex", alignItems: "center" }}>
      <div className="w-1/2">
        <h6
          className="text-xl font-bold uppercase my-2"
          style={{ color: "#DF6951", fontFamily: "Poppins" }}
        >
          Best Destinations around the world
        </h6>
        <h1
          className=" w-4/5 text-7xl font-bold my-2"
          style={{ color: "#181E4B", fontFamily: "Volkhov" }}
        >
          Travel, enjoy and live a new and full life
        </h1>
        <p
          className="w-4/5 text-lg font-medium my-2"
          style={{ color: "#5E6282", fontFamily: "Poppins" }}
        >
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <button
          style={{
            backgroundColor: "#F1A501",
            borderRadius: "10px",
            padding: "20px",
            border: "none",
            color: "white",
            fontSize: "18px",
            boxShadow: " 0px 20px 35px rgba(241, 165, 1, 0.15)",
          }}
        >
          Find out more
        </button>
        <button
          className=""
          style={{
            backgroundColor: "gray",
            borderRadius: "10px",
            padding: "20px",
            border: "none",
            color: "white",
            fontSize: "18px",
            marginLeft: "10px",
          }}
        >
          <PlayCircleOutlineIcon
            style={{ marginRight: "2px", marginBottom: "3px" }}
          />
          Play Demo
        </button>
      </div>
      <div
        className="w-1/2"
       
      >
        <img src={TravellImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
