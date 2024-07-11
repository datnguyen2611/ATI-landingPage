import { Page } from "@/types";
import { Button, Select } from "antd";
import NavbarItem from "./NavbarItem";
import { ArrowDown2 } from "iconsax-react";

const Navbar = () => {
  const { Option } = Select;
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
    <div className="bg-black py-5 px-12  w-full z-100 absolute left-0 top-0 flex justify-between items-center">
      <div className="text-lg font-bold flex items-center space-x-2">
        <img
          src="/logo/logo.png"
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
            defaultValue={languageOptions[0].value}
            onChange={handleChange}
            popupClassName="custom-dropdown"
            className="custom-select"
            suffixIcon={<ArrowDown2 size={16} />}
          >
            {languageOptions.map((e, index) => {
              return (
                <Option
                  value={e.value}
                  key={index}
                >
                  <div className="flex items-center space-x-1">
                    <img
                      src="/vn-flag.png"
                      alt="VN"
                      className="w-4 h-4 rounded-full"
                    />
                    <span className="font-medium">{e.label}</span>
                  </div>
                </Option>
              );
            })}
          </Select>
        </div>
        <Button className="bg-primary hover:bg-blue-700 text-white font-medium text-sm  rounded-full border-none font-sf-pro">
          Contact
        </Button>
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
