"use client";
import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SearchBar } from "@/components/SearchBar";
import { CheckCircle, Globe, Award, TrendingUp, Users, BookOpen } from "lucide-react";

export default function NITSurathkalMBAPage() {
    return (
        <main className="min-h-screen bg-white font-sans text-gray-900 scroll-smooth">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-24 pb-32 px-8 overflow-hidden bg-black text-white">
                <div className="absolute inset-0 z-0 opacity-40">
                    <img
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop"
                        alt="NIT Surathkal MBA Class"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black z-0" />

                <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
                        <span className="w-2 h-2 rounded-full bg-[#FF0031] animate-pulse" />
                        <span className="text-sm font-bold tracking-wide">ADMISSIONS OPEN</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                        MBA at <span className="text-[#FF0031]">NIT Surathkal</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mb-12 leading-relaxed">
                        A Systems-Oriented Management Program. Developing Techno-Managers for the Digital Age.
                    </p>

                    <SearchBar className="mb-12" />
                </div>
            </section>

            {/* Program Overview */}
            <section className="py-24 px-8 md:px-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-[#FF0031] rounded-full text-xs font-bold mb-4">
                            <Globe className="w-4 h-4" /> SCHOOL OF MANAGEMENT
                        </div>
                        <span className="text-[#FF0031] font-bold tracking-wider uppercase text-sm mb-2 block">Overview</span>
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Master of Business Administration</h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            The MBA program at NITK Surathkal offers a unique blend of management education within a top-tier technological institution. It focuses on developing techno-managers who can lead in a data-driven world, combining core management principles with analytical skills.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Dual advantage of Management + Technology ecosystem",
                                "Specializations in Marketing, Finance, HR, Operations, & Analytics",
                                "Strong Industry Connect & Internship opportunities",
                                "Excellent Placement Record with Top MNCs"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 font-medium text-gray-800">
                                    <CheckCircle className="w-5 h-5 text-[#FF0031]" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop"
                            alt="Management Student"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </section>

            {/* Highlights / Stats */}
            <section className="py-16 px-8 md:px-12 bg-[#FF0031] text-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div className="text-4xl font-extrabold mb-2">30+</div>
                        <div className="text-sm opacity-90 uppercase tracking-wide">Years of Excellence</div>
                    </div>
                    <div>
                        <div className="text-4xl font-extrabold mb-2">100%</div>
                        <div className="text-sm opacity-90 uppercase tracking-wide">Placement Support</div>
                    </div>
                    <div>
                        <div className="text-4xl font-extrabold mb-2">14 LPA</div>
                        <div className="text-sm opacity-90 uppercase tracking-wide">Avg Package</div>
                    </div>
                    <div>
                        <div className="text-4xl font-extrabold mb-2">Distinguished</div>
                        <div className="text-sm opacity-90 uppercase tracking-wide">Alumni Network</div>
                    </div>
                </div>
            </section>

            {/* Curriculum Highlights */}
            <section className="py-24 px-8 md:px-12 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#FF0031] font-bold tracking-wider uppercase text-sm mb-2 block">Curriculum</span>
                        <h2 className="text-3xl font-extrabold text-gray-900">Program Structure</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Core Management", desc: "Managerial Economics, Accounting, Marketing Management, OB, HR Management.", icon: BookOpen },
                            { title: "Business Analytics", desc: "Data Analysis, Decision Making, quantitative techniques for management.", icon: TrendingUp },
                            { title: "Leadership", desc: "Strategic Management, Entreprenuership, Business Ethics and Communication.", icon: Users }
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
