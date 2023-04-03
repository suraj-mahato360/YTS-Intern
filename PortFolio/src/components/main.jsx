import React from "react";
import mainImg from "../assets/img/mainImg.png";
import Resume from '../assets/Resume-3.pdf'

const main = () => {
  return (
    <div>
      <section className="rowin" id="home">
        <div className="home">
          <div className="content h-[100vh] flex justify-evenly items-center lg:flex-wrap-reverse lg:justify-center lg:text-center">
            <div className="name text-white" data-aos="fade-right">
              <h1 className="text-7xl mb-2 lg:text-5xl">Suraj Mahato</h1>
              <h2 className="text-4xl mb-1 lg:text-3xl">
                Software <span className="text-blue-500">Developer.</span>
              </h2>
              <p className="text-[1.5rem]">Keep It Simple</p>
              <div className="btn p-5 pl-0">
                <a href={Resume} target="_blank">
                  <button className="p-4 bg-blue-500 rounded-md font-bold text-[1rem] hover:drop-shadow-md hover:scale-105">Resume</button>
                </a>
              </div>
            </div>
            <div className="img" data-aos="fade-left">
              <img className="lg:object-scale-down lg:mt-8" src={mainImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default main;
