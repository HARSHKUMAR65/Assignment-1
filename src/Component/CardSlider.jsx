import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cardData = [
    { img1: "https://source.unsplash.com/random/300x300?1", img2: "https://source.unsplash.com/random/300x300?2", h1: "Bord 1", h2: "Subtitle 1", p: "This is the first card" },
    { img1: "https://source.unsplash.com/random/300x300?3", img2: "https://source.unsplash.com/random/300x300?4", h1: "Bord 2", h2: "Subtitle 2", p: "This is the second card" },
    { img1: "https://source.unsplash.com/random/300x300?5", img2: "https://source.unsplash.com/random/300x300?6", h1: "Bord 3", h2: "Subtitle 3", p: "This is the third card" },
    { img1: "https://source.unsplash.com/random/300x300?7", img2: "https://source.unsplash.com/random/300x300?8", h1: "Bord 4", h2: "Subtitle 4", p: "This is the fourth card" },
    { img1: "https://source.unsplash.com/random/300x300?9", img2: "https://source.unsplash.com/random/300x300?10", h1: "Bord 5", h2: "Subtitle 5", p: "This is the fifth card" },
    { img1: "https://source.unsplash.com/random/300x300?11", img2: "https://source.unsplash.com/random/300x300?12", h1: "Bord 6", h2: "Subtitle 6", p: "This is the sixth card" },
    { img1: "https://source.unsplash.com/random/300x300?13", img2: "https://source.unsplash.com/random/300x300?14", h1: "Bord 7", h2: "Subtitle 7", p: "This is the seventh card" },
    { img1: "https://source.unsplash.com/random/300x300?15", img2: "https://source.unsplash.com/random/300x300?16", h1: "Bord 8", h2: "Subtitle 8", p: "This is the eighth card" },
    { img1: "https://source.unsplash.com/random/300x300?17", img2: "https://source.unsplash.com/random/300x300?18", h1: "Bord 9", h2: "Subtitle 9", p: "This is the ninth card" },
    { img1: "https://source.unsplash.com/random/300x300?19", img2: "https://source.unsplash.com/random/300x300?20", h1: "Bord 10", h2: "Subtitle 10", p: "This is the tenth card" },
    { img1: "https://source.unsplash.com/random/300x300?21", img2: "https://source.unsplash.com/random/300x300?22", h1: "Bord 11", h2: "Subtitle 11", p: "This is the eleventh card" },
    { img1: "https://source.unsplash.com/random/300x300?23", img2: "https://source.unsplash.com/random/300x300?24", h1: "Bord 12", h2: "Subtitle 12", p: "This is the twelfth card" },
];


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

    return ( <div className="w-full max-w-6xl mx-auto   border-2 ">
        <Slider {...settings}>
          {cardData.map((card) => (
            <div key={card.id} className="p-4">
              <div className="bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300">
                <img
                  src={card.img1}
                  alt={card.title}
                  className="w-full h-48 object-cover mb-8 rounded-sm"
                />
                <img src={card.img2} alt="" className="h-16 w-16 border-4 border-white -mt-16 mb-4 ml-5 rounded-full" />
                <h1 className="text-3xl text-left font-bold ml-3 ">{card.h1}</h1>
                <h2 className="text-gray-800 text-left text-xl ml-3">{card.h2}</h2>
                <p className="text-gray-700 leading-relaxed text-left text-sm ml-2 ">{card.p}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
};


export default CardSlider;