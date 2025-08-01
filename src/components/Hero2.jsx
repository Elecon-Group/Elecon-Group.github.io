import React from 'react';
import bottle from '../assets/bottles/jxhrTKKsEoeFOIX1Q47v5ETEgGk.png.png'; 
const Hero2 = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-16 bg-white">
      <img
        src={bottle}
        alt="PET Bottle"
        className="w-64 sm:w-56 md:w-72 lg:w-[32rem] xl:w-[40rem] object-contain drop-shadow-xl"
      />
    </section>
  );
};

export default Hero2; 