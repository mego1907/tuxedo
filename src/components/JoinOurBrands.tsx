import MobileWithPlus from "@/icons/MobileWithPlus";
import React from "react";

const JoinOurBrands = () => {
  return (
    <div>
      <div className="container mx-auto lg:px-40 md:px-10 px-5 py-20">
        <div className="grid md:grid-cols-[1fr_3fr_1.5fr] items-center py-12 border border-primary rounded-md">
          <div className="flex justify-center md:mb-0 mb-5">
            <MobileWithPlus />
          </div>

          <div className="flex flex-col gap-4 text-white md:text-left text-center">
            <h3 className="uppercase md:text-4xl text-xl font-medium">
              JOIN OUR BRANDS
            </h3>
            <p className="text-xl">
              If you’re a restaurant and would like to join the Tuxedo family
              and reach more customers than ever before, join us today.
            </p>
          </div>

          <div className="flex md:justify-start justify-center md:mt-0 mt-4">
            <button
              type="button"
              className="bg-primary px-16 py-4 rounded-md text-black"
            >
              JOIN US
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinOurBrands;
