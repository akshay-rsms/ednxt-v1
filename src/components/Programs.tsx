"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

interface Program {
    title: string;
    fullTitle: string;
    image: string;
    badges: { text: string; color: string; textColor: string }[];
    category: string;
    students: string;
    duration: string;
    trend: string;
    university: string;
}

export function Programs() {

    const programsList1: Program[] = [
        {
            title: "M.Tech",
            fullTitle: "M.Tech in Data Science & AI",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940&auto=format&fit=crop",
            badges: [{ text: "DHARWAD", color: "bg-indigo-600", textColor: "text-white" }],
            category: "POST GRADUATE",
            students: "5,000+ Students",
            duration: "2 Years",
            trend: "Trending",
            university: "IIIT Dharwad"
        },
        {
            title: "GenAI Cert",
            fullTitle: "Generative AI & Agentic AI for Developers",
            image: "/mca.svg",
            badges: [{ text: "IIT PATNA", color: "bg-green-600", textColor: "text-white" }, { text: "NEW", color: "bg-[#FF0031]", textColor: "text-white" }],
            category: "CERTIFICATION",
            students: "2,000+ Students",
            duration: "6 Months",
            trend: "Fast Filling",
            university: "IIT Patna"
        },
        {
            title: "MBA",
            fullTitle: "Master of Business Administration (MBA)",
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop", // Reusing image for now
            badges: [{ text: "SURATHKAL", color: "bg-blue-600", textColor: "text-white" }],
            category: "MASTER'S DEGREE",
            students: "1,500+ Students",
            duration: "2 Years",
            trend: "New",
            university: "NIT Surathkal"
        }
    ];

    const programsList2: Program[] = [
        {
            title: "GenAI Cert",
            fullTitle: "Generative AI & Agentic AI for Developers",
            image: "/mca.svg",
            badges: [{ text: "IIT PATNA", color: "bg-green-600", textColor: "text-white" }, { text: "NEW", color: "bg-[#FF0031]", textColor: "text-white" }],
            category: "CERTIFICATION",
            students: "2,000+ Students",
            duration: "6 Months",
            trend: "Fast Filling",
            university: "IIT Patna"
        },
        {
            title: "M.Tech",
            fullTitle: "M.Tech in Data Science & AI",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940&auto=format&fit=crop",
            badges: [{ text: "DHARWAD", color: "bg-indigo-600", textColor: "text-white" }],
            category: "POST GRADUATE",
            students: "5,000+ Students",
            duration: "2 Years",
            trend: "Trending",
            university: "IIIT Dharwad"
        }
    ];

    const ProgramSection = ({ title, courses, subtitle }: { title: React.ReactNode, courses: Program[], subtitle?: string }) => (
        <div className="mb-16 last:mb-0">
            <div className="mb-6 md:mb-8 text-left">
                {subtitle && (
                    <p className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">
                        {subtitle}
                    </p>
                )}
                <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                    {title}
                </h2>
            </div>

            {/* Carousel Container */}
            <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 snap-x snap-mandatory scrollbar-hide">
                {courses.map((prog, idx) => (
                    <div key={idx} className="min-w-[85%] md:min-w-0 snap-center bg-white rounded-[20px] md:rounded-[32px] overflow-hidden group relative border border-gray-100 hover:border-[#FF0031] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">

                        {/* Image */}
                        <div className="h-40 md:h-52 overflow-hidden relative shrink-0">
                            {/* Badge Overlay */}
                            <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-10">
                                {prog.badges.map((badge, bIdx) => (
                                    <span key={bIdx} className={`${badge.color} ${badge.textColor} text-[10px] md:text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider`}>
                                        {badge.text}
                                    </span>
                                ))}
                            </div>
                            <img
                                src={prog.image}
                                alt={prog.title}
                                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-5 md:p-8 flex flex-col flex-grow">
                            {/* University Name */}
                            <p className="text-xs font-semibold text-gray-500 mb-1">{prog.university}</p>

                            <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2 md:mb-3 leading-snug group-hover:text-[#FF0031] transition-colors">{prog.fullTitle}</h3>

                            {/* Tags/Meta - Hidden on very small screens if needed, but kept for now */}
                            <div className="flex flex-wrap gap-2 mb-4 md:mb-6 mt-auto">
                                <div className="flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-50 px-2 py-1 rounded-md">
                                    <img src="/students.svg" alt="" className="w-3.5 h-3.5 opactiy-60" />
                                    <span>{prog.category}</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-50 px-2 py-1 rounded-md">
                                    <img src="/time.svg" alt="" className="w-3.5 h-3.5 opacity-60" />
                                    <span>{prog.duration}</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 pt-4 border-t border-gray-100 mt-auto">
                                <button className="flex-1 py-2.5 md:py-3 rounded-full border border-gray-300 text-xs md:text-sm font-bold text-gray-700 hover:border-gray-900 hover:text-black transition-all">
                                    View Program
                                </button>
                                <button className="flex-1 py-2.5 md:py-3 rounded-full bg-[#FF0031] text-white text-xs md:text-sm font-bold hover:bg-[#D9002A] transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-500/20">
                                    <span className="hidden md:inline">Syllabus</span>
                                    <span className="md:hidden">Syllabus</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <section className="py-12 md:py-24 bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50 via-white to-white z-0 pointer-events-none" />

            <div className="container mx-auto px-6 font-sans relative z-10">
                <ProgramSection
                    title={<span>Explore our <span className="text-[#FF0031]">most popular programs</span></span>}
                    subtitle="TRENDING COURSES"
                    courses={programsList1}
                />

                <ProgramSection
                    title={<span>Get Future-Ready with <span className="text-[#FF0031]">AI</span></span>}
                    courses={programsList2}
                />
            </div>
        </section>
    );
}
