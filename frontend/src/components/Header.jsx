import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="max-container flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 sm:px-10  md:px-10 ">
      {/* ----------- LEFT SIDE ----------- */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10  md:py-40 md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4 text-white text-sm font-light mt-4">
          <img className="w-24" src={assets.group_profiles} alt="" />
          <p>
            Simply browse through our extensive list of trusted doctors <br />{" "}
            Schedule your appointment hastle-free
          </p>
        </div>
        <div className="flex mt-4">
          <a
            className="flex gap-2 items-center justify-center rounded-full bg-white text-slate-900 px-8 py-3 hover:scale-105 transition-all duration-300 ease-in-out"
            href="#speciality"
          >
            Book appointment{" "}
            <img className="w-2.5" src={assets.arrow_icon} alt="" />
          </a>
        </div>
      </div>

      {/* ----------- RIGHT SIDE ----------- */}
      <div className="md:w-1/2 relative">
        <img
          className="w-full md:absolute bottom-0 h-auto rounded"
          src={assets.header_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
