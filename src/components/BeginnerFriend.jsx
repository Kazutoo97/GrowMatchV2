import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { DataCard } from "../data/CardData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from "../assets/SVG/LeftArrow";
import { Link } from "react-router-dom";

const BeginnerFriend = () => {
  const arrowRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  useEffect(() => {
    setSlideCount(DataCard.length);
  }, []);

  const getSlidesToShow = () => {
    const width = window.innerWidth;
    if (width >= 1280) return 4;
    else if (width >= 1024) return 4;
    else if (width >= 768) return 3;
    else if (width >= 480) return 2;
    else return 1;
  };
  const isAtEnd = currentSlide >= slideCount - getSlidesToShow();

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    afterChange: (current) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
    ],
  };

  return (
    <section className="">
      <div className="px-4 py-4 xl:max-w-6xl lg:max-w-4xl lg:px-0 mx-auto h-fit bg-white relative">
        <div className="text-center md:text-left">
          <h1 className="font-bold text-HeadingCard text-3xl">
            Popular Friends
          </h1>
          <p className="text-base text-textCard">
            Kesempatan belajar bersama orang orang yang berpengalaman di bidang
            ini
          </p>
        </div>
        <Slider ref={arrowRef} {...settings}>
          {DataCard.map((data) => (
            <div
              key={data.name}
              className="box h-fit relative rounded-lg p-[10px] text-center bg-white border border-[#CED4DA] shadow-lg"
            >
              <div className="content">
                <div className="image mt-4">
                  <img
                    src={data.img}
                    alt=""
                    className="h-[120px] w-[120px] rounded-full object-cover block mx-auto mb-1"
                  />
                </div>
                <div className="content-profile mt-2">
                  <p className="name tracking-[1px] text-textBlack font-bold text-base">
                    {data.name}
                  </p>
                  <p className="job-address mt-1 mb-3 text-textBlack text-xs font-medium">
                    Lhokseumawe, Aceh
                  </p>

                  <p className="job-desc mt-4 mb-2 text-xs mx-1  text-descCard font-normal">
                    Bagaimana Darryl Pouros DDS seorang mahasiswa bule asal
                    Universitas Negeri Surakarta mendapatkan pengalaman belajar
                    yang luar biasa sebagai illustrator freelance
                  </p>
                  <p className="job-title text-xs text-sky-600 font-semibold mt-[2px]">
                    Data Science
                  </p>
                </div>

                <div className="button mx-4 mt-4 mb-2 text-center text-white">
                  <Link
                    to="/profile/nama-user"
                    type="button"
                    className="w-full py-2 bg-teal-500 rounded-md flex items-center text-base font-medium justify-center outline-none"
                  >
                    Matching Now
                    <span className="ml-8">
                      <LeftArrow className="h-4 w-4" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={() => arrowRef.current.slickPrev()}
            className={`absolute top-1/2 -left-[1px] -translate-y-1/2 w-[2rem] h-[2rem] bg-teal-500 cursor-pointer text-white rounded-full flex justify-center items-center shadow-lg ${
              currentSlide === 0 ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            <IoIosArrowBack className="" />
          </button>
          <button
            type="button"
            onClick={() => arrowRef.current.slickNext()}
            className={`absolute top-1/2 -translate-y-1/2 -right-[1px] w-[2rem] h-[2rem] bg-teal-500 cursor-pointer text-white flex justify-center items-center rounded-full shadow-lg ${
              isAtEnd ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            <IoIosArrowForward className="" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BeginnerFriend;
