import React from 'react';
import heroImg from "../assets/hero.jpg"


const Banner = () => {
    return (
        <section className="w-full">
            <div
                className="relative overflow-hidden h-[520px] md:h-[620px] lg:h-[760px] flex items-center bg-[#0b0b0b]">

                {/* Background image */}
                <img
                    src={heroImg}
                    alt="hero"
                    className="absolute inset-0 w-full h-full object-cover opacity-80 filter brightness-[0.95] contrast-[1.05]"
                     />


                {/* Left content */}
                <div className="relative z-20 max-w-4xl px-6 md:px-12 lg:px-20">
                    <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
                        <div className="text-sm uppercase tracking-widest text-slate-300">
                            Gaming Studio
                        </div>


                        <h1 className="text-white font-extrabold leading-tight text-3xl md:text-5xl lg:text-6xl">
                            "GRIT, GUTS, GLORY"<br /> <span className="block">FIGHT TO WIN THE WAR!</span>
                        </h1>


                        <p className="max-w-xl text-slate-300 text-sm md:text-base">
                            Join thousands of players worldwide. Tactical combat, high-speed
                            helicopters and heart-pounding action — take your squad to the
                            top.
                        </p>


                        <div className="flex items-center gap-4">
                            <a href="" className="inline-flex items-center gap-3 px-6 py-3 rounded-md font-semibold text-black bg-[#7dd3fc]"
                                > View More</a>


                            <a href=""
                                className="inline-flex items-center gap-3 px-6 py-3 rounded-md border-2 font-semibold text-[#7dd3fc] border-[#7dd3fc] bg-transparent"
                                >Purchase Game </a>
                        </div>
                    </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            </div>
        </section>
    );
}

export default Banner;