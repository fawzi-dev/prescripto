import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <div
      id="speciality"
      className="flex flex-col items-center justify-center py-20 overflow-hidden "
    >
      {/* ---------- HEADER */}
      <h2 className="text-3xl font-semibold">Find By Speciality</h2>
      <p className=" sm:w-1/3 text-sm text-gray-500 text-center mt-2 ">
        Simply browse through our extensive list of trusted doctors and <br />
        schedule your appointment hassle-free
      </p>

      <div className="flex   gap-8 mt-10 ">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            to={`/doctors/${item.speciality}`}
            key={index}
            className="flex items-center flex-col cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-300 ease-in-out"
          >
            <img className="w-16 sm:20" src={item.image} alt="" />
            <p className="text-sm  mt-4 ">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
