// BrandCarousel.tsx
import React from "react";
import Slider from "react-slick";

const BrandCarousel: React.FC = () => {
  const mainSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    loop: true,
    speed: 1000,
    autoplay: true,
    focusOnSelect: true,
    autoplaySpeed: 3000,
    centerMode: false,
    slidesToShow: 10,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const navSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    loop: true,
    speed: 1000,
    autoplay: true,
    focusOnSelect: true,
    autoplaySpeed: 2900,
    centerMode: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    rtl: true,
    responsive: [
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };

  const renderLogos = () => {
    let logos: string[] = [];
    for (let index = 1; index <= 17; index++) {
      logos.push(`brand-${index}`);
    }
    return logos;
  };

  return (
    <div className="w-full">
      <Slider
        {...mainSettings}
        className="my-5"
      >
        {renderLogos().map((logo, index) => (
          <div
            key={index}
            className="flex justify-center items-center px-2"
          >
            <img
              src={`/logo/${logo}.png`}
              alt={`Logo ${index + 1}`}
              className="max-w-full"
            />
          </div>
        ))}
      </Slider>
      <Slider
        {...navSettings}
        className="my-5"
      >
        {renderLogos().map((logo, index) => (
          <div
            key={index}
            className="flex justify-center items-center px-2"
          >
            <img
              src={`/logo/${logo}.png`}
              alt={`Logo ${index + 1}`}
              className="max-w-full"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BrandCarousel;
