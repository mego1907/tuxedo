import BookingIcon from "@/icons/BookingIcon";
import SpoonAndForkIcon from "@/icons/SpoonAndForkIcon";
import UserIcon from "@/icons/UserIcon";
import React from "react";

const TuxedosExclusiveBenefits = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="container mx-auto lg:px-52 ">
        <h3 className="md:text-5xl text-2xl text-center font-medium">
          ENJOY TUXEDO’S EXCLUSIVE BENEFITS
        </h3>

        <div className="grid md:grid-cols-2 grid-cols-[0.5fr_1fr] items-center md:pb-0 pb-8">
          <div className="flex justify-center">
            <img
              src="/assets/images/mobile-lizard.png"
              alt=""
              className="md:translate-x-0 -translate-x-1/2"
            />
          </div>

          <div className="flex flex-col text-center justify-center items-center gap-5">
            <UserIcon />
            <h3 className="md:text-4xl text-xl font-medium">
              BECOME A <span className="text-primary">VIP</span>
            </h3>
            <p className="md:text-lg text-sm">
              Be one of our distinguished partners to get many benefits and
              offers. We have many international and local restaurant partners
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-[1fr_0.5fr] items-center relative md:pb-0 pb-8">
          <div className="flex flex-col text-center justify-center items-center gap-5">
            <SpoonAndForkIcon />
            <h3 className="md:text-4xl text-2xl font-medium">GREAT SERVICES</h3>
            <p className="text-sm md:text-lg">
              TUXEDO app provides you with the best services and helps you to
              reserve your table and choose the best tables in the most
              prestigious restaurants. We provide you with hundreds of
              restaurants that are waiting for your reservation.
            </p>

            <img
              src="/assets/images/lizard.png"
              alt="lizard"
              className="absolute w-[500px] -right-96 -bottom-60 rotate-[170deg] md:block hidden"
            />
          </div>

          <div className="flex justify-center">
            <img
              src="/assets/images/mobile-lizard.png"
              alt=""
              className="md:translate-x-0 translate-x-1/2"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-[0.5fr_1fr] items-center md:pb-0 pb-8">
          <div className="flex justify-center">
            <img
              src="/assets/images/mobile-lizard.png"
              alt=""
              className="md:translate-x-0 -translate-x-1/2"
            />
          </div>

          <div className="flex flex-col text-center justify-center items-center gap-5">
            <BookingIcon />
            <h3 className="md:text-4xl text-2xl font-medium">EASY BOOKING</h3>
            <p className="md:text-lg text-sm">
              Our app provides you with the best services and helps you to
              reserve your table and choose the best tables in the most
              prestigious restaurants. We provide you with hundreds of
              restaurants that are waiting for your reservation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TuxedosExclusiveBenefits;
