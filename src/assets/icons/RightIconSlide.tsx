import React from "react";

interface SVGLogoProps {
  width?: number;
  height?: number;
}

const RightIconSlide: React.FC<SVGLogoProps> = ({
  width = 40,
  height = 40,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width={width}
        height={height}
        rx="20"
        fill="black"
        fill-opacity="0.4"
      />
      <path
        d="M15.8804 30.5599L24.5737 21.8666C25.6004 20.8399 25.6004 19.1599 24.5737 18.1333L15.8804 9.43994"
        stroke="white"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RightIconSlide;
