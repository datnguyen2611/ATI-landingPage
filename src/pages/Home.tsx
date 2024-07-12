import AboutUs from "@/components/home/AboutUs";
import Banner from "@/components/home/Banner";
import BrandCarousel from "@/components/home/BrandCarousel";
import BusinessArea from "@/components/home/BusinessArea";

const Home = () => {
  return (
    <div className="w-full h-full relative">
      <Banner />
      <BrandCarousel />
      <div className="max-w-screen-xl  mx-auto">
        <div className="my-10">
          <div className=" text-center">
            <h2 className="text-primary mb-5 font-bold text-5xl">About Us</h2>
            <p className="w-1/3 mx-auto text-gray-600 text-opacity-60">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the. It was popularised in the{" "}
            </p>
          </div>
          <AboutUs />
        </div>

        <div className="">
          <div className=" text-center">
            <h2 className="text-primary mb-5 font-bold text-5xl">
              Business areas
            </h2>
            <p className="w-1/3 mx-auto text-gray-600 text-opacity-60">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the. It was popularised in the
            </p>
          </div>
          <BusinessArea />
        </div>
      </div>
    </div>
  );
};
export default Home;
