//import-1
import React from "react";
//import-2
import Logo1 from "../../assets/logo1.png";
import Logo2 from "../../assets/logo2.png";
import Logo3 from "../../assets/logo3.png";

const LogoNav = () => {
  return (
    <div className="flex justify-evenly w-10/12 mx-auto mt-14">
      <img src={Logo1} alt="" />
      <img src={Logo2} alt="" />
      <img src={Logo3} alt="" className="bg-transparent rounded-xl shadow-2xl px-4" />
      <img src={Logo1} alt="" />
      <img src={Logo2} alt="" />
    </div>
  );
};

export default LogoNav;
