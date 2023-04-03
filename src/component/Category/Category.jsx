import React from "react";
import Cat1 from "../../assets/cat1.png";
import Cat2 from "../../assets/cat2.png";
import Cat3 from "../../assets/cat3.png";
import Cat4 from "../../assets/cat4.png";
import CatBack from "../../assets/catBack.png";
import Cat2Back from "../../assets/cat2Back.png";

const Category = () => {
  return (
    <>
      <div
        className="my-10"
        style={{
          backgroundImage: `url(${CatBack})`,
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "right",
        }}
      >
        <div className="text-center  my-10">
          <h6
            className="text-lg font-semibold"
            style={{ color: "#5E6282", fontFamily: "Poppins" }}
          >
            CATEGORY
          </h6>
          <h2
            className="text-5xl font-bold"
            style={{ color: "#14183E", fontFamily: "Volkhov" }}
          >
            We Offer Best Services
          </h2>
        </div>
        <img
          src={Cat2Back}
          alt=""
          style={{
            position: "relative",
            zIndex: "-1",
            top: "340px",
            left: "430px",
          }}
        />
        <div className="flex w-10/12 mx-auto justify-evenly items-baseline mb-32">
          <div className="w-1/5 text-center p-2">
            <img
              src={Cat1}
              alt=""
              className="max-w-full mx-auto"
              width={80}
              height={80}
            />
            <h5
              className="text-xl font-semibold"
              style={{ color: "#1E1D4C", fontFamily: "Open Sans" }}
            >
              Calculated Weather{" "}
            </h5>
            <p
              className="text-base font-medium"
              style={{ color: "#5E6282", fontFamily: "Poppins" }}
            >
              Built Wicket longer admire do barton vanity itself do in it.
            </p>
          </div>
          <div className="w-1/5 text-center p-8 rounded-xl bg-white shadow-2xl ">
            <img
              src={Cat2}
              alt=""
              className="max-w-full mx-auto"
              width={150}
              height={150}
            />
            <h5
              className="text-xl font-semibold"
              style={{ color: "#1E1D4C", fontFamily: "Open Sans" }}
            >
              Best Flights
            </h5>
            <p
              className="text-base font-medium"
              style={{ color: "#5E6282", fontFamily: "Poppins" }}
            >
              Engrossed listening. Park gate sell they west hard for the.
            </p>
          </div>

          <div className="w-1/5 text-center p-2">
            <img
              src={Cat3}
              alt=""
              className="max-w-full mx-auto"
              width={70}
              height={75}
            />
            <h5
              className="text-xl font-semibold"
              style={{ color: "#1E1D4C", fontFamily: "Open Sans" }}
            >
              Local Events
            </h5>
            <p
              className="text-base font-medium"
              style={{ color: "#5E6282", fontFamily: "Poppins" }}
            >
              Barton vanity itself do in it. Preferd to men it engrossed
              listening.{" "}
            </p>
          </div>
          <div className="w-1/5 text-center p-2">
            <img
              src={Cat4}
              alt=""
              className="max-w-full mx-auto"
              width={80}
              height={80}
            />
            <h5
              className="text-xl font-semibold"
              style={{ color: "#1E1D4C", fontFamily: "Open Sans" }}
            >
              Customization
            </h5>
            <p
              className="text-base font-medium"
              style={{ color: "#5E6282", fontFamily: "Poppins" }}
            >
              We deliver outsourced aviation services for military customers
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
