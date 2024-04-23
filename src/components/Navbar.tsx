"use client";
import { links } from "@/data";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "@/icons/Logo";
import Link from "next/link";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

type NavbarTypes = {
  bgImg: boolean;
};

const Navbar = ({ bgImg }: NavbarTypes) => {
  const [openNavbarInmobile, setOpenNavbarInmobile] = useState(false);
  const [fixedNavbar, setFixedNavbar] = useState(false);

  if (global.window !== undefined) {
    global.window.onscroll = () => {
      if (global.window.scrollY > 300) {
        setFixedNavbar(true);
      } else {
        setFixedNavbar(false);
      }
    };
  }

  return (
    <div
      className={`h-28 flex items-center justify-center z-50 md:static fixed w-full ${
        bgImg ? "bg-navbar-image" : "bg-transparent"
      } ${
        fixedNavbar ? "fixed top-0 left-0 bg-navbar-image" : ""
      } bg-cover bg-center`}
    >
      <div className="container mx-auto ">
        <div className="flex items-center justify-between md:w-full">
          {/* Logo */}
          <Link href={"/"}>
            <Logo className="scale-50 md:scale-100 md:translate-x-0 -translate-x-10" />
          </Link>

          <button
            type="button"
            className="lg:hidden flex mr-3"
            onClick={() => setOpenNavbarInmobile(!openNavbarInmobile)}
          >
            <RxHamburgerMenu fontSize={36} />
          </button>

          {/* Links */}
          <div
            className={`flex items-center gap-10 text-lg uppercase lg:h-auto h-screen lg:w-auto w-full lg:flex-row flex-col transition-all lg:static lg:bg-transparent bg-slate-700 fixed top-28 z-50 ${
              openNavbarInmobile ? "left-0" : "-left-full"
            } `}
          >
            <ul className="flex w-full lg:mt-0 mt-8 lg:flex-row flex-col lg:justify-end justify-center items-center gap-12">
              {links.map((link) => {
                return (
                  <li key={link.id} className="md:w-auto w-full text-center ">
                    <Link href={link.path} className="hover:text-primary">
                      {link.name}
                    </Link>
                  </li>
                );
              })}
              <Link href="/join-us-now" className="block">
                <button type="button" className="relative bg-primary px-8 py-3">
                  JOIN US NOW
                </button>
              </Link>
            </ul>

            <div className="flex items-center gap-5 text-white text-xl">
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
