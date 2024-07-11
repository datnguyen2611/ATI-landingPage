import React from "react";

interface SVGLogoProps {
  width?: number;
  height?: number;
}

const LightningIcon: React.FC<SVGLogoProps> = ({
  width = 100,
  height = 100,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.0901 11.28H5.1801V18.48C5.1801 20.16 6.0901 20.5 7.2001 19.24L14.7701 10.64C15.7001 9.59 15.3101 8.72 13.9001 8.72H10.8101V1.52C10.8101 -0.159996 9.9001 -0.499996 8.7901 0.760004L1.2201 9.36C0.300102 10.42 0.690102 11.28 2.0901 11.28Z"
        fill="url(#paint0_linear_109_329)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_109_329"
          x1="-1.14086"
          y1="-3.13221"
          x2="19.7188"
          y2="20.2256"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6F4FC" />
          <stop
            offset="0.32"
            stopColor="#018FE5"
          />
          <stop
            offset="0.655"
            stopColor="#018FE5"
          />
          <stop
            offset="1"
            stopColor="#E6F4FC"
          />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LightningIcon;
