import React from "react";
import { ScrollAnimation, StaggeredContainer } from '../components/animations';

export default function AboutUsPage() {
  return (
    <div className="bg-gray-50 mt-20 min-h-screen flex flex-col items-center py-12 px-4">
      <div className="max-w-4xl w-full">
        <ScrollAnimation animation="fadeUp" delay={0.2}>
          <button
            className="flex items-center gap-3 bg-gradient-to-b from-gray-700 to-black text-white px-7 py-3 rounded-full mb-10 text-lg transition-transform duration-200 hover:scale-105 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-black ml-0"
            aria-label="Contact us"
          >
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.7501 18.4248C13.7501 18.5906 13.6843 18.7496 13.567 18.8668C13.4498 18.984 13.2909 19.0498 13.1251 19.0498H6.8751C6.70934 19.0498 6.55037 18.984 6.43316 18.8668C6.31595 18.7496 6.2501 18.5906 6.2501 18.4248C6.2501 18.2591 6.31595 18.1001 6.43316 17.9829C6.55037 17.8657 6.70934 17.7998 6.8751 17.7998H13.1251C13.2909 17.7998 13.4498 17.8657 13.567 17.9829C13.6843 18.1001 13.7501 18.2591 13.7501 18.4248ZM16.8751 8.42485C16.8778 9.46675 16.6424 10.4955 16.1869 11.4326C15.7315 12.3697 15.0679 13.1903 14.247 13.8319C14.0935 13.9495 13.9689 14.1007 13.8828 14.2739C13.7967 14.4471 13.7513 14.6377 13.7501 14.8311V15.2998C13.7501 15.6314 13.6184 15.9493 13.384 16.1837C13.1496 16.4182 12.8316 16.5498 12.5001 16.5498H7.5001C7.16858 16.5498 6.85064 16.4182 6.61622 16.1837C6.3818 15.9493 6.2501 15.6314 6.2501 15.2998V14.8311C6.24997 14.64 6.20603 14.4515 6.12166 14.28C6.03728 14.1086 5.91472 13.9587 5.76338 13.842C4.94448 13.2043 4.28139 12.3886 3.8243 11.4567C3.36722 10.5248 3.12812 9.50108 3.1251 8.46313C3.10479 4.73969 6.11416 1.63891 9.83448 1.54985C10.7512 1.52776 11.663 1.68926 12.5163 2.02486C13.3696 2.36046 14.1472 2.86336 14.8033 3.50398C15.4593 4.1446 15.9806 4.90998 16.3364 5.75507C16.6922 6.60017 16.8754 7.5079 16.8751 8.42485ZM15.6251 8.42485C15.6253 7.67458 15.4754 6.93186 15.1843 6.24038C14.8932 5.54891 14.4666 4.92267 13.9298 4.39853C13.393 3.87438 12.7568 3.46292 12.0585 3.18837C11.3603 2.91381 10.6142 2.78172 9.86417 2.79985C6.81729 2.87172 4.3587 5.40844 4.3751 8.45532C4.37796 9.30421 4.57385 10.1413 4.94796 10.9034C5.32206 11.6654 5.86459 12.3323 6.53448 12.8538C6.8356 13.0878 7.07918 13.3877 7.24655 13.7305C7.41392 14.0732 7.50065 14.4497 7.5001 14.8311V15.2998H12.5001V14.8311C12.501 14.4486 12.5892 14.0713 12.758 13.7281C12.9269 13.3849 13.1719 13.0848 13.4743 12.8506C14.1463 12.3255 14.6894 11.6538 15.0621 10.8867C15.4349 10.1197 15.6274 9.27765 15.6251 8.42485ZM14.3665 7.69516C14.2044 6.78992 13.7689 5.95607 13.1186 5.30586C12.4682 4.65565 11.6343 4.22031 10.729 4.05844C10.6481 4.0448 10.5652 4.04723 10.4852 4.0656C10.4052 4.08397 10.3296 4.11792 10.2627 4.16551C10.1958 4.2131 10.139 4.2734 10.0954 4.34296C10.0518 4.41253 10.0223 4.48999 10.0087 4.57094C9.99505 4.65189 9.99748 4.73473 10.0159 4.81474C10.0342 4.89475 10.0682 4.97035 10.1158 5.03724C10.1634 5.10413 10.2237 5.16099 10.2932 5.20457C10.3628 5.24815 10.4402 5.27761 10.5212 5.29125C11.8157 5.50922 12.9142 6.60766 13.1337 7.90453C13.1584 8.0501 13.2339 8.18221 13.3467 8.27745C13.4595 8.37268 13.6025 8.4249 13.7501 8.42485C13.7854 8.42464 13.8207 8.42176 13.8556 8.41625C14.0189 8.38836 14.1645 8.29673 14.2604 8.1615C14.3562 8.02628 14.3944 7.85853 14.3665 7.69516Z"
                fill="white"
              />
            </svg>
            About us
          </button>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeUp" delay={0.3}>
          <h1 className="text-5xl font-normal mb-6">Elecon Industry</h1>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeUp" delay={0.4}>
          <p className="font-semibold text-gray-800 mb-6 text-xl">
            Since its establishment in 1997, Elecon Industries has earned a strong
            reputation for delivering top-quality plastic products—ranging from
            PET Preforms and Bottles to a variety of customized plastic solutions.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeUp" delay={0.5}>
          <p className="mb-6 text-gray-700 text-lg">
            We specialize in injection molding, blow molding, and tailor-made
            plastic production, serving a wide array of industries with dependable
            and budget-friendly services.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeUp" delay={0.6}>
          <p className="mb-6 text-gray-700 text-lg">
            Headquartered in Panchkula, Elecon operates three advanced
            manufacturing facilities located in Panchkula, Jaipur, and Hathin.
            Each plant is equipped with cutting-edge technology, enabling us to
            support diverse plastic manufacturing needs at scale.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeUp" delay={0.7}>
          <p className="mb-6 text-gray-700 text-lg">
            Our offerings go beyond standard products—whether it's large-volume
            production or precision-customized parts, we deliver solutions that
            meet the evolving demands of modern industry.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeUp" delay={0.8}>
          <p className="text-gray-700 text-lg">
            Driven by innovation, automation, and accuracy, Elecon Industries is
            committed to leading the way in both plastic manufacturing and
            emerging robotics technologies.
          </p>
        </ScrollAnimation>
      </div>

      {/* Milestones Section */}
      <div className="max-w-4xl w-full mt-20">
        <StaggeredContainer staggerDelay={0.1}>
        <ScrollAnimation animation="fadeUp" delay={0.3}>
          <h2 className="text-3xl font-semibold text-black mb-14">
            Reflecting on our milestones
          </h2>
        </ScrollAnimation>


          <ul className="space-y-16">
        <ScrollAnimation animation="fadeUp" delay={0.3}>
            <li className="flex items-start gap-8">
              <span className="mt-3 w-5 h-5 bg-blue-600 rounded-full inline-block"></span>
              <div>
                <div className="font-extrabold tracking-widest text-gray-800 mb-3 text-2xl">
                  1 9 9 7
                </div>
                <div className="text-gray-700 text-xl">
                  Elecon Packpet started in 1997 By Late SS Aggarwal and Mr. Manish Agarwal
                </div>
              </div>
            </li>
        </ScrollAnimation>
        <ScrollAnimation animation="fadeUp" delay={0.3}>
          
            <li className="flex items-start gap-8">
              <span className="mt-3 w-5 h-5 bg-blue-600 rounded-full inline-block"></span>
              <div>
                <div className="font-extrabold tracking-widest text-gray-800 mb-3 text-2xl">
                  2 0 0 5
                </div>
                <div className="text-gray-700 text-xl">
                  Elecon packpet shifted to Parwanoo, HP
                </div>
              </div>
            </li>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeUp" delay={0.3}>
          
            <li className="flex items-start gap-8">
              <span className="mt-3 w-5 h-5 bg-blue-600 rounded-full inline-block"></span>
              <div>
                <div className="font-extrabold tracking-widest text-gray-800 mb-3 text-2xl">
                  2 0 0 9
                </div>
                <div className="text-gray-700 text-xl">
                  Elecon Packpet shifted to Baddi, HP
                </div>
              </div>
            </li>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeUp" delay={0.3}>
          
            <li className="flex items-start gap-8">
              <span className="mt-3 w-5 h-5 bg-blue-600 rounded-full inline-block"></span>
              <div>
                <div className="font-extrabold tracking-widest text-gray-800 mb-3 text-2xl">
                  2 0 1 0
                </div>
                <div className="text-gray-700 text-xl">
                  2nd Plant setup in Baddi, name elecon industries
                </div>
              </div>
            </li>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeUp" delay={0.3}>
          
            <li className="flex items-start gap-8">
              <span className="mt-3 w-5 h-5 bg-blue-600 rounded-full inline-block"></span>
              <div>
                <div className="font-extrabold tracking-widest text-gray-800 mb-3 text-2xl">
                  2 0 1 9
                </div>
                <div className="text-gray-700 text-xl">
                  3rd Plant of elecon industries setup in Jaipur
                </div>
              </div>
            </li>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeUp" delay={0.3}>
          
            <li className="flex items-start gap-8">
              <span className="mt-3 w-5 h-5 bg-blue-600 rounded-full inline-block"></span>
              <div>
                <div className="font-extrabold tracking-widest text-gray-800 mb-3 text-2xl">
                  2 0 2 2
                </div>
                <div className="text-gray-700 text-xl">
                  Shifted Elecon Industries and elecon packpet from Baddi to panchkula
                </div>
              </div>
            </li>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeUp" delay={0.3}>
          
            <li className="flex items-start gap-8">
              <span className="mt-3 w-5 h-5 bg-blue-600 rounded-full inline-block"></span>
              <div>
                <div className="font-extrabold tracking-widest text-gray-800 mb-3 text-2xl">
                  2 0 2 4
                </div>
                <div className="text-gray-700 text-xl">
                  Elecon industries plan opened in Palwal
                </div>
              </div>
            </li>
          </ScrollAnimation>
          </ul>
        </StaggeredContainer>
      </div>
    </div>
  );
}
