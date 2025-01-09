import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { specialityData } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const navigate = useNavigate();

  const { speciality } = useParams();

  const [filteredDoctors, setFilteredDoctors] = useState([]);

  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      const filtered = doctors.filter((item) => item.speciality === speciality);
      setFilteredDoctors(filtered);
    } else {
      setFilteredDoctors(doctors);
    }
  };

  useEffect(() => {
    console.log(!speciality);
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div>
      <p className="text-3xl font-semibold mb-4">Browse by speciality</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 cursor-pointer ">
        <div className="flex flex-col  gap-2 ">
          <p
            onClick={() => navigate(`/doctors/`)}
            to={`/doctors/`}
            className={`border ${
              !speciality ? "border-primary" : "border-gray-300"
            }   bg-indigo-50 flex  justify-start px-2 items-center`}
          >
            <p className="text-sm  p-3 ">All</p>
          </p>
          {specialityData.map((item, index) => (
            <p
              onClick={() => navigate(`/doctors/${item.speciality}`)}
              to={`/doctors/${item.speciality}`}
              key={index}
              className={`border ${
                item.speciality === speciality
                  ? "border-primary"
                  : "border-gray-300"
              } bg-indigo-50 flex justify-start px-2 items-center `}
            >
              <p className="text-sm  p-3 ">{item.speciality}</p>
            </p>
          ))}
        </div>
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6 ">
          {filteredDoctors &&
            filteredDoctors.slice(0, 10).map((item, index) => (
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
      </div>
    </div>
  );
};

export default Doctors;
