import React, { useState } from "react";
import { Page } from "@/types";
import { Button, Select, Drawer, Menu } from "antd";
import NavbarItem from "./NavbarItem";
import { ArrowDown2 } from "iconsax-react";
import { MenuOutlined } from "@ant-design/icons";

const { Option } = Select;

const Navbar = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const pages = [
    { path: Page.home, title: "Home" },
    { path: Page.about, title: "About Us" },
    { path: Page.service, title: "Services" },
    { path: Page.product, title: "Productions" },
    { path: Page.industry, title: "Industry" },
    { path: Page.news, title: "News" },
    { path: Page.career, title: "Career" },
    { path: Page.portfolio, title: "Portfolio" },
  ];

  const languageOptions = [
    { value: "vn", label: "VN" },
    { value: "en", label: "EN" },
  ];

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  const closeDrawer = () => {
    setIsDrawerVisible(false);
  };

  return (
    <div className="bg-transparent py-5 px-4 sm:px-12 w-full z-10 absolute left-0 top-0 flex justify-between items-center">
      <div className="text-lg font-bold flex items-center space-x-2">
        <img
          src="/logo/logo.png"
          className="max-w-full"
          alt="Logo"
        />
      </div>
      <div className="hidden md:flex items-center space-x-6">
        {pages.map((page, index) => (
          <NavbarItem
            href={page.path}
            label={page.title}
            key={index}
          />
        ))}
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
            {languageOptions.map((e, index) => (
              <Option
                value={e.value}
                key={index}
              >
                <div className="flex items-center space-x-1">
                  <img
                    src={`/${e.value}-flag.png`}
                    alt={e.value}
                    className="w-4 h-4 rounded-full"
                  />
                  <span className="font-medium">{e.label}</span>
                </div>
              </Option>
            ))}
          </Select>
        </div>
        <Button className="bg-primary hover:bg-blue-700 text-white font-medium text-sm rounded-full border-none">
          Contact
        </Button>
      </div>
      <div className="md:hidden">
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={showDrawer}
          className="text-white"
        />
      </div>
      <Drawer
        placement="left"
        onClose={closeDrawer}
        width={300}
        visible={isDrawerVisible}
        styles={{
          footer: {
            borderTop: 0,
          },
        }}
        footer={
          <div className="p-4">
            <Select
              defaultValue={languageOptions[0].value}
              onChange={handleChange}
              popupClassName="custom-dropdown"
              className="custom-select w-full"
              suffixIcon={<ArrowDown2 size={16} />}
            >
              {languageOptions.map((e, index) => (
                <Option
                  value={e.value}
                  key={index}
                >
                  <div className="flex items-center space-x-2 justify-center">
                    <img
                      src={`/${e.value}-flag.png`}
                      alt={e.value}
                      className="w-4 h-4 rounded-full"
                    />
                    <span className="font-medium text-black-0">{e.label}</span>
                  </div>
                </Option>
              ))}
            </Select>
            <Button className="bg-primary hover:bg-blue-700 text-white font-medium text-sm rounded-full border-none w-full mt-4">
              Contact
            </Button>
          </div>
        }
      >
        <div className="mt-10 p-2">
          {pages.map((page, index) => (
            <NavbarItem
              href={page.path}
              label={page.title}
              key={index}
            />
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
