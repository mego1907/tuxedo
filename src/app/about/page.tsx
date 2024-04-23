import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const About = () => {
  return (
    <div className="">
      <Navbar bgImg={true} />

      <div className="flex flex-col md:pt-0 pt-32 text-white">
        <h3>About</h3>
      </div>

      <Footer />
    </div>
  );
};

export default About;
