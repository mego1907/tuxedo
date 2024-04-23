import * as React from "react";
import { SVGProps } from "react";
const LockIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={47}
    fill="none"
    {...props}
  >
    <mask
      id="a1"
      width={34}
      height={47}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path fill="#fff" d="M33.554 0H0v46.213h33.554V0Z" />
    </mask>
    <g stroke="#C47960" mask="url(#a1)">
      <path d="M27.6 18.362v-7.535a10.827 10.827 0 1 0-21.654 0 1.65 1.65 0 1 0 3.3 0 7.526 7.526 0 1 1 15.052 0v7.526H6.156A6.16 6.16 0 0 0 0 24.5v15.565a6.16 6.16 0 0 0 6.156 6.148H27.4a6.16 6.16 0 0 0 6.156-6.148V24.5a6.15 6.15 0 0 0-5.95-6.14m-.7 16.5a1.65 1.65 0 1 1-3.3 0v-.924H17.28a5.422 5.422 0 1 1 0-3.3h7.972a1.655 1.655 0 0 1 1.65 1.65l.004 2.574Z" />
      <path d="M12.097 30.162a2.125 2.125 0 1 0 2.145 2.121 2.136 2.136 0 0 0-2.145-2.121Z" />
    </g>
  </svg>
);
export default LockIcon;
