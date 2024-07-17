import React from "react";

interface SVGLogoProps {
  width?: number;
  height?: number;
}

const LeftIconSlide: React.FC<SVGLogoProps> = ({ width = 40, height = 40 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="40"
        height="40"
        rx="20"
        fill="black"
        fillOpacity="0.4"
      />
      <path
        d="M24 30.5599L15.3066 21.8666C14.28 20.8399 14.28 19.1599 15.3066 18.1333L24 9.43994"
        stroke="white"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LeftIconSlide;
