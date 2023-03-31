import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import ShopIcon from "@mui/icons-material/Shop";
import AppleIcon from "@mui/icons-material/Apple";

const Footer = () => {
  return (
    <div className=" my-10 mx-auto w-10/12" style={{ fontFamily: "Poppins" }}>
      <div className="flex w-full my-10 justify-evenly">
        <div className="flex w-3/4 justify-evenly">
          <div>
            <p className="text-4xl font-semibold" style={{ color: "#181E4B" }}>
              Jad<span style={{backgroundColor:""}}>oo</span>.
            </p>
            <p
              className="text-base font-medium w-52 my-2"
              style={{ color: "#5E6282" }}
            >
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>
          <div>
            <p className="text-xl font-extrabold" style={{ color: "#080809" }}>
              Company
            </p>
            <p className="text-lg font-medium" style={{ color: "#5E6282" }}>
              About
            </p>
            <p className="text-lg font-medium" style={{ color: "#5E6282" }}>
              Careers
            </p>
            <p className="text-lg font-medium" style={{ color: "#5E6282" }}>
              Mobile
            </p>
          </div>
          <div>
            <p className="text-xl font-extrabold" style={{ color: "#080809" }}>
              Contact
            </p>
            <p className="text-lg font-medium" style={{ color: "#5E6282" }}>
              Help/FAQ
            </p>
            <p className="text-lg font-medium" style={{ color: "#5E6282" }}>
              Press
            </p>
            <p className="text-lg font-medium" style={{ color: "#5E6282" }}>
              Affilates
            </p>
          </div>
          <div>
            <p className="text-xl font-extrabold" style={{ color: "#080809" }}>
              More
            </p>
            <p className="text-lg font-medium" style={{ color: "#5E6282" }}>
              Airlinefees
            </p>
            <p className="text-lg font-medium" style={{ color: "#5E6282" }}>
              Airline
            </p>
            <p className="text-lg font-medium" style={{ color: "#5E6282" }}>
              Low fare tips
            </p>
          </div>
        </div>
        <div className="w-1/4 mx-auto flex flex-col gap-y-2">
          <span className="flex gap-x-5">
            <span
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#FFFFFF",
                boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <FacebookOutlinedIcon style={{ margin: "8px" }} />
            </span>
            <span
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#C68BF0",
                boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <InstagramIcon style={{ margin: "8px" }} />
            </span>
            <span
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#FFFFFF",
                boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <TwitterIcon style={{ margin: "8px" }} />
            </span>
          </span>
          <span>
            <p  className="text-xl font-medium" style={{ color: "#5E6282" }}>Discover our app</p>
          </span>
          <span className="flex gap-x-2">
            <div className="bg-black text-white rounded-2xl flex px-2 py-1 items-center gap-x-2">
              <ShopIcon style={{}} />
              <div className="text-sm">
                <p>GET IT NOW</p>
                <p>Google Play</p>
              </div>
            </div>
            <div className="bg-black text-white rounded-2xl flex  px-2 py-1 items-center gap-x-2">
              <AppleIcon style={{}} />
              <div className="text-sm">
                <p>Available on the</p>
                <p>Apple Store</p>
              </div>
            </div>
          </span>
        </div>
      </div>
      <div className="text-center my-10 font-extrabold">
        All rights reserved@jadoo.co
      </div>
    </div>
  );
};

export default Footer;
