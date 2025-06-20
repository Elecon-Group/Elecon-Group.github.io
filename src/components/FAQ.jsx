import { useState } from "react";

const faqs = [
  {
    question: "Do you manufacture custom products?",
    answer: "Yes, we manufacture custom products tailored to your needs.",
  },
  {
    question: "What kind of molding do you do?",
    answer: "We offer injection, blow, and compression molding services.",
  },
  {
    question: "Can you handle high-volume production?",
    answer: "Absolutely, we are equipped for high-volume production.",
  },
  {
    question: "Where are your facilities located?",
    answer: "Our facilities are located across multiple regions.",
  },
  {
    question: "How can I request a quote or consultation?",
    answer: "You can request a quote or consultation via our contact form.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="flex flex-col lg:flex-row items-start justify-center min-h-screen bg-white px-4 md:px-8">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 flex flex-col justify-start pt-12 lg:pt-16 lg:pl-12 mb-8 lg:mb-0">
        <h2 className="text-lg font-normal mb-6 lg:mb-8">Welcome to Beyond FAQ!</h2>
        <div>
          <span className="font-bold text-base block">Everything You Need</span>
          <span className="font-bold text-base block">to Know</span>
        </div>
      </div>
      {/* FAQ Section */}
      <div className="w-full lg:w-2/4 max-w-2xl flex flex-col justify-start pt-4 lg:pt-16 lg:pr-24">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b border-gray-200">
            <button
              className="w-full flex justify-between items-center py-4 md:py-6 text-base md:text-lg font-normal focus:outline-none"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <span className="text-left pr-4">{faq.question}</span>
              <span className="ml-4 flex items-center flex-shrink-0">
                <svg
                  className={`w-4 h-4 md:w-5 md:h-5 transition-transform duration-200 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>
            {openIndex === idx && (
              <div className="pl-2 pb-4 text-gray-600 text-sm md:text-base">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}