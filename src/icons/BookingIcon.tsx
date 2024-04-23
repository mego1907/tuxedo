import * as React from "react";
import { SVGProps } from "react";
const BookingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={98}
    height={72}
    fill="none"
    {...props}
  >
    <path
      stroke="#F4A8AF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.289}
      d="M17.795 17.989h61.728"
    />
    <mask
      id="vevrevevre5485"
      width={98}
      height={72}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path fill="#fff" d="M97.319.57H0v70.575h97.319V.57Z" />
    </mask>
    <g
      stroke="#F4A8AF"
      strokeLinecap="round"
      strokeLinejoin="round"
      mask="url(#vevrevevre5485)"
    >
      <path strokeWidth={1.289} d="M48.66 70.5V17.988" />
      <path strokeWidth={1.029} d="M41.61 70.5h14.104" />
      <path
        strokeWidth={1.289}
        d="M5.294 70.5V24.218L.644 1.215M34.653 70.5V43.426a6.243 6.243 0 0 0-6.242-6.243H5.294M5.294 45.97h29.359M92.025 70.5V24.218l4.65-23M62.666 70.5V43.426a6.243 6.243 0 0 1 6.242-6.243h23.117M92.025 45.97H62.666"
      />
    </g>
  </svg>
);
export default BookingIcon;
