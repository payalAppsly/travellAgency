import React from "react";
import CircleIcon from "@mui/icons-material/Circle";

import Image from "../../assets/Image.png";

const Testimonials = () => {
  return (
    <div className="flex my-10 mx-auto w-10/12 p-10">
      <div className=" w-1/2 flex flex-col gap-y-16">
        <div className="div">
          <p
            className="text-lg font-semibold my-2"
            style={{ color: "#5E6282", fontFamily: "Poppins" }}
          >
            Testimonials
          </p>
          <p
            className="text-5xl font-extrabold w-3/5"
            style={{ color: "#14183E", fontFamily: "Volkhov" }}
          >
            What people say about Us.
          </p>
        </div>
        <div className="div flex gap-x-5">
          <CircleIcon style={{ fontSize: "14px" }} />
          <CircleIcon style={{ color: "grey", fontSize: "14px" }} />
          <CircleIcon style={{ color: "grey", fontSize: "14px" }} />
        </div>
      </div>
      <div
        className="div w-1/2"
        style={{
          color: "#5E6282",
          fontFamily: "Poppins",
          position: "relative",
        }}
      >
        <div
          className="rounded-xl shadow-2xl w-4/5 p-5 z-10 bg-white "
          style={{ position: "absolute", top: "-14%", left: "-4%" }}
        >
          <p className="text-base font-medium	my-2">
            “On the Windows talking painted pasture yet its express parties use.
            Sure last upon he same as knew next. Of believed or diverted no.”
          </p>
          <p className="text-lg font-semibold">Mike taylor</p>
          <p className="text-base font-medium	mb-2">Lahore, Pakistan</p>
        </div>
        <div
          className="rounded-xl shadow-2xl w-4/5 p-5 z-0"
          style={{
            position: "absolute",
            top: "20%",
            border: "2px solid #F7F7F7",
          }}
        >
          <p className="text-base font-medium	my-2">
            “On the Windows talking painted pasture yet its express parties use.
            Sure last upon he same as knew next. Of believed or diverted no.”
          </p>
          <p className="text-lg font-semibold">Chris Thomas</p>
          <p className="text-base font-medium	mb-2">CEO of Red Button</p>
        </div>

        <div
          className="div z-20"
          style={{ position: "absolute", top: "-33%", left: "-9%" }}
        >
          <img src={Image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
