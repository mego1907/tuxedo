import * as React from "react";
import { SVGProps } from "react";

const MobileIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={51}
    fill="none"
    {...props}
  >
    <mask
      id="a2"
      width={28}
      height={51}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path fill="#fff" d="M27.281 0H0v50.138h27.281V0Z" />
    </mask>
    <g mask="url(#a2)">
      <path
        stroke="#C47960"
        d="M26.082 1.2A4.091 4.091 0 0 0 23.189 0H4.092A4.092 4.092 0 0 0 0 4.092v41.954a4.092 4.092 0 0 0 4.092 4.092h19.1a4.092 4.092 0 0 0 4.092-4.092V4.092a4.09 4.09 0 0 0-1.2-2.893M21.84 21.736l-8.866 8.9a1.6 1.6 0 0 1-1.1.472 1.473 1.473 0 0 1-1.1-.472l-4.465-4.467a1.579 1.579 0 0 1 2.232-2.232l3.334 3.333 7.766-7.77a1.556 1.556 0 0 1 2.233 0 1.585 1.585 0 0 1-.033 2.231M17.2 2.728l-.455 1.364h-6.213l-.455-1.364H17.2Z"
      />
    </g>
  </svg>
);
export default MobileIcon;
