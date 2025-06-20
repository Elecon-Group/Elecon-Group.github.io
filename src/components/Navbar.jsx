import React, { useState } from "react";
import Breadcrumbs from "./Breadcrumbs";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 right-0 w-full bg-white shadow-sm z-50">
      {/* Top Row: Logo and Mobile Menu Icon */}
      <div className="flex items-center justify-evenly py-2 px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/">
          <svg
            width="144"
            height="42"
            viewBox="0 0 144 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-32 md:w-36"
          >
            <g clipPath="url(#clip0_1_950)">
              <g clipPath="url(#clip1_1_950)">
                <path
                  d="M4.70424 0.83618C4.70424 1.03809 6.2807 3.45699 8.20727 6.21307L11.7113 11.2538L23.9729 11.22C30.7343 11.1871 36.2345 11.0857 36.2345 10.9852C36.2345 10.851 34.6232 8.46487 32.6967 5.64216L29.123 0.5H16.931C8.80304 0.5 4.70424 0.600456 4.70424 0.83618ZM60.3211 8.76923C60.1112 9.181 60.1112 14.4644 60.1818 20.4341L60.3917 31.4126L63.0513 31.6185L65.6413 31.8244L65.502 19.9537L65.2922 8.08294L62.9121 8.01431C61.6519 8.01431 60.4613 8.35745 60.3211 8.76923ZM42.7502 8.90648C42.05 9.11237 41.8402 12.131 41.8402 20.5027V31.8244L49.7503 31.6185L57.5909 31.4126V29.3538C57.5909 27.09 57.7311 27.1587 51.1507 27.0214L47.4408 26.9528V22.1498H56.5416V18.0321H47.4408V13.2291H58.0116L57.8017 10.9643L57.5909 8.76923L50.5908 8.7006C46.7406 8.63197 43.17 8.7006 42.7502 8.90648ZM72.9925 15.5624C67.3918 17.9634 66.4817 25.992 71.3126 29.9714C75.1627 33.197 81.953 31.893 84.1928 27.6391L85.3128 25.5802H82.7228C81.2528 25.5802 79.5728 26.0606 78.8726 26.6783C77.4026 27.9812 74.3919 27.5018 73.7623 25.9233C73.4818 25.0312 74.3223 24.8939 79.2924 24.8939C85.2431 24.8939 85.2431 24.8939 85.2431 23.1096C85.2431 20.1596 83.2131 16.8654 80.6928 15.6997C77.8929 14.3958 75.7923 14.3271 72.9925 15.5624ZM79.5022 20.5713C79.6425 21.189 78.803 21.4635 76.4925 21.4635C73.5524 21.4635 73.272 21.3262 74.0418 20.3654C75.0921 19.1301 79.0129 19.336 79.5022 20.5713ZM91.6833 15.7683C86.2935 18.3752 85.5226 26.1292 90.2132 29.9714C93.2936 32.5793 98.4039 32.5107 101.274 29.8342C102.394 28.8047 103.514 27.2959 103.794 26.4037C104.214 25.0312 104.005 24.8939 101.764 24.8939C100.153 24.8939 98.754 25.3743 97.7733 26.3351C96.0238 28.0498 94.3439 27.7763 93.0131 25.5116C90.8428 21.738 94.6234 17.5517 97.7733 20.3654C98.8942 21.3949 104.144 21.9439 104.144 21.1203C104.144 20.8458 103.654 19.8164 103.094 18.7184C101.063 14.8762 96.0934 13.5722 91.6833 15.7683ZM111.424 15.2193C110.655 15.5624 109.115 16.8654 108.065 18.1007C106.314 20.0909 106.104 20.7772 106.385 24.139C106.664 27.2959 107.084 28.1871 109.044 29.9028C111.145 31.6871 111.705 31.893 115.134 31.6185C120.385 31.2067 122.485 29.1479 122.905 24.0017C123.186 20.5027 123.045 20.0909 120.875 17.6889C118.355 15.0134 114.364 13.984 111.424 15.2193ZM117.165 21.1203C118.565 23.1782 118.005 25.9233 116.044 26.9528C112.894 28.5989 110.024 24.2763 112.194 21.0517C113.595 18.9242 115.695 18.9242 117.165 21.1203ZM132.285 15.6997C131.446 16.2487 130.746 16.386 130.746 16.0428C130.746 15.6311 129.626 15.2879 128.296 15.2879H125.845V31.7558H130.746V27.09C130.746 22.1498 131.935 19.4046 134.176 19.4046C136.416 19.4046 137.046 20.9145 137.046 26.4724V31.8244L139.706 31.6185L142.296 31.4126V25.0312C142.296 18.6497 142.227 18.5811 139.987 16.5909C137.466 14.3271 134.666 14.0526 132.285 15.6997ZM0.5 28.5611V41.5H18.3673C28.212 41.5 36.2345 41.4324 36.2345 41.3319C36.2345 41.2315 34.658 38.8782 32.7315 36.1231L29.2284 31.0814H11.3602V26.3769H18.5423C22.5019 26.3769 25.7244 26.2764 25.6896 26.1083C25.6896 25.9741 24.0783 23.588 22.116 20.8319L18.5075 15.7912L9.50425 15.6898L0.5 15.5893V28.5611Z"
                  fill="#0A1F56"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_1_950">
                <rect
                  width="143"
                  height="41"
                  fill="white"
                  transform="translate(0.5 0.5)"
                  />
              </clipPath>
              <clipPath id="clip1_1_950">
                <rect
                  width="141.796"
                  height="41"
                  fill="white"
                  transform="translate(0.5 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </NavLink>
        </div>

        {/* Mobile Menu Button */}
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
                <rect
                  x="5"
                  y="8.5"
                  width="22"
                  height="2"
                  rx="1"
                  fill="#1A1D21"
                />
                <rect
                  x="5"
                  y="22.5"
                  width="22"
                  height="2"
                  rx="1"
                  fill="#1A1D21"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
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

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/"
            className="text-black relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-black hover:after:w-full after:transition-all after:duration-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            className="text-black relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-black hover:after:w-full after:transition-all after:duration-300"
          >
            Contact
          </NavLink>
          <NavLink
            to="/elecon-aerotech"
            className="text-black relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-black hover:after:w-full after:transition-all after:duration-300"
          >
            Elecon Aerotech
          </NavLink>
          <NavLink
            to="/about"
            className="text-black relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-black hover:after:w-full after:transition-all after:duration-300"
          >
            About Us
          </NavLink>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <a
            href="#book"
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
      <div
        className={`md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } bg-white`}
      >
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
            href="#book"
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
    </div>
  );
};

export default Navbar;
