import React from "react";
import Logo from "@/icons/Logo";
import { links } from "@/data";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="bg-header-image h-screen bg-cover bg-top">
      <Navbar bgImg={false} />
    </div>
  );
};

export default Header;
