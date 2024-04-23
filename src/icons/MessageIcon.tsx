import * as React from "react";
import { SVGProps } from "react";
const MessageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <mask
      id="a3"
      width={40}
      height={40}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path fill="#fff" d="M40 0H0v40h40V0Z" />
    </mask>
    <g mask="url(#a3)">
      <path
        stroke="#C47960"
        d="M29.839 14.376a3.3 3.3 0 1 1-3.3 3.3 3.319 3.319 0 0 1 3.3-3.3Zm-9.9 0a3.3 3.3 0 1 1-3.3 3.3 3.319 3.319 0 0 1 3.3-3.3Zm-9.9 0a3.3 3.3 0 1 1-3.3 3.3 3.32 3.32 0 0 1 3.3-3.3Zm9.897-14.3C9.08.076.13 7.892.13 17.676A16.955 16.955 0 0 0 7.494 31.34c.271.285.434.657.46 1.05l-.984 4.9a2.025 2.025 0 0 0 1.96 2.397 4.4 4.4 0 0 0 2.64-.881l4.324-3.241a3.864 3.864 0 0 1 1.727-.42c.764.086 1.531.133 2.3.141h.013c10.856 0 19.805-7.817 19.805-17.606 0-9.789-8.946-17.604-19.803-17.604Z"
      />
    </g>
  </svg>
);
export default MessageIcon;
