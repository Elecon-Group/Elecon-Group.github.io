import React from "react";
import yellowCard from "../assets/comingSoon_img/image_3.png";
import featuresDiagram from "../assets/comingSoon_img/image_4.png";
import droneImage from "../assets/comingSoon_img/image_2.png";
import fireflyLogo from "../assets/comingSoon_img/QMstNyvOlfpA5q1qAadGO06pKY.jpg.png";
import { ParallaxImage } from "./animations";

export default function EleconAerotechComingSoon() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      {/* Coming Soon Badge - improved to match screenshot */}
      <div className="mb-4">
        <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-b from-gray-700 to-black text-white text-sm font-medium shadow-md border border-neutral-700">
          {/* Diamond outline icon */}
          <svg className="w-4 h-4 mr-2" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3.5" y="3.5" width="9" height="9" rx="2" transform="rotate(45 8 8)" stroke="currentColor" fill="none" />
          </svg>
          Coming Soon
        </span>
      </div>
      {/* Title */}
      <div className="mb-2">
        <h1 className="text-4xl font-semibold tracking-tight">
          Taking Innovation Sky-High, Meet Elecon Aerotech
        </h1>
      </div>
      {/* Subtitle */}
      <div className="mb-10">
        <p className="text-gray-600 text-lg">
          Meet Elecon Aerotech, our sister brand reimagining drone technology for Indian industries. From precision agriculture to terrain mapping — the future is airborne.
        </p>
      </div>
      {/* Custom Grid Layout */}
      <div className="grid grid-cols-5 grid-rows-4 gap-2">
        {/* Firefly Logo - spans 2 columns, 2 rows */}
        <div className="col-span-2 row-span-2 rounded-[28px] overflow-hidden bg-black flex items-center justify-center">
          <img src={fireflyLogo} alt="Firefly Logo" className="w-full h-full" />
        </div>
        {/* Drone Image - spans 3 columns, 2 rows, starts at column 3 */}
        <div className="col-span-3 row-span-2 col-start-3 rounded-[28px] bg-blue-100 overflow-hidden flex items-center justify-center">
          <img src={droneImage} alt="Drone" className="w-full h-full  rounded-[28px]" />
        </div>
        {/* Yellow Card - spans 3 columns, 2 rows, starts at row 3 */}
        <div className="col-span-3 h-[300px] row-span-2 row-start-3 rounded-[28px] overflow-hidden bg-yellow-400 flex items-center justify-center">
          <img src={yellowCard} alt="Stay Tuned" className="w-full h-full" />
        </div>
        {/* Features Card - spans 2 columns, 2 rows, starts at column 4, row 3 */}
        <div className="col-span-2 h-[300px] row-span-2 col-start-4 row-start-3 rounded-[28px] overflow-hidden bg-black flex items-center justify-center">
          <img src={featuresDiagram} alt="Features" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}