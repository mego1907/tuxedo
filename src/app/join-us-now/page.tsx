import Banner from "@/components/Banner";
import ExtraordinaryAwaitsHeader from "@/components/ExtraordinaryAwaitsHeader";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const JoinUsNow = () => {
  return (
    <div>
      <Navbar bgImg={true} />

      <div className="container mx-auto md:px-28 px-5 md:pt-0 pt-28">
        {/* Header */}
        <div className="flex flex-col py-10 gap-5">
          <h3 className="text-5xl font-medium text-white">JOIN US</h3>
          <p className="text-lg ">
            join the Tuxedo family and reach more customers than ever before
          </p>
        </div>

        <form className="mb-20">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mb-6">
            <label className="border border-primary rounded-lg">
              <input
                type="text"
                placeholder="FIRST NAME"
                className="w-full bg-transparent p-3 pl-7 text-xl outline-none placeholder:text-white"
              />
            </label>
            <label className="border border-primary rounded-lg">
              <input
                type="text"
                placeholder="LAST NAME"
                className="w-full bg-transparent p-3 pl-7 text-xl outline-none placeholder:text-white"
              />
            </label>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mb-6">
            <label className="border border-primary rounded-lg">
              <input
                type="text"
                placeholder="COMPANY NAME"
                className="w-full bg-transparent p-3 pl-7 text-xl outline-none placeholder:text-white"
              />
            </label>
            <label className="border border-primary rounded-lg">
              <input
                type="text"
                placeholder="BRAND NAME"
                className="w-full bg-transparent p-3 pl-7 text-xl outline-none placeholder:text-white"
              />
            </label>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mb-6">
            <label className="border border-primary rounded-lg">
              <input
                type="text"
                placeholder="PHONE NUMBER"
                className="w-full bg-transparent p-3 pl-7 text-xl outline-none placeholder:text-white"
              />
            </label>
            <label className="border border-primary rounded-lg">
              <input
                type="text"
                placeholder="EMAIL ADDREES"
                className="w-full bg-transparent p-3 pl-7 text-xl outline-none placeholder:text-white"
              />
            </label>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mb-6">
            <label className="border border-primary rounded-lg">
              <input
                type="text"
                placeholder="ID / CR NUMBER"
                className="w-full bg-transparent p-3 pl-7 text-xl outline-none placeholder:text-white"
              />
            </label>
            <label className="border border-primary rounded-lg">
              <input
                type="text"
                placeholder="NUMBER OF BRANCHES"
                className="w-full bg-transparent p-3 pl-7 text-xl outline-none placeholder:text-white"
              />
            </label>
          </div>

          <div className="flex flex-col mb-6">
            <span className="text-lg">UPLOAD C.R. CERTIFICATE </span>
            <button
              type="button"
              className="text-white bg-primary px-16 py-3 rounded-lg mt-4"
            >
              + UPLOAD THE FILE
            </button>
          </div>

          <div className="flex flex-col mb-6">
            <label className="border border-primary rounded-lg w-full">
              <input
                type="text"
                placeholder="SUBJECT"
                className="w-full bg-transparent p-3 pl-7 text-xl outline-none placeholder:text-white"
              />
            </label>
          </div>

          <div className="flex flex-col mb-6">
            <label className="border border-primary rounded-lg w-full">
              <textarea
                placeholder="MESSAGE"
                className="w-full bg-transparent p-3 pl-7 text-xl outline-none placeholder:text-white"
                rows={5}
              />
            </label>
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              className="text-black bg-primary px-20 py-3 rounded-lg"
            >
              SEND
            </button>
          </div>
        </form>

        <ExtraordinaryAwaitsHeader />
      </div>

      <div className="my-20">
        <Banner />
      </div>

      <Footer />
    </div>
  );
};

export default JoinUsNow;
