import React from "react";
import Aboutme from "../assets/img/aboutme.png";
import Dchart from "./Dchart";

const About = () => {
  return (
    <div>
      <section className="rowin h-full bg-slate-900 lg:h-full" id="about">
        <div className="about p-44 grid grid-cols-2 gap-6 items-center lg:grid-cols-1 lg:pt-1 lg:p-2 lg:flex lg:justify-center lg:flex-col lg:gap-0">
          <div className="animate-fadeIn about-img">
            <img
              src={Aboutme}
              alt="my photo"
              className="max-w-[530px] w-full h-auto animate-pulse lg:max-w-[300px]"
            />
          </div>
          <div className="about-text p-5 text-left">
            <h1 className="text-[2.8rem] leading-[1] pb-2 lg:text-[1.5rem] lg:text-center">
              About <span className="text-blue-500">Me</span>
            </h1>
            <h4 className="text-[24px] font-semibold leading-[1.7] mt-2 mb-5 lg:text-[1.2rem] lg:text-center lg:mb-2 lg:mt-2">
              Creative & Techie Developer!
            </h4>

            <p className="text-xl text-left mt-4 whitespace-normal lg:text-[14px] lg:text-center lg:mt-1">
              As a college student pursuing my bachelor's degree, I am eager to
              gain hands-on experience in the field of Web-Development. I have
              gained a solid foundation in HTML, CSS, JavaScript, and React
              through various coursework and personal projects. With a strong
              passion for technology and a creative eye for design, I am
              confident in my ability to create visually appealing and
              user-friendly websites. I am eager to continue my learning and
              growth in the industry, and I am open to new opportunities to
              contribute my skills and enthusiasm to a team.
            </p>
          </div>
        </div>
        <div className="skills flex justify-center flex-col">
          <div className="pb-12">
            <h1 className="text-[2.8rem] text-center leading-[1] pb-2 lg:text-[1.5rem] lg:text-center">
              Skills
            </h1>
          </div>
          <div className="flex justify-evenly flex-wrap pb-8">
            <div className="w-[500px] flex justify-center flex-col lg:w-[400px]">
              <h3 className="block text-center">Web Development</h3>
              <Dchart
                className="w-full"
                labellist={[
                  "ReactJs",
                  "CSS",
                  "HTML",
                  "Javascript",
                  "Tailwind CSS",
                  "NodeJs",
                  "ExpressJs",
                  "MongoDB",
                ]}
                datalist={[7, 8, 9, 8, 8, 7, 7, 7]}
              />
            </div>
            <div className="w-[500px] flex justify-center flex-col lg:w-[400px]">
              <h3 className="block text-center">Languages</h3>
              <Dchart
                className="w-full"
                labellist={["C/C++", "Python", "JavaScript"]}
                datalist={[6, 6, 6]}
              />
            </div>
            <div className="w-[500px] flex justify-center flex-col lg:w-[400px]">
              <h3 className="block text-center">Soft Skills</h3>
              <Dchart
                className="w-full"
                labellist={["Communication", "Problem Solving", "Team Player", "Leadership","Critical Thinker"]}
                datalist={[7, 6, 8, 8, 7]}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
