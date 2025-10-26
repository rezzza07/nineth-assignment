import React, { useState } from "react";
import heroImg1 from "../assets/hero1.webp";
import heroImg2 from "../assets/hero2.jpg";
import heroImg3 from "../assets/hero3.webp";
import { Link } from "react-router";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Banner = () => {
  const images = [heroImg1, heroImg2, heroImg3];
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="w-full">
      <div className="relative overflow-hidden h-[520px] md:h-[620px] lg:h-[760px] flex items-center bg-[#0b0b0b]">

        {/* Background images (fade transition) */}
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            } filter brightness-[0.95] contrast-[1.05]`}
          />
        ))}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

        {/* Left content */}
        <div className="relative z-20 max-w-4xl px-6 md:px-12 lg:px-20">
          <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
            <div className="text-sm uppercase tracking-widest text-slate-300">
              Gaming Studio
            </div>

            <h1 className="text-white font-extrabold leading-tight text-3xl md:text-5xl lg:text-6xl">
              "GRIT, GUTS, GLORY"
              <br /> <span className="block">FIGHT TO WIN THE WAR!</span>
            </h1>

            <p className="max-w-xl text-slate-300 text-sm md:text-base">
              Join thousands of players worldwide. Tactical combat, high-speed
              helicopters and heart-pounding action — take your squad to the
              top.
            </p>

            <div className="flex items-center gap-4">
              <Link to="/games">
                <span className="inline-flex items-center gap-3 px-6 py-3 rounded-md font-semibold text-white bg-sky-500 cursor-pointer">
                  Download
                </span>
              </Link>

            </div>
          </div>
        </div>

        
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-sky-400 hover:bg-sky-200 text-white p-3 rounded-full transition"
        >
          <FaChevronLeft size={16} />
        </button>

        
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-sky-400 hover:bg-sky-216 text-white p-3 rounded-full transition"
        >
          <FaChevronRight size={16} />
        </button>
      </div>
    </section>
  );
};

export default Banner;
