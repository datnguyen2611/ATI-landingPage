import Slider from "react-slick";

interface Slide {
  text: string;
  description: string;
  buttonText: string;
  imageUrl: string;
}

const Banner = () => {
  const slides: Slide[] = [
    {
      text: "Unlock Your IT Potential\nJoin Our Team Today",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
      buttonText: "Learn more",
      imageUrl: "banner-1.png", // Update this to the actual path of your image
    },
    {
      text: "Unlock Your IT Potential\nJoin Our Team Today",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
      buttonText: "Learn more",
      imageUrl: "banner-1.png", // Update this to the actual path of your image
    },
    {
      text: "Unlock Your IT Potential\nJoin Our Team Today",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
      buttonText: "Learn more",
      imageUrl: "banner-1.png", // Update this to the actual path of your image
    },
    {
      text: "Unlock Your IT Potential\nJoin Our Team Today",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
      buttonText: "Learn more",
      imageUrl: "banner-1.png", // Update this to the actual path of your image
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplaySpeed: 3000,
    autoplay: true,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: "banner-dots ",
    customPaging: () => <button className="custom-dot" />,
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className="">
      <div className="relative w-full h-full overflow-hidden">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <div
                key={index}
                className="relative w-full h-screen text-left overflow-hidden    bg-cover bg-center flex items-center ellipse-banner "
                style={{
                  backgroundImage: `url(/banner/${slide.imageUrl})`,
                }}
              >
                <div className=" text-white  bg-opacity-50  max-w-[865px]  z-10 left-0  w-full flex  justify-end">
                  <div className="w-[689px] ">
                    <h2 className="text-6xl font-bold mb-6 ">{slide.text}</h2>
                    <p className="text-xl mb-6 text-white text-opacity-60 w-10/12">
                      {slide.description}
                    </p>
                    <button className="bg-primary text-white py-4 px-10 rounded-full text-lg font-medium">
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Banner;
