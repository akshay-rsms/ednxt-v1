"use client";
import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SearchBar } from "@/components/SearchBar";
import { CheckCircle, Cpu, Zap, Settings, Database, Server } from "lucide-react";

export default function NITSurathkalMTechPage() {
    return (
        <main className="min-h-screen bg-white font-sans text-gray-900 scroll-smooth">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-24 pb-32 px-8 overflow-hidden bg-black text-white">
                <div className="absolute inset-0 z-0 opacity-40">
                    <img
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940&auto=format&fit=crop"
                        alt="NIT Surathkal MTech Lab"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black z-0" />

                <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
                        <span className="w-2 h-2 rounded-full bg-[#FF0031] animate-pulse" />
                        <span className="text-sm font-bold tracking-wide">ADMISSIONS OPEN FOR M.TECH</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                        M.Tech at <span className="text-[#FF0031]">NIT Surathkal</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mb-12 leading-relaxed">
                        Spearheading Innovation. Advanced disciplines for the architects of tomorrow's technology.
                    </p>

                    <SearchBar className="mb-12" />
                </div>
            </section>

            {/* Program Overview */}
            <section className="py-24 px-8 md:px-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-[#FF0031] rounded-full text-xs font-bold mb-4">
                            <Cpu className="w-4 h-4" /> ENGINEERING & RESEARCH
                        </div>
                        <span className="text-[#FF0031] font-bold tracking-wider uppercase text-sm mb-2 block">Overview</span>
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">M.Tech (Research & Regular)</h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            NITK Surathkal offers M.Tech programs in various disciplines, backed by state-of-the-art laboratories and highly qualified faculty. The curriculum is designed to foster research aptitude and technical expertise.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "25+ Specializations including CSE, IT, VLSI, & Mechanical",
                                "GATE Scholarship availability",
                                "State-of-the-art Research Centers & Central Computing Facility",
                                "Pathways to Ph.D. and top R&D profiles in Industry"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 font-medium text-gray-800">
                                    <Zap className="w-5 h-5 text-[#FF0031]" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
                        <img
                            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop"
                            alt="Engineering Lab"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </section>

            {/* Highlights / Stats */}
            <section className="py-16 px-8 md:px-12 bg-[#FF0031] text-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div className="text-4xl font-extrabold mb-2">25+</div>
                        <div className="text-sm opacity-90 uppercase tracking-wide">Specializations</div>
                    </div>
                    <div>
                        <div className="text-4xl font-extrabold mb-2">High</div>
                        <div className="text-sm opacity-90 uppercase tracking-wide">GATE Cutoffs</div>
                    </div>
                    <div>
                        <div className="text-4xl font-extrabold mb-2">18 LPA</div>
                        <div className="text-sm opacity-90 uppercase tracking-wide">Avg Package (CSE)</div>
                    </div>
                    <div>
                        <div className="text-4xl font-extrabold mb-2">Top 10</div>
                        <div className="text-sm opacity-90 uppercase tracking-wide">Engineering Institute</div>
                    </div>
                </div>
            </section>

            {/* Specializations Section */}
            <section className="py-24 px-8 md:px-12 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#FF0031] font-bold tracking-wider uppercase text-sm mb-2 block">Disciplines</span>
                        <h2 className="text-3xl font-extrabold text-gray-900">Popular Specializations</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Computer Science & Engg", desc: "Algorithms, Distributed Systems, AI/ML.", icon: Database },
                            { title: "Information Technology", desc: "Network Security, Cloud Computing, Software Engg.", icon: Server },
                            { title: "VLSI Design", desc: "Semiconductor devices, Analog/Digital IC Design.", icon: Settings }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#FF0031]/30 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-6 group-hover:bg-[#FF0031] transition-colors">
                                    <item.icon className="w-6 h-6 text-[#FF0031] group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
