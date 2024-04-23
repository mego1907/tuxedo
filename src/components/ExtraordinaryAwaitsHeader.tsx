import AppStoreDownloadIcon from "@/icons/AppStoreDownloadIcon";
import GooglePlayDownloadIcon from "@/icons/GooglePlayDownloadIcon";
import React from "react";

const ExtraordinaryAwaitsHeader = () => {
  return (
    <>
      <div className="max-w-[100ch] mb-10">
        <span className="text-primary uppercase leading-10 tracking-[5px]">
          EXTRAORDINARY AWAITS
        </span>
        <h3 className="text-white md:text-4xl text-xl font-medium mt-4 leading-[50px] tracking-wider">
          TUXEDO IS YOUR CONCIERGE IN YOUR POCKET, ALWAYS ON CALL AND IN HAND
        </h3>
      </div>

      <div className="flex md:flex-row flex-col gap-9 mb-20">
        <a href="#">
          <GooglePlayDownloadIcon />
        </a>
        <a href="#">
          <AppStoreDownloadIcon />
        </a>
      </div>
    </>
  );
};

export default ExtraordinaryAwaitsHeader;
