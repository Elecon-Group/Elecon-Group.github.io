import React from "react";
import industryImg from "../assets/industries_img/P66n6gSOrIxbOSHgKCF36wDQTb0.jpg.png";
import { ParallaxImage } from "./animations";

const sectors = [
  "FMCG & Packaging",
  "Pharmaceutical Containers",
  "Robotics & Automation",
  "Beverage Bottling",
  "Industrial Parts",
  "Household Goods",
];

const IndustryApplication = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 w-full max-w-6xl mx-auto py-12 md:py-16 px-4 bg-white">
      {/* Left Image */}
      <div className="flex-1 flex justify-center items-center order-2 lg:order-1">
        <ParallaxImage
          src={industryImg}
          alt="Industry Application"
          speed={0.2}
          scale={1.02}
          direction="up"
          className="rounded-2xl object-cover w-full max-w-[300px] h-[300px] sm:max-w-[420px] sm:h-[420px] md:max-w-[540px] md:h-[540px]"
        />
      </div>
      {/* Right Content */}
      <div className="flex-1 max-w-xl flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2">
        <button className="mb-6 md:mb-8 px-4 md:px-5 py-2 rounded-full bg-gradient-to-b from-gray-700 to-black text-white flex items-center gap-2 shadow text-sm md:text-base">
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 md:w-5 md:h-5"
          >
            <path
              d="M18.3853 9.1736L10.8814 1.66891C10.6472 1.4361 10.3303 1.30542 10.0001 1.30542C9.66988 1.30542 9.35307 1.4361 9.11886 1.66891L1.61886 9.1736C1.38605 9.4078 1.25537 9.72462 1.25537 10.0548C1.25537 10.3851 1.38605 10.7019 1.61886 10.9361L9.12277 18.4408C9.35697 18.6736 9.67379 18.8043 10.004 18.8043C10.3343 18.8043 10.6511 18.6736 10.8853 18.4408L18.3892 10.9361C18.622 10.7019 18.7527 10.3851 18.7527 10.0548C18.7527 9.72462 18.622 9.4078 18.3892 9.1736H18.3853ZM10.0001 17.5548L2.50011 10.0548L10.0001 2.55485L17.5001 10.0548L10.0001 17.5548Z"
              fill="white"
            />
          </svg>
          Industry Application
        </button>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 leading-tight">
          Shaping the Needs of Multiple Sectors
        </h2>
        <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
          Our plastics serve real-world use cases with real business outcomes.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-8 gap-y-3 md:gap-y-4 w-full border-t pt-4">
          {sectors.map((sector) => (
            <div
              key={sector}
              className="flex items-center gap-2 text-sm md:text-base text-gray-900"
            >
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="#2563eb"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
              <span>{sector}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryApplication;
