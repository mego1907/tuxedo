import React from "react";

const GetInTouch = () => {
  return (
    <div>
      <div className="container mx-auto md:px-60 px-4 py-20">
        <h3 className="text-4xl text-white font-medium mb-4">GET IN TOUCH</h3>
        <p className="text-lg text-white">
          To obtain more information about the application, please fill out the
          form and we will contact you ASAP
        </p>

        <form className="flex flex-col gap-8 mt-10">
          <div className="grid justify-center grid-cols-2 gap-10">
            <label className="border border-primary rounded-lg">
              <input
                type="text"
                placeholder="FIRST NAME"
                className="w-full bg-transparent p-2 pl-7 outline-none"
              />
            </label>
            <label className="border border-primary rounded-lg">
              <input
                type="text"
                placeholder="FIRST NAME"
                className="w-full bg-transparent p-3 pl-7 outline-none"
              />
            </label>
          </div>
          <label className="border border-primary rounded-lg">
            <input
              type="text"
              placeholder="EMAIL"
              className="w-full bg-transparent p-3 pl-7 outline-none"
            />
          </label>
          <label className="border border-primary rounded-lg">
            <textarea
              placeholder="MESSAGE"
              className="w-full bg-transparent p-3 pl-7 outline-none"
            />
          </label>

          <div className="flex justify-center">
            <button
              type="button"
              className="text-black bg-primary px-16 py-3 rounded-lg"
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
