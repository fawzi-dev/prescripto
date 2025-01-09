import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col md:grid grid-cols-[3fr,1fr,1fr] gap-10 my-12">
        {/* LEFT SIDE */}
        <div>
          <img className="w-40 mb-3" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
            error voluptatum at, minima vero fuga facilis ipsum reprehenderit
            odio, corrupti doloribus incidunt voluptate tempora, tenetur soluta
            eaque eum? Blanditiis, alias.
          </p>
        </div>

        {/* CENTER */}
        <div>
          <p className="text-xl mb-3">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>Blog</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <p className="text-xl mb-3">HELP</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>FAQ</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="text-center py-4 text-sm">© 2023 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
