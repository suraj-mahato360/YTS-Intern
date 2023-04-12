import React from "react";
import logo from "../assets/logo.jpg";
import logo1 from "../assets/DoDler.svg";

const Navbar = () => {
  return (
    <div>
      <header className="w-full top-0 z-[1000] flex justify-between items-center h-20 px-8 bg-gray-950 border-b-2 border-purple-500">
        <div className="logo text-[30px] inline-flex text-center">
          <img className="w-12 h-12" src={logo1} alt="" />
          <h3 className="">
            <span className="text-purple-300">Do</span>Dler
          </h3>
        </div>
        <div className="profile rounded-full">
          <img className="rounded-full w-10 h-10" src={logo} alt="" />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
