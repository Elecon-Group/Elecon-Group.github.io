import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center text-center py-12 md:py-20 px-4 bg-white">
      {/* Badge */}
      <div className="mb-4 md:mb-6">
        <span className="inline-block bg-gray-100 text-gray-700 text-sm md:text-base px-4 md:px-6 py-2 rounded-full font-medium shadow-sm">
          3 Manufacturing Units{" "}
          <span className="italic text-gray-500">· 25+ Years of Trust</span>
        </span>
      </div>
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight px-4">
        Precision in Every Mold.
        <br className="hidden sm:block" />
        Trust in Every Drop.
      </h1>
      {/* Subheading */}
      <p className="text-lg md:text-xl text-gray-600 mb-2 px-4">
        India's trusted partner in PET Preforms & Bottles since 1997.
      </p>
      <p className="text-base md:text-lg text-gray-500 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
        High-quality plastic solutions designed for scale, speed, and serious
        performance.
      </p>
      {/* Testimonial */}
      <div className="flex flex-col items-center mb-6 md:mb-8">
        <div className="flex items-center space-x-2">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Client"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white shadow"
          />
          <div className="flex items-center text-yellow-400 text-lg md:text-xl">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
        </div>
        <span className="text-gray-700 text-base md:text-lg mt-2">30K+ Clients</span>
      </div>
      {/* Call to Action */}
      <a
  href="tel:+918580825850"
  className="inline-block px-6 md:px-10 py-3 md:py-4 bg-[#2763AB] text-white text-base md:text-lg rounded-full font-semibold transition hover:bg-[#1e4d8c]"
>
  <span className="flex items-center gap-2">
    Get in Touch
    <svg
      width="20"
      height="20"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4 md:w-5 md:h-5"
    >
      <path
        d="M5.67689 4.17701L3.17689 6.67701C3.15366 6.70024 3.12609 6.71867 3.09574 6.73124C3.06539 6.74381 3.03287 6.75028 3.00002 6.75028C2.96717 6.75028 2.93464 6.74381 2.90429 6.73124C2.87394 6.71867 2.84637 6.70024 2.82314 6.67701C2.79991 6.65379 2.78149 6.62621 2.76892 6.59586C2.75635 6.56552 2.74988 6.53299 2.74988 6.50014C2.74988 6.46729 2.75635 6.43476 2.76892 6.40442C2.78149 6.37407 2.79991 6.34649 2.82314 6.32326L5.14658 4.00014L2.82314 1.67701C2.77623 1.6301 2.74988 1.56648 2.74988 1.50014C2.74988 1.4338 2.77623 1.37017 2.82314 1.32326C2.87005 1.27635 2.93368 1.25 3.00002 1.25C3.06636 1.25 3.12998 1.27635 3.17689 1.32326L5.67689 3.82326C5.70014 3.84648 5.71858 3.87405 5.73116 3.9044C5.74374 3.93475 5.75021 3.96729 5.75021 4.00014C5.75021 4.03299 5.74374 4.06552 5.73116 4.09587C5.71858 4.12622 5.70014 4.1538 5.67689 4.17701Z"
        fill="white"
      />
    </svg>
  </span>
</a>

    </section>
  );
};

export default HeroSection;
