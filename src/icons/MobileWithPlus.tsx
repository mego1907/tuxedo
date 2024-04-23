import * as React from "react";
import { SVGProps } from "react";
const MobileWithPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={94}
    height={136}
    fill="none"
    {...props}
  >
    <mask
      id="MobileWithPlus88"
      width={94}
      height={136}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path fill="#fff" d="M93.86 0H.141v135.254H93.86V0Z" />
    </mask>
    <g
      stroke="#C47960"
      strokeLinecap="round"
      strokeLinejoin="round"
      mask="url(#MobileWithPlus88)"
    >
      <path d="M79.515 81.976h-12.53v-12.53a4.21 4.21 0 0 0-8.42 0v12.53H46.033a4.21 4.21 0 1 0 0 8.42h12.532v12.53a4.21 4.21 0 1 0 8.42 0v-12.53h12.53a4.21 4.21 0 0 0 0-8.42Z" />
      <path d="M62.773 116.45c16.714 0 30.264-13.55 30.264-30.264s-13.55-30.264-30.264-30.264c-16.715 0-30.264 13.55-30.264 30.264s13.55 30.264 30.264 30.264Z" />
      <path d="M73.673 57.953V11.726a10.899 10.899 0 0 0-3.2-7.71A10.9 10.9 0 0 0 62.762.82H11.868A10.9 10.9 0 0 0 .962 11.726v111.8a10.897 10.897 0 0 0 6.731 10.077c1.324.548 2.742.83 4.175.829h50.9a10.887 10.887 0 0 0 7.711-3.192 10.894 10.894 0 0 0 3.194-7.71v-9.11M46.799 8.09l-1.212 3.635H29.03L27.816 8.09h18.983Z" />
    </g>
  </svg>
);
export default MobileWithPlus;
