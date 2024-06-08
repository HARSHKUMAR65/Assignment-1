import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cardData = [
    { img1: "https://images.unsplash.com/photo-1716506479875-70a866214c71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D", img2: "https://images.unsplash.com/photo-1717457779714-33b88744eab3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8", h1: "The New Shop", h2: "The real state investmenr is on boomb", p: "Republic Funding Portal. Ring CF" },
    { img1: "https://images.unsplash.com/photo-1716654975857-649bcfbe9605?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D", img2: "https://plus.unsplash.com/premium_photo-1669279283156-7cca8ccba55c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8", h1: "Groma  Reit", h2: "Leverging an Air pollution", p: "Republic Funding Portal. Ring CF" },
    { img1: "https://plus.unsplash.com/premium_photo-1669863791280-fd9c40cc9e3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D", img2: "https://images.unsplash.com/photo-1696549999348-71ec08f04cc1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8", h1: "Fuel Gems", h2: "Gems of Fuel", p: "Republic Funding Portal. Ring CF" },
    { img1: "https://images.unsplash.com/photo-1714138665028-95e35021d928?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D", img2: "https://images.unsplash.com/photo-1716813376299-c1f9d40a7f7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8", h1: "StudioPod", h2: "Studiopod is the best", p: "Republic Funding Portal. Ring CF" },
    { img1: "https://images.unsplash.com/photo-1717819520943-2f20d73d00c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D", img2: "https://images.unsplash.com/photo-1717457781876-a7f52cfa66dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8", h1: "Sharp Med", h2: "We Only See SharpMed", p: "Republic Funding Portal. Ring CF" },
    { img1: "https://images.unsplash.com/photo-1715553179509-88f536acabcc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D", img2: "https://images.unsplash.com/photo-1716660565802-52f1a05c4f79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8", h1: "Borderless...", h2: " Everyone need Borderless Boundries", p: "Republic Funding Portal. Ring CF" },
    { img1: "https://images.unsplash.com/photo-1717457782081-5900afd1e7c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D", img2: "https://plus.unsplash.com/premium_photo-1663050697110-5a587ae85177?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8", h1: "Studio Pod", h2: "No Need for Studio", p: "Republic Funding Portal. Ring CF" },
    { img1: "https://images.unsplash.com/photo-1717705717956-432114a03149?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D", img2: "https://images.unsplash.com/photo-1717684566059-4d16b456c72a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8", h1: "Reental", h2: "ol is the best", p: "Republic Funding Portal. Ring CF" },
    { img1: "https://plus.unsplash.com/premium_photo-1669864070364-6b24d7bfb515?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D", img2: "https://images.unsplash.com/photo-1715484620057-1145dba8ac76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D", h1: "IP 3", h2: "IP# is the Good IP in it ", p: "Republic Funding Portal. Ring CF" },
    { img1: "https://images.unsplash.com/photo-1717780084943-305381b5f8f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D", img2: "https://images.unsplash.com/photo-1717457781885-d1cd3ede18e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D", h1: "Hydro Wind Energy", h2: "Hydro Wind Energy", p: "Republic Funding Portal. Ring CF" },
    { img1: "https://images.unsplash.com/photo-1717704067715-57d14b090290?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D", img2: "https://images.unsplash.com/photo-1717328357605-9c1c27c6c906?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8", h1: "Zoop", h2: " 1 is the best", p: "Republic Funding Portal. Ring CF" },
    { img1: "https://plus.unsplash.com/premium_photo-1714785786689-ed6b64e28917?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D", img2: "https://plus.unsplash.com/premium_photo-1683141237355-d966b653f414?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D", h1: "Fitbake", h2: "Fitbake is the best", p: "Republic Funding Portal. Ring CF" },
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
                <img src={card.img2} alt="" className="h-16 w-16 border-4 border-white -mt-16 mb-4 ml-5" />
                <h1 className="text-2xl text-left font-bold ml-3 ">{card.h1}</h1>
                <h2 className="text-gray-800 text-left text-xl ml-3">{card.h2}</h2>
                <p className="text-gray-700 leading-relaxed text-left text-sm mx-4 pb-4 ">{card.p}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
};


export default CardSlider;