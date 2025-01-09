import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1440px] md:max--w-full mx-auto  flex bg-primary  rounded-lg px-6 sm:px-10 md:px-14 lg-px-12 my-10 ">
      {/* LEFT SIDE */}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24   ">
        <div>
          <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
            Book Appointment
          </p>
          <p className="text-3xl md:text-3xl lg:text-3xl mt-2 text-white  leading-tight md:leading-tight lg:leading-tight">
            With 100+ Trusted Doctors
          </p>
        </div>
        <button
          onClick={() => {
            navigate("/login");
            scrollTo(0, 0);
          }}
          className="mt-4 rounded-full bg-white text-slate-900 px-8 py-3 hover:scale-105 transition-all duration-300 ease-in-out"
        >
          Create account
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
        <img
          className="w-full absolute bottom-0 left-0 max-w-md"
          src={assets.appointment_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
