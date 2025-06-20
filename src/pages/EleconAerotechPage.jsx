import React from 'react'
import yellowCard from "../assets/comingSoon_img/image_3.png";
import featuresDiagram from "../assets/comingSoon_img/image_4.png";
import droneImage from "../assets/comingSoon_img/image_2.png";
import fireflyLogo from "../assets/comingSoon_img/QMstNyvOlfpA5q1qAadGO06pKY.jpg.png";
import { ScrollAnimation, ParallaxImage, StaggeredContainer } from '../components/animations';

export default function EleconAerotechPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white mt-20 py-8">
     <div className="max-w-4xl w-full">
      <ScrollAnimation animation="fadeUp" delay={0.2}>
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
      </ScrollAnimation>
     </div>

      {/* Detailed Info Section */}
      <div className="w-full max-w-6xl px-8 mt-[8rem]">
        <ScrollAnimation animation="fadeUp" delay={0.2}>
          <div className="mb-4">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-b from-gray-700 to-black text-white text-sm font-medium shadow-md border border-neutral-700">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3.5" y="3.5" width="9" height="9" rx="2" transform="rotate(45 8 8)" stroke="currentColor" fill="none" />
              </svg>
              Coming Soon
            </span>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeUp" delay={0.3}>
          <h1 className="text-4xl font-semibold mb-6">Taking Innovation Sky-High, Meet Elecon Aerotech</h1>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeUp" delay={0.4}>
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-1">About Us</h2>
            <p className="mb-1"><span className="font-semibold">Elecon Aerotech</span> is an Indian aerospace startup dedicated to revolutionizing the way drones are used in precision agriculture, terrain mapping, and aerial data services. Our goal is to provide cutting-edge UAV (Unmanned Aerial Vehicle) solutions that are reliable, customizable, and scalable for real-world applications.</p>
            <p>At Elecon Aerotech, we are building Firefly, our proprietary flight controller designed from the ground up to meet the specific demands of Indian terrain and use-cases. Firefly aims to offer superior flexibility, performance, and autonomy for both multirotor and fixed-wing drone platforms.</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeUp" delay={0.5}>
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-1">What We Do</h2>
            <StaggeredContainer staggerDelay={0.1}>
              <ul className="list-disc list-inside ml-4">
                <li>Agriculture</li>
                <li>Crop health monitoring using NDVI &amp; multispectral imagery</li>
                <li>Precision spraying for fertilizers and pesticides</li>
                <li>Field mapping for yield optimization</li>
                <li>Terrain Mapping</li>
                <li>High-resolution aerial surveys</li>
                <li>3D terrain reconstruction</li>
                <li>GIS data collection for construction, mining &amp; urban planning</li>
              </ul>
            </StaggeredContainer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeUp" delay={0.6}>
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-1">Key Features</h2>
            <StaggeredContainer staggerDelay={0.1}>
              <ul className="list-disc list-inside ml-4">
                <li>Real-Time Performance</li>
                <li>Built with a low-latency real-time OS for precise control loops.</li>
                <li>Supports high-frequency sensor updates and flight adjustments.</li>
                <li>Advanced Sensor Fusion- Integrates IMU, GPS, magnetometer, barometer, and visual odometry.</li>
                <li>Custom Kalman filter-based fusion for stable and accurate positioning.</li>
                <li>Autonomous Capabilities</li>
                <li>Fully programmable mission planner with dynamic path recalculations.</li>
                <li>Onboard obstacle detection and avoidance support (LiDAR/vision-based).</li>
              </ul>
            </StaggeredContainer>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}
