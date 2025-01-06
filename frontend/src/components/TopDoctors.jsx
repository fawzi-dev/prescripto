import React from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopDoctors = () => {
  const navigate = useNavigate();

  const doctors = React.useContext(AppContext).doctors;

  return (
    <div className="flex flex-col items-center justify-center py-20">
      {/* ---------- HEADER */}
      <h2 className="text-3xl font-semibold">Top Doctors To Book</h2>
      <p className=" sm:w-1/3 text-sm text-gray-500 text-center mt-2 ">
        Simply browse through our extensive list of trusted doctors and <br />
        schedule your appointment hassle-free
      </p>
      <div className="w-full grid grid-cols-auto gap-4 gap-y-6 mt-10">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={() => navigate(`/appointment/${item._id}`)}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-300 ease-in-out"
            key={index}
          >
            <img src={item.image} alt="" className="bg-blue-50" />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-500">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
        className="mt-10 px-16 py-2 bg-indigo-50 text-primary font-semibold text-sm rounded-full hover:scale-105 transition-all duration-300 ease-in-out"
      >
        More
      </button>
    </div>
  );
};

export default TopDoctors;
