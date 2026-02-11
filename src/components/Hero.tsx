"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown } from "lucide-react";

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

    const [selectedProgram, setSelectedProgram] = useState("Select Program");
    const [selectedUniversity, setSelectedUniversity] = useState("Select University");

    const programToUniversity: { [key: string]: string } = {
        "GenAI & Agentic AI": "IIT Patna",
        "M.Tech in Data Science & AI": "IIIT Dharwad",
        "PGPM": "IIM Trichy",
        "MBA": "NIT Surathkal",
        "M.Tech": "NIT Surathkal"
    };

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
        const xOffset = Math.sin(angle) * 750; // Increased radius to create gaps between items
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
            <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto px-4 -mt-4 mb-12">
                {/* Trust Badge */}
                <div className="flex flex-col items-center mb-4 mt-12">
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

                {/* Search Bar */}
                {/* Search Bar - Premium Glass Morph */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="w-full max-w-6xl relative z-20 mb-12 mt-4 px-4"
                >
                    <div className="group relative w-full">
                        {/* Glow Effect */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-transparent via-[#FF0031]/20 to-transparent rounded-full opacity-50 blur-lg group-hover:opacity-75 transition-opacity duration-500" />

                        <div className="relative w-full bg-white/[0.08] backdrop-blur-xl border border-white/10 rounded-3xl md:rounded-full p-2 md:p-3 flex flex-col md:flex-row items-center gap-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:border-[#FF0031]/30 hover:shadow-[0_0_20px_rgba(255,0,49,0.15)] transition-all duration-300">

                            {/* Label */}
                            <div className="hidden md:flex items-center pl-4 pr-2 border-r border-white/10 h-full">
                                <span className="text-white text-sm font-medium whitespace-nowrap">
                                    Explore  <span className="text-[#ff0031] font-semibold"></span> Programs
                                </span>
                            </div>

                            {/* Program Select */}
                            <div className="relative w-full md:w-auto md:min-w-[260px] flex-1 group/input">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                                    <Search className="w-4 h-4 text-[#FF0031]" />
                                </div>
                                <select
                                    value={selectedProgram}
                                    onChange={(e) => {
                                        const program = e.target.value;
                                        setSelectedProgram(program);
                                        if (program !== "Select Program" && programToUniversity[program]) {
                                            setSelectedUniversity(programToUniversity[program]);
                                        } else {
                                            setSelectedUniversity("Select University");
                                        }
                                    }}
                                    className="w-full appearance-none bg-black/20 border border-white/5 rounded-2xl md:rounded-full py-3 md:py-3.5 pl-14 pr-10 text-sm font-medium text-gray-200 outline-none focus:bg-black/40 focus:border-[#FF0031]/50 transition-all cursor-pointer placeholder-gray-500 hover:bg-black/30"
                                >
                                    <option className="bg-[#121212] text-gray-300">Select Program</option>
                                    {Object.keys(programToUniversity).map((prog) => (
                                        <option key={prog} value={prog} className="bg-[#121212] text-gray-300">{prog}</option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none group-hover/input:text-[#FF0031] transition-colors" />
                            </div>

                            {/* University Select */}
                            <div className="relative w-full md:w-auto md:min-w-[260px] flex-1 group/input">
                                <select
                                    value={selectedUniversity}
                                    onChange={(e) => setSelectedUniversity(e.target.value)}
                                    className="w-full appearance-none bg-black/20 border border-white/5 rounded-2xl md:rounded-full py-3 md:py-3.5 pl-6 pr-10 text-sm font-medium text-gray-200 outline-none focus:bg-black/40 focus:border-[#FF0031]/50 transition-all cursor-pointer hover:bg-black/30"
                                >
                                    <option className="bg-[#121212] text-gray-300">Select University</option>
                                    <option className="bg-[#121212] text-gray-300">IIT Patna</option>
                                    <option className="bg-[#121212] text-gray-300">IIIT Dharwad</option>
                                    <option className="bg-[#121212] text-gray-300">IIM Trichy</option>
                                    <option className="bg-[#121212] text-gray-300">NIT Surathkal</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none group-hover/input:text-[#FF0031] transition-colors" />
                            </div>

                            {/* Search Button */}
                            <button className="w-full md:w-auto px-8 py-3.5 rounded-2xl md:rounded-full bg-gradient-to-br from-[#FF0031] to-[#FF4D6D] text-white font-bold text-sm shadow-lg shadow-red-900/20 hover:shadow-red-500/30 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2">
                                <Search className="w-4 h-4" />
                                <span>Search</span>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* 3D Continuous Carousel Container */}
            <div className="relative w-full max-w-[1200px] h-[500px] flex justify-center items-center perspective-1000">
                {displayImages.map((img, i) => {
                    const style = getImageStyle(i);
                    return (
                        <motion.div
                            key={i}
                            className="absolute top-[40%] left-1/2 w-[300px] md:w-[450px] h-[320px] md:h-[480px] rounded-[2.5rem] overflow-hidden bg-gray-800 shadow-2xl origin-center"
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
