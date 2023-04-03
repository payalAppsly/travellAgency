import React from "react";
import NearMeIcon from "@mui/icons-material/NearMe";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";

import ContactBack from "../../assets/contactBack.png";
import ContactMaskLeft from "../../assets/ContactMaskLeft.png";
import ContactMaskRight from "../../assets/ContactMaskRight.png";

const Subscribe = () => {
  console.log("Subscribe Page");
  return (
    <div
      className="my-10"
      style={{
        backgroundImage: `url(${ContactBack})`,
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "right",
        backgroundPositionY: "bottom",
      }}
    >
      <div className="div py-10 px-2 w-10/12 mx-auto">
        <div
          className="p-5"
          style={{
            backgroundColor: "#DFD7F9",
            borderRadius: "129px 20px 20px  20px",
            position: "relative",
          }}
        >
          <div className="w-9/12 mx-auto flex flex-col p-10 gap-y-10">
            <span
              className="text-center font-bold text-3xl"
              style={{ color: "#5E6282", fontFamily: "Poppins" }}
            >
              Subscribe to get information, latest news and other interesting
              offers about Cobham
            </span>

            <span className="justify-center flex gap-x-2">
              <div
                className="rounded-lg w-96 justify-center flex items-center gap-x-2"
                style={{ backgroundColor: "white" }}
              >
                <MailOutlinedIcon style={{}} />
                <input type="text" placeholder="Your Email" />
              </div>
              <button
                className="text-white rounded-lg py-4 px-10"
                style={{
                  backgroundColor: "#FF7D68",
                }}
              >
                Subscribe
              </button>
            </span>
          </div>

          <div
            style={{
              background:
                "linear-gradient(201.65deg, #747DEF 10.27%, #5E3BE1 100%)",
              borderRadius: "50%",
              width: "60px",
              height: "60px",
              color: "white",
              position: "absolute",
              top: "-6%",
              right: "-1%",
            }}
          >
            <NearMeIcon style={{ zoom: 2, margin: "2px", padding: "2px" }} />
          </div>

          <img
            src={ContactMaskLeft}
            alt=""
            width={400}
            style={{ position: "absolute", bottom: "0%", left: "-7%" }}
          />
          <img
            src={ContactMaskRight}
            alt=""
            width={200}
            style={{ position: "absolute", top: "0%", right: "0%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
