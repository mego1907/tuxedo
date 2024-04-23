import React, { SVGProps } from "react";

const TwitterIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={20}
      fill="none"
      {...props}
    >
      <path
        fill="#fff"
        d="M24.5 2.557a9.831 9.831 0 0 1-2.828.775A4.936 4.936 0 0 0 23.837.608 9.864 9.864 0 0 1 20.71 1.8a4.928 4.928 0 0 0-8.39 4.491A13.976 13.976 0 0 1 2.171 1.15a4.928 4.928 0 0 0 1.524 6.574 4.9 4.9 0 0 1-2.231-.616v.062A4.926 4.926 0 0 0 5.414 12a4.913 4.913 0 0 1-2.227.085 4.929 4.929 0 0 0 4.6 3.42A9.94 9.94 0 0 1 .5 17.54a14 14 0 0 0 21.557-11.8c0-.214 0-.426-.014-.637A10.008 10.008 0 0 0 24.5 2.557Z"
      />
    </svg>
  );
};

export default TwitterIcon;
