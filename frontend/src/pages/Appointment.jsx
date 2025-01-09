import React, { useState } from "react";

import { useParams } from "react-router-dom";
import { useContext } from "react";
import { useEffect } from "react";
import { AppContext } from "../context/AppContext";

const Appointments = () => {
  const { docId } = useParams();

  const [doctor, setDoctor] = useState({});

  const { doctors } = useContext(AppContext);

  const getDoctor = () => {
    const doctor = doctors.find((item) => item._id === docId);
    setDoctor(doctor);
  };

  useEffect(() => {
    getDoctor();
  }, [doctors, docId]);

  return (
    <div>
      <div>
        {/* ---------- IMAGE ---------- */}
        <div>
          <img src={doctor.image} alt="" />
        </div>

        {/* ---------- DETAILS ---------- */}
        <div>
          <p>
            <span className="font-semibold">Name:</span> {doctor.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
