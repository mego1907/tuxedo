import React, { SVGProps } from "react";

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={22}
      fill="none"
      {...props}
    >
      <path
        fill="#fff"
        d="M22 11.067A11 11 0 1 0 9.281 21.933v-7.686H6.488v-3.18h2.793V8.644c0-2.757 1.642-4.28 4.155-4.28.825.011 1.648.083 2.462.215v2.707h-1.387A1.59 1.59 0 0 0 12.719 9v2.063h3.051l-.488 3.18h-2.563v7.686A11 11 0 0 0 22 11.067Z"
      />
    </svg>
  );
};

export default FacebookIcon;
