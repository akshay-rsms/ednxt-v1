"use client";
import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SearchBar } from "@/components/SearchBar";
import { CheckCircle, Cpu, GraduationCap, Globe, Zap, Database } from "lucide-react";

export default function NITSurathkalPage() {
    return (
        <main className="min-h-screen bg-white font-sans text-gray-900 scroll-smooth">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-24 pb-32 px-8 overflow-hidden bg-black text-white">
                <div className="absolute inset-0 z-0 opacity-40">
                    <img
                        src="/nit-surathkal-campus.jpg"
                        alt="NIT Surathkal Campus"
                        className="w-full h-full object-cover"
                        onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=2874&auto=format&fit=crop"; }}
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black z-0" />

                <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
                        <span className="w-2 h-2 rounded-full bg-[#FF0031] animate-pulse" />
                        <span className="text-sm font-bold tracking-wide">ADMISSIONS OPEN</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                        NIT <span className="text-[#FF0031]">Surathkal</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mb-12 leading-relaxed">
                        Excellence in Technology and Management. Discover our flagship MBA and M.Tech programs designed for the future.
                    </p>

                    <SearchBar className="mb-12" />
                </div>
            </section>

            {/* Programs Section */}
            <section className="py-24 px-8 md:px-12">
                <div className="max-w-7xl mx-auto space-y-24">

                    {/* MBA Program */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-[#FF0031] rounded-full text-xs font-bold mb-4">
                                <Globe className="w-4 h-4" /> SCHOOL OF MANAGEMENT
                            </div>
                            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Master of Business Administration (MBA)</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                The MBA program at NITK Surathkal offers a unique blend of management education within a top-tier technological institution. It focuses on developing techno-managers who can lead in a data-driven world.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 font-medium text-gray-800"><CheckCircle className="w-5 h-5 text-[#FF0031]" /> Specializations in Marketing, Finance, HR, Operations, & Analytics</li>
                                <li className="flex items-center gap-3 font-medium text-gray-800"><CheckCircle className="w-5 h-5 text-[#FF0031]" /> Industry-Oriented Curriculum</li>
                                <li className="flex items-center gap-3 font-medium text-gray-800"><CheckCircle className="w-5 h-5 text-[#FF0031]" /> Strong Placement Record</li>
                            </ul>
                            <button className="px-8 py-3 rounded-full bg-gray-900 text-white font-bold hover:bg-[#FF0031] transition-colors">
                                View MBA Details
                            </button>
                        </div>
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2 h-[400px]">
                            <img
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop"
                                alt="MBA Class"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-gray-100" />

                    {/* M.Tech Program */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px]">
                            <img
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940&auto=format&fit=crop"
                                alt="MTech Lab"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold mb-4">
                                <Cpu className="w-4 h-4" /> ENGINEERING & RESEARCH
                            </div>
                            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">M.Tech (Research & Regular)</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Advanced degree programs designed for those who want to spearhead innovation in technology. Specializations range from Data Science and AI to Structural Engineering and VLSI Design.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 font-medium text-gray-800"><Zap className="w-5 h-5 text-blue-600" /> Cutting-edge Research Facilities</li>
                                <li className="flex items-center gap-3 font-medium text-gray-800"><Zap className="w-5 h-5 text-blue-600" /> GATE Scholarship Opportunities</li>
                                <li className="flex items-center gap-3 font-medium text-gray-800"><Zap className="w-5 h-5 text-blue-600" /> Pathways to Ph.D. and R&D Careers</li>
                            </ul>
                            <button className="px-8 py-3 rounded-full bg-gray-900 text-white font-bold hover:bg-blue-600 transition-colors">
                                View M.Tech Details
                            </button>
                        </div>
                    </div>

                </div>
            </section>

            {/* Other Programs Footer Section */}
            <section className="py-16 px-8 md:px-12 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto">
                    <h3 className="text-2xl font-bold mb-8 border-b border-gray-700 pb-4">Explore All Programs at NIT Surathkal</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
                            <h4 className="font-bold text-lg mb-1 flex items-center gap-2"><GraduationCap className="w-5 h-5 text-[#FF0031]" /> MBA</h4>
                            <p className="text-sm text-gray-400">2 Years • Full Time</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
                            <h4 className="font-bold text-lg mb-1 flex items-center gap-2"><Cpu className="w-5 h-5 text-blue-400" /> M.Tech</h4>
                            <p className="text-sm text-gray-400">2 Years • 25+ Specializations</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
                            <h4 className="font-bold text-lg mb-1 flex items-center gap-2"><Database className="w-5 h-5 text-green-400" /> MCA</h4>
                            <p className="text-sm text-gray-400">Master of Computer Applications</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
                            <h4 className="font-bold text-lg mb-1 flex items-center gap-2"><Globe className="w-5 h-5 text-yellow-400" /> M.Sc</h4>
                            <p className="text-sm text-gray-400">Chemistry & Physics</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

