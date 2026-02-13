"use client";
import Link from "next/link";
import { SearchIcon } from "./icons";
import { ArrowRight, ChevronDown, BookOpen, Flag, GraduationCap, Cpu, BrainCircuit, Briefcase, Menu, X, ChevronRight } from "lucide-react";
import { blogs } from "@/lib/data/blogs";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


interface Program {
    title: string;
    icon: any;
    type: string;
    link?: string;
}

interface Institution {
    id: string;
    name: string;
    programs: Program[];
}

const institutions: Institution[] = [
    {
        id: "iit-patna",
        name: "IIT Patna",
        programs: [
            {
                title: "Certificate Program in Generative AI & Agentic AI for Developers",
                icon: BrainCircuit,
                type: "Certificate Program",
                link: "/iit-patna"
            }
        ]
    },
    {
        id: "iiit-dharwad",
        name: "IIIT Dharwad",
        programs: [
            {
                title: "M.Tech in Data Science & Artificial Intelligence",
                icon: Cpu,
                type: "Degree Program",
                link: "/iiit-dharwad"
            }
        ]
    },
    {
        id: "iim-trichy",
        name: "IIM Trichy",
        programs: [
            {
                title: "PGPM",
                icon: Briefcase,
                type: "Degree Program",
                link: "/iim-trichy"
            }
        ]
    },
    {
        id: "nit-surathkal",
        name: "NIT Surathkal",
        programs: [
            {
                title: "MBA",
                icon: Briefcase,
                type: "Degree Program",
                link: "/nit-surathkal-mba"
            },
            {
                title: "MTECH",
                icon: GraduationCap,
                type: "Degree Program",
                link: "/nit-surathkal-mtech"
            }
        ]
    }
];

