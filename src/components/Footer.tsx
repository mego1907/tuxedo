import FooterLogo from "@/icons/FooterLogo";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import Link from "next/link";

const Footer = () => {
  const firstSection = [
    {
      id: 1,
      name: "ABOUT",
      path: "/about",
    },
    {
      id: 2,
      name: "THE APP",
      path: "/the-app",
    },
    {
      id: 3,
      name: "BRANDS",
      path: "/brands",
    },
  ];

  const secondSection = [
    {
      id: 1,
      name: "CONTACT",
      path: "/contact",
    },
    {
      id: 2,
      name: "PRIVACY POLICY",
      path: "/privacy-policy",
    },
    {
      id: 3,
      name: "TERMS OF USE",
      path: "/terms-of-use",
    },
  ];

  return (
    <div className=" relative overflow-hidden">
      <div className="container mx-auto py-24">
        <div className="grid md:grid-cols-[1fr_1fr_1fr_1fr_0.4fr] lg:grid-cols-[1fr_1fr_1fr_1fr_0.6fr] grid-cols-1">
          <div className="flex flex-col justify-start items-start gap-4 md:pb-0 pb-8">
            <FooterLogo />

            <div className="flex items-center  gap-5 text-white text-xl">
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaFacebook />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-5 md:text-lg text-sm md:pb-0 pb-8">
            {firstSection.map(({ id, name, path }) => (
              <Link href={path} key={id}>
                {name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-5 md:text-lg text-sm md:pb-0 pb-8">
            {secondSection.map(({ id, name, path }) => (
              <Link href={path} key={id}>
                {name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3 md:text-lg text-sm md:pb-0 pb-8">
            <a href="#" className="flex gap-4 items-center">
              <BsEnvelope fontSize={24} />
              <span>info@tuxedo.app</span>
            </a>
            <a href="#" className="flex gap-4 items-center">
              <FiPhone fontSize={24} />
              <span>011-466-6466</span>
            </a>
            <a href="#" className="flex gap-4 items-center">
              <SlLocationPin className="md:text-[40px] text-xl" />
              <span>
                Hittin District Northern Ring Road, Riyadh, Saudi Arabia
              </span>
            </a>
          </div>

          <div>
            <img
              src="/assets/images/lizard.png"
              alt="lizard"
              className="w-44 rotate-180 absolute top-0 translate-x-9 md:right-auto right-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
