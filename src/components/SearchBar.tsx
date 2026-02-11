"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

export function SearchBar({ className = "" }: { className?: string }) {
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

    const handleSearch = () => {
        if (selectedUniversity && selectedUniversity !== "Select University") {
            const slug = selectedUniversity.toLowerCase().replace(/\s+/g, '-');
            router.push(`/${slug}`);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            ref={searchBarRef}
            className={`w-full max-w-6xl relative z-50 px-4 ${className}`}
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

                    {/* Program Dropdown */}
                    <div className="relative w-full md:w-auto md:min-w-[260px] flex-1">
                        <button
                            onClick={() => setOpenDropdown(openDropdown === 'program' ? null : 'program')}
                            className="w-full flex items-center justify-between bg-black/20 border border-white/5 rounded-2xl md:rounded-full py-3 md:py-3.5 pl-4 pr-6 text-sm font-medium text-gray-200 focus:bg-black/40 focus:border-[#FF0031]/50 transition-all hover:bg-black/30"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                    <Search className="w-4 h-4 text-[#FF0031]" />
                                </div>
                                <span className={selectedProgram === "Select Program" ? "text-gray-400" : "text-white"}>
                                    {selectedProgram}
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
                            className="w-full flex items-center justify-between bg-black/20 border border-white/5 rounded-2xl md:rounded-full py-3 md:py-3.5 pl-6 pr-6 text-sm font-medium text-gray-200 focus:bg-black/40 focus:border-[#FF0031]/50 transition-all hover:bg-black/30"
                        >
                            <span className={selectedUniversity === "Select University" ? "text-gray-400" : "text-white"}>
                                {selectedUniversity}
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
                        className="w-full md:w-auto px-8 py-3.5 rounded-2xl md:rounded-full bg-gradient-to-br from-[#FF0031] to-[#FF4D6D] text-white font-bold text-sm shadow-lg shadow-red-900/20 hover:shadow-red-500/30 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        <Search className="w-4 h-4" />
                        <span>Search</span>
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
