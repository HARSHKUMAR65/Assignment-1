import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiStar } from "react-icons/ci";
import { MdOutlineIosShare } from "react-icons/md";
import CardSlider from "./CardSlider";
import { image_URL , homeOptions } from "../Utils/constant";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setActiveIndex(next),
  };

  return (
    <>
      <div className="w-full max-w-6xl mx-auto">
        <div className="w-full max-w-7xl px-4">
          <div className="flex flex-col md:flex-row justify-between  ">
            <div className="py-6 w-full px-[-10px]">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-5">
                  <img
                    src="https://uploads.republic.com/p/offerings/logos/small/000/003/828/3828-1699371072-c871491e2c437a068520bdde18d94ca81a9e365a.png"
                    alt="Logo"
                    className="w-12 h-12 rounded-full"
                  />
                  <h1 className="text-3xl font-bold text-primary-800">Supersapiens</h1>
                </div>
                <div className="flex gap-2 text-3xl">
                <CiStar className="hover:text-secondary-600" />
                  <MdOutlineIosShare className="text-primary-600 hover:text-secondary-600" />
                </div>
              </div>
              <div className="text-lg text-primary-600 mb-4">
                Glucose: The cornerstone of metabolic health
              </div>
              <div className="flex flex-wrap gap-2">
                {homeOptions.map((option, index) => (
                  <a key={index} className={`px-3  py-1 bg-primary-200 text-primary-800 rounded-md text-sm ${index===1 ? 'bg-secondary-50 text-secondary-500': ''}`}>
                    {option}
                  </a>
                ))}
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto">
        <Slider {...settings}>
          {image_URL.map((imageUrl, index) => (
            <div key={index}>
              <img src={imageUrl} alt={`Slider Image ${index}`} className="w-full" />
            </div>
          ))}
        </Slider>
        <div className="flex justify- mt-4">
          {image_URL.map((imageUrl, index) => (
            <div key={index} className={`w-64 h-36 bg-primary-400  mx-1 border-2 border-white  ${index === activeIndex ? 'border-4 border-secondary-500  rounded-lg' : ''}`}>
              <img src={imageUrl} alt={`Mini Image ${index}`} className="w-full h-full rounded-lg  " onClick={() => setActiveIndex(index)} />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-primary-200 w-full mt-10">
        <div className="w-full max-w-6xl mx-auto py-10 ">
          <div className="head flex justify-between">
            <h1 className="text-3xl font-bold text-primary-800">Open for investment</h1>
            <p className="text-primary-600">Investors in Supersapiens also invested in these companies. <a href="#" className="text-secondary-500">View more</a> </p>
          </div>
          <div className="cardsld">
            <CardSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
