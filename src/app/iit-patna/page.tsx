"use client";
import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
    ArrowRight, CheckCircle, XCircle, Clock, Globe, Users,
    Download, MonitorPlay, BrainCircuit, Code, Database,
    Layers, Cpu, Zap, Award, BookOpen, ChevronDown, ChevronUp,
    PlayCircle, Briefcase, GraduationCap, Building2, UserCheck
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
            title: "Module 1: Foundations of Generative AI",
            duration: "Weeks 1–2",
            desc: "Gain a clear mental model of GenAI systems, understand transformers, and build your first GenAI script.",
            topics: [
                "Evolution of AI: ML → Deep Learning → GenAI",
                "Traditional AI vs Generative AI",
                "Responsible AI: bias, harm, safety, guardrails",
                "Transformers explained simply (tokens, embeddings, context windows)",
                "What are LLMs? Pre-trained vs fine-tuned models",
                "Essential Tools: Python, Jupyter, OpenAI Playground, Hugging Face Hub",
                "Mini Project: Build a GenAI-powered Python script"
            ]
        },
        {
            title: "Module 2: Working with Models & APIs",
            duration: "Weeks 3–4",
            desc: "Understand what's happening under the hood before using orchestration frameworks. Gain experience building real apps with APIs.",
            topics: [
                "APIs vs Local models (OpenAI, Anthropic, Mistral, Hugging Face)",
                "Installing and running local LLMs (Ollama, LM Studio, vLLM)",
                "Cost management, prompt budgeting, rate limits",
                "Comparing model behavior across providers",
                "Prompt tuning vs fine-tuning",
                "Lightweight finetuning (LoRA, QLoRA)",
                "Mini Project: Build a chatbot with memory + UI using just Python + APIs"
            ]
        },
        {
            title: "Module 3: LangChain Essentials & App Development",
            duration: "Week 5",
            desc: "Design modular, maintainable GenAI pipelines using LangChain's abstractions.",
            topics: [
                "What is LangChain? components: LLMs, Prompts, Chains, Tools, Agents",
                "Prompt Engineering using LangChain (templates, few-shot)",
                "Structured output + Output Parsers",
                "Sequential & Router Chains",
                "LangChain Runnables (LCEL)",
                "Memory systems in LangChain",
                "Mini Project: Build a 'Chat with Your Documents' assistant with citations"
            ]
        },
        {
            title: "Module 4: Agents, Tools & MCP",
            duration: "Weeks 6–7",
            desc: "Build tool-augmented agents that act, query systems, and integrate with MCP-based tools.",
            topics: [
                "Why Agents? Where they shine",
                "Tool Calling: functions, APIs, custom python tools",
                "Building multi-tool agents",
                "Designing safe & predictable agent behavior",
                "MCP (Model Context Protocol) fundamentals",
                "Building MCP tools/servers",
                "Comparing MCP Tools vs LangChain Tools",
                "Mini Project: Build a multi-tool agent using LangChain and MCP"
            ]
        },
        {
            title: "Module 5: RAG Systems From Basics to Advanced",
            duration: "Weeks 8–9",
            desc: "Build reliable, production-grade RAG systems and understand retrieval quality.",
            topics: [
                "What is RAG? Why it solves hallucination",
                "Designing a RAG pipeline from scratch",
                "Loaders, text splitters, chunking strategy",
                "Embeddings + vector stores (FAISS, Chroma)",
                "Retrievers: base, multi-query, contextual compression",
                "RAG evaluation basics & Query rewriting",
                "Mini Project: Build a portfolio-ready GenAI app with RAG"
            ]
        },
        {
            title: "Module 6: Advanced RAG Techniques",
            duration: "Week 10",
            desc: "Master hybrid search, re-ranking, and hallucination mitigation strategies.",
            topics: [
                "Hybrid search (Keywords + Vectors)",
                "Two-stage retrieval + reranking",
                "Multi-source retrieval & fusion",
                "Context distillation and hallucination mitigation",
                "Mini Project: Advanced RAG implementation"
            ]
        },
        {
            title: "Module 7: Agentic Workflows with LangGraph",
            duration: "Weeks 10–11",
            desc: "Design production-style, agentic GenAI applications using LangGraph.",
            topics: [
                "What is LangGraph? Nodes, Edges, State",
                "Sequential, Parallel, Conditional, and Iterative workflows",
                "Using tools inside LangGraph nodes",
                "Streaming + persistence",
                "Designing full agentic pipelines",
                "Mini Project: Build a LangGraph-based workflow"
            ]
        },
        {
            title: "Module 8: Practical GenAI Tooling & Productivity",
            duration: "Week 12",
            desc: "Master modern AI coding assistants and development workflows.",
            topics: [
                "CursorAI → AI-first coding workflows",
                "Windsurf → Pair programming with an AI-native IDE",
                "Claude Code → Code generation & refactoring",
                "LM Studio → Running local GGUF models",
                "MCP (Advanced & Tooling Edition)",
                "Replit Agents → Autonomous coding workflows"
            ]
        },
        {
            title: "Module 9: Agentic Ecosystems & Automation",
            duration: "4 Months",
            desc: "Build agentic automations with CrewAI & n8n.",
            topics: [
                "CrewAI – Multi-agent orchestration at scale",
                "n8n – No-code + low-code automation with LLMs",
                "Microsoft Copilot Stack – Comprehensive Guide",
                "Building modular context tools",
                "Workflow automation with MCP servers",
                "End-to-end automation patterns"
            ]
        },
        {
            title: "Module 10: Career Acceleration & Portfolio",
            duration: "Final Weeks",
            desc: "Career readiness, interview prep, and personal GenAI strategy.",
            topics: [
                "Resume Building for GenAI Roles",
                "Interview Hacks (Developer, Applied AI, MLE)",
                "Building your personal learning system (PLS)",
                "How to talk about GenAI projects confidently",
                "Top GenAI Tools Every Developer Should Know",
                "Capstone: End-to-end flagship AI portfolio project"
            ]
        }
    ];

    const projects = [
        {
            title: "Your Own AI Chat Assistant",
            icon: BrainCircuit,
            desc: "Build a memory-powered AI chatbot with a polished UI, architected with clean, modular, production-ready code — your first real ChatGPT-style app."
        },
        {
            title: "Autonomous AI Agents",
            icon: Cpu,
            desc: "Develop AI copilots that can think, plan, and take action — capable of calling APIs, fetching data, and reasoning through tasks like a digital teammate."
        },
        {
            title: "Smart Text Transformation Tools",
            icon: Code,
            desc: "Create LLM-powered text apps that rewrite, summarize, and format content automatically with validated structured outputs and fail-safe parsing."
        },
        {
            title: "Multi-Step Agentic Workflows",
            icon: Layers,
            desc: "Orchestrate complex AI workflows that plan → act → reflect intelligently using LangGraph-style pipelines, guardrails, and scalable architecture patterns."
        },
        {
            title: "Knowledge Retrieval Assistants (RAG)",
            icon: Database,
            desc: "Build a 'Chat with Your Documents' system that can understand PDFs, websites, and notes—retrieving accurate, citation-backed answers."
        },
        {
            title: "Portfolio-Ready AI Developer Assistant",
            icon: Briefcase,
            desc: "Combine everything into a flagship AI portfolio project — an end-to-end assistant that integrates RAG, agents, memory, and multiple LLMs."
        }
    ];

    const mentors = [
        {
            name: "Punit Kumar",
            role: "Senior AI Engineer, NVIDIA",
            desc: "10+ years at Deloitte and Netcracker, has led major digital transformations."
        },
        {
            name: "Shivam Shrivastava",
            role: "SWE-ML @ Google",
            desc: "Senior data scientist at Akaike Technologies, builds and deploys ML systems across industries."
        },
        {
            name: "Vignesh",
            role: "AI Engineer",
            desc: "Bridges AI, robotics, and emerging tech to build real-world, future-ready solutions."
        },
        {
            name: "Vikash Das",
            role: "Senior Data Scientist",
            desc: "From Aspire General Insurance, turns data into actionable insights for risk and compliance."
        }
    ];

    return (
        <main className="min-h-screen bg-white font-sans text-gray-900 scroll-smooth">
            <Navbar />

            {/* Sticky Sub-Navbar */}
            <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isSticky ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
                <div className="bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-lg px-8 md:px-12 py-4">
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-gray-900 text-sm md:text-base">IIT Patna GenAI & Agentic AI</span>
                        </div>
                        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
                            <button onClick={() => scrollToSection("overview")} className="hover:text-[#FF0031] transition-colors">Overview</button>
                            <button onClick={() => scrollToSection("curriculum")} className="hover:text-[#FF0031] transition-colors">Curriculum</button>
                            <button onClick={() => scrollToSection("projects")} className="hover:text-[#FF0031] transition-colors">Projects</button>
                            <button onClick={() => scrollToSection("mentors")} className="hover:text-[#FF0031] transition-colors">Mentors</button>
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
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-800 via-gray-950 to-black opacity-80"></div>
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FF0031] rounded-full blur-[150px] opacity-10 translate-x-1/2 -translate-y-1/2 animate-pulse"></div>

                <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white text-sm font-bold">
                            <Award className="w-4 h-4 text-[#FF0031]" />
                            <span className="tracking-wide">PG CERTIFICATION</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
                            Generative AI & <br />
                            <span className="text-[#FF0031]">Agentic AI</span> for Developers
                        </h1>

                        <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
                            Get a complete roadmap to become an <span className="text-white font-semibold">AI Engineer</span> from real-world experts & get a certificate from an <span className="text-white font-semibold">IIT</span>.
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
                        <h3 className="text-2xl font-bold mb-6">Program Highlights</h3>
                        <div className="grid grid-cols-1 gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                    <Clock className="w-5 h-5 text-[#FF0031]" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 uppercase font-bold">Duration</p>
                                    <p className="text-lg font-semibold">6 Months</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                    <Code className="w-5 h-5 text-[#FF0031]" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 uppercase font-bold">Tech Stack</p>
                                    <p className="text-lg font-semibold">30+ AI Tools, SDKs & APIs</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                    <Building2 className="w-5 h-5 text-[#FF0031]" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 uppercase font-bold">Immersion</p>
                                    <p className="text-lg font-semibold">Optional 2-Day IIT Patna Campus Visit</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                    <Briefcase className="w-5 h-5 text-[#FF0031]" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 uppercase font-bold">Outcomes</p>
                                    <p className="text-lg font-semibold">Job-Ready AI Engineer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Director's Message */}
            <section className="py-20 px-8 md:px-12 bg-white">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <div className="w-full aspect-[4/5] bg-gray-200 rounded-2xl relative overflow-hidden shadow-xl">
                            {/* Placeholder for Prof. T.N. Singh */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                <UserCheck className="w-24 h-24 opacity-20" />
                                <span className="absolute bottom-4 left-4 font-bold text-gray-500">Prof. T.N. Singh</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-[1.5] space-y-6">
                        <span className="text-[#FF0031] font-bold tracking-wider uppercase text-sm block">Director's Message</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                            Welcome to the <span className="text-[#FF0031]">Future of AI</span> at IIT Patna.
                        </h2>
                        <div className="text-gray-600 text-lg space-y-4 leading-relaxed">
                            <p className="font-serif italic text-xl text-gray-800">"Dear Future Innovators,"</p>
                            <p>
                                India is shaping the next generation of AI engineers — professionals capable of designing, deploying, and scaling intelligent systems responsibly.
                            </p>
                            <p>
                                This program equips software developers and engineers with deep technical expertise in LLMs, RAG systems, and Agentic AI workflows.
                            </p>
                            <p>
                                Whether you’re building smarter applications or leading automation initiatives, this curriculum ensures you graduate as an AI-native developer — ready for a future where AI is not just a tool, but a core engineering layer.
                            </p>
                            <p className="font-bold text-gray-900 pt-4">
                                Prof. T.N. Singh<br />
                                <span className="font-medium text-gray-500 text-sm">Director, IIT Patna</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Strip */}
            <div className="bg-[#FF0031] text-white py-8">
                <div className="max-w-7xl mx-auto px-8 md:px-12 flex flex-wrap justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <p className="text-3xl font-extrabold">100%</p>
                        <p className="text-sm font-medium opacity-80 uppercase tracking-wider">Hands-on Projects</p>
                    </div>
                    <div className="h-12 w-px bg-white/20 hidden md:block"></div>
                    <div className="text-center md:text-left">
                        <p className="text-3xl font-extrabold">10+</p>
                        <p className="text-sm font-medium opacity-80 uppercase tracking-wider">Capstone Project</p>
                    </div>
                    <div className="h-12 w-px bg-white/20 hidden md:block"></div>
                    <div className="text-center md:text-left">
                        <p className="text-3xl font-extrabold">10</p>
                        <p className="text-sm font-medium opacity-80 uppercase tracking-wider">Structured Modules</p>
                    </div>
                    <div className="h-12 w-px bg-white/20 hidden md:block"></div>
                    <div className="text-center md:text-left">
                        <p className="text-3xl font-extrabold">Lifetime</p>
                        <p className="text-sm font-medium opacity-80 uppercase tracking-wider">Code Access</p>
                    </div>
                </div>
            </div>

            {/* Who is this for */}
            <section className="py-20 px-8 md:px-12 bg-gray-50">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">Who is this program for?</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            "DevOps Engineer", "Product Manager", "Data Analyst",
                            "BI Developer", "Data Engineer", "ML Ops Engineer",
                            "Software Developers", "Data Scientists", "ML Engineers"
                        ].map((role, i) => (
                            <div key={i} className="px-6 py-3 bg-white rounded-full border border-gray-200 text-gray-700 font-bold hover:border-[#FF0031] hover:text-[#FF0031] transition-colors shadow-sm cursor-default">
                                {role}
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 p-6 bg-blue-50 rounded-xl inline-block border border-blue-100 max-w-2xl">
                        <p className="text-blue-800 text-sm">
                            <span className="font-bold">Note:</span> Basic Coding Knowledge will be Helpful! In certain sections, coding will be required. But for people with low experience, our faculty will support with basic lessons.
                        </p>
                    </div>
                </div>
            </section>

            {/* Detailed Curriculum Section - Accordion */}
            <section id="curriculum" className="py-24 px-8 md:px-12 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#FF0031] font-bold tracking-wider uppercase text-sm mb-2 block">Syllabus</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">Comprehensive Curriculum</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            10 structured modules designed to take you from foundations to building agentic ecosystems.
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

            {/* Mentors Section */}
            <section id="mentors" className="py-24 px-8 md:px-12 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Mentors from Top AI Companies</h2>
                        <p className="text-gray-400 text-lg">Learn directly from experts building the future at NVIDIA, Google, and more.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {mentors.map((mentor, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                                <div className="w-20 h-20 rounded-full bg-gray-700 mb-4 mx-auto overflow-hidden flex items-center justify-center">
                                    <Users className="w-10 h-10 text-gray-400" />
                                </div>
                                <h3 className="text-xl font-bold text-center mb-1">{mentor.name}</h3>
                                <p className="text-[#FF0031] text-sm font-bold text-center uppercase tracking-wider mb-4">{mentor.role}</p>
                                <p className="text-gray-400 text-sm text-center leading-relaxed">
                                    {mentor.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="py-24 px-8 md:px-12 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#FF0031] font-bold tracking-wider uppercase text-sm mb-2 block">Portfolio</span>
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Stuff You're Going to Build</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Choose your track and build an end-to-end project. Mentors will help you select the right project.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, idx) => (
                            <div key={idx} className="group bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:bg-white hover:shadow-xl hover:border-red-100 transition-all duration-300">
                                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-[#FF0031] group-hover:text-white transition-all duration-300 border border-gray-100">
                                    <project.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FF0031] transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {project.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA / Fees */}
            <section id="fees" className="py-24 px-8 md:px-12 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF0031] rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-8">Secure Your Spot</h2>

                    <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 mb-12">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 flex-1 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-[#FF0031]"></div>
                            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Current Batch</p>
                            <p className="text-5xl font-extrabold text-white mb-2">₹ 99,999</p>
                            <p className="text-sm text-green-400 font-bold mb-4">Open Now for 6 Months</p>
                            <button className="w-full py-4 rounded-xl bg-[#FF0031] text-white font-bold text-lg hover:bg-[#D9002A] transition-colors shadow-lg">
                                Apply Now
                            </button>
                        </div>
                        <div className="bg-transparent rounded-2xl p-8 border border-white/10 flex-1 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Next Batch</p>
                            <p className="text-4xl font-extrabold text-gray-400 mb-2">₹ 1,34,999</p>
                            <p className="text-sm text-gray-500 mb-8">Starting soon</p>
                            <button className="w-full py-4 rounded-xl bg-white/10 text-gray-300 font-bold text-lg cursor-not-allowed">
                                Join Waitlist
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-400 mb-12">
                        <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF0031]" /> EMI Options Available</span>
                        <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF0031]" /> Refund: 80% before Day 1</span>
                        <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF0031]" /> +91 8147625187</span>
                        <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF0031]" /> support@iitpatna.com</span>
                    </div>
                </div>
            </section>


            {/* FAQ Section */}
            <section id="faq" className="py-24 px-8 md:px-12 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#FF0031] font-bold tracking-wider uppercase text-sm mb-2 block">FAQ</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">Frequently Asked Questions</h2>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                q: "Is this program recognized by the industry?",
                                a: "Absolutely. The certificate is awarded by IIT Patna, a prestigious institution. Additionally, the program is designed with input from industry leaders, ensuring the curriculum aligns with the latest trends and skills in demand."
                            },
                            {
                                q: "What happens if I miss a live session?",
                                a: "No worries! All live sessions are recorded and made available for you to access anytime, ensuring you never fall behind in your learning."
                            },
                            {
                                q: "Are there any prerequisites for enrolling?",
                                a: "There are no specific prerequisites. A basic understanding of computers and enthusiasm to learn are all you need. The program provides foundational content for those new to AI."
                            },
                            {
                                q: "What kind of support will I receive during the program?",
                                a: "You'll have access to Live Q&A sessions with instructors, a dedicated community platform for networking and peer support, and career guidance from experts."
                            },
                            {
                                q: "Can I pursue this program while working or studying full-time?",
                                a: "Yes! The program is designed to be flexible, with a manageable weekly commitment and recorded sessions you can access at your convenience."
                            },
                            {
                                q: "Will I receive placement assistance after the program?",
                                a: "While we do not guarantee placements, we provide career support workshops, networking opportunities, and resume-building sessions to enhance your chances of landing AI-related roles."
                            },
                            {
                                q: "Can international students enroll in this program?",
                                a: "Yes, the program is open to learners worldwide. All live sessions and resources are accessible online, making it easy for international students to participate."
                            },
                            {
                                q: "What is your refund policy?",
                                a: "80% of the fees will be refunded if requested before the semester begins."
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
        </main>
    );
}
