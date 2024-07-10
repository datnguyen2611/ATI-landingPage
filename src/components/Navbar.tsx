import { Page } from "@/types";
import { Layout, Select } from "antd";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  const { Header } = Layout;

  const pages = [
    {
      path: Page.home,
      title: "Home",
    },
    {
      path: Page.about,
      title: "About Us",
    },
    {
      path: Page.service,
      title: "Services",
    },
    {
      path: Page.product,
      title: "Productions",
    },
    {
      path: Page.industry,
      title: "Industry",
    },
    {
      path: Page.news,
      title: "News",
    },
    {
      path: Page.career,
      title: "Career",
    },
    {
      path: Page.portfolio,
      title: "Portfolio",
    },
  ];

  const languageOptions = [
    { value: "vn", label: "VN" },
    { value: "en", label: "EN" },
  ];

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="bg-black py-5 px-12  w-full z-10 top-0 flex justify-between items-center">
      <div className="text-lg font-bold flex items-center space-x-2">
        <img
          src="/public/logo.png"
          className="max-w-full"
        />
      </div>
      <div className="hidden md:flex  items-center">
        {pages.map((page, index) => {
          return (
            <NavbarItem
              href={page.path}
              label={page.title}
              key={index}
            />
          );
        })}
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            onChange={handleChange}
            options={languageOptions}
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Contact
        </button>
      </div>
      <div className="md:hidden">
        <button className="focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default Navbar;
