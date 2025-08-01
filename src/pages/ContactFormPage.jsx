import React, { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import { ScrollAnimation, StaggeredContainer } from '../components/animations';

export default function ContactFormPage() {
  // this is the formspree form id {mgvyldbj} for the contact form 
  const [state, handleSubmit] = useForm("xdkzlaql"); 
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    location: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
    
    // Clear form after successful submission
    if (state.succeeded) {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        location: ''
      });
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans mt-20">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Contact Info */}
        <div>
          <ScrollAnimation animation="fadeUp" delay={0.2}>
            <button className="flex items-center gap-2 bg-gradient-to-b from-gray-700 to-black text-white px-5 py-2 rounded-full text-base mb-6 hover:bg-gray-800 transition-colors">
              <span className="material-icons text-lg">call</span>
              Contact us
            </button>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeUp" delay={0.3}>
            <h2 className="text-4xl font-bold mb-4">24/7 Available</h2>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeUp" delay={0.4}>
            <p className="text-gray-600 text-base mb-8 leading-relaxed">
              You can contact us via email, phone, or by filling out the form on this page.
              We strive to respond promptly and look forward to connecting with you soon!
            </p>
          </ScrollAnimation>

          <StaggeredContainer staggerDelay={0.1}>
            <div className="space-y-5">
              <div className="flex gap-3 items-center bg-white rounded-xl px-5 py-4">
                <svg
                  width="36"
                  height="37"
                  viewBox="0 0 36 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_766)">
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

                <span className="text-gray-700 text-base font-medium">
              <a href="mailto:shashank@elecongroup.in"> shashank@elecongroup.in</a>
                </span>
              </div>
              <div className="flex gap-3 items-center bg-white rounded-xl px-5 py-4">
                <svg
                  width="36"
                  height="37"
                  viewBox="0 0 36 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_774)">
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

                <span className="text-gray-700 text-base font-medium">
                <a href="tel:+91 85808 25850"> +91 85808 25850</a>
                </span>
              </div>
            </div>
          </StaggeredContainer>
        </div>

        {/* Right: Contact Form */}
        <ScrollAnimation animation="fadeUp" delay={0.3}>
          <div className="bg-white border rounded p-8">
            <h3 className="font-bold text-2xl mb-2">Write us</h3>
            <p className="text-gray-500 text-sm mb-6">We'd love to hear from you!</p>
            
            {/* Success Message */}
            {state.succeeded && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                <p className="font-medium">Thank you for your message!</p>
                <p className="text-sm">We'll get back to you soon.</p>
              </div>
            )}

            {/* Error Message */}
            {state.errors && state.errors.length > 0 && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                <p className="font-medium">There was an error submitting your form.</p>
                <p className="text-sm">Please try again.</p>
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="flex gap-4">
                <div className="w-1/2">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First name"
                    className="w-full border rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    required
                  />
                  <ValidationError 
                    prefix="First Name" 
                    field="firstName"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="w-1/2">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last name"
                    className="w-full border rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    required
                  />
                  <ValidationError 
                    prefix="Last Name" 
                    field="lastName"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="w-full border rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  required
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              
              <div>
                <select 
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full border rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  required
                >
                  <option value="">Select location...</option>
                  <option value="Panchkula">Panchkula</option>
                  <option value="Jaipur">Jaipur</option>
                </select>
                <ValidationError 
                  prefix="Location" 
                  field="location"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-black text-white rounded-lg py-3 text-base font-semibold hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {state.submitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </ScrollAnimation>
      </div>

      {/* Middle Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollAnimation animation="fadeUp" delay={0.2}>
            <div>
              <h2 className="text-4xl font-bold mb-6">Let's Mold the Future Together</h2>
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
          </ScrollAnimation>

          <ScrollAnimation animation="fadeUp" delay={0.3}>
            <div>
              <p className="text-gray-700 text-xl leading-relaxed">
                Whether you're building bottles, parts, or a long-term manufacturing partnership — we're ready when you are.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Bottom Section: Maps */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Panchkula Map */}
        <ScrollAnimation animation="fadeUp" delay={0.2}>
          <div className="bg-white rounded-2xl p-4">
            <iframe
              title="Panchkula Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.0000000000005!2d76.85000000000001!3d30.700000000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQyJzAwLjAiTiA3NsKwNTAnMDAuMCJF!5e0!3m2!1sen!2sin!4v00000000000"
              className="w-full h-64 rounded-xl"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <div className="flex items-center mt-4">   
              <span className="bg-gradient-to-b from-gray-700 to-black text-white text-sm rounded-full px-4 py-2 flex items-center">
                <span className="material-icons text-white text-lg mr-2 flex items-center">location_on</span>
                Panchkula
              </span>
            </div>
          </div>
        </ScrollAnimation>

        {/* Jaipur Map */}
        <ScrollAnimation animation="fadeUp" delay={0.3}>
          <div className="bg-white rounded-2xl p-4">
            <iframe
              title="Jaipur Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.0000000000005!2d75.85000000000001!3d26.900000000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU0JzAwLjAiTiA3NcKwNTAnMDAuMCJF!5e0!3m2!1sen!2sin!4v00000000000"
              className="w-full h-64 rounded-xl"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <div className="flex items-center mt-4">
              <span className="bg-gradient-to-b from-gray-700 to-black text-white text-sm rounded-full px-4 py-2 flex items-center">
                <span className="material-icons text-white text-lg mr-2 flex items-center">location_on</span>
                Jaipur
              </span>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}
