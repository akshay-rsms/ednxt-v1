"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Hero() {
    const images = [
        "/hero1.svg",
        "/hero2.svg",
        "/hero3.svg",
        "/hero4.svg",
        "/hero5.svg",
    ];

    // Duplicate images to create a fuller circle with 10 items, ensuring 5 are always nicely visible in front
    const displayImages = [...images, ...images];

    const [rotation, setRotation] = useState(0);
    const rotationRef = useRef(0);
    const frameRef = useRef<number>(0);

    // Continuous rotation logic
    useEffect(() => {
        const animate = () => {
            rotationRef.current += 0.0005; // Extremely slow continuous rotation speed
            setRotation(rotationRef.current);
            frameRef.current = requestAnimationFrame(animate);
        };
        frameRef.current = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(frameRef.current);
    }, []);

    // Helper to calculate styles for each image based on current rotation
    const getImageStyle = (index: number) => {
        const totalImages = displayImages.length;
        const angle = (index * (2 * Math.PI) / totalImages) + rotation;

        // Calculate 3D position
        const xOffset = Math.sin(angle) * 700; // Increased radius to create gaps between items
        const z = Math.cos(angle); // Depth factor (-1 to 1)

        // Use a power curve for scaling to make the center prominent and sides drop off faster
        // z=1 -> scale=1
        // z=0.8 (approx 36 deg) -> scale ~0.85
        // z=0.3 (approx 72 deg) -> scale ~0.65
        const scale = Math.pow((z + 1.2) / 2.2, 1.2);

        // Adjust opacity for back items
        const opacity = z < -0.3 ? 0.3 : 1; // More aggressive fade for back items
        const zIndex = Math.round(z * 100);

        return {
            x: `calc(-50% + ${xOffset}px)`,
            scale: scale,
            zIndex: zIndex,
            opacity: opacity,
            filter: `brightness(${0.6 + (scale * 0.4)})`, // Dim back items less aggressively
        };
    };

    return (
        <section className="bg-black relative pt-8 pb-48 overflow-hidden min-h-[850px] flex flex-col items-center">
            {/* Radial Background Lines */}
            <div className="absolute inset-0 top-[-10%] flex items-center justify-center pointer-events-none">
                <img src="/hero-circle.svg" alt="" className="w-[1000px] h-[1000px] opacity-20" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto px-4 mt-8 mb-12">
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

            {/* 3D Continuous Carousel Container */}
            <div className="relative w-full max-w-[1200px] h-[500px] flex justify-center items-center perspective-1000">
                {displayImages.map((img, i) => {
                    const style = getImageStyle(i);
                    return (
                        <motion.div
                            key={i}
                            className="absolute top-[40%] left-1/2 w-[300px] md:w-[450px] h-[280px] md:h-[400px] rounded-[2.5rem] overflow-hidden bg-gray-800 shadow-2xl origin-center"
                            style={{
                                y: "-50%",
                                ...style // Apply calculated 3D transforms
                            }}
                            transition={{ duration: 0 }} // Correct instant update for frame-based animation
                        >
                            <img
                                src={img}
                                alt={`Hero Gallery ${i + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
