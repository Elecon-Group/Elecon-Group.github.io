import React from "react";
import { useForm, ValidationError } from '@formspree/react';

// Make sure to include Material Icons in your index.html or _document.js:
// <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

const ContactSection = () => {
  // this is the formspree form id {mgvyldbj} for the contact form 
  const [state, handleSubmit] = useForm("xdkzlaql");

  return (
    <div className="min-h-screen  flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-200">
      <div className="w-full max-w-7xl flex flex-col justify-between">
        <div className="flex flex-col gap-y-8 md:gap-y-16">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row items-start justify-center px-4 md:px-16 pt-8 md:pt-16 gap-8 md:gap-16 relative">
            {/* Left: Contact Info */}
            <section
              className="w-full md:w-1/2 mb-8 md:mb-0 z-10"
              aria-labelledby="contact-info-heading"
            >
              <button
                className="flex items-center gap-2 bg-gradient-to-b from-gray-700 to-black text-white px-4 md:px-5 py-2 rounded-full mb-6 text-sm md:text-base transition-transform duration-200 hover:scale-105 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
                aria-label="Contact us"
              >
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 md:w-5 md:h-5"
                >
                  <path
                    d="M13.7501 18.4248C13.7501 18.5906 13.6843 18.7496 13.567 18.8668C13.4498 18.984 13.2909 19.0498 13.1251 19.0498H6.8751C6.70934 19.0498 6.55037 18.984 6.43316 18.8668C6.31595 18.7496 6.2501 18.5906 6.2501 18.4248C6.2501 18.2591 6.31595 18.1001 6.43316 17.9829C6.55037 17.8657 6.70934 17.7998 6.8751 17.7998H13.1251C13.2909 17.7998 13.4498 17.8657 13.567 17.9829C13.6843 18.1001 13.7501 18.2591 13.7501 18.4248ZM16.8751 8.42485C16.8778 9.46675 16.6424 10.4955 16.1869 11.4326C15.7315 12.3697 15.0679 13.1903 14.247 13.8319C14.0935 13.9495 13.9689 14.1007 13.8828 14.2739C13.7967 14.4471 13.7513 14.6377 13.7501 14.8311V15.2998C13.7501 15.6314 13.6184 15.9493 13.384 16.1837C13.1496 16.4182 12.8316 16.5498 12.5001 16.5498H7.5001C7.16858 16.5498 6.85064 16.4182 6.61622 16.1837C6.3818 15.9493 6.2501 15.6314 6.2501 15.2998V14.8311C6.24997 14.64 6.20603 14.4515 6.12166 14.28C6.03728 14.1086 5.91472 13.9587 5.76338 13.842C4.94448 13.2043 4.28139 12.3886 3.8243 11.4567C3.36722 10.5248 3.12812 9.50108 3.1251 8.46313C3.10479 4.73969 6.11416 1.63891 9.83448 1.54985C10.7512 1.52776 11.663 1.68926 12.5163 2.02486C13.3696 2.36046 14.1472 2.86336 14.8033 3.50398C15.4593 4.1446 15.9806 4.90998 16.3364 5.75507C16.6922 6.60017 16.8754 7.5079 16.8751 8.42485ZM15.6251 8.42485C15.6253 7.67458 15.4754 6.93186 15.1843 6.24038C14.8932 5.54891 14.4666 4.92267 13.9298 4.39853C13.393 3.87438 12.7568 3.46292 12.0585 3.18837C11.3603 2.91381 10.6142 2.78172 9.86417 2.79985C6.81729 2.87172 4.3587 5.40844 4.3751 8.45532C4.37796 9.30421 4.57385 10.1413 4.94796 10.9034C5.32206 11.6654 5.86459 12.3323 6.53448 12.8538C6.8356 13.0878 7.07918 13.3877 7.24655 13.7305C7.41392 14.0732 7.50065 14.4497 7.5001 14.8311V15.2998H12.5001V14.8311C12.501 14.4486 12.5892 14.0713 12.758 13.7281C12.9269 13.3849 13.1719 13.0848 13.4743 12.8506C14.1463 12.3255 14.6894 11.6538 15.0621 10.8867C15.4349 10.1197 15.6274 9.27765 15.6251 8.42485ZM14.3665 7.69516C14.2044 6.78992 13.7689 5.95607 13.1186 5.30586C12.4682 4.65565 11.6343 4.22031 10.729 4.05844C10.6481 4.0448 10.5652 4.04723 10.4852 4.0656C10.4052 4.08397 10.3296 4.11792 10.2627 4.16551C10.1958 4.2131 10.139 4.2734 10.0954 4.34296C10.0518 4.41253 10.0223 4.48999 10.0087 4.57094C9.99505 4.65189 9.99748 4.73473 10.0159 4.81474C10.0342 4.89475 10.0682 4.97035 10.1158 5.03724C10.1634 5.10413 10.2237 5.16099 10.2932 5.20457C10.3628 5.24815 10.4402 5.27761 10.5212 5.29125C11.8157 5.50922 12.9142 6.60766 13.1337 7.90453C13.1584 8.0501 13.2339 8.18221 13.3467 8.27745C13.4595 8.37268 13.6025 8.4249 13.7501 8.42485C13.7854 8.42464 13.8207 8.42176 13.8556 8.41625C14.0189 8.38836 14.1645 8.29673 14.2604 8.1615C14.3562 8.02628 14.3944 7.85853 14.3665 7.69516Z"
                    fill="white"
                  />
                </svg>
                Contact us
              </button>
              <h1
                id="contact-info-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 md:mb-7 tracking-tight text-gray-900"
              >
                24/7 Available
              </h1>
              <p className="text-gray-500 mb-6 md:mb-8 text-base md:text-lg max-w-lg">
                You can contact us via email, phone, or by filling out the form
                on this page. We strive to respond promptly and look forward to
                connecting with you soon!
              </p>
              <div className="space-y-4 md:space-y-5">
                <div className="flex gap-3 items-center bg-white rounded-xl px-4 md:px-5 py-3 md:py-4">
                  <svg
                    width="36"
                    height="37"
                    viewBox="0 0 36 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 md:w-9 md:h-9"
                  >
                    <g clipPath="url(#clip0_1_766)">
                      <path
                        d="M14.875 16.4248C14.875 16.259 14.9408 16.1001 15.0581 15.9829C15.1753 15.8657 15.3342 15.7998 15.5 15.7998H20.5C20.6658 15.7998 20.8247 15.8657 20.9419 15.9829C21.0592 16.1001 21.125 16.259 21.125 16.4248C21.125 16.5906 21.0592 16.7495 20.9419 16.8667C20.8247 16.984 20.6658 17.0498 20.5 17.0498H15.5C15.3342 17.0498 15.1753 16.984 15.0581 16.8667C14.9408 16.7495 14.875 16.5906 14.875 16.4248ZM15.5 19.5498H20.5C20.6658 19.5498 20.8247 19.484 20.9419 19.3667C21.0592 19.2495 21.125 19.0906 21.125 18.9248C21.125 18.759 21.0592 18.6001 20.9419 18.4829C20.8247 18.3657 20.6658 18.2998 20.5 18.2998H15.5C15.3342 18.2998 15.1753 18.3657 15.0581 18.4829C14.9408 18.6001 14.875 18.759 14.875 18.9248C14.875 19.0906 14.9408 19.2495 15.0581 19.3667C15.1753 19.484 15.3342 19.5498 15.5 19.5498ZM26.125 12.6748V22.6748C26.125 23.0063 25.9933 23.3243 25.7589 23.5587C25.5245 23.7931 25.2065 23.9248 24.875 23.9248H20.1539L19.0852 25.7951C18.9758 25.9864 18.8178 26.1453 18.6273 26.2559C18.4367 26.3665 18.2203 26.4247 18 26.4247C17.7797 26.4247 17.5633 26.3665 17.3727 26.2559C17.1822 26.1453 17.0242 25.9864 16.9148 25.7951L15.8461 23.9248H11.125C10.7935 23.9248 10.4755 23.7931 10.2411 23.5587C10.0067 23.3243 9.875 23.0063 9.875 22.6748V12.6748C9.875 12.3433 10.0067 12.0253 10.2411 11.7909C10.4755 11.5565 10.7935 11.4248 11.125 11.4248H24.875C25.2065 11.4248 25.5245 11.5565 25.7589 11.7909C25.9933 12.0253 26.125 12.3433 26.125 12.6748ZM24.875 12.6748H11.125V22.6748H16.2086C16.3193 22.6738 16.4282 22.7022 16.5243 22.7571C16.6204 22.812 16.7001 22.8915 16.7555 22.9873L18.0055 25.1748L19.2555 22.9873C19.3108 22.8915 19.3906 22.812 19.4867 22.7571C19.5827 22.7022 19.6917 22.6738 19.8023 22.6748H24.875V12.6748Z"
                        fill="#575757"
                      />
                      <rect
                        x="0.5"
                        y="0.799805"
                        width="35"
                        height="35"
                        rx="17.5"
                        stroke="#C3C4C5"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_766">
                        <rect
                          y="0.299805"
                          width="36"
                          height="36"
                          rx="18"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <span className="text-gray-700 text-sm md:text-base font-medium">
                  shashank@elecongroup.in
                  </span>
                </div>
                <div className="flex gap-3 items-center bg-white rounded-xl px-4 md:px-5 py-3 md:py-4">
                  <svg
                    width="36"
                    height="37"
                    viewBox="0 0 36 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 md:w-9 md:h-9"
                  >
                    <g clipPath="url(#clip0_1_774)">
                      <path
                        d="M25.3727 20.6795L21.6922 19.0302L21.682 19.0255C21.491 18.9438 21.2825 18.911 21.0756 18.9301C20.8687 18.9492 20.6698 19.0196 20.4969 19.1349C20.4765 19.1484 20.457 19.163 20.4383 19.1787L18.5367 20.7998C17.332 20.2146 16.0883 18.9802 15.5031 17.7912L17.1266 15.8607C17.1422 15.8412 17.157 15.8216 17.1711 15.8006C17.2839 15.6281 17.3524 15.4305 17.3704 15.2252C17.3884 15.0199 17.3553 14.8134 17.2742 14.624V14.6146L15.6203 10.9279C15.5131 10.6804 15.3287 10.4743 15.0947 10.3403C14.8607 10.2062 14.5896 10.1515 14.3219 10.1841C13.2633 10.3234 12.2916 10.8433 11.5882 11.6467C10.8849 12.4501 10.4981 13.482 10.5 14.5498C10.5 20.7529 15.5469 25.7998 21.75 25.7998C22.8177 25.8017 23.8497 25.4149 24.6531 24.7115C25.4564 24.0082 25.9763 23.0365 26.1156 21.9779C26.1484 21.7103 26.0937 21.4393 25.9598 21.2053C25.8259 20.9713 25.62 20.7868 25.3727 20.6795ZM21.75 24.5498C19.0987 24.5469 16.5569 23.4924 14.6821 21.6176C12.8074 19.7429 11.7529 17.201 11.75 14.5498C11.7471 13.7869 12.0219 13.049 12.5232 12.4739C13.0246 11.8988 13.7181 11.5259 14.4742 11.4248C14.4739 11.4279 14.4739 11.431 14.4742 11.4341L16.1149 15.106L14.5 17.0388C14.4836 17.0577 14.4687 17.0778 14.4555 17.099C14.3379 17.2794 14.2689 17.4871 14.2553 17.702C14.2416 17.9169 14.2836 18.1317 14.3774 18.3256C15.0852 19.7732 16.5438 21.2209 18.007 21.9279C18.2023 22.0207 18.4184 22.0613 18.634 22.0457C18.8497 22.0301 19.0576 21.9588 19.2375 21.8388C19.2576 21.8253 19.2769 21.8107 19.2953 21.7951L21.1945 20.1748L24.8664 21.8193C24.8664 21.8193 24.8727 21.8193 24.875 21.8193C24.7751 22.5765 24.4027 23.2714 23.8275 23.774C23.2524 24.2766 22.5138 24.5523 21.75 24.5498Z"
                        fill="#575757"
                      />
                      <rect
                        x="0.5"
                        y="0.799805"
                        width="35"
                        height="35"
                        rx="17.5"
                        stroke="#C3C4C5"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_774">
                        <rect
                          y="0.299805"
                          width="36"
                          height="36"
                          rx="18"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <span className="text-gray-700 text-sm md:text-base font-medium">
                  +91 85808 25850
                  </span>
                </div>
              </div>
            </section>
            {/* Right: Contact Form */}
            <section
              className="w-full md:w-1/2 flex justify-center items-start z-10"
              aria-labelledby="contact-form-heading"
            >
              <div className="w-full max-w-2xl bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 border">
                <h2
                  id="contact-form-heading"
                  className="text-2xl md:text-3xl font-bold mb-2 text-gray-900"
                >
                  Write us
                </h2>
                <p className="text-gray-500 mb-6 md:mb-7 text-sm md:text-base">
                  We'd love to hear from you!
                </p>
                {state.succeeded ? (
                  <div className="text-green-600 font-semibold text-base md:text-lg">
                    Thank you for contacting us! We'll get back to you soon.
                  </div>
                ) : (
                  <form
                    className="space-y-4 md:space-y-5"
                    onSubmit={handleSubmit}
                  >
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="w-full sm:w-1/2">
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          First name
                        </label>
                        <div className="relative">
                          <span
                            className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 text-lg"
                            aria-hidden="true"
                          >
                            person
                          </span>
                          <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            placeholder="Jane"
                            className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all text-sm md:text-base"
                          />
                        </div>
                        <ValidationError 
                          prefix="First Name" 
                          field="firstName"
                          errors={state.errors}
                          className="text-red-500 text-xs"
                        />
                      </div>
                      <div className="w-full sm:w-1/2">
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Last name
                        </label>
                        <div className="relative">
                          <span
                            className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 text-lg"
                            aria-hidden="true"
                          >
                            person_outline
                          </span>
                          <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            placeholder="Smith"
                            className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all text-sm md:text-base"
                          />
                        </div>
                        <ValidationError 
                          prefix="Last Name" 
                          field="lastName"
                          errors={state.errors}
                          className="text-red-500 text-xs"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email
                      </label>
                      <div className="relative">
                        <span
                          className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 text-lg"
                          aria-hidden="true"
                        >
                          email
                        </span>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="jane.smith@example.com"
                          className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all text-sm md:text-base"
                        />
                      </div>
                      <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                        className="text-red-500 text-xs"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="location"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Location
                      </label>
                      <div className="relative">
                        <span
                          className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 text-lg"
                          aria-hidden="true"
                        >
                          location_on
                        </span>
                        <input
                          id="location"
                          name="location"
                          type="text"
                          placeholder="Your location"
                          className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all text-sm md:text-base"
                        />
                      </div>
                      <ValidationError 
                        prefix="Location" 
                        field="location"
                        errors={state.errors}
                        className="text-red-500 text-xs"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full bg-[#2763AB] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#1e4d8c] transition-colors text-sm md:text-base"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </section>
          </div>
          {/* Map Section */}
          <div className="w-full px-4 md:px-16 mt-8">
            <div className="w-full h-72 md:h-96 rounded-3xl overflow-hidden shadow border bg-white">
              <iframe
                title="Elecon Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.070073262316!2d76.8577263151156!3d30.72808398163506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fedb1e0e2b6e7%3A0x7e2e8b2e8b2e8b2e!2sPanchkula%2C%20Haryana!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
          {/* Bottom Section */}
          <footer className="mt-16 py-16 px-4 md:px-16 flex flex-col md:flex-row items-center md:items-start justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0 flex flex-col items-center md:items-start">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-7 text-gray-900 text-center md:text-left">
                Let's Mold the Future Together
              </h2>
              <a
  href="tel:+918580825850"
  className="inline-block"
>
  <button className="flex items-center gap-2 bg-gradient-to-b from-gray-700 to-black text-white px-8 py-4 rounded-full text-xl font-semibold transition-transform duration-200 hover:scale-105 hover:from-gray-800 hover:to-gray-900 focus:outline-none focus:ring-2 focus:ring-black relative pr-16">
    Get in touch.
    <svg
      width="48"
      height="49"
      viewBox="0 0 48 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute right-1 top-1/2 -translate-y-1/2"
    >
      <rect y="0.47998" width="48" height="48" rx="24" fill="white" />
      <g clipPath="url(#clip0_1_852)">
        <path
          d="M29.0306 25.0105L21.5306 32.5105C21.4609 32.5802 21.3781 32.6355 21.2871 32.6732C21.1961 32.7109 21.0985 32.7303 20.9999 32.7303C20.9014 32.7303 20.8038 32.7109 20.7128 32.6732C20.6217 32.6355 20.539 32.5802 20.4693 32.5105C20.3996 32.4409 20.3443 32.3581 20.3066 32.2671C20.2689 32.176 20.2495 32.0785 20.2495 31.9799C20.2495 31.8814 20.2689 31.7838 20.3066 31.6927C20.3443 31.6017 20.3996 31.519 20.4693 31.4493L27.4396 24.4799L20.4693 17.5105C20.3286 17.3698 20.2495 17.1789 20.2495 16.9799C20.2495 16.7809 20.3286 16.59 20.4693 16.4493C20.61 16.3086 20.8009 16.2295 20.9999 16.2295C21.199 16.2295 21.3898 16.3086 21.5306 16.4493L29.0306 23.9493C29.1003 24.0189 29.1556 24.1017 29.1933 24.1927C29.2311 24.2838 29.2505 24.3813 29.2505 24.4799C29.2505 24.5785 29.2311 24.6761 29.1933 24.7671C29.1556 24.8582 29.1003 24.9409 29.0306 25.0105Z"
          fill="#262628"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_852">
          <rect width="24" height="24" fill="white" transform="translate(12 12.48)" />
        </clipPath>
      </defs>
    </svg>
  </button>
</a>

            </div>
            <div className="md:w-1/2 text-lg text-gray-600 text-center md:text-left max-w-xl">
              Whether you're building bottles, parts, or a long-term
              manufacturing partnership — we're ready when you are.
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
