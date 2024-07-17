import AboutUs from "@/components/home/AboutUs";
import Banner from "@/components/home/Banner";
import BrandCarousel from "@/components/home/BrandCarousel";
import BusinessArea from "@/components/home/BusinessArea";
import Ecosystem from "@/components/home/Ecosystem";
import Life from "@/components/home/Life";
import Portfolio from "@/components/home/Portfolio";
import Solutions from "@/components/home/Solutions";
import WhatdoWeDo from "@/components/home/WhatdoWeDo";

const Home = () => {
  return (
    <div className="w-full h-full relative bg-white">
      <Banner />
      <BrandCarousel />
      <div className="max-w-screen-xl  mx-auto">
        <div className="sm:my-10 my-5">
          <div className=" text-center">
            <h2 className="text-primary sm:mb-5 mb-2 font-bold sm:text-5xl  text-3xl">
              About Us
            </h2>
            <p className="sm:w-1/3 w-11/12 mx-auto text-gray-600 text-opacity-60">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the. It was popularised in the{" "}
            </p>
          </div>
          <AboutUs />
        </div>

        <div className="business-container">
          <div className=" text-center">
            <h2 className="text-primary sm:mb-5 mb-2 font-bold sm:text-5xl  text-3xl">
              Business areas
            </h2>
            <p className="sm:w-1/3 w-11/12 mx-auto text-gray-600 text-opacity-60">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the. It was popularised in the
            </p>
          </div>
          <BusinessArea />
        </div>

        <div className="portfolio-container my-20">
          <div className=" text-center mb-10">
            <h2 className="text-primary sm:mb-5 mb-2 font-bold sm:text-5xl  text-3xl">
              Our portfolio
            </h2>
            <p className="sm:w-1/3 w-11/12 mx-auto text-gray-600 text-opacity-60">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the. It was popularised in the
            </p>
          </div>
          <Portfolio />
        </div>
        <div>
          <div className=" text-center mb-10">
            <h2 className="text-primary sm:mb-5 mb-2 font-bold sm:text-5xl  text-3xl">
              ATI Ecosystem
            </h2>
          </div>
          <Ecosystem />
        </div>
        <div className="container my-20">
          <div className=" text-center mb-10">
            <h2 className="text-primary sm:mb-5 mb-2 font-bold sm:text-5xl  text-3xl">
              What do we do
            </h2>
            <p className="sm:w-1/3 w-11/12 mx-auto text-gray-600 text-opacity-60">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the. It was popularised in the
            </p>
          </div>
          <WhatdoWeDo />
        </div>

        <div className="container mt-20">
          <div className=" text-center mb-10">
            <h2 className="text-primary sm:mb-5 mb-2 font-bold sm:text-5xl  text-3xl">
              Tailor-made solutions for focused industries
            </h2>
            <p className="sm:w-1/3 w-11/12 mx-auto text-gray-600 text-opacity-60">
              We're here for those that struggle with industry specialization in
              Digital Transformation
            </p>
          </div>

          <Solutions />
        </div>

        <div className="container  my-20">
          {/* <WorldMap /> */}
          <img
            src="/world-map.png"
            alt=""
            className="max-w-full"
          />
        </div>

        <div className="containevr my-20">
          <div className=" text-center mb-10">
            <h2 className="text-primary sm:mb-5 mb-2 font-bold sm:text-5xl  text-3xl">
              ATI Life
            </h2>
          </div>

          <Life />
        </div>
      </div>
    </div>
  );
};
export default Home;
