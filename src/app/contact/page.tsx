import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const Contact = () => {
  return (
    <div>
      <Navbar bgImg={true} />
      <div className="md:pt-0 pt-32">
        <h3>Contact</h3>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
