import React from "react";
import BlogImg from "../assets/img/itadaki-YWY_AASpmEI-unsplash.jpg";
import BlogImg2 from "../assets/img/huma-kabakci-oRk4Ep65tRc-unsplash.jpg";
import BlogImg3 from "../assets/img/hackathon.jpg";

const Blog = () => {
  return (
    <div>
      <section className="rowin h-[100vh] mb-8 lg:h-full" id="blog">
        <div className="blog p-8 pt-32 mt-[105px] lg:pt-1 lg:mt-1 lg:p-2">
          <div className="main-text text-center" >
            <p className="text-[15px] mb-[15px]">Read!</p>
            <h2 className="text-[2.8rem] leading-[1]">
              <span className="text-blue-500">My </span> Blog
            </h2>
          </div>
          <div className="blog-content grid grid-cols-3 items-center justify-items-center gap-10 mt-20 lg:grid-cols-1" >
            <div className="box max-w-xl bg-gray-900 px-[45px] py-[35px] rounded-[8px] transition-all ease-linear duration-[.45s] hover:drop-shadow-md hover:scale-105">
              <div className="blog-img">
                <img
                  className="h-auto w-full rounded-[8px] mt-[20px]"
                  src={BlogImg}
                  alt=""
                />
              </div>
              <h3 className="text-[24px] font-[600] mt-[15px]">
                First Pc build
              </h3>
              <p className="text-[1rem] leading-[1.8] mb-[20px]">
                In this blog we will see my first PC build and also I will guide
                you for your PC build, read full blog.
              </p>
              <a
                href="https://surajmahato.hashnode.dev/first-pc-build"
                className="read inline-block px-[18px] py-[8px] bg-gray-600 rounded-[8px] hover:bg-gray-800"
                target="_blank"
              >
                Read More
              </a>
            </div>
            <div className="box max-w-xl bg-gray-900 px-[45px] py-[35px] rounded-[8px] transition-all ease-linear duration-[.45s] hover:drop-shadow-md hover:scale-105 lg:hidden">
              <div className="blog-img">
                <img
                  className="h-auto w-full rounded-[8px] mt-[20px]"
                  src={BlogImg3}
                  alt=""
                />
              </div>
              <h3 className="text-[24px] font-[600] mt-[15px]">
                My Hackathon Experience
              </h3>
              <p className="text-[1rem] leading-[1.8] mb-[20px]">
                In this blog we will see why participating in Hackathon is good for your growth and learning.
              </p>
              <a
                href="https://surajmahato.hashnode.dev/first-pc-build"
                className="read inline-block px-[18px] py-[8px] bg-gray-600 rounded-[8px] hover:bg-gray-800"
                target="_blank"
              >
                Read More
              </a>
            </div>
            <div className="box max-w-xl bg-gray-900 px-[45px] py-[35px] rounded-[8px] transition-all ease-linear duration-[.45s] hover:drop-shadow-md hover:scale-105">
              <div className="blog-img">
                <img
                  className="h-auto w-full rounded-[8px] mt-[20px]"
                  src={BlogImg2}
                  alt=""
                />
              </div>
              <h3 className="text-[24px] font-[600] mt-[15px]">Coming Soon</h3>
              <p className="text-[1rem] leading-[1.8] mb-[20px]">
                Stay tuned, for more upcoming blogs you can follow me on
                hashnode for getting my latest blogs.
              </p>
              <a
                href="https://hashnode.com/@surajmahato"
                target="_blank"
                className="read inline-block px-[18px] py-[8px] bg-gray-600 rounded-[8px] hover:bg-gray-800"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
