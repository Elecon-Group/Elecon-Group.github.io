import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/elconlogo.png"; // adjust path as needed


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 w-full bg-white shadow-sm z-50">
      {/* Top Navbar Row */}
      <div className="flex items-center justify-between px-4 md:px-8 py-2">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/">
           <img src={logo} alt="Logo" className="w-32 md:w-36" />

          </NavLink>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {!isMobileMenuOpen ? (
              <>
                <rect x="5" y="8.5" width="22" height="2" rx="1" fill="#1A1D21" />
                <rect x="5" y="22.5" width="22" height="2" rx="1" fill="#1A1D21" />
              </>
            ) : (
              <path
                stroke="#1A1D21"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className="text-black hover:underline">Home</NavLink>
          <NavLink to="/about" className="text-black hover:underline">About Us</NavLink>
          <NavLink to="/elecon-aerotech" className="text-black hover:underline">Elecon Aerotech</NavLink>
          <NavLink to="/contact" className="text-black hover:underline">Contact</NavLink>
        </div>

        {/* Desktop Call Button */}
        <div className="hidden md:block">
          <a
            href="tel:+918580825850"
            className="px-6 py-2 border border-gray-300 rounded-full text-gray-800 hover:bg-gray-100 transition flex items-center"
          >
            Book A Call
            <svg
              className="ml-2"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"} bg-white`}>
        <div className="flex flex-col items-center justify-center px-4 py-2 space-y-1">
          <NavLink
            to="/"
            className="block py-2 text-gray-700 hover:text-[#0A2259] transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            className="block py-2 text-gray-700 hover:text-[#0A2259] transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </NavLink>
          <NavLink
            to="/elecon-aerotech"
            className="block py-2 text-gray-700 hover:text-[#0A2259] transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Elecon Aerotech
          </NavLink>
          <NavLink
            to="/about"
            className="block py-2 text-gray-700 hover:text-[#0A2259] transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </NavLink>
          <a
            href="tel:+918580825850"
            className="mt-2 px-6 py-2 border border-gray-300 rounded-full text-gray-800 hover:bg-gray-100 transition flex items-center"
          >
            Book A Call
            <svg
              className="ml-2"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
