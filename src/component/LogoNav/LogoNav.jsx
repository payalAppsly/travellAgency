//import-1
import React from "react";
//import-2
import Logo1 from "../../assets/logo1.png";
import Logo2 from "../../assets/logo2.png";
import Logo3 from "../../assets/logo3.png";

const LogoNav = () => {
  return (
    <div className="flex justify-evenly w-10/12 my-10 mx-auto">
      <img src={Logo1} alt="" />
      <img src={Logo2} alt="" />
      <img src={Logo3} alt="" />
      <img src={Logo1} alt="" />
      <img src={Logo2} alt="" />
      <img src={Logo3} alt="" />
    </div>
  );
};

export default LogoNav;
