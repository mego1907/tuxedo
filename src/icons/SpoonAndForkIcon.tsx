import * as React from "react";
import { SVGProps } from "react";
const SpoonAndForkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={82}
    fill="none"
    {...props}
  >
    <mask
      id="coe454551"
      width={34}
      height={82}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path fill="#fff" d="M33.01.209H0v81.013h33.01V.209Z" />
    </mask>
    <g
      stroke="#F4A8AF"
      strokeLinecap="round"
      strokeLinejoin="round"
      mask="url(#coe454551)"
    >
      <path d="M.5.709v26.362a2.571 2.571 0 0 0 2.571 2.571h13.054a2.57 2.57 0 0 0 2.575-2.571V.709M9.365 80.722V29.278M6.58.709v28.569M12.637.709v28.569M32.51 80.722V.719c-4.663 5.24-8.149 11.9-8.1 19.2.071 9.806 5.872 18.694 8.1 21.59" />
    </g>
  </svg>
);
export default SpoonAndForkIcon;
