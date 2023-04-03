import React from "react";
import Aboutme from "../assets/img/aboutme.png";

const About = () => {
  return (
    <div>
      <section className="rowin h-[100vh] bg-slate-900 lg:h-full" id="about">
        <div className="about p-44 grid grid-cols-2 gap-6 items-center lg:grid-cols-1 lg:pt-1 lg:p-2 lg:flex lg:justify-center lg:flex-col lg:gap-0">
          <div className="animate-fadeIn about-img" data-aos="fade-right">
            <img
              src={Aboutme}
              alt="my photo"
              className="max-w-[530px] w-full h-auto animate-pulse lg:max-w-[300px]"
            />
          </div>
          <div className="about-text p-5 text-left" data-aos="fade-down-left">
            <h1 className="text-[2.8rem] leading-[1] pb-2 lg:text-[1.5rem] lg:text-center">
              About <span className="text-blue-500">Me</span>
            </h1>
            <h4 className="text-[24px] font-semibold leading-[1.7] mt-2 mb-5 lg:text-[1.2rem] lg:text-center lg:mb-2 lg:mt-2">
              Creative & Techie Developer!
            </h4>
            {/* <p>I am Suraj Mahato, On a journey of learning technology and contributing to it. My motto, Life is a journey of learning acquiring skills, habits and ourself.</p>
            <div className="edu">
              <h2 className="text-xl mb-5 text-center">Education</h2>
              <div className="edu-info ml-1">
                <div className="mt-3">
                  <p>
                    Thakur College of Engineering and Technology(2020-2024){" "}
                    <span className="ml-1">CGPA-8.02</span>
                  </p>
                  <ul className="ml-1">
                    <li>Branch: Mechanical Engineering</li>
                    <li>Specialization: Robotics</li>
                  </ul>
                </div>
                <div className="mt-3">
                  <p>
                    Thakur College of Science and Commerce(2018-2020){" "}
                    <span className="ml-1">Percentage-68%</span>
                  </p>
                  <ul className="ml-1">
                    <li>Subject: Computer Science</li>
                  </ul>
                </div>
                <div className="mt-3">
                  <p>
                    Gracious English High School
                    <span className="ml-1">Percentage-79.29%</span>
                  </p>
                  <ul className="ml-1">
                    <li>Schooling</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="skill mt-3">
              <h2 className="text-xl mb-2 text-center">Skills</h2>
              <div className="edu-info flex justify-around ml-5">
                <div className="mt-3">
                  <p>
                    Web:
                  </p>
                  <ul className="ml-1">
                    <li>HTML5, CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Express, NodeJs</li>
                  </ul>
                </div>
                <div className="mt-3">
                  <p>
                    App:
                  </p>
                  <ul className="ml-5">
                    <li>Flutter(learning)</li>
                  </ul>
                </div>
                <div className="mt-3">
                  <p>
                    Languages:
                  </p>
                  <ul className="ml-5">
                    <li>Python</li>
                    <li>C/C++</li>
                  </ul>
                </div>
              </div>
            </div> */}
            <p className="text-xl text-left mt-4 whitespace-normal lg:text-[14px] lg:text-center lg:mt-1">
              As a college student pursuing my bachelor's degree, I am eager to
              gain hands-on experience in the field of Web-Development. I
              have gained a solid foundation in HTML, CSS, JavaScript, and React
              through various coursework and personal projects. With a
              strong passion for technology and a creative eye for design,
              I am confident in my ability to create visually appealing
              and user-friendly websites. I am eager to continue my
              learning and growth in the industry, and I am open to new
              opportunities to contribute my skills and enthusiasm to a team.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
