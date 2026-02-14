"use client";
import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
    ArrowRight, CheckCircle, XCircle, Clock, Globe,
    Download, MonitorPlay, BrainCircuit, Code, Database,
    Layers, Cpu, Zap, Award, BookOpen, ChevronDown,
    Briefcase, Lock
} from "lucide-react";

import { InstituteInfoIIITDharwad } from "@/components/InstituteInfoIIITDharwad";

export default function IIITDharwadPage() {
    const [activeModule, setActiveModule] = useState<number | null>(0);
    const [isSticky, setIsSticky] = useState(false);
    const [activeSection, setActiveSection] = useState("overview");
    const [isModulesUnlocked, setIsModulesUnlocked] = useState(false);

    // Sticky Navbar Handler & Scroll Spy
    useEffect(() => {
        const handleScroll = () => {
            // Sticky Check
            setIsSticky(window.scrollY > 600);

            // Scroll Spy Logic
            const sections = ["overview", "comparison", "curriculum", "faculty", "certificate", "fees", "faq"];

            let currentSection = "overview";

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // 150px offset accounts for the sticky navbar height + some buffer
                    if (rect.top <= 150) {
                        currentSection = section;
                    }
                }
            }
            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const modules = [
        {
            title: "Semester 1: Foundations & Core Concepts",
            duration: "Semester 1",
            desc: "Establish a strong foundation in mathematical and computational principles essential for Data Science and AI.",
            topics: [
                "Applied Mathematics for Data Science and AI",
                "Machine Learning Paradigms",
                "Data Science Lab",
                "Introduction to Research",
                "Introduction to Speech and Natural Language Processing",
                "Introduction to Computer Vision",
                "Introduction to Generative AI",
                "Introduction to Financial Analytics",
                "Introduction to AI in Healthcare",
                "Project-I"
            ]
        },
        {
            title: "Semester 2: Advanced Specializations",
            duration: "Semester 2",
            desc: "Dive deeper into specialized tracks and advanced methodologies.",
            topics: [
                "Deep Learning & Neural Networks",
                "Big Data Analytics",
                "Advanced NLP & Transformers",
                "Reinforcement Learning",
                "Cloud Computing for AI",
                "Elective 1: Specialization Subject",
                "Elective 2: Specialization Subject",
                "Project-II"
            ]
        },
        {
            title: "Semester 3: Industry Application & Electives",
            duration: "Semester 3",
            desc: "Focus on real-world applications and industry-relevant elective courses.",
            topics: [
                "AI Ethics & Governance",
                "MLOps & Deployment",
                "Advanced Computer Vision",
                "Elective 3",
                "Elective 4",
                "Dissertation Phase I"
            ]
        },
        {
            title: "Semester 4: Capstone & Thesis",
            duration: "Semester 4",
            desc: "Culmination of the program with a major thesis or capstone project solving a significant problem.",
            topics: [
                "Master's Thesis / Capstone Project",
                "Research Publication",
                "Final Viva Voce"
            ]
        }
    ];

    const faculty = [
        { name: "Prof. S R Mahadeva Prasanna", role: "Professor and Director", desc: "Ph.D. (IIT Madras)" },
        { name: "Dr. Girish GN", role: "Assistant Professor", desc: "Ph.D. (NITK Surathkal)" },
        { name: "Dr. Chinmayananda A", role: "Assistant Professor", desc: "Ph.D. (IISc Bengaluru)" },
        { name: "Dr. Manjunath K V", role: "Assistant Professor", desc: "Ph.D. (NITK Surathkal)" },
        { name: "Dr. Deepak K T", role: "Assistant Professor", desc: "Ph.D. (IIT Guwahati)" },
        { name: "Dr. Dibyajyoti Guha", role: "Assistant Professor", desc: "Ph.D. (IIT Bhubaneswar)" },
        { name: "Dr. Abdul Wahid", role: "Assistant Professor", desc: "Ph.D. (IIT Dhanbad)" },
        { name: "Dr. Sunil C K", role: "Assistant Professor", desc: "Ph.D. (NITK Surathkal)" },
        { name: "Dr. Krishnendu Ghosh", role: "Assistant Professor", desc: "Ph.D. (IIT Kharagpur)" },
        { name: "Dr. Sunil Kumar P V", role: "Assistant Professor", desc: "Ph.D. (NIT, Calicut)" },
        { name: "Dr. Sunil Saumya", role: "Assistant Professor", desc: "Ph.D. (NIT Patna)" },
        { name: "Dr. Prabhu Prasad B M", role: "Assistant Professor", desc: "Ph.D. (NITK Surathkal)" }
    ];

    return (
        <main className="min-h-screen bg-white font-sans text-gray-900 scroll-smooth">
            <Navbar />

            {/* Sticky Sub-Navbar */}
            <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isSticky ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
                <div className="bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-lg px-8 md:px-12 py-4">
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <a href="/" className="flex items-center">
                                <img src="/logo.svg" alt="EdNxt.ai" className="h-6 w-auto" />
                            </a>
                            <div className="h-4 w-px bg-gray-300 hidden md:block"></div>
                            <span className="font-bold text-gray-900 text-sm md:text-base">IIIT Dharwad</span>
                        </div>
                        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
                            <button onClick={() => scrollToSection("overview")} className={`transition-colors ${activeSection === "overview" ? "text-[#FF0031] font-bold" : "hover:text-[#FF0031]"}`}>Overview</button>
                            <button onClick={() => scrollToSection("comparison")} className={`transition-colors ${activeSection === "comparison" ? "text-[#FF0031] font-bold" : "hover:text-[#FF0031]"}`}>Comparison</button>
                            <button onClick={() => scrollToSection("curriculum")} className={`transition-colors ${activeSection === "curriculum" ? "text-[#FF0031] font-bold" : "hover:text-[#FF0031]"}`}>Curriculum</button>
                            <button onClick={() => scrollToSection("faculty")} className={`transition-colors ${activeSection === "faculty" ? "text-[#FF0031] font-bold" : "hover:text-[#FF0031]"}`}>Faculty</button>
                            <button onClick={() => scrollToSection("certificate")} className={`transition-colors ${activeSection === "certificate" ? "text-[#FF0031] font-bold" : "hover:text-[#FF0031]"}`}>Certificates</button>
                            <button onClick={() => scrollToSection("fees")} className={`transition-colors ${activeSection === "fees" ? "text-[#FF0031] font-bold" : "hover:text-[#FF0031]"}`}>Fees</button>
                            <button onClick={() => scrollToSection("faq")} className={`transition-colors ${activeSection === "faq" ? "text-[#FF0031] font-bold" : "hover:text-[#FF0031]"}`}>FAQ's</button>
                        </div>
                        <button className="bg-[#FF0031] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#D9002A] transition-colors">
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section id="overview" className="relative min-h-[75vh] flex items-center pt-32 pb-24 px-4 md:px-12 bg-[#0a0a0a] text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/iiit-dharwad-campus.png"
                        alt="IIIT Dharwad Campus"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center -mt-20">
                    <div className="space-y-8 md:pl-12">
                        <div className="flex items-center justify-start w-full gap-4 md:gap-8">
                            <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center p-2 shadow-lg shadow-white/10">
                                {/* IIIT Dharwad Logo Placeholder */}
                                <span className="text-black font-extrabold text-xs text-center">IIIT Dharwad</span>
                            </div>
                            <div className="h-16 w-0.5 bg-gray-700"></div>
                            <div className="text-2xl font-bold">
                                M.Tech Program
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
                            Data Science & <br />
                            <span className="text-[#FF0031]">Artificial Intelligence</span>
                        </h1>

                        <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
                            A Prestigious <span className="text-white font-semibold">M.Tech Degree</span> for Working Professionals from an <span className="text-white font-semibold">Institute of National Importance</span>.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="px-8 py-4 rounded-full bg-[#FF0031] text-white font-bold text-lg hover:bg-[#D9002A] transition-all shadow-[0_0_30px_rgba(255,0,49,0.3)] hover:shadow-[0_0_50px_rgba(255,0,49,0.5)] flex items-center justify-center gap-2">
                                Apply Now <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center justify-center gap-2">
                                <Download className="w-5 h-5" /> Brochure
                            </button>
                        </div>
                    </div>

                    {/* Program Snapshot Card */}
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative group hover:border-[#FF0031]/30 transition-colors duration-500">
                        <div className="absolute top-4 right-4 bg-yellow-300 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            Enrollment Open
                        </div>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white text-sm font-bold mb-6">
                            <Award className="w-4 h-4 text-[#FF0031]" />
                            <span className="tracking-wide">M.TECH DEGREE</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-6">Program Highlights</h3>
                        <div className="grid grid-cols-1 gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                    <Clock className="w-5 h-5 text-[#FF0031]" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 uppercase font-bold">Duration</p>
                                    <p className="text-lg font-semibold">2 Years (Flexible Exit)</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                    <Code className="w-5 h-5 text-[#FF0031]" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 uppercase font-bold">Curriculum</p>
                                    <p className="text-lg font-semibold">Industry-Aligned & AI Focused</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                    <Globe className="w-5 h-5 text-[#FF0031]" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 uppercase font-bold">Mode</p>
                                    <p className="text-lg font-semibold">Hybrid (Online + Campus)</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                    <Briefcase className="w-5 h-5 text-[#FF0031]" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 uppercase font-bold">Batch Start</p>
                                    <p className="text-lg font-semibold">February 2026</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Strip */}
            <div className="bg-[#FF0031] text-white py-8">
                <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-wrap justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <p className="text-3xl font-extrabold">Institute</p>
                        <p className="text-sm font-medium opacity-80 uppercase tracking-wider">of National Importance</p>
                    </div>
                    <div className="h-12 w-px bg-white/20 hidden md:block"></div>
                    <div className="text-center md:text-left">
                        <p className="text-3xl font-extrabold">Full</p>
                        <p className="text-sm font-medium opacity-80 uppercase tracking-wider">Alumni Status</p>
                    </div>
                    <div className="h-12 w-px bg-white/20 hidden md:block"></div>
                    <div className="text-center md:text-left">
                        <p className="text-3xl font-extrabold">PhD</p>
                        <p className="text-sm font-medium opacity-80 uppercase tracking-wider">Eligibility</p>
                    </div>
                    <div className="h-12 w-px bg-white/20 hidden md:block"></div>
                    <div className="text-center md:text-left">
                        <p className="text-3xl font-extrabold">Hybrid</p>
                        <p className="text-sm font-medium opacity-80 uppercase tracking-wider">Learning Mode</p>
                    </div>
                </div>
            </div>

            {/* Institute Info Section */}
            <InstituteInfoIIITDharwad />

            {/* Comparison Section */}
            <section id="comparison" className="py-24 px-4 md:px-12 bg-gray-50/50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#FF0031] font-bold tracking-wider uppercase text-sm mb-2 block">Why This Program?</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
                            Traditional M.Tech vs. <br className="hidden md:block" />
                            <span className="text-[#FF0031]">M.Tech DSAI by IIIT Dharwad</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-8 items-start">
                        {/* Labels Column */}
                        <div className="hidden lg:flex flex-col gap-7 pt-40">
                            {["Curriculum Relevance", "Flexibility", "Faculty Expertise", "Networking", "Career Impact", "Degree Value"].map((label, i) => (
                                <div key={i} className="h-20 flex items-center text-lg font-bold text-gray-500">
                                    {label}
                                </div>
                            ))}
                        </div>

                        {/* IIIT Dharwad Column (Winner) */}
                        <div className="relative bg-white rounded-3xl shadow-2xl border-2 border-[#FF0031] overflow-hidden z-10 transform lg:-translate-y-4">
                            <div className="bg-[#FF0031] text-white p-6 text-center">
                                <div className="inline-flex justify-center items-center w-12 h-12 bg-white/20 rounded-full mb-3">
                                    <Cpu className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold">IIIT Dharwad: M.Tech DSAI</h3>
                                <p className="text-white/80 text-sm mt-1">For Working Professionals</p>
                            </div>

                            <div className="p-8 space-y-6">
                                {[
                                    { text: "Industry-Aligned & AI Focused" },
                                    { text: "Hybrid (Online + Campus Immersion)" },
                                    { text: "IIIT Faculty & Industry Experts" },
                                    { text: "Elite Alumni Network Access" },
                                    { text: "High (PhD Eligible)" },
                                    { text: "Prestigious Institute of National Importance" },
                                ].map((item, i) => (
                                    <div key={i} className="h-auto lg:h-20 flex flex-col justify-center border-b border-gray-100 last:border-0 py-4 lg:py-0">
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                                <CheckCircle className="w-4 h-4 text-green-600" />
                                            </div>
                                            <p className="text-gray-900 font-bold text-md leading-tight">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Traditional Column (Loser) */}
                        <div className="bg-white rounded-3xl border border-gray-200 p-8 pt-20 lg:pt-8 opacity-80 hover:opacity-100 transition-opacity">
                            <div className="text-center mb-8 border-b border-gray-100 pb-2">
                                <div className="inline-flex justify-center items-center w-12 h-12 bg-gray-100 rounded-full mb-3">
                                    <BookOpen className="w-6 h-6 text-gray-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-700">Traditional M.Tech</h3>
                                <p className="text-gray-400 text-sm mt-1">Full-time On-campus</p>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { text: "Often Outdated Theory" },
                                    { text: "Rigid Schedule (Quit Job)" },
                                    { text: "Only Academic Faculty" },
                                    { text: "Limited to Peers" },
                                    { text: "Standard" },
                                    { text: "Varies by College" },
                                ].map((item, i) => (
                                    <div key={i} className="h-auto lg:h-20 flex flex-col justify-center border-b border-gray-100 last:border-0 py-4 lg:py-0">
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1 w-6 h-6 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                                                <XCircle className="w-4 h-4 text-red-400" />
                                            </div>
                                            <p className="text-gray-500 font-medium text-md leading-tight">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Curriculum Section - Accordion */}
            <section id="curriculum" className="py-24 px-4 md:px-12 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#FF0031] font-bold tracking-wider uppercase text-sm mb-2 block">Syllabus</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">Comprehensive Curriculum</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            A structured pedagogical approach ensuring both depth and breadth in Data Science and AI.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {modules.map((mod, idx) => (
                            <div
                                key={idx}
                                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${activeModule === idx
                                    ? "border-[#FF0031] shadow-xl shadow-red-500/10 bg-white"
                                    : "border-gray-100 bg-gray-50 hover:border-gray-300"
                                    }`}
                            >
                                <button
                                    onClick={() => setActiveModule(activeModule === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                                >
                                    <div className="flex items-center gap-6">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold shrink-0 transition-colors ${activeModule === idx ? "bg-[#FF0031] text-white" : "bg-white border border-gray-200 text-gray-500"
                                            }`}>
                                            {idx + 1}
                                        </div>
                                        <div>
                                            <h3 className={`text-xl font-bold ${activeModule === idx ? "text-gray-900" : "text-gray-600"}`}>
                                                {mod.title}
                                            </h3>
                                            <p className="text-sm text-gray-400 mt-1 font-medium">{mod.duration}</p>
                                        </div>
                                    </div>
                                    <div className={`transition-transform duration-300 ${activeModule === idx ? "rotate-180" : ""}`}>
                                        <ChevronDown className={`w-6 h-6 ${activeModule === idx ? "text-[#FF0031]" : "text-gray-400"}`} />
                                    </div>
                                </button>

                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeModule === idx ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
                                    <div className="p-8 pt-0 border-t border-gray-100/50">
                                        <p className="text-gray-600 mb-6 italic border-l-4 border-red-100 pl-4 py-1">{mod.desc}</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                                            {mod.topics.map((topic, i) => (
                                                <div key={i} className="flex items-start gap-3">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF0031] mt-2 shrink-0"></div>
                                                    <span className="text-gray-800 font-medium text-sm leading-relaxed">{topic}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <button className="px-8 py-3 rounded-full border-2 border-[#FF0031] text-[#FF0031] font-bold hover:bg-red-50 transition-colors inline-flex items-center gap-2">
                            <Download className="w-4 h-4" /> Download Detailed Syllabus
                        </button>
                    </div>
                </div>
            </section>

            {/* Faculty Section - Grid Layout */}
            <section id="faculty" className="py-24 px-4 md:px-12 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#FF0031] font-bold tracking-wider uppercase text-sm mb-2 block">Mentors</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">Learn from the Best</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Distinguished faculty members from IIIT Dharwad and industry experts.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {faculty.map((member, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#FF0031]/30 transition-all">
                                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-gray-400">
                                    {member.name.charAt(0)}
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 text-center">{member.name}</h4>
                                <p className="text-[#FF0031] text-xs font-bold uppercase tracking-wide text-center mb-2">{member.role}</p>
                                <p className="text-gray-500 text-sm text-center">{member.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certification Section */}
            <section id="certificate" className="py-24 px-4 md:px-12 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                        Official <span className="text-[#FF0031]">IIIT Dharwad</span> M.Tech Degree
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
                        Upon successful completion, you will receive a prestigious M.Tech Degree in Data Science & Artificial Intelligence from IIIT Dharwad, conferring full alumni status.
                    </p>

                    <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200 relative bg-gray-50 h-[400px] flex items-center justify-center">
                        {/* Placeholder for Certificate */}
                        <div className="text-center">
                            <Award className="w-20 h-20 text-gray-300 mx-auto mb-4" />
                            <p className="text-gray-400 font-bold text-xl">Official Certificate Preview</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA / Fees */}
            <section id="fees" className="py-24 px-4 md:px-12 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF0031] rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-8">Secure Your Spot</h2>

                    <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 mb-12">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 flex-1 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-[#FF0031]"></div>
                            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Upcoming Batch</p>
                            <p className="text-4xl md:text-5xl font-extrabold text-white mb-2">Apply for Details</p>
                            <p className="text-sm text-gray-400 font-bold mb-4">Applications Open</p>
                            <button className="w-full py-4 rounded-xl bg-[#FF0031] text-white font-bold text-lg hover:bg-[#D9002A] transition-colors shadow-lg">
                                Apply Now
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-400 mb-12">
                        <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF0031]" /> EMI Options Available</span>
                        <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF0031]" /> Refund Strategy</span>
                        <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF0031]" /> +91-9900892524</span>
                        <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF0031]" /> support.dsai@iiitdwd.ac.in</span>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-24 px-4 md:px-12 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#FF0031] font-bold tracking-wider uppercase text-sm mb-2 block">FAQ</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">Frequently Asked Questions</h2>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                q: "Is this program recognized by the industry?",
                                a: "Absolutely. The degree is awarded by IIIT Dharwad, an Institute of National Importance. The curriculum is designed to be industry-relevant."
                            },
                            {
                                q: "What is the duration of the program?",
                                a: "The program is designed for 2 years, with flexible exit options leading to PG Certification or Diploma if needed."
                            },
                            {
                                q: "Are there any prerequisites for enrolling?",
                                a: "Applicants should generally have a B.E./B.Tech/M.Sc/MCA degree. Specific eligibility details can be confirmed with admissions."
                            },
                            {
                                q: "Is it an online program?",
                                a: "It is a hybrid program with live interactive online sessions and a mandatory campus immersion component to foster networking and hands-on learning."
                            },
                            {
                                q: "What is the refund policy?",
                                a: "Please refer to the official refund policy on the IIIT Dharwad website for detailed terms regarding withdrawals and refunds."
                            }
                        ].map((faq, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#FF0031]/50 transition-colors">
                                <details className="group">
                                    <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-lg text-gray-900">
                                        <span>{faq.q}</span>
                                        <span className="transition group-open:rotate-180">
                                            <ChevronDown className="w-5 h-5 text-[#FF0031]" />
                                        </span>
                                    </summary>
                                    <div className="text-gray-600 px-6 pb-6 leading-relaxed animate-in slide-in-from-top-2">
                                        {faq.a}
                                    </div>
                                </details>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main >
    );
}
