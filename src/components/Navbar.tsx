"use client";
import Link from "next/link";
import { SearchIcon } from "./icons";
import { ArrowRight, ChevronDown, BookOpen, Flag, GraduationCap, Cpu, BrainCircuit, Briefcase } from "lucide-react";
import { blogs } from "@/lib/data/blogs";
import { useState } from "react";


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

    const activePrograms = institutions.find(i => i.name === activeProgramTab)?.programs || [];

    return (
        <nav className="w-full bg-white z-[102] relative flex flex-col font-sans">
            {/* Top Main Bar */}
            <div className="w-full px-8 md:px-12 h-20 flex items-center justify-between relative">

                {/* Left Side: Logo & Links */}
                <div className="flex items-center gap-12">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <img src="/logo.svg" alt="EdNxt.ai Logo" className="h-6 md:h-8 w-auto" />
                    </Link>

                    {/* Main Links */}
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



                {/* Right Side: Action Buttons */}
                <div className="hidden lg:flex items-center gap-4">
                    <button className="px-5 py-2 rounded-full border border-[#FF0031] text-[#FF0031] text-sm font-bold hover:bg-red-50 transition-colors">
                        Talk to Counsellor
                    </button>
                    <button className="px-6 py-2 rounded-full bg-[#FF0031] text-white text-sm font-bold hover:bg-[#D9002A] transition-colors shadow-lg shadow-red-200">
                        Enroll Now
                    </button>
                </div>
            </div>


        </nav>
    );
}