export function Navbar() {
    const [activeProgramTab, setActiveProgramTab] = useState("IIT Patna");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileProgramsOpen, setIsMobileProgramsOpen] = useState(false);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen || isMobileProgramsOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen, isMobileProgramsOpen]);

    const activePrograms = institutions.find(i => i.name === activeProgramTab)?.programs || [];

    return (
        <nav className="w-full bg-white z-[102] relative flex flex-col font-sans">
            {/* Top Main Bar */}
            <div className="w-full px-4 md:px-12 h-14 md:h-20 flex items-center justify-between relative">

                {/* Left Side: Logo & Links */}
                <div className="flex items-center gap-12">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <img src="/logo.svg" alt="EdNxt.ai Logo" className="h-5 md:h-8 w-auto" />
                    </Link>

                    {/* Main Links - Desktop */}
                    <div className="hidden lg:flex items-center gap-4 text-[15px] font-medium text-gray-800">

                        {/* Our Programs Dropdown */}
                        <div className="group relative">
                            <button className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-[#FF0031] text-sm font-bold text-[#FF0031] hover:bg-white transition-colors">
                                OUR PROGRAMS <ChevronDown className="w-4 h-4 text-[#FF0031] group-hover:rotate-180 transition-transform duration-300" />
                            </button>

                            {/* Dropdown Menu */}
                            <div className="absolute top-full left-0 w-[800px] bg-white/95 backdrop-blur-3xl rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden flex h-[350px]">
                                {/* Left Sidebar: Institutions */}
                                <div className="w-1/3 bg-gray-50 border-r border-gray-100 p-2 overflow-y-auto custom-scrollbar">
                                    <div className="space-y-1 p-2">
                                        <h4 className="px-4 py-2 text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Institutions</h4>
                                        {institutions.map((inst) => (
                                            <div
                                                key={inst.id}
                                                onMouseEnter={() => setActiveProgramTab(inst.name)}
                                                className={`px-4 py-3.5 rounded-xl cursor-pointer text-sm font-bold transition-all flex items-center justify-between group/inst ${activeProgramTab === inst.name
                                                    ? "bg-[#FF0031] text-white shadow-lg shadow-red-500/20"
                                                    : "text-gray-600 hover:bg-gray-200/50 hover:text-gray-900"
                                                    }`}
                                            >
                                                {inst.name}
                                                {activeProgramTab === inst.name && (
                                                    <ChevronDown className="w-4 h-4 text-white -rotate-90" />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Content: Programs */}
                                <div className="w-2/3 p-8 bg-transparent overflow-y-auto">
                                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">Available Programs</h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        {activePrograms.map((prog, idx) => (
                                            <Link href={prog.link || "#"} key={idx} className="group/prog flex flex-col gap-3 p-5 rounded-2xl bg-white border border-gray-100 hover:bg-gray-50 hover:border-[#FF0031]/30 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300 relative overflow-hidden">
                                                <div className="absolute top-0 right-0 w-20 h-20 bg-[#FF0031]/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover/prog:bg-[#FF0031]/10 transition-colors" />

                                                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center group-hover/prog:bg-[#FF0031] transition-colors duration-300 shrink-0">
                                                    <prog.icon className="w-5 h-5 text-gray-400 group-hover/prog:text-white transition-colors" />
                                                </div>
                                                <div>
                                                    <h5 className="font-bold text-gray-900 text-sm group-hover/prog:text-[#FF0031] transition-colors leading-snug">
                                                        {prog.title}
                                                    </h5>
                                                    <p className="text-[11px] font-medium text-gray-500 mt-1.5 uppercase tracking-wide group-hover/prog:text-gray-600">{prog.type}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>



                        {/* Resources Dropdown */}
                        <div className="group relative">
                            <button className="flex items-center gap-2 px-6 py-2.5  text-sm font-bold text-[#FF0031] hover:bg-red-50 transition-colors">
                                RESOURCES <ChevronDown className="w-4 h-4 text-[#FF0031] group-hover:rotate-180 transition-transform duration-300" />
                            </button>

                            {/* Dropdown Menu */}
                            {/* Dropdown Menu */}
                            <div className="absolute top-full left-0 mt-2 w-[900px] bg-white/95 backdrop-blur-3xl rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden flex">

                                {/* Left Column: Navigation Links */}
                                <div className="w-1/3 p-6 border-r border-gray-100 bg-gray-50">
                                    <h4 className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-6">Resources & Company</h4>
                                    <div className="space-y-4">
                                        <Link href="#" className="flex gap-4 group/item hover:bg-gray-200/50 p-3 -mx-3 rounded-xl transition-all border border-transparent hover:border-gray-200">
                                            <div className="mt-1 w-8 h-8 rounded-lg bg-gray-200/50 flex items-center justify-center group-hover/item:bg-[#FF0031] transition-colors shrink-0">
                                                <BookOpen className="w-4 h-4 text-gray-600 group-hover/item:text-white" />
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-gray-900 group-hover/item:text-[#FF0031] text-sm">Blogs & Insights</h5>
                                                <p className="text-xs text-gray-500 mt-1 group-hover/item:text-gray-600">Latest updates from our expert team</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                                {/* Right Column: Featured Blogs */}
                                <div className="w-2/3 p-8 bg-transparent">
                                    <div className="flex items-center justify-between mb-6">
                                        <h4 className="text-gray-500 text-xs font-bold uppercase tracking-wider">Featured from Blog</h4>
                                        <Link href="#" className="text-xs font-bold text-[#FF0031] flex items-center gap-1 hover:text-[#D9002A] transition-colors">
                                            View All <ArrowRight className="w-3 h-3" />
                                        </Link>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        {blogs.slice(0, 2).map((blog) => (
                                            <Link href="#" key={blog.id} className="group/blog block bg-white border border-gray-100 rounded-2xl p-3 hover:bg-gray-50 hover:border-[#FF0031]/30 transition-all">
                                                <div className="aspect-video rounded-xl overflow-hidden mb-3 relative">
                                                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover/blog:scale-105 transition-transform duration-500" />
                                                </div>
                                                <h5 className="font-bold text-gray-900 text-sm leading-snug mb-2 group-hover/blog:text-[#FF0031] transition-colors line-clamp-2">
                                                    {blog.title}
                                                </h5>
                                                <span className="text-[#FF0031] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">Read Article <ArrowRight className="w-3 h-3" /></span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link href="/about-us" className="px-6 py-2.5 text-sm font-bold text-[#FF0031] hover:text-[#D9002A] transition-colors">
                            ABOUT US
                        </Link>

                    </div>
                </div>

                {/* Right Side: Action Buttons - Desktop */}
                <div className="hidden lg:flex items-center gap-4">
                    <button className="px-5 py-2 rounded-full border border-[#FF0031] text-[#FF0031] text-sm font-bold hover:bg-red-50 transition-colors">
                        Talk to Counsellor
                    </button>
                    <button className="px-6 py-2 rounded-full bg-[#FF0031] text-white text-sm font-bold hover:bg-[#D9002A] transition-colors shadow-lg shadow-red-200">
                        Enroll Now
                    </button>
                </div>

                {/* Mobile Right Side Controls */}
                <div className="flex lg:hidden items-center gap-3">
                    <button
                        onClick={() => setIsMobileProgramsOpen(!isMobileProgramsOpen)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#FF0031] text-[#FF0031] text-[10px] font-bold hover:bg-red-50 transition-colors"
                    >
                        OUR PROGRAMS <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isMobileProgramsOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="p-2 rounded-full hover:bg-gray-100 text-gray-800"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Drawer (Hamburger) */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[200] bg-white flex flex-col pt-14 px-6 lg:hidden"
                    >
                        {/* Header */}
                        <div className="absolute top-0 left-0 w-full h-14 flex items-center justify-between px-4 border-b border-gray-100">
                            <span className="font-bold text-lg text-gray-900">Menu</span>
                            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-full hover:bg-gray-100">
                                <X className="w-6 h-6 text-gray-600" />
                            </button>
                        </div>

                        {/* Links */}
                        <div className="flex flex-col gap-6 mt-6">
                            <Link href="/blogs" className="text-lg font-medium text-gray-800 flex items-center justify-between" onClick={() => setIsMobileMenuOpen(false)}>
                                Blogs & Insights <ChevronRight className="w-5 h-5 text-gray-400" />
                            </Link>
                            <Link href="/about-us" className="text-lg font-medium text-gray-800 flex items-center justify-between" onClick={() => setIsMobileMenuOpen(false)}>
                                About Us <ChevronRight className="w-5 h-5 text-gray-400" />
                            </Link>
                        </div>

                        {/* Mobile CTA */}
                        <div className="mt-auto mb-8 flex flex-col gap-4">
                            <button className="w-full py-3 rounded-full border border-[#FF0031] text-[#FF0031] font-bold text-sm">
                                Talk to Counsellor
                            </button>
                            <button className="w-full py-3 rounded-full bg-[#FF0031] text-white font-bold text-sm shadow-lg shadow-red-200">
                                Enroll Now
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Programs Dropdown (Absolute) */}
            <AnimatePresence>
                {isMobileProgramsOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-[calc(100%+8px)] left-0 w-full bg-white z-40 rounded-b-3xl rounded-t-lg shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col lg:hidden border-t border-gray-100 max-h-[85vh] overflow-hidden"
                    >
                        {/* Content */}
                        <div className="flex flex-col h-full bg-white">
                            {/* Tabs */}
                            <div className="flex overflow-x-auto gap-3 p-4 border-b border-gray-100 no-scrollbar bg-gray-50/50">
                                {institutions.map((inst) => (
                                    <button
                                        key={inst.id}
                                        onClick={() => setActiveProgramTab(inst.name)}
                                        className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs font-bold transition-all border ${activeProgramTab === inst.name
                                                ? "bg-[#FF0031] border-[#FF0031] text-white shadow-md shadow-red-200"
                                                : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                                            }`}
                                    >
                                        {inst.name}
                                    </button>
                                ))}
                            </div>

                            {/* Active Programs List */}
                            <div className="flex-1 overflow-y-auto p-4 pb-8 bg-white max-h-[400px]">
                                <div className="mb-4 flex items-center justify-between px-1">
                                    <div>
                                        <h3 className="text-sm font-bold text-gray-900 mb-0.5">{activeProgramTab}</h3>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Select a Program</p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {activePrograms.map((prog, idx) => (
                                        <Link
                                            href={prog.link || "#"}
                                            key={idx}
                                            onClick={() => setIsMobileProgramsOpen(false)}
                                            className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-[#FF0031]/30 active:scale-[0.98] transition-all group"
                                        >
                                            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100 group-hover:bg-[#FF0031] group-hover:border-[#FF0031] transition-colors">
                                                <prog.icon className="w-5 h-5 text-[#FF0031] group-hover:text-white transition-colors" />
                                            </div>
                                            <div className="flex-1">
                                                <h5 className="font-bold text-gray-900 text-xs leading-snug mb-1.5 flex items-start justify-between gap-2 group-hover:text-[#FF0031] transition-colors">
                                                    {prog.title}
                                                </h5>
                                                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wide bg-gray-50 inline-block px-2 py-0.5 rounded-md border border-gray-100">
                                                    {prog.type}
                                                </p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                                <div className="mt-6 flex justify-center pb-4">
                                    <Link href="/programs" className="text-[#FF0031] text-xs font-bold flex items-center gap-1 hover:underline">
                                        View All Programs <ChevronRight className="w-3 h-3" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </nav>
    );
}
