"use client";
import { useState } from "react";
import { ArrowRight, GraduationCap, Clock, TrendingUp, Star, Award, Zap } from "lucide-react";

interface Program {
    title: string;
    fullTitle: string;
    image: string;
    badges: { text: string; color: string; textColor: string }[];
    category: string;
    students: string;
    duration: string;
    trend: string;
}

export function Programs() {
    // Removed activeTab state as we are showing all programs

    const programs: Program[] = [
        {
            title: "GenAI Cert",
            fullTitle: "Generative AI & Agentic AI for Developers",
            image: "/mca.svg",
            badges: [{ text: "IIT PATNA", color: "bg-green-600", textColor: "text-white" }, { text: "NEW", color: "bg-[#FF0031]", textColor: "text-white" }],
            category: "CERTIFICATION",
            students: "2,000+ Students",
            duration: "6 Months",
            trend: "Fast Filling"
        },
        {
            title: "M.Tech",
            fullTitle: "M.Tech in Data Science & AI",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940&auto=format&fit=crop",
            badges: [{ text: "DHARWAD", color: "bg-indigo-600", textColor: "text-white" }],
            category: "POST GRADUATE",
            students: "5,000+ Students",
            duration: "2 Years",
            trend: "Trending"
        },
        {
            title: "M.Tech",
            fullTitle: "M.Tech (Research & Regular)",
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop",
            badges: [{ text: "SURATHKAL", color: "bg-blue-600", textColor: "text-white" }],
            category: "POST GRADUATE",
            students: "4,200+ Students",
            duration: "2 Years",
            trend: "Research Focused"
        }
    ];

    // No filtering, showing all programs
    const displayPrograms = programs;

    return (
        <section className="py-12 md:py-24 bg-white relative overflow-hidden">
            {/* Background Elements for Premium Feel */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50 via-white to-white z-0 pointer-events-none" />

            <div className="container mx-auto px-6 font-sans relative z-10">

                {/* Enhanced Header */}
                <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">

                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
                        Our Flagship <span className="text-[#FF0031]">Programs</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-500 font-medium leading-relaxed">
                        Industry-ready programs built with top universities and real-world AI experience. Curated for excellence.
                    </p>
                </div>

                {/* Cards Grid - No Tabs */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 xl:gap-10">
                    {displayPrograms.map((prog, idx) => (
                        <div key={idx} className="bg-white rounded-[2rem] overflow-hidden group relative border border-[#FF0031]">

                            {/* Image - No Overlay, No Badges */}
                            <div className="h-56 overflow-hidden relative">
                                <img
                                    src={prog.image}
                                    alt={prog.title}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#FF0031] transition-colors">{prog.title}</h3>
                                <p className="text-gray-500 text-sm font-medium mb-6 line-clamp-2 min-h-[40px]">{prog.fullTitle}</p>

                                <div className="space-y-4 mb-8 border-t border-gray-50 pt-6">
                                    <div className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                                        <img src="/students.svg" alt="Students" className="w-8 h-8" />
                                        <span>{prog.students}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                                        <img src="/time.svg" alt="Duration" className="w-8 h-8" />
                                        <span>{prog.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                                        <div className="w-8 h-8 rounded-full bg-[#FF0031] flex items-center justify-center">
                                            <img src="/trending.svg" alt="Trending" className="w-4 h-4" />
                                        </div>
                                        <span>{prog.trend}</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 mt-auto">
                                    <button className="flex-1 py-3 rounded-full border border-black text-sm font-bold text-black hover:bg-gray-50 transition-all">
                                        View Details
                                    </button>
                                    <button className="flex-1 py-3 rounded-full bg-[#FF0031] text-white text-sm font-bold hover:bg-[#D9002A] transition-all flex items-center justify-center gap-2">
                                        Apply Now <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
}
