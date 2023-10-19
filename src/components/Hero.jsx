import React from "react";
import Images from "../assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="hero" className="pt-36">
      <div className="px-4 xl:max-w-6xl lg:max-w-4xl lg:px-0 max-w-sm mx-auto">
        <div className="flex flex-col items-center md:flex-row md:items-center w-full h-full ">
          <div className="flex-auto md:w-5/12 flex flex-col md:justify-start md:items-start justify-center items-center ">
            <p className="text-xs md:text-base lg:text-lg  font-medium">
              More than a <span className="text-teal-500 ">social media</span>
            </p>
            <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl leading-[1.2] flex flex-col items-center justify-center md:items-start md:justify-start">
              <span>Glow Up with</span>{" "}
              <span className="text-teal-500 font-bold">
                GrowMatch <span className="text-black font-semibold">to</span>
              </span>
              <span>Grow Together</span>
            </h1>
            <div className="h-1 w-[78%] md:w-[97%] lg:w-[90%] bg-teal-500 rounded-full mt-3 mb-5 md:mt-5 md:mb-8"></div>
            <p className="font-medium md:text-start text-center w-[70%] text-[10px] md:text-xs md:w-[85%]">
              Lorem ipsum dolor sit amet consectetur. Risus facilisis in pretium
              vel. Ut pretium tempor duis erat porttitor{" "}
            </p>
          </div>
          <div className="flex w-full flex-auto md:w-7/12 md:ml-8 md:pb-14">
            <div className="flex w-full md:justify-start md:items-end relative h-[380px] md:h-[450px] py-6 px-8 ">
              <div className="opacity-0 md:opacity-100 md:absolute md:top-0 md:left-0 md:h-[402px] md:w-full md:bg-[#CBF9DC] md:rounded-tl-[8rem] md:rounded-br-[8rem] lg:rounded-tl-[10rem] lg:rounded-br-[10rem] md:rounded-tr-md md:shadow-xl"></div>
              <div className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] md:top-[50%] md:-translate-y-[50%] md:left-[50%] md:-translate-x-[50%] rounded-full bg-teal-500 md:bg-white w-[250px] h-[250px] md:w-[290px] md:h-[290px] lg:w-[360px] lg:h-[360px] shadow-lg "></div>
              <img
                src={Images.Person}
                alt="person"
                className="w-[200px] md:w-[280px] lg:w-[340px] absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] md:top-[50%] md:-translate-y-[50%] md:left-[50%] md:-translate-x-[50%] "
              />

              <Link
                to="/growmatch"
                className="absolute bottom-[4rem] left-[50%] cursor-pointer -translate-x-[50%] py-2 md:py-3 lg:py5 w-[280px] lg:bottom-0 md:bottom-5 md:left-0 md:translate-x-0  md:w-[80%] text-white font-medium bg-teal-600 rounded-e-full rounded-tl-full text-xl md:text-2xl lg:text-3xl shadow-lg text-center "
              >
                Match Now
              </Link>
              <div className="absolute md:-left-8 md:top-[6rem] rounded-full bg-white md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px] shadow-lg "></div>
              <div className="absolute md:-right-7 md:top-[2.5rem] rounded-full bg-white md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
