"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

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
    const [openDropdown, setOpenDropdown] = useState<'program' | 'university' | null>(null);
    const router = useRouter();
    const searchBarRef = useRef<HTMLDivElement>(null);

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

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchBarRef.current && !searchBarRef.current.contains(event.target as Node)) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const [radius, setRadius] = useState(300); // Default to smaller radius for mobile

    useEffect(() => {
        const handleResize = () => {
            setRadius(window.innerWidth < 768 ? 300 : 750);
        };

        // Set initial
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Helper to calculate styles for each image based on current rotation
    const getImageStyle = (index: number) => {
        const totalImages = displayImages.length;
        const angle = (index * (2 * Math.PI) / totalImages) + rotation;

        // Calculate 3D position
        const xOffset = Math.sin(angle) * radius; // Responsive radius
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

    const handleSearch = () => {
        if (selectedUniversity === "NIT Surathkal") {
            if (selectedProgram === "MBA") {
                router.push("/nit-surathkal-mba");
            } else if (selectedProgram === "M.Tech") {
                router.push("/nit-surathkal-mtech");
            } else {
                router.push("/nit-surathkal");
            }
        } else if (selectedUniversity && selectedUniversity !== "Select University") {
            const slug = selectedUniversity.toLowerCase().replace(/\s+/g, '-');
            router.push(`/${slug}`);
        }
    };

    return (
        <section className="bg-black relative pt-10 md:pt-8 pb-8 md:pb-48 overflow-hidden min-h-[600px] md:min-h-[850px] flex flex-col items-center">
            {/* Radial Background Lines */}
            <div className="absolute inset-0 top-[-10%] flex items-center justify-center pointer-events-none">
                <img src="/hero-circle.svg" alt="" className="w-[1000px] h-[1000px] opacity-20" />
            </div>

            {/* Main Content */}
            <div className="relative z-[101] flex flex-col items-center text-center max-w-5xl mx-auto px-3 md:px-4 -mt-4 mb-8 md:mb-12">
                {/* Trust Badge */}
                <div className="flex flex-col items-center mb-6 md:mb-4 mt-6 md:mt-12">
                    <img src="/india's-most.svg" alt="India's Most Trusted" className="h-14 md:h-16 w-auto" />
                </div>

                {/* Heading */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-6 leading-tight tracking-tight">
                    Transform Your Future with <br />
                    AI Enhanced Education
                </h1>

                {/* Buttons */}
                <div className="flex items-center gap-2 md:gap-4 mb-8">
                    <button className="px-6 md:px-8 py-3 md:py-3 rounded-full bg-[#FF0031] text-white font-bold hover:bg-[#D9002A] transition-colors shadow-lg shadow-red-900/30 tracking-wide text-base md:text-sm">
                        Enroll Now
                    </button>
                    <button className="px-6 md:px-8 py-3 md:py-3 rounded-full border border-gray-600 text-white font-bold hover:border-white hover:bg-white/5 transition-colors tracking-wide text-base md:text-sm">
                        Talk to Counsellor
                    </button>
                </div>

                {/* Search Bar */}
                {/* Search Bar - Premium Glass Morph */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    ref={searchBarRef}
                    className="w-[calc(100%+1.5rem)] -mx-3 md:w-full md:mx-0 max-w-6xl relative z-50 mb-4 mt-2 px-0 md:px-4"
                >
                    <div className="group relative w-full">
                        {/* Glow Effect */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-transparent via-[#FF0031]/20 to-transparent rounded-full opacity-50 blur-lg group-hover:opacity-75 transition-opacity duration-500" />

                        <div className="relative w-full bg-white/[0.08] backdrop-blur-xl border border-white/10 rounded-xl md:rounded-full p-1 md:p-3 flex flex-row items-center gap-1 md:gap-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:border-[#FF0031]/30 hover:shadow-[0_0_20px_rgba(255,0,49,0.15)] transition-all duration-300">

                            {/* Label */}
                            <div className="hidden md:flex items-center pl-4 pr-2 border-r border-white/10 h-full">
                                <span className="text-white text-sm font-medium whitespace-nowrap">
                                    Explore  <span className="text-[#ff0031] font-semibold"></span> Programs
                                </span>
                            </div>

                            {/* Program Dropdown */}
                            <div className="relative w-full md:w-auto md:min-w-[260px] flex-1">
                                <button
                                    onClick={() => setOpenDropdown(openDropdown === 'program' ? null : 'program')}
                                    className="w-full flex items-center justify-between bg-black/20 border border-white/5 rounded-lg md:rounded-2xl py-2.5 md:py-3.5 pl-3 md:pl-4 pr-3 md:pr-6 text-xs md:text-sm font-medium text-gray-200 focus:bg-black/40 focus:border-[#FF0031]/50 transition-all hover:bg-black/30"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="hidden md:flex w-8 h-8 rounded-full bg-white/5 items-center justify-center shrink-0">
                                            <Search className="w-4 h-4 text-[#FF0031]" />
                                        </div>
                                        <span className={`truncate ${selectedProgram === "Select Program" ? "text-gray-400" : "text-white"}`}>
                                            {selectedProgram === "Select Program" ? "Program" : selectedProgram}
                                        </span>
                                    </div>
                                    <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${openDropdown === 'program' ? 'rotate-180' : ''}`} />
                                </button>

                                <AnimatePresence>
                                    {openDropdown === 'program' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 w-full mt-2 bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50 p-2"
                                        >
                                            <div className="max-h-[240px] overflow-y-auto scrollbar-hide">
                                                <button
                                                    onClick={() => {
                                                        setSelectedProgram("Select Program");
                                                        // Logic for resetting university if needed, keeping simple for now as requested
                                                        setOpenDropdown(null);
                                                    }}
                                                    className="w-full text-left px-4 py-2.5 rounded-xl hover:bg-white/5 text-gray-400 text-sm transition-colors"
                                                >
                                                    Select Program
                                                </button>
                                                {(selectedUniversity !== "Select University"
                                                    ? Object.keys(programToUniversity).filter(p => programToUniversity[p] === selectedUniversity)
                                                    : Object.keys(programToUniversity)
                                                ).map((prog) => (
                                                    <button
                                                        key={prog}
                                                        onClick={() => {
                                                            setSelectedProgram(prog);
                                                            if (programToUniversity[prog]) {
                                                                setSelectedUniversity(programToUniversity[prog]);
                                                            }
                                                            setOpenDropdown(null);
                                                        }}
                                                        className={`w-full text-left px-4 py-2.5 rounded-xl hover:bg-white/10 text-sm transition-colors ${selectedProgram === prog ? 'text-[#FF0031] bg-white/5' : 'text-gray-200'}`}
                                                    >
                                                        {prog}
                                                    </button>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* University Dropdown */}
                            <div className="relative w-full md:w-auto md:min-w-[260px] flex-1">
                                <button
                                    onClick={() => setOpenDropdown(openDropdown === 'university' ? null : 'university')}
                                    className="w-full flex items-center justify-between bg-black/20 border border-white/5 rounded-lg md:rounded-2xl py-2.5 md:py-3.5 pl-3 md:pl-6 pr-3 md:pr-6 text-xs md:text-sm font-medium text-gray-200 focus:bg-black/40 focus:border-[#FF0031]/50 transition-all hover:bg-black/30"
                                >
                                    <span className={`truncate ${selectedUniversity === "Select University" ? "text-gray-400" : "text-white"}`}>
                                        {selectedUniversity === "Select University" ? "University" : selectedUniversity}
                                    </span>
                                    <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${openDropdown === 'university' ? 'rotate-180' : ''}`} />
                                </button>

                                <AnimatePresence>
                                    {openDropdown === 'university' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 w-full mt-2 bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50 p-2"
                                        >
                                            <div className="max-h-[240px] overflow-y-auto scrollbar-hide">
                                                <button
                                                    onClick={() => {
                                                        setSelectedUniversity("Select University");
                                                        setOpenDropdown(null);
                                                    }}
                                                    className="w-full text-left px-4 py-2.5 rounded-xl hover:bg-white/5 text-gray-400 text-sm transition-colors"
                                                >
                                                    Select University
                                                </button>
                                                {(selectedProgram !== "Select Program"
                                                    ? [programToUniversity[selectedProgram]]
                                                    : Array.from(new Set(Object.values(programToUniversity)))
                                                ).map((uni) => (
                                                    <button
                                                        key={uni}
                                                        onClick={() => {
                                                            setSelectedUniversity(uni);
                                                            if (selectedProgram !== "Select Program" && programToUniversity[selectedProgram] !== uni) {
                                                                setSelectedProgram("Select Program");
                                                            }
                                                            setOpenDropdown(null);
                                                        }}
                                                        className={`w-full text-left px-4 py-2.5 rounded-xl hover:bg-white/10 text-sm transition-colors ${selectedUniversity === uni ? 'text-[#FF0031] bg-white/5' : 'text-gray-200'}`}
                                                    >
                                                        {uni}
                                                    </button>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Search Button */}
                            <button
                                onClick={handleSearch}
                                className="w-auto md:w-auto px-4 md:px-8 py-2.5 md:py-3.5 rounded-lg md:rounded-full bg-gradient-to-br from-[#FF0031] to-[#FF4D6D] text-white font-bold text-xs md:text-sm shadow-lg shadow-red-900/20 hover:shadow-red-500/30 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-1.5 md:gap-2"
                            >
                                <Search className="w-5 h-5 md:w-4 md:h-4" />
                                <span className="hidden md:inline">Search</span>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Mobile Carousel (2 Columns) */}
            <div className="flex md:hidden w-full max-w-md mx-auto h-[600px] gap-2 px-2 -mt-8 overflow-hidden relative">
                {/* Top Blur Mask */}
                <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-black via-black/60 to-transparent z-20 pointer-events-none"></div>
                {/* Bottom Blur Mask */}
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black via-black/60 to-transparent z-20 pointer-events-none"></div>

                {/* Column 1 - Upward */}
                <div className="w-1/2 h-full overflow-hidden relative flex flex-col justify-start">
                    <motion.div
                        className="flex flex-col gap-2"
                        animate={{ y: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, duration: 150, ease: "linear" }}
                    >
                        {[...images, ...images, ...images, ...images].map((img, i) => (
                            <div key={`col1-${i}`} className="w-full aspect-[3/4] rounded-xl overflow-hidden shadow-lg border border-white/10 bg-gray-900 shrink-0">
                                <img src={img} alt={`Mobile Hero 1-${i}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Column 2 - Downward */}
                <div className="w-1/2 h-full overflow-hidden relative flex flex-col justify-start">
                    <motion.div
                        className="flex flex-col gap-2"
                        animate={{ y: ["-50%", "0%"] }}
                        transition={{ repeat: Infinity, duration: 150, ease: "linear" }}
                    >
                        {[...images, ...images, ...images, ...images].map((img, i) => (
                            <div key={`col2-${i}`} className="w-full aspect-[3/4] rounded-xl overflow-hidden shadow-lg border border-white/10 bg-gray-900 shrink-0">
                                <img src={img} alt={`Mobile Hero 2-${i}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* 3D Continuous Carousel Container (Desktop) */}
            <div className="hidden md:flex relative w-full max-w-[1200px] h-[500px] justify-center items-center perspective-1000">
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
