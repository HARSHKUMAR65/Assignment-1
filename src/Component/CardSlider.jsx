import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cardData } from '../Utils/constant';


const CardSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return ( <div className="w-full max-w-6xl mx-auto  ">
        <Slider {...settings}>
          {cardData.map((card) => (
            <div key={card.id} className="p-4 w-full">
              <div className="bg-primary-50 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300">
                <img
                  src={card.img1}
                  alt={card.title}
                  className="w-full h-48 object-cover mb-8 rounded-sm"
                />
                <img src={card.img2} alt="" className="h-16 w-16 border-4 border-white -mt-16 mb-4 ml-5" />
                <h1 className="text-2xl text-left font-bold ml-3 ">{card.h1}</h1>
                <h2 className="text-primary-800 text-left text-lg ml-3">{card.h2}</h2>
                <p className="text-primary-700 leading-relaxed text-left text-sm mx-4 pb-4 ">{card.p}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
};


export default CardSlider;