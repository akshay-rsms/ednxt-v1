"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Hero() {
    const images = [
        "/hero1.svg",
        "/hero2.svg",
        "/hero3.svg",
        "/hero4.svg",
        "/hero5.svg",
    ];

    const [centerIndex, setCenterIndex] = useState(0);

    // Auto-rotate carousel
    useEffect(() => {
        const timer = setInterval(() => {
            setCenterIndex((prev) => (prev + 1) % images.length);
        }, 4000); // Slightly slower for better viewing
        return () => clearInterval(timer);
    }, [images.length]);

    const getImage = (offset: number) => {
        const idx = (centerIndex + offset + images.length) % images.length;
        return images[idx];
    };

    return (
        <section className="bg-black relative pt-8 pb-48 overflow-hidden min-h-[850px] flex flex-col items-center">
            {/* Radial Background Lines */}
            <div className="absolute inset-0 top-[-10%] flex items-center justify-center pointer-events-none">
                <img src="/hero-circle.svg" alt="" className="w-[1000px] h-[1000px] opacity-20" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto px-4 mt-8">
                {/* Trust Badge */}
                <div className="flex flex-col items-center mb-4">
                    <img src="/india's-most.svg" alt="India's Most Trusted" className="h-16 w-auto" />
                </div>

                {/* Heading */}
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                    Transform Your Future with <br />
                    AI Enhanced Education
                </h1>

                {/* Buttons */}
                <div className="flex items-center gap-4 mb-6">
                    <button className="px-8 py-3 rounded-full bg-[#FF0031] text-white font-bold hover:bg-[#D9002A] transition-colors shadow-lg shadow-red-900/30 tracking-wide text-sm">
                        Enroll Now
                    </button>
                    <button className="px-8 py-3 rounded-full border border-gray-600 text-white font-bold hover:border-white hover:bg-white/5 transition-colors tracking-wide text-sm">
                        Talk to Counsellor
                    </button>
                </div>
            </div>

            {/* Carousel Container - Full Width Static Positions */}
            <div className="w-full 2xl:max-w-[1500px] 2xl:mx-auto relative h-[450px] flex justify-center items-center mt-2 px-4 2xl:gap-6">

                {/* Far Left (-2) */}
                <div className="absolute 2xl:static left-[0%] md:left-[2%] w-[160px] md:w-[260px] 2xl:w-[200px] h-[220px] md:h-[320px] rounded-[1.5rem] overflow-hidden bg-gray-900 z-10 shadow-2xl">
                    <AnimatePresence mode="popLayout">
                        <motion.img
                            key={getImage(-2)}
                            src={getImage(-2)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            alt="Gallery"
                            className="w-full h-full object-cover"
                        />
                    </AnimatePresence>
                </div>

                {/* Mid Left (-1) */}
                <div className="absolute 2xl:static left-[12%] md:left-[18%] w-[200px] md:w-[320px] 2xl:w-[280px] h-[280px] md:h-[400px] rounded-[2rem] overflow-hidden bg-gray-800 z-20 shadow-2xl">
                    <AnimatePresence mode="popLayout">
                        <motion.img
                            key={getImage(-1)}
                            src={getImage(-1)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            alt="Gallery"
                            className="w-full h-full object-cover"
                        />
                    </AnimatePresence>
                </div>

                {/* Center (0) */}
                <div className="absolute 2xl:static z-30 w-[280px] md:w-[500px] 2xl:w-[400px] h-[350px] md:h-[480px] rounded-[2.5rem] overflow-hidden bg-gray-700 shadow-2xl shadow-black/50">
                    {/* Gradient at bottom for text readability if needed, but keeping image clean as requested */}
                    <AnimatePresence mode="popLayout">
                        <motion.img
                            key={getImage(0)}
                            src={getImage(0)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            alt="Hero Gallery"
                            className="w-full h-full object-cover"
                        />
                    </AnimatePresence>
                </div>

                {/* Mid Right (1) */}
                <div className="absolute 2xl:static right-[12%] md:right-[18%] w-[200px] md:w-[320px] 2xl:w-[280px] h-[280px] md:h-[400px] rounded-[2rem] overflow-hidden bg-gray-800 z-20 shadow-2xl">
                    <AnimatePresence mode="popLayout">
                        <motion.img
                            key={getImage(1)}
                            src={getImage(1)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            alt="Gallery"
                            className="w-full h-full object-cover"
                        />
                    </AnimatePresence>
                </div>

                {/* Far Right (2) */}
                <div className="absolute 2xl:static right-[0%] md:right-[2%] w-[160px] md:w-[260px] 2xl:w-[200px] h-[220px] md:h-[320px] rounded-[1.5rem] overflow-hidden bg-gray-900 z-10 shadow-2xl">
                    <AnimatePresence mode="popLayout">
                        <motion.img
                            key={getImage(2)}
                            src={getImage(2)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            alt="Gallery"
                            className="w-full h-full object-cover"
                        />
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
}
