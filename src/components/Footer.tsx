import LinkenInIcon from "@/assets/icons/LinkenInIcon";
import TwitterIcon from "@/assets/icons/TwitterIcon";
import { Col, Row } from "antd";
import { Instagram } from "iconsax-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" relative w-full  bg-gray-249 overflow-hidden ">
      <div className="container mx-auto  py-20">
        <Row
          gutter={[16, 16]}
          justify="space-between"
        >
          {/* Logo and Social Media Links */}
          <Col
            xs={24}
            md={6}
          >
            <img
              src="/logo/logo-2.png"
              alt=""
              className="mx-auto"
            />
            <div className="flex mt-4 space-x-4 justify-center">
              <Link
                to={"/"}
                className=" rounded-full p-3 border border-solid border-blue-11 border-opacity-30"
              >
                <Instagram
                  size="24"
                  color="#0B2B44"
                />
              </Link>
              <Link
                to={"/"}
                className=" rounded-full p-3 border border-solid border-blue-11 border-opacity-30"
              >
                <LinkenInIcon
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                to={"/"}
                className=" rounded-full p-3 border border-solid border-blue-11 border-opacity-30"
              >
                <TwitterIcon
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </Col>

          {/* Company Links */}
          <Col
            xs={24}
            md={4}
          >
            <h3 className="text-gray-800 font-semibold">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Recruitment
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Affiliate
                </a>
              </li>
            </ul>
          </Col>

          {/* Legal Links */}
          <Col
            xs={24}
            md={4}
          >
            <h3 className="text-gray-800 font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Sitemap
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Contacts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Help
                </a>
              </li>
            </ul>
          </Col>

          {/* Contact Information */}
          <Col
            xs={24}
            md={6}
          >
            <h3 className="text-gray-800 font-semibold">Find us on</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-600">
                <span className="font-semibold">Phone:</span> (+84 - 4)
                66.82.82.82
              </li>
              <li className="text-gray-600">
                <span className="font-semibold">Fax:</span> (+84 - 4)
                66.82.82.82
              </li>
              <li className="text-gray-600">
                <span className="font-semibold">Address:</span> 81 Le Van Luong
                Str, Thanh Xuan Dist, Ha Noi City, Viet Nam
              </li>
              <li className="text-gray-600">
                <span className="font-semibold">Website:</span>{" "}
                <a
                  href="http://www.ati.vn"
                  className="text-blue-600 hover:underline"
                >
                  http://www.ati.vn
                </a>
              </li>
              <li className="text-gray-600">
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:info@ati.vn"
                  className="text-blue-600 hover:underline"
                >
                  info@ati.vn
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </div>

      <div className="bg-gray-237 py-4 bg-opacity-20">
        <div className="container mx-auto px-4 text-center text-gray-500 text-xs font-normal">
          Copyrights © 2011-2015 ATI. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
