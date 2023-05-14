import React from "react";
import Proj1Img from "../assets/img/tastypasty.png";
import Proj2Img from "../assets/img/pocketfund.png";
import Proj3Img from "../assets/img/C++.png";

const Project = () => {
  return (
    <div>
      <section className="rowin h-[100vh] bg-slate-900 lg:h-full" id="project">
        <div className="project p-40 px-10 lg:p-4 lg:px-2">
          <div className="main-text text-center" >
            <p className="text-[15px] mb-[15px]">Projects</p>
            <h2 className="text-[2.8rem] leading-[1]">
              <span className="text-blue-400">Latest</span> Project
            </h2>
          </div>

          <div className="project-content grid grid-cols-3 items-center gap-10 mt-40 lg:grid-cols-2 lg:mt-8 lg:gap-5 sm:grid-cols-1">
            <div className="row group relative overflow-hidden rounded-[8px]" >
              <img
                className="w-full rounded-[8px] block group-hover:scale-[1.1] group-hover:brightness-50"
                src={Proj1Img}
                alt=""
              />
              <div className="layer  w-100 h-0 bg-gradient-to-r from-[rgba(0,0,0,0.1)] to-[#066d8a] absolute rounded-[8px] left-0 bottom-0 overflow-hidden flex flex-col items-center justify-center text-center transition-[height] duration-500 group-hover:h-full">
                <h5 className="text-[25px] font-[600] mb-[15px] lg:text-[20px]">TastyPasty</h5>
                <p className="text-[1rem] leading-[1.8] lg:text-[12px]">
                  This project is one page application in which you can search
                  dishes according to your input ingredient
                </p>
                <a
                  href="https://github.com/suraj-mahato360/TastyPasty"
                  target="_blank"
                >
                  <i className="ri-external-link-fill text-blue-500 mt-[20px] text-[20px] bg-white w-[60px] h-[60px] flex items-center justify-center rounded-full"></i>
                </a>
              </div>
            </div>
            <div className="row group relative overflow-hidden rounded-[8px]" >
              <img className="w-full rounded-[8px] block group-hover:scale-[1.1] group-hover:brightness-50" src={Proj2Img} alt="" />
              <div className="layer  w-100 h-0 bg-gradient-to-r from-[rgba(0,0,0,0.1)] to-[#066d8a] absolute rounded-[8px] left-0 bottom-0 overflow-hidden flex flex-col items-center justify-center text-center transition-[height] duration-500 group-hover:h-full">
                <h5 className="text-[25px] font-[600] mb-[15px] lg:text-[20px]">
                 PocketFund
                </h5>
                <p className="text-[1rem] leading-[1.8] lg:text-[12px]">
                PocketFund is a DAPP, Our platform enables small teams/startups to raise necessary funds via crowdfunding through ledger transactions.
                </p>
                <a
                  href="https://github.com/suraj-mahato360/PocketFund"
                  target="_blank"
                >
                  <i className="ri-external-link-fill text-blue-500 mt-[20px] text-[20px] bg-white w-[60px] h-[60px] flex items-center justify-center rounded-full"></i>
                </a>
              </div>
            </div>
            <div className="row group relative overflow-hidden rounded-[8px]" >
              <img className="w-full rounded-[8px] block group-hover:scale-[1.1] group-hover:brightness-50" src={Proj3Img} alt="" />
              <div className="layer  w-100 h-0 bg-gradient-to-r from-[rgba(0,0,0,0.1)] to-[#066d8a] absolute rounded-[8px] left-0 bottom-0 overflow-hidden flex flex-col items-center justify-center text-center transition-[height] duration-500 group-hover:h-full">
                <h5 className="text-[25px] font-[600] mb-[15px] lg:text-[20px]">
                C++ Mini projects
                </h5>
                <p className="text-[1rem] leading-[1.8] lg:text-[12px]">
                In this project I have created two mini-project in C++ Hotel
                  management system and registration page
                </p>
                <a
                  href="https://github.com/suraj-mahato360/C-plusplus-projects"
                  target="_blank"
                >
                  <i className="ri-external-link-fill text-blue-500 mt-[20px] text-[20px] bg-white w-[60px] h-[60px] flex items-center justify-center rounded-full"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
