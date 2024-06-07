import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import { MdOutlineIosShare } from "react-icons/md";
import CardSlider from "./CardSlider";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const image_URL = [
    'https://uploads.republic.com/p/offerings/slider_media_items/contents/default/000/020/082/20082-1701507571-b947f36da5fec894b0fff7ab0842cc0bf6b73ac4.jpg',
    'https://uploads.republic.com/p/offerings/slider_media_items/contents/default/000/022/062/22062-1705697384-7af29616af148bbbdf66d9434f7557e9e0a25308.png',
    'https://uploads.republic.com/p/offerings/slider_media_items/contents/default/000/022/063/22063-1705697414-7f17210e54c0859bb1e5a58843c752ec91cd4fad.png'
  ];

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
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-5">
                  <img
                    src="https://uploads.republic.com/p/offerings/logos/small/000/003/828/3828-1699371072-c871491e2c437a068520bdde18d94ca81a9e365a.png"
                    alt="Logo"
                    className="w-12 h-12 rounded-full"
                  />
                  <h1 className="text-3xl font-bold text-gray-800">Supersapiens</h1>
                </div>
                <div className="flex gap-2 text-3xl">
                  <FaStar className="" />
                  <MdOutlineIosShare className="text-gray-800" />
                </div>
              </div>
              <div className="text-lg text-gray-600 mb-4">
                Glucose: The cornerstone of metabolic health
              </div>
              <div className="flex flex-wrap gap-2">
                <a href="/tag/saas" className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md text-sm">SaaS</a>
                <a href="/tag/women-founders" className="px-3 py-1 bg-blue-200 text-blue-800 rounded-md text-sm">Women Founders</a>
                <a href="/tag/wellbeing-longevity" className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md text-sm">Wellbeing & Longevity</a>
                <a href="/tag/fitness" className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md text-sm">Fitness</a>
                <a href="/tag/healthtech" className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md text-sm">Healthtech</a>
                <a href="/tag/biotechnology" className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md text-sm">Biotechnology</a>
                <a href="/tag/wearables" className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md text-sm">Wearables</a>
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
            <div key={index} className={`w-64 h-36 bg-gray-400  mx-1 border-2 border-white  ${index === activeIndex ? 'border-4 border-blue-500  rounded-lg' : ''}`}>
              <img src={imageUrl} alt={`Mini Image ${index}`} className="w-full h-full rounded-lg  " onClick={() => setActiveIndex(index)} />
            </div>
          ))}
        </div>
      </div>
      {/* ========================================================================================================================================= */}
      <div className="bg-gray-200 w-full mt-10">
        <div className="w-full max-w-6xl mx-auto py-10 ">
          <div className="head flex justify-between">
            <h1 className="text-3xl font-bold text-gray-800">Open for investment</h1>
            <p className="text-gray-600">Investors in Supersapiens also invested in these companies. <a href="#" className="text-blue-500">View more</a> </p>
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