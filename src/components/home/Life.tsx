// Life.tsx
import LeftIconSlide from "@/assets/icons/LeftIconSlide";
import RightIconSlide from "@/assets/icons/RightIconSlide";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const images = [
  "slide-1.png", // Replace with your actual image paths
  "slide-2.png",
  "slide-3.png",
  "slide-4.png",
  "slide-5.png",
  "slide-6.png",
];
const images2 = [
  "slide-3.png", // Replace with your actual image paths
  "slide-2.png",
  "slide-1.png",
  "slide-6.png",
  "slide-4.png",
  "slide-5.png",
];

const Life: React.FC = () => {
  const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} w-10 h-10 z-10 right-5`}
        style={style}
        onClick={onClick}
      >
        <RightIconSlide />
      </div>
    );
  };

  const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} w-10 h-10 z-10 left-5`}
        style={style}
        onClick={onClick}
      >
        <LeftIconSlide />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3, // Show 2 slides at a time
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 3, // Show 2 slides at a time
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,

    rtl: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="container">
      <Slider
        {...settings}
        className="life-carousel"
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="px-3"
          >
            <img
              src={`/slide/${src}`}
              alt={`Slide ${index}`}
              className="max-w-full rounded-2xl"
            />
          </div>
        ))}
      </Slider>

      <Slider
        {...settings2}
        className="my-2 life-carousel"
      >
        {images2.map((src, index) => (
          <div
            key={index}
            className="px-3"
          >
            <img
              src={`/slide/${src}`}
              alt={`Slide ${index}`}
              className="max-w-full rounded-2xl"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Life;
