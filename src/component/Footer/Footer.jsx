import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import ShopIcon from "@mui/icons-material/Shop";
import AppleIcon from "@mui/icons-material/Apple";

import GoogleIcon from "../../assets/GoogleIcon.png";

const Footer = () => {
  return (
    <div className=" my-10 mx-auto w-10/12" style={{ fontFamily: "Poppins" }}>
      <div className="flex w-full my-10 justify-evenly">
        <div className="flex w-3/4 justify-evenly">
          <div>
            <p
              className="text-4xl font-semibold mb-8"
              style={{ color: "#181E4B" }}
            >
              Jadoo.
            </p>
            <p
              className="text-sm font-medium w-52"
              style={{ color: "#5E6282" }}
            >
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>
          <div>
            <p className="text-xl font-extrabold" style={{ color: "#080809" }}>
              Company
            </p>
            <p
              className="text-base font-medium my-2"
              style={{ color: "#5E6282" }}
            >
              About
            </p>
            <p
              className="text-base font-medium my-2"
              style={{ color: "#5E6282" }}
            >
              Careers
            </p>
            <p
              className="text-base font-medium my-2"
              style={{ color: "#5E6282" }}
            >
              Mobile
            </p>
          </div>
          <div>
            <p className="text-xl font-extrabold" style={{ color: "#080809" }}>
              Contact
            </p>
            <p
              className="text-base font-medium my-2"
              style={{ color: "#5E6282" }}
            >
              Help/FAQ
            </p>
            <p
              className="text-base font-medium my-2"
              style={{ color: "#5E6282" }}
            >
              Press
            </p>
            <p
              className="text-base font-medium my-2"
              style={{ color: "#5E6282" }}
            >
              Affilates
            </p>
          </div>
          <div>
            <p className="text-xl font-extrabold" style={{ color: "#080809" }}>
              More
            </p>
            <p
              className="text-base font-medium my-2"
              style={{ color: "#5E6282" }}
            >
              Airlinefees
            </p>
            <p
              className="text-base font-medium my-2"
              style={{ color: "#5E6282" }}
            >
              Airline
            </p>
            <p
              className="text-base font-medium my-2"
              style={{ color: "#5E6282" }}
            >
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
              <i
                class="fa-brands fa-facebook-f"
                style={{ padding: "12px 15px" }}
              ></i>
            </span>
            <span
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                color: "white",
                boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
                background:
                  "conic-gradient(from 180deg at 50% 50%, #B8D2F1 0deg, #F289AA 60deg, #C68BF0 106.09deg, #D164DA 153.75deg, #C963E8 221.25deg,#BFC2E8 258.75deg, #FFC999 288.75deg, #D0D8C9 315deg, #BAD0F1 334.13deg, #CED8CB 358.97deg,rgba(255, 255, 255, 0) 360deg",
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
            <p className="text-lg font-medium" style={{ color: "#5E6282" }}>
              Discover our app
            </p>
          </span>
          <span className="flex gap-x-2">
            <button className="bg-black text-white rounded-2xl flex px-2 py-1 items-center gap-x-1">
              <img src={GoogleIcon} alt="" />
              <span className="text-xs text-left">
                <b>GET IT NOW</b>
                <p>Google Play</p>
              </span>
            </button>
            <button className="bg-black text-white rounded-2xl flex px-2 py-1 items-center gap-x-1">
              <AppleIcon style={{}} />
              <span className="text-xs text-left">
                <p>Available on the</p>
                <b>Apple Store</b>
              </span>
            </button>
          </span>
        </div>
      </div>
      <div
        className="text-center my-10 text-sm font-medium"
        style={{ color: "#5E6282" }}
      >
        All rights reserved@jadoo.co
      </div>
    </div>
  );
};

export default Footer;
