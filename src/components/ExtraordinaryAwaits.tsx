import AppStoreDownloadIcon from "@/icons/AppStoreDownloadIcon";
import GooglePlayDownloadIcon from "@/icons/GooglePlayDownloadIcon";
import LockIcon from "@/icons/LockIcon";
import MessageIcon from "@/icons/MessageIcon";
import MobileIcon from "@/icons/MobileIcon";
import { ExtraordinaryAwaitsDataTypes } from "@/types";
import React from "react";
import ExtraordinaryAwaitsHeader from "./ExtraordinaryAwaitsHeader";

const ExtraordinaryAwaits = () => {
  const data: ExtraordinaryAwaitsDataTypes[] = [
    {
      id: 1,
      icon: <LockIcon />,
      text: "Gain priority and exclusive access to the newest and most exclusive events, restaurants and experiences.",
    },
    {
      id: 2,
      icon: <MessageIcon />,
      text: "Make and manage reservations, purchases and bookings in seconds. Socialise, connect and access customer support.",
    },
    {
      id: 3,
      icon: <MobileIcon />,
      text: "Tuxedo keeps you up to date with the most exciting lifestyle experiences in the Kingdom.",
    },
  ];

  return (
    <div>
      <div className="container mx-auto lg:px-28 md:px-7 px-3 py-20">
        <ExtraordinaryAwaitsHeader />

        <div className="rounded-lg md:border relative md:border-primary flex md:flex-row flex-col gap-16 lg:px-40 px-14 py-10">
          <img
            src="/assets/images/lizard.png"
            alt="lizard"
            className="absolute w-48 -left-[4.5rem] -top-20 md:block hidden"
          />
          {data.map((item) => {
            return (
              <div className="flex flex-col md:gap-10" key={item.id}>
                <div className="flex md:mb-0 mb-5">{item.icon}</div>
                <p className="text-white md:text-lg text-sm font-medium">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExtraordinaryAwaits;
