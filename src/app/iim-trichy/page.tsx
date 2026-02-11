"use client";
import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SearchBar } from "@/components/SearchBar";
import { ArrowRight, CheckCircle, Clock, BookOpen, UserCheck, Briefcase } from "lucide-react";

export default function IIMTrichyPage() {
    return (
        <main className="min-h-screen bg-white font-sans text-gray-900 scroll-smooth">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-24 pb-32 px-8 overflow-hidden bg-black text-white">
                <div className="absolute inset-0 z-0 opacity-40">
                    <img
                        src="/iim-trichy-campus.jpg"
                        alt="IIM Trichy Campus"
                        className="w-full h-full object-cover"
                        onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2886&auto=format&fit=crop"; }}
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black z-0" />

                <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
                        <span className="w-2 h-2 rounded-full bg-[#FF0031] animate-pulse" />
                        <span className="text-sm font-bold tracking-wide">ADMISSIONS OPEN 2026</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                        IIM <span className="text-[#FF0031]">Trichy</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mb-12 leading-relaxed">
                        Shape your leadership journey with the prestigious Post Graduate Programme in Management (PGPM) from one of India's premier B-Schools.
                    </p>

                    <SearchBar className="mb-12" />
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-24 px-8 md:px-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-[#FF0031] font-bold tracking-wider uppercase text-sm mb-2 block">Overview</span>
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Post Graduate Programme in Management (PGPM)</h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            The PGPM at IIM Trichy is a two-year full-time residential programme designed to create socially responsible and competent business leaders. The curriculum is rigorously designed to provide a comprehensive understanding of various business functions and the complex dynamics of the business world.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "World-class Faculty & Pedagogy",
                                "Case-study based learning",
                                "Global Immersion Opportunities",
                                "Strong Industry Connect"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 font-medium text-gray-800">
                                    <CheckCircle className="w-5 h-5 text-[#FF0031]" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop"
                            alt="Management Student"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                            <p className="font-bold text-lg">Batch of 2024</p>
                            <p className="text-sm opacity-80">Highest Package: ₹ 45 LPA</p>
                        </div>
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
                            { title: "Core Courses", desc: "Economics, Marketing, Finance, Operations, Strategy, and OBHR.", icon: BookOpen },
                            { title: "Electives", desc: "Specializations in Analytics, Consulting, Finance, and Marketing.", icon: Briefcase },
                            { title: "Experiential Learning", desc: "Summer Internship, Live Projects, and International Exchange.", icon: UserCheck }
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

            {/* Other Programs Footer Section */}
            <section className="py-16 px-8 md:px-12 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto">
                    <h3 className="text-2xl font-bold mb-8 border-b border-gray-700 pb-4">Other Programs at IIM Trichy</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="group md:col-span-1 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#FF0031]/50 hover:bg-white/10 transition-all cursor-pointer">
                            <h4 className="font-bold text-lg mb-2 group-hover:text-[#FF0031] transition-colors">PGPM-HR</h4>
                            <p className="text-sm text-gray-400">Post Graduate Programme in Management - Human Resources</p>
                        </div>
                        <div className="group md:col-span-1 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#FF0031]/50 hover:bg-white/10 transition-all cursor-pointer">
                            <h4 className="font-bold text-lg mb-2 group-hover:text-[#FF0031] transition-colors">Doctoral Programme (DPM)</h4>
                            <p className="text-sm text-gray-400">Rigorous research programme in management.</p>
                        </div>
                        <div className="group md:col-span-1 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#FF0031]/50 hover:bg-white/10 transition-all cursor-pointer">
                            <h4 className="font-bold text-lg mb-2 group-hover:text-[#FF0031] transition-colors">Executive PGPM</h4>
                            <p className="text-sm text-gray-400">For working professionals (Chennai Calendar).</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

