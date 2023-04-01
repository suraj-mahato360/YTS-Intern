import React from "react";
import ImgSlider from "./ImgSlider";
import ImgSlider2 from "./ImgSlider2";
import ImgSlider3 from "./ImgSlider3";

const Life = () => {
  return (
    <div>
      <section className="rowin h-[100vh] mb-8 lg:h-full" id="life">
        <div className="life  p-8 pt-40 mt-[105px] lg:pt-1 lg:mt-12">
          <div className="main-text text-center">
            <h2 className="text-[2.8rem] leading-[1] lg:mb-8">
              <span className="text-blue-500 ">My </span> Life
            </h2>
          </div>
          <div className="image grid grid-cols-3 items-center justify-items-center gap-10 mt-28 lg:grid-cols-1 lg:mt-1 lg:p-2">
            <div className="trekking bg-slate-900 max-w-[600px] max-h-[300px] rounded-[8px] lg:max-w-[400px] lg:max-h-[200px]">
              <div className="title text-center text-3xl p-3">
                <h2>Travel</h2>
              </div>
              <ImgSlider />
            </div>

            <div className="photography bg-slate-900 max-w-[600px] max-h-[300px] rounded-[8px] lg:max-w-[400px] lg:max-h-[200px]">
              <div className="title text-center text-3xl p-3">
                <h2>Photography</h2>
              </div>
              <ImgSlider2 />
            </div>
            <div className="Drawing bg-slate-900 max-w-[600px] max-h-[300px] rounded-[8px] lg:max-w-[400px] lg:max-h-[200px]">
              <div className="title text-center text-3xl p-3">
                <h2>Drawing</h2>
              </div>
              <ImgSlider3 />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Life;
