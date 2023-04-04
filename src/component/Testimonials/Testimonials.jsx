import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import Carousel from "react-elastic-carousel";

import Image from "../../assets/Image.png";

const Testimonials = () => {
  return (
    <div className=" testimonials flex my-10 mx-auto w-10/12 p-8">
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
        className="div w-1/2 pt-4"
        style={{
          color: "#5E6282",
          fontFamily: "Poppins",
          position: "relative",
        }}
      >
        <Carousel verticalMode itemsToShow={1}>
          <div
            className="rounded-xl shadow-2xl w-11/12 p-4 bg-white my-5"
            style={{ position: "relative" }}
          >
            <img
              src={Image}
              alt=""
              style={{ position: "absolute", top: "-10%", left: "-4%" }}
            />
            <br />
            <p className="text-base font-medium	my-2">
              1. “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>
            <p className="text-lg font-semibold">Mike taylor</p>
            <p className="text-base font-medium	mb-2">Lahore, Pakistan</p>
          </div>
          <div
            className="rounded-xl shadow-2xl w-11/12 p-4 my-5"
            style={{ position: "relative" }}
          >
            <img
              src={Image}
              alt=""
              style={{ position: "absolute", top: "-10%", left: "-4%" }}
            />
            <br />
            <p className="text-base font-medium	my-2">
              2. “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>
            <p className="text-lg font-semibold">Chris Thomas</p>
            <p className="text-base font-medium	mb-2">CEO of Red Button</p>
          </div>

          <div
            className="rounded-xl shadow-2xl w-11/12 p-4 bg-white my-5"
            style={{ position: "relative" }}
          >
            <img
              src={Image}
              alt=""
              style={{ position: "absolute", top: "-10%", left: "-4%" }}
            />
            <br />
            <p className="text-base font-medium	my-2">
              3. “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>
            <p className="text-lg font-semibold">Mike taylor</p>
            <p className="text-base font-medium	mb-2">Lahore, Pakistan</p>
          </div>
          <div
            className="rounded-xl shadow-2xl w-11/12 p-4 my-5"
            style={{ position: "relative" }}
          >
            <img
              src={Image}
              alt=""
              style={{ position: "absolute", top: "-10%", left: "-4%" }}
            />
            <br />
            <p className="text-base font-medium	my-2">
              4. “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>
            <p className="text-lg font-semibold">Chris Thomas</p>
            <p className="text-base font-medium	mb-2">CEO of Red Button</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
