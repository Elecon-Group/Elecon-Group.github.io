import Icon1 from "../assets/icons/Icon.png";
import Icon2 from "../assets/icons/Icon-2.png";
import Icon3 from "../assets/icons/Icon-3.png";

export default function WhyEleconSection() {
  return (
    <section className="py-16 px-4 mx-auto bg-white flex flex-col items-center">
      <div className="w-full max-w-6xl flex flex-col items-start">
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-b from-gray-700 to-black text-white text-base font-medium mb-8 shadow-lg border border-gray-300 hover:scale-105 transition-transform">
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3853 9.1736L10.8814 1.66891C10.6472 1.4361 10.3303 1.30542 10.0001 1.30542C9.66988 1.30542 9.35307 1.4361 9.11886 1.66891L1.61886 9.1736C1.38605 9.4078 1.25537 9.72462 1.25537 10.0548C1.25537 10.3851 1.38605 10.7019 1.61886 10.9361L9.12277 18.4408C9.35697 18.6736 9.67379 18.8043 10.004 18.8043C10.3343 18.8043 10.6511 18.6736 10.8853 18.4408L18.3892 10.9361C18.622 10.7019 18.7527 10.3851 18.7527 10.0548C18.7527 9.72462 18.622 9.4078 18.3892 9.1736H18.3853ZM10.0001 17.5548L2.50011 10.0548L10.0001 2.55485L17.5001 10.0548L10.0001 17.5548Z"
              fill="white"
            />
          </svg>
          Why Elecon?
        </button>
        <h2 className="text-5xl mb-14 text-gray-900 tracking-tight leading-tight text-left">
          We're Built to Scale. And Built to Last.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* Card 1 */}
        <div className="bg-white rounded-[28px] border border-[#E5E7EB] p-10 flex flex-col items-start min-h-[260px]">
          <div className="bg-[#2763AB] rounded-full w-12 h-12 flex items-center justify-center mb-7">
            <img src={Icon1} alt="Modern Plants" className="object-cover" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-900">
            3 Modern Plants
          </h3>
          <p className="text-gray-500 text-base font-normal">
            Located in Panchkula, Jaipur, and Hathin — all automation-ready.
          </p>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-[28px] border border-[#E5E7EB] p-10 flex flex-col items-start min-h-[260px]">
          <div className="bg-[#2763AB] rounded-full w-12 h-12 flex items-center justify-center mb-7">
            <img
              src={Icon2}
              alt="End-to-End Control"
              className="object-cover"
            />
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-900">
            End-to-End Control
          </h3>
          <p className="text-gray-500 text-base font-normal">
            From mold design to final delivery, we own every step.
          </p>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-[28px] border border-[#E5E7EB] p-10 flex flex-col items-start min-h-[260px]">
          <div className="bg-[#2763AB] rounded-full w-12 h-12 flex items-center justify-center mb-7">
            <img src={Icon3} alt="Years of Trust" className="object-cover" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-900">
            25+ Years of Trust
          </h3>
          <p className="text-gray-500 text-base font-normal">
            We've served 30K+ businesses with consistency and care.
          </p>
        </div>
      </div>
    </section>
  );
}
