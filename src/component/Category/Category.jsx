import React from "react";
import Cat1 from "../../assets/cat1.png";
import Cat2 from "../../assets/cat2.png";
import Cat3 from "../../assets/cat3.png";
import Cat4 from "../../assets/cat4.png";

const Category = () => {
  return (
    <>
      <div className="my-10">
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
        <div className="flex w-10/12 mx-auto justify-evenly">
          <div className="w-1/5 text-center">
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
            <p>Built Wicket longer admire do barton vanity itself do in it.</p>
          </div>
          <div className="w-1/5 text-center">
            <img
              src={Cat2}
              alt=""
              className="max-w-full mx-auto"
              width={110}
              height={110}
            />
            <h5
              className="text-xl font-semibold"
              style={{ color: "#1E1D4C", fontFamily: "Open Sans" }}
            >
              Best Flights
            </h5>
            <p>Engrossed listening. Park gate sell they west hard for the.</p>
          </div>
          <div className="w-1/5 text-center">
            <img
              src={Cat3}
              alt=""
              className="max-w-full mx-auto"
              width={80}
              height={80}
            />
            <h5
              className="text-xl font-semibold"
              style={{ color: "#1E1D4C", fontFamily: "Open Sans" }}
            >
              Local Events
            </h5>
            <p>
              Barton vanity itself do in it. Preferd to men it engrossed
              listening.{" "}
            </p>
          </div>
          <div className="w-1/5 text-center">
            <img
              src={Cat4}
              alt=""
              className="max-w-full mx-auto"
              width={90}
              height={90}
            />
            <h5
              className="text-xl font-semibold"
              style={{ color: "#1E1D4C", fontFamily: "Open Sans" }}
            >
              Customization
            </h5>
            <p>
              We deliver outsourced aviation services for military customers
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
