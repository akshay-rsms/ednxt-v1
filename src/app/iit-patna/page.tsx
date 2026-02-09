"use client";
import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
    ArrowRight, CheckCircle, XCircle, Clock, Globe, Users,
    Download, MonitorPlay, BrainCircuit, Code, Database,
    Layers, Cpu, Zap, Award, BookOpen, ChevronDown, ChevronUp,
    PlayCircle, Briefcase, GraduationCap
} from "lucide-react";

export default function IITPatnaPage() {
    const [activeModule, setActiveModule] = useState<number | null>(0);
    const [isSticky, setIsSticky] = useState(false);

    // Sticky Navbar Handler
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 600);
        };
        window.addEventListener("scroll", handleScroll);
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
            title: "Module 1: Fundamentals of Generative AI and LLMs",
            duration: "4 Weeks",
            desc: "Build a deep understanding of how LLMs work, learn prompt engineering, and create apps with retrieval mechanisms.",
            topics: [
                "NLP Concepts: Tokenization, Transformers, Embeddings",
                "LLM Architectures: GPT, Claude, Gemini, DeepSeek, Mistral",
                "Prompt Engineering & Prompt Patterns",
                "Retrieval-Augmented Generation (RAG) & Vector Databases",
                "Intro to Fine-tuning (LoRA, PEFT)",
                "Hosting LLM Locally"
            ]
        },
        {
            title: "Module 2: Multi-Modal AI",
            duration: "4 Weeks",
            desc: "Understand and build AI projects that integrate text, image, video, and audio generation.",
            topics: [
                "Generative AI for Visual, Audio, and Video Content",
                "Prompt Crafting for Creative Tools",
                "Multimodal Pipeline Design",
                "Design a Visual Branding Kit using Midjourney",
                "Produce an AI-generated Voice Ad using ElevenLabs",
                "Launch a Multimodal Video Campaign using Runway ML"
            ]
        },
        {
            title: "Module 3: AI Automation and Productivity",
            duration: "4 Weeks",
            desc: "Build scalable automation workflows using AI models and third-party APIs.",
            topics: [
                "Event-based Workflow Design",
                "No-code Automation (Zapier, Make)",
                "Local Hosting & Scaling with Docker",
                "Running and Integrating n8n Locally",
                "Connecting APIs using Webhooks and Postman",
                "Leveraging Firebase for Realtime Automation"
            ]
        },
        {
            title: "Module 4: AI Agents Implementation",
            duration: "3 Weeks",
            desc: "Master the creation of autonomous agents and multi-agent systems.",
            topics: ["Building Autonomous Agents", "Agentic Workflows", "Multi-Agent Systems", "LangGraph & AutoGen"]
        },
        {
            title: "Module 5: AI App Building",
            duration: "4 Weeks",
            desc: "Develop full-stack AI applications ready for deployment.",
            topics: ["Full Stack AI Apps", "Streamlit & Gradio Interfaces", "Deployment & Monitoring", "Security Best Practices"]
        },
        {
            title: "Module 6: Domain Applications & Career",
            duration: "2 Weeks",
            desc: "Apply your skills to specific industries and prepare for the job market.",
            topics: ["AI in Finance, Marketing, Healthcare", "Resume Building & Portfolio Review", "Interview Preparation"]
        }
    ];

    const projects = [
        {
            title: "RAG-powered FAQ Chatbot",
            icon: BrainCircuit,
            desc: "Develop a chatbot using LM Studio that answers queries based on custom documents, ensuring accurate and context-aware responses."
        },
        {
            title: "Visual Branding Kit",
            icon: Layers,
            desc: "Design a complete visual identity for a brand using Midjourney for imagery and other AI tools for layout and typography."
        },
        {
            title: "AI-Generated Voice Ad",
            icon: MonitorPlay,
            desc: "Produce a professional voice advertisement using ElevenLabs text-to-speech technology, indistinguishable from human narration."
        },
        {
            title: "Multimodal Video Campaign",
            icon: PlayCircle,
            desc: "Launch a comprehensive video marketing campaign using Runway ML for video generation, combining text, image, and motion."
        },
        {
            title: "Smart Email Automation",
            icon: Zap,
            desc: "Build a system to automatically categorize incoming emails and draft intelligent responses using Make and OpenAI's API."
        },
        {
            title: "Custom CRM Workflow",
            icon: Database,
            desc: "Host and integrate a custom Customer Relationship Management workflow with local n8n to automate lead nurturing."
        }
    ];

    return (
        <main className="min-h-screen bg-white font-sans text-gray-900 scroll-smooth">
            <Navbar />

            {/* Sticky Sub-Navbar */}
            <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isSticky ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
                <div className="bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-lg px-8 md:px-12 py-4">
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        <span className="font-bold text-gray-900">IIT Patna GenAI Program</span>
                        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
                            <button onClick={() => scrollToSection("overview")} className="hover:text-[#FF0031] transition-colors">Overview</button>
                            <button onClick={() => scrollToSection("curriculum")} className="hover:text-[#FF0031] transition-colors">Curriculum</button>
                            <button onClick={() => scrollToSection("projects")} className="hover:text-[#FF0031] transition-colors">Projects</button>
                            <button onClick={() => scrollToSection("fees")} className="hover:text-[#FF0031] transition-colors">Fees</button>
                        </div>
                        <button className="bg-[#FF0031] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#D9002A] transition-colors">
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section id="overview" className="relative pt-32 pb-24 px-8 md:px-12 bg-[#0a0a0a] text-white overflow-hidden">
                {/* Abstract Background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-800 via-gray-950 to-black opacity-80"></div>
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FF0031] rounded-full blur-[150px] opacity-10 translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900 rounded-full blur-[120px] opacity-10 -translate-x-1/3 translate-y-1/3"></div>

                <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white text-sm font-bold">
                            <Award className="w-4 h-4 text-[#FF0031]" />
                            <span className="tracking-wide">PG CERTIFICATION</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
                            Generative AI <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                                for Professionals
                            </span>
                        </h1>

                        <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
                            Master 50+ AI tools, build <span className="text-white font-semibold">10+ real-world projects</span>, and get certified by <span className="text-white font-semibold">IIT Patna</span>. No coding experience required.
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
                        <div className="absolute top-4 right-4 bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            Enrollment Open
                        </div>
                        <h3 className="text-2xl font-bold mb-6">Program Snapshot</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                    <Clock className="w-5 h-5 text-[#FF0031]" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">Duration</p>
                                    <p className="text-lg font-semibold">6 Months (Weekend Classes)</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                    <Globe className="w-5 h-5 text-[#FF0031]" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">Format</p>
                                    <p className="text-lg font-semibold">100% Online Live Sessions</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                    <GraduationCap className="w-5 h-5 text-[#FF0031]" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">Certification</p>
                                    <p className="text-lg font-semibold">Executive Alumni Status from IIT Patna</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                    <Briefcase className="w-5 h-5 text-[#FF0031]" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">Eligibility</p>
                                    <p className="text-lg font-semibold">Graduates / Diploma Holders</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Strip */}
            <div className="bg-[#FF0031] text-white py-6 overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-8 md:px-12 flex flex-wrap justify-center md:justify-between items-center gap-8 text-center md:text-left">
                    <div>
                        <p className="text-sm opacity-80 font-medium uppercase tracking-wider">Next Batch Starts</p>
                        <p className="text-2xl font-bold">March 15, 2026</p>
                    </div>
                    <div className="h-10 w-px bg-white/20 hidden md:block"></div>
                    <div>
                        <p className="text-sm opacity-80 font-medium uppercase tracking-wider">Application Deadline</p>
                        <p className="text-2xl font-bold">February 28, 2026</p>
                    </div>
                    <div className="h-10 w-px bg-white/20 hidden md:block"></div>
                    <div>
                        <p className="text-sm opacity-80 font-medium uppercase tracking-wider">Total Fee</p>
                        <p className="text-2xl font-bold">₹ 1,05,000 + GST</p>
                    </div>
                    <div className="h-10 w-px bg-white/20 hidden md:block"></div>
                    <button className="px-6 py-2 bg-white text-[#FF0031] rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg">
                        View Syllabus
                    </button>
                </div>
            </div>

            {/* Comparison Section */}
            <section className="py-24 px-8 md:px-12 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Why Choose This Program?</h2>
                        <p className="text-gray-600 text-lg">Compare and see the difference.</p>
                    </div>

                    <div className="overflow-x-auto">
                        <div className="min-w-[800px] grid grid-cols-3 gap-0 border border-gray-200 rounded-2xl overflow-hidden shadow-xl bg-white">
                            {/* Header */}
                            <div className="col-span-1 p-8 bg-gray-50 border-b border-r border-gray-200 flex items-center">
                                <span className="font-bold text-gray-500 uppercase tracking-wider text-sm">Feature</span>
                            </div>
                            <div className="col-span-1 p-8 bg-white border-b border-r border-gray-200 text-center">
                                <span className="font-bold text-gray-400 text-lg block mb-2">Traditional Courses</span>
                                <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Standard Curriculum</span>
                            </div>
                            <div className="col-span-1 p-8 bg-[#FF0031]/5 border-b border-gray-200 text-center relative">
                                <div className="absolute top-0 left-0 w-full h-1 bg-[#FF0031]"></div>
                                <span className="font-extrabold text-[#FF0031] text-xl block mb-2">IIT Patna GenAI</span>
                                <span className="text-xs text-[#FF0031]/60 font-bold uppercase tracking-wider">Premium Certification</span>
                            </div>

                            {/* Rows */}
                            {[
                                { name: "Certification", trad: "Standard Certificate", iit: "IIT Patna Certification", highlight: true },
                                { name: "Curriculum", trad: "Theoretical", iit: "Industry-Vetted & Practical", highlight: true },
                                { name: "Projects", trad: "2-3 Basic Projects", iit: "10+ Industry Projects + Capstone", highlight: true },
                                { name: "Faculty", trad: "General Trainers", iit: "IIT Professors & Industry Experts", highlight: true },
                                { name: "Tools Covered", trad: "5-10 Tools", iit: "50+ Latest AI Tools", highlight: true },
                                { name: "Career Support", trad: "Limited", iit: "Dedicated Placement Support", highlight: true },
                            ].map((row, i) => (
                                <React.Fragment key={i}>
                                    <div className="col-span-1 p-6 bg-gray-50 border-b border-r border-gray-100 font-bold text-gray-700 flex items-center">
                                        {row.name}
                                    </div>
                                    <div className="col-span-1 p-6 bg-white border-b border-r border-gray-100 text-center text-gray-500 flex items-center justify-center gap-2">
                                        <XCircle className="w-5 h-5 text-gray-300" /> {row.trad}
                                    </div>
                                    <div className="col-span-1 p-6 bg-[#FF0031]/5 border-b border-gray-100 text-center font-bold text-gray-900 flex items-center justify-center gap-2">
                                        <CheckCircle className="w-5 h-5 text-[#FF0031]" /> {row.iit}
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Curriculum Section - Accordion */}
            <section id="curriculum" className="py-24 px-8 md:px-12 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#FF0031] font-bold tracking-wider uppercase text-sm mb-2 block">Syllabus</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">Comprehensive Curriculum</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Designed by IIT Faculty and Industry Leaders to make you job-ready from Day 1.
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

                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeModule === idx ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                                    <div className="p-8 pt-0 border-t border-gray-100/50">
                                        <p className="text-gray-600 mb-6 italic border-l-4 border-red-100 pl-4 py-1">{mod.desc}</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                                            {mod.topics.map((topic, i) => (
                                                <div key={i} className="flex items-start gap-3">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF0031] mt-2 shrink-0"></div>
                                                    <span className="text-gray-800 font-medium">{topic}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tools Section - Marquee Style Grid */}
            <section className="py-20 bg-gray-900 border-y border-gray-800 overflow-hidden">
                <div className="max-w-7xl mx-auto px-8 mb-12 text-center">
                    <h2 className="text-3xl font-bold text-white mb-2">Master 50+ Modern AI Tools</h2>
                    <p className="text-gray-400">Detailed hands-on training on the latest tech stack.</p>
                </div>

                {/* Scrolling Marquee Effect (Simulated with grid for now to be safe, or CSS animation) */}
                <div className="relative w-full overflow-hidden">
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6 px-4 max-w-6xl mx-auto opacity-80">
                        {[
                            "OpenAI", "ChatGPT", "Gemini", "Claude", "Llama 3", "Mistral", "Ollama", "LangChain",
                            "HuggingFace", "Midjourney", "DALL-E 3", "Stable Diffusion", "Runway ML", "Pika",
                            "ElevenLabs", "HeyGen", "Synthesia", "Zapier", "Make.com", "n8n", "Retool",
                            "Firebase", "Supabase", "Docker", "Kubernetes", "Postman", "GitHub Copilot", "Cursor"
                        ].map((tool, i) => (
                            <div key={i} className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-bold hover:bg-[#FF0031] hover:text-white hover:border-[#FF0031] hover:scale-105 transition-all duration-300 cursor-default backdrop-blur-sm">
                                {tool}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects & Portfolio */}
            <section id="projects" className="py-24 px-8 md:px-12 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <span className="text-[#FF0031] font-bold tracking-wider uppercase text-sm mb-2 block">Portfolio</span>
                            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Build Real-World Applications</h2>
                            <p className="text-gray-600 text-lg max-w-xl">
                                Don't just learn theory. Create a GitHub portfolio of 10+ deployment-ready AI applications.
                            </p>
                        </div>
                        <button className="hidden md:flex items-center gap-2 text-[#FF0031] font-bold hover:translate-x-1 transition-transform">
                            View All Projects <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, idx) => (
                            <div key={idx} className="group bg-white rounded-3xl p-1 overflow-hidden hover:shadow-2xl hover:shadow-gray-200 transition-all duration-500 border border-gray-100">
                                <div className="bg-gray-50 rounded-[22px] p-8 h-full flex flex-col group-hover:bg-white transition-colors">
                                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-[#FF0031] group-hover:text-white transition-all duration-300 border border-gray-100">
                                        <project.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FF0031] transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed text-sm mb-6 flex-grow">
                                        {project.desc}
                                    </p>
                                    <div className="pt-6 border-t border-gray-200/50 flex items-center justify-between">
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Capstone Project</span>
                                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-red-50 group-hover:text-[#FF0031] transition-colors">
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certificate Section */}
            <section className="py-24 px-8 md:px-12 bg-white border-t border-gray-100">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1 order-2 md:order-1 relative">
                        {/* CSS Certificate Mockup */}
                        <div className="relative w-full aspect-[1.4/1] bg-white border-[10px] border-gray-100 shadow-2xl rounded-sm p-8 flex flex-col items-center justify-center text-center overflow-hidden">
                            <div className="absolute inset-0 border-[2px] border-gray-300 m-4 pointer-events-none"></div>
                            {/* Watermark */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
                                <Award className="w-64 h-64" />
                            </div>

                            <div className="w-16 h-16 bg-gray-900 rounded-full mb-6 flex items-center justify-center">
                                <div className="text-white text-[8px] font-serif">IIT PATNA</div>
                            </div>
                            <h4 className="font-serif text-3xl font-bold text-gray-800 mb-2">Certificate of Completion</h4>
                            <p className="text-gray-500 italic mb-6">is hereby awarded to</p>
                            <p className="font-script text-4xl text-[#FF0031] mb-6 font-bold">John Doe</p>
                            <div className="w-full max-w-md h-px bg-gray-200 mb-6"></div>
                            <p className="text-gray-600 font-bold uppercase tracking-widest text-xs">PG Certificate in Generative AI</p>
                        </div>
                        {/* Badge Overlay */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FF0031] rounded-full flex items-center justify-center text-white font-bold text-center text-xs p-4 shadow-xl border-4 border-white rotate-12">
                            Executive Alumni Status
                        </div>
                    </div>
                    <div className="flex-1 order-1 md:order-2">
                        <span className="text-[#FF0031] font-bold tracking-wider uppercase text-sm mb-2 block">Prestigious Recognition</span>
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Get Certified by IIT Patna</h2>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <CheckCircle className="w-6 h-6 text-[#FF0031] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-lg text-gray-900">Executive Alumni Status</h4>
                                    <p className="text-gray-500">Join the elite network of IIT Patna alumni and access exclusive benefits.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <CheckCircle className="w-6 h-6 text-[#FF0031] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-lg text-gray-900">Verifiable Digital Credentials</h4>
                                    <p className="text-gray-500">Share your achievement on LinkedIn with a globally recognized certificate.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <CheckCircle className="w-6 h-6 text-[#FF0031] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-lg text-gray-900">Career Advancement</h4>
                                    <p className="text-gray-500">Stand out to top recruiters with a certification from a premier institute.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section id="fees" className="py-24 px-8 md:px-12 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 to-black"></div>
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Ready to Future-Proof Your Career?</h2>
                    <p className="text-xl text-gray-300 mb-12">Applications for the upcoming cohort are closing soon. Secure your spot today.</p>

                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-12 inline-block border border-white/10">
                        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Program Fee</p>
                        <p className="text-5xl font-extrabold text-white mb-2">₹ 1,05,000 <span className="text-xl text-gray-400 font-normal">+ GST</span></p>
                        <p className="text-sm text-gray-400">EMI options starting at ₹5,500/month</p>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <button className="px-12 py-5 rounded-full bg-[#FF0031] text-white font-bold text-xl hover:bg-[#D9002A] transition-all shadow-xl hover:scale-105">
                            Apply Now
                        </button>
                        <button className="px-12 py-5 rounded-full bg-transparent border-2 border-white text-white font-bold text-xl hover:bg-white hover:text-black transition-all">
                            Talk to Counselor
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
