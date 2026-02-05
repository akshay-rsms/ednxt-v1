"use client";
import { useState } from "react";
import { ArrowRight, GraduationCap, Clock, TrendingUp } from "lucide-react";

interface Program {
    title: string;
    fullTitle: string;
    image: string;
    badges: { text: string; color: string; textColor: string }[];
    category: string;
}

export function Programs() {
    const [activeTab, setActiveTab] = useState("UNDER GRADUATE");

    const programs: Program[] = [
        // Undergraduate
        {
            title: "BBA",
            fullTitle: "Bachelor of Business Administration",
            image: "/bba.svg",
            badges: [],
            category: "UNDER GRADUATE"
        },
        {
            title: "B. Com",
            fullTitle: "Bachelor of Commerce",
            image: "/bcom.svg",
            badges: [],
            category: "UNDER GRADUATE"
        },
        {
            title: "BCA",
            fullTitle: "Bachelor of Computer Applications",
            image: "/bca.svg",
            badges: [],
            category: "UNDER GRADUATE"
        },
        // Postgraduate
        {
            title: "MBA",
            fullTitle: "Master of Business Administration",
            image: "/mba.svg",
            badges: [],
            category: "POST GRADUATE"
        },
        {
            title: "MCA",
            fullTitle: "Master of Computer Applications",
            image: "/mca.svg",
            badges: [],
            category: "POST GRADUATE"
        },
        {
            title: "M.Com",
            fullTitle: "Master of Commerce",
            image: "/mcom.svg",
            badges: [],
            category: "POST GRADUATE"
        }
    ];

    const filteredPrograms = programs.filter(program => program.category === activeTab);

    return (
        <section className="py-20 bg-gray-50/50">
            <div className="container mx-auto px-6 font-sans">

                {/* Header */}
                <div className="mb-10">
                    <h4 className="text-[#F51046] font-bold text-sm tracking-widest uppercase mb-2">EXPLORE PROGRAMS</h4>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">All Programs</h2>
                        <button className="bg-[#F51046] hover:bg-red-600 text-white px-6 py-3 rounded-md font-bold text-sm flex items-center gap-2 transition-colors">
                            VIEW ALL <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-8 border-b-2 border-gray-200 mb-12 overflow-x-auto">
                    {["UNDER GRADUATE", "POST GRADUATE", "CERTIFICATION"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-4 text-sm font-bold tracking-wide uppercase transition-all relative ${activeTab === tab ? "text-[#F51046]" : "text-gray-500 hover:text-gray-800"
                                }`}
                        >
                            {tab}
                            {activeTab === tab && (
                                <div className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-[#F51046]" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPrograms.map((prog, idx) => (
                        <div key={idx} className="bg-white border border-red-100 rounded-[2rem] overflow-hidden hover:shadow-xl transition-all duration-300 group relative">

                            {/* Badges Container */}
                            <div className="absolute top-0 left-0 w-full flex justify-center gap-2 z-20 pointer-events-none pt-0">
                                <div className="flex gap-2 -mt-3">
                                    {prog.badges.map((badge, bIdx) => (
                                        <div key={bIdx} className={`${badge.color} ${badge.textColor} text-[10px] font-bold px-3 py-1 rounded-b-lg shadow-md uppercase`}>
                                            {badge.text}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Image */}
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={prog.image}
                                    alt={prog.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-3xl font-bold text-gray-900 mb-1">{prog.title}</h3>
                                <p className="text-gray-500 text-sm mb-6">{prog.fullTitle}</p>

                                <div className="space-y-3 mb-8">
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <GraduationCap className="w-5 h-5 text-[#F51046]" />
                                        <span>454,343 Students</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <Clock className="w-5 h-5 text-[#F51046]" />
                                        <span>2-3 Years</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <TrendingUp className="w-5 h-5 text-[#F51046]" />
                                        <span>Trending amongst people</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <button className="flex-1 py-2.5 rounded-full border border-gray-900 text-sm font-bold text-gray-900 hover:bg-gray-50 transition-colors">
                                        Get Callback
                                    </button>
                                    <button className="flex-1 py-2.5 rounded-full bg-[#F51046] text-white text-sm font-bold hover:bg-red-600 transition-colors flex items-center justify-center gap-1 shadow-lg shadow-red-100">
                                        Apply Now <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {filteredPrograms.length === 0 && (
                        <div className="col-span-full py-20 text-center text-gray-400 font-bold tracking-widest uppercase text-sm">
                            Coming Soon...
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
}
