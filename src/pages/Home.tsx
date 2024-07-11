import Banner from "@/components/home/Banner";
import BrandCarousel from "@/components/home/BrandCarousel";

const Home = () => {
  return (
    <div className="w-full h-full relative">
      <Banner />
      <BrandCarousel />
      <div className="my-20 text-center">
        <h2 className="text-primary mb-5 font-bold text-5xl">About Us</h2>
        <p className="w-1/3 mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the. It was popularised in the{" "}
        </p>
      </div>
    </div>
  );
};
export default Home;
