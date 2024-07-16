import React from "react";

interface SVGLogoProps {
  width?: number;
  height?: number;
}

const RightIcon: React.FC<SVGLogoProps> = ({ width = 16, height = 16 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 5.9999V3.77489C0 1.01656 1.95833 -0.116771 4.35 1.26656L6.275 2.38323L8.2 3.4999C10.5917 4.88323 10.5917 7.14156 8.2 8.52489L6.275 9.64156L4.35 10.7582C1.95833 12.1166 0 10.9916 0 8.2249V5.9999Z"
        fill="url(#paint0_linear_109_925)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_109_925"
          x1="-1.27896"
          y1="-0.992235"
          x2="9.19474"
          y2="14.1218"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#E6F4FC" />
          <stop
            offset="0.32"
            stop-color="#018FE5"
          />
          <stop
            offset="0.655"
            stop-color="#018FE5"
          />
          <stop
            offset="1"
            stop-color="#E6F4FC"
          />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default RightIcon;
