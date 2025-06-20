import React from "react";
import product_Img_1 from "../assets/products_img/JFpiZetYbZHOn1MmyS2mknLuup8.png.png";
import product_Img_2 from "../assets/products_img/Ve4oAhMVaJy8O43miefSKJ4AnQ.png.png";
import product_Img_3 from "../assets/products_img/LTAVifJY3yo9N55NFI77fPDOP5c.png.png";
import { ParallaxImage } from "./animations";

const products = [
  {
    title: "PET Preforms",
    description:
      "Designed for consistency, clarity, and durability — made to scale.",
    img: product_Img_1,
  },
  {
    title: "PET Bottles",
    description: "Pressure–resistant, lightweight, and fully customizable.",
    img: product_Img_2,
  },
  {
    title: "Custom Molding",
    description:
      "Tailored parts for unique specs — precision molding for robotics, machinery, and beyond.",
    img: product_Img_3,
  },
];

const Products = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-12 md:py-16 px-4 bg-white">
      <div className="w-full flex flex-col items-center">
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
          Our Products
        </button>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-4 md:mb-6 leading-tight text-center w-full max-w-5xl px-4">
          Form. Function. Flawless.
        </h2>
        <p className="text-base md:text-lg text-gray-700 mb-8 md:mb-12 w-full max-w-3xl text-center px-4">
          All made with quality-first processes and strict QC protocols.
        </p>
      </div>
      
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start justify-items-center">
        {products.map((product) => (
          <div 
            key={product.title}
            className="bg-gray-50 rounded-xl md:rounded-2xl flex flex-col items-center p-6 md:p-8 shadow-sm transition hover:shadow w-full max-w-sm"
          >
            <ParallaxImage
              src={product.img}
              alt={product.title}
              speed={0.25}
              scale={1.01}
              direction="up"
              className="h-40 sm:h-48 md:h-56 object-contain mb-6 md:mb-8 w-full"
            />
            <div className="w-full text-center">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                {product.title}
              </h3>
              <p className="text-sm md:text-base text-gray-700">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
