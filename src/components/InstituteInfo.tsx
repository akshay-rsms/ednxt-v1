"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

interface TabContent {
    id: "institute" | "director";
    label: string;
}

const tabs: TabContent[] = [
    { id: "institute", label: "IIT Patna" },
    { id: "director", label: "Program Director" }
];

export function InstituteInfo() {
    const [activeTab, setActiveTab] = useState<"institute" | "director">("institute");

    const handleNext = () => {
        setActiveTab(prev => prev === "institute" ? "director" : "institute");
    };

    const handlePrev = () => {
        setActiveTab(prev => prev === "institute" ? "director" : "institute");
    };

    return (
        <section className="py-12 md:py-24 px-2 md:px-8 bg-white font-sans">
            <div className="max-w-6xl mx-auto">
                {/* Main Card Container */}
                <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-12 border border-[#FF0031] overflow-hidden relative">

                    {/* Top Navigation */}
                    <div className="flex items-center justify-between mb-6 md:mb-12 relative z-10">
                        <button
                            onClick={handlePrev}
                            className="p-2 rounded-full hover:bg-white/50 text-gray-600 hover:text-[#FF0031] transition-all"
                            aria-label="Previous tab"
                        >
                            <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
                        </button>

                        <div className="flex gap-8 md:gap-16 border-b border-gray-300 relative">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`pb-4 text-base md:text-lg font-medium transition-colors relative ${activeTab === tab.id ? "text-black font-bold" : "text-gray-500 hover:text-gray-700"
                                        }`}
                                >
                                    {tab.label}
                                    {activeTab === tab.id && (
                                        <motion.div
                                            layoutId="activeTabUnderline"
                                            className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF0031]"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={handleNext}
                            className="p-2 rounded-full hover:bg-white/50 text-gray-600 hover:text-[#FF0031] transition-all"
                            aria-label="Next tab"
                        >
                            <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                        </button>
                    </div>

                    {/* Content Area */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
                        >
                            {activeTab === "institute" ? (
                                <>
                                    {/* Left Side: Image */}
                                    <div className="h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden group relative">
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                                        <img
                                            src="/iit-patna-campus.png"
                                            alt="IIT Patna Campus - Modern Academic Architecture"
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                        />
                                    </div>

                                    {/* Right Side: Content */}
                                    <div className="space-y-6">
                                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                            About <span className="text-[#FF0031]">IIT Patna</span>
                                        </h2>
                                        <div className="w-20 h-1 bg-[#FF0031]/20 rounded-full" />

                                        <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                                            <p>
                                                Founded as an <span className="font-semibold text-gray-800">Institute of National Importance</span>, IIT Patna stands as one of India’s leading engineering and research institutions. Known for academic excellence, innovation-driven learning, and advanced research initiatives, IIT Patna nurtures future-ready technologists and problem solvers.
                                            </p>
                                            <p>
                                                The institute focuses strongly on emerging technologies such as <span className="font-semibold text-gray-800">Artificial Intelligence, Data Science, and Digital Engineering</span>, offering industry-aligned executive education programs designed to help professionals build future-ready skills.
                                            </p>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    {/* Left Side: Image (Portrait for Director) */}
                                    <div className="order-1 md:order-none h-[350px] md:h-[450px] w-full max-w-sm mx-auto rounded-2xl overflow-hidden relative bg-white">
                                        <img
                                            src="/prof-tn-singh.jpg"
                                            alt="Prof. T.N. Singh, Director IIT Patna"
                                            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 text-white md:hidden">
                                            <p className="font-bold text-lg">Prof. T.N. Singh</p>
                                            <p className="text-sm opacity-90">Director, IIT Patna</p>
                                        </div>
                                    </div>

                                    {/* Right Side: Content */}
                                    <div className="space-y-6 order-2 md:order-none">
                                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                            Welcome to the Future of AI at <span className="text-[#FF0031]">IIT Patna</span>
                                        </h2>

                                        <div className="relative pl-6 border-l-4 border-[#FF0031]/30">
                                            <Quote className="w-8 h-8 text-[#FF0031]/20 absolute -top-4 -left-4 fill-current" />
                                            <p className="italic text-gray-500 font-medium text-lg mb-4">&quot;Dear Future Innovators,&quot;</p>

                                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                                <p>
                                                    India is shaping the next generation of AI engineers — professionals capable of designing, deploying, and scaling intelligent systems responsibly.
                                                </p>
                                                <p>
                                                    This program equips software developers and engineers with deep technical expertise in <span className="font-semibold text-gray-800">LLMs, RAG systems, and Agentic AI workflows</span>.
                                                </p>
                                                <p>
                                                    Whether you’re building smarter applications or leading automation initiatives, this curriculum ensures you graduate as an AI-native developer — ready for a future where AI is not just a tool, but a core engineering layer.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="pt-4 mt-2 border-t border-gray-200">
                                            <p className="text-xl font-bold text-gray-900">Prof. T.N. Singh</p>
                                            <p className="text-[#FF0031] font-medium text-sm tracking-wide uppercase mt-1">Director, IIT Patna</p>
                                        </div>
                                    </div>
                                </>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
