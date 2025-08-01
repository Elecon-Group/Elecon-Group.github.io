import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#232223] text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Elecon Group */}
        <div>
          <h3 className="font-bold text-lg mb-4">Elecon Group</h3>
          <p className="text-[#b0b0b0] mb-4">
            Leading the way in plastic injection molding and advanced drone
            technologies.
          </p>
          <div className="text-2xl font-bold tracking-wider text-white">
            ELECON GROUP
          </div>
        </div>

        {/* Our Companies */}
        <div>
          <h3 className="font-bold text-lg mb-4">Our Companies</h3>
          <ul className="space-y-2">
            <li>
              <NavLink to="/" className="text-[#b0b0b0] hover:text-white">
                Elecon Industries
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/elecon-aerotech"
                className="text-[#b0b0b0] hover:text-white"
              >
                Elecon Aerotech
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="text-[#b0b0b0] hover:text-white">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Information</h3>
          <p className="font-bold text-white">Elecon Industries</p>
          <p className="text-[#b0b0b0]">KHASRA NO. 89, 8/1, 9/2, 10/1</p>
          <p className="text-[#b0b0b0]">
            Mouli - Ambala Road, Barwala, Haryana
          </p>
          <p className="text-[#b0b0b0]">Tehsil - Barwala, VPO. Mouli</p>
          <p className="text-[#b0b0b0] mt-4">
            Email:{" "}
            <a
              href="mailto:manish@elecongroup.in"
              className="hover:underline"
            >
              manish@elecongroup.in
            </a>
          </p>
          <p className="text-[#b0b0b0]">Phone: +91 85808 25850</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 border-t border-[#333] pt-6 text-center text-[#b0b0b0] text-sm">
        <p>© 2025 Elecon Group. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
