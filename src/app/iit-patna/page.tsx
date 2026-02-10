"use client";
import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
    ArrowRight, CheckCircle, XCircle, Clock, Globe, Users,
    Download, MonitorPlay, BrainCircuit, Code, Database,
    Layers, Cpu, Zap, Award, BookOpen, ChevronDown, ChevronUp,
    PlayCircle, Briefcase, GraduationCap, Building2, UserCheck, Lock
} from "lucide-react";

import { MentorsCarousel } from "@/components/MentorsCarousel";
import { InstituteInfo } from "@/components/InstituteInfo";
import { LeadersSection } from "@/components/LeadersSection";
import { AIProjects } from "@/components/AIProjects";
import { Capstone } from "@/components/Capstone";

export default function IITPatnaPage() {
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
            const sections = ["overview", "comparison", "curriculum", "mentors", "projects", "certificate", "fees", "faq"];

            // Find the section that is currently most visible in formatting
            // We use a simple offset check - if the section top is near the scroll position
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If the section is roughly in the top third of the screen, it's active
                    // Or if we are near the top of the element
                    if (rect.top >= -100 && rect.top <= 300) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
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
                            <span className="font-bold text-gray-900 text-sm md:text-base"></span>
                        </div>
                        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
                            <button
                                onClick={() => scrollToSection("overview")}
                                className={`transition-colors ${activeSection === "overview" ? "text-[#FF0031] font-bold" : "hover:text-[#FF0031]"}`}
                            >
                                Overview
                            </button>
                            <button
                                onClick={() => scrollToSection("comparison")}
                                className={`transition-colors ${activeSection === "comparison" ? "text-[#FF0031] font-bold" : "hover:text-[#FF0031]"}`}
                            >
                                Comparison
                            </button>
                            <button
                                onClick={() => scrollToSection("curriculum")}
                                className={`transition-colors ${activeSection === "curriculum" ? "text-[#FF0031] font-bold" : "hover:text-[#FF0031]"}`}
                            >
                                Curriculum
                            </button>
                            <button
                                onClick={() => scrollToSection("mentors")}
                                className={`transition-colors ${activeSection === "mentors" ? "text-[#FF0031] font-bold" : "hover:text-[#FF0031]"}`}
                            >
                                Mentors
                            </button>
                            <button
                                onClick={() => scrollToSection("projects")}
                                className={`transition-colors ${activeSection === "projects" ? "text-[#FF0031] font-bold" : "hover:text-[#FF0031]"}`}
                            >
                                Projects
                            </button>
                            <button
                                onClick={() => scrollToSection("certificate")}
                                className={`transition-colors ${activeSection === "certificate" ? "text-[#FF0031] font-bold" : "hover:text-[#FF0031]"}`}
                            >
                                Certificates
                            </button>
                            <button
                                onClick={() => scrollToSection("fees")}
                                className={`transition-colors ${activeSection === "fees" ? "text-[#FF0031] font-bold" : "hover:text-[#FF0031]"}`}
                            >
                                Fees
                            </button>
                            <button
                                onClick={() => scrollToSection("faq")}
                                className={`transition-colors ${activeSection === "faq" ? "text-[#FF0031] font-bold" : "hover:text-[#FF0031]"}`}
                            >
                                FAQ's
                            </button>
                        </div>
                        <button className="bg-[#FF0031] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#D9002A] transition-colors">
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section id="overview" className="relative pt-16 pb-24 px-8 md:px-12 bg-[#0a0a0a] text-white overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-800 via-gray-950 to-black opacity-80"></div>
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FF0031] rounded-full blur-[150px] opacity-10 translate-x-1/2 -translate-y-1/2 animate-pulse"></div>

                <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="flex items-center justify-start w-full gap-4 md:gap-8">
                            <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center p-2 shadow-lg shadow-white/10">
                                <img src="/iit-patna-logo.png" alt="IIT Patna" className="w-full h-full object-contain" />
                            </div>

                            <div className="h-16 w-0.5 bg-gray-700"></div>

                            <div>
                                <svg width="101" height="27" viewBox="0 0 101 27" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 md:h-10 w-auto">
                                    <path d="M38.2588 26.2266H33.9629V24.1494C33.3745 24.8517 32.6358 25.4172 31.7451 25.8447C30.5903 26.3759 29.3314 26.6416 27.9688 26.6416C26.1443 26.6415 24.5159 26.2149 23.084 25.3604C21.6522 24.4828 20.5209 23.2931 19.6895 21.792C18.9362 20.4319 18.524 18.9389 18.4531 17.3135C18.4253 17.6057 18.3736 17.8632 18.293 18.085H4.71387C4.7722 18.7332 4.92123 19.3341 5.16211 19.8867C5.57784 20.7642 6.17868 21.4457 6.96387 21.9307C7.77219 22.4156 8.69611 22.6582 9.73535 22.6582C10.7745 22.6582 11.6522 22.4387 12.3682 22C13.1073 21.5612 13.6848 20.9715 14.1006 20.2324L17.7734 22.0342C17.4039 22.9349 16.8262 23.7319 16.041 24.4248C15.2557 25.1177 14.3199 25.6601 13.2344 26.0527C12.1721 26.4453 10.9944 26.6416 9.70117 26.6416C7.76114 26.6416 6.06344 26.2028 4.6084 25.3252C3.15331 24.4475 2.02127 23.2581 1.21289 21.7568C0.40461 20.2557 4.92145e-05 18.593 0 16.7686C0 14.8747 0.404606 13.2001 1.21289 11.7451C2.04437 10.2669 3.16435 9.09969 4.57324 8.24512C6.00519 7.3906 7.59921 6.96387 9.35449 6.96387C10.8326 6.96389 12.1258 7.20642 13.2344 7.69141C14.3661 8.17641 15.3251 8.84568 16.1104 9.7002C16.8956 10.5547 17.4954 11.5369 17.9111 12.6455C18.2533 13.5389 18.4521 14.4951 18.5127 15.5137C18.6636 14.1733 19.0561 12.9404 19.6895 11.8145C20.5209 10.3363 21.6521 9.15793 23.084 8.28027C24.5391 7.4026 26.1561 6.96387 27.9346 6.96387C29.3665 6.96387 30.6365 7.25273 31.7451 7.83008C32.5159 8.20758 33.1739 8.69244 33.7197 9.28418V0H38.2588V26.2266ZM80.4658 7.37988H84.7959V11.4326H80.4658V19.5049C80.4658 20.1284 80.5695 20.6598 80.7773 21.0986C81.0083 21.5374 81.3545 21.8726 81.8164 22.1035C82.3014 22.3344 82.9134 22.4502 83.6523 22.4502C83.814 22.4502 83.9992 22.4381 84.207 22.415C84.438 22.3919 84.6574 22.3688 84.8652 22.3457V26.2266C84.5419 26.2727 84.1725 26.319 83.7568 26.3652C83.3411 26.4114 82.9597 26.4346 82.6133 26.4346C80.4885 26.4346 78.8371 25.8569 77.6592 24.7021C76.5044 23.5243 75.9268 21.8728 75.9268 19.748V11.4326H72.6699V9.7207L67.7295 16.7686L74.2773 26.2266H68.9766L65.0439 20.3672L61.1123 26.2266H51.8701V15.1748C51.8701 14.3433 51.7081 13.6269 51.3848 13.0264C51.0614 12.4259 50.6106 11.9639 50.0332 11.6406C49.479 11.2943 48.8206 11.1211 48.0586 11.1211C47.3196 11.1211 46.6613 11.2942 46.084 11.6406C45.5067 11.9639 45.0567 12.426 44.7334 13.0264C44.41 13.6269 44.248 14.3433 44.248 15.1748V26.2266H39.709V7.37988H43.9707V9.69434C44.4069 8.9199 45.0069 8.30934 45.7725 7.86426C46.7886 7.2639 47.9663 6.96393 49.3057 6.96387C50.6914 6.96387 51.9161 7.26376 52.9785 7.86426C54.0641 8.46477 54.9073 9.30802 55.5078 10.3936C56.1083 11.456 56.4082 12.6918 56.4082 14.1006V25.3184L62.3594 16.7686L55.7422 7.37988H61.0771L65.0439 13.2354L69.0107 7.37988H73.0166C73.9405 7.37988 74.6569 7.13736 75.165 6.65234C75.6731 6.1674 75.9267 5.46269 75.9268 4.53906V3.08398H80.4658V7.37988ZM95.0898 17.9277C95.7529 17.9278 96.3371 18.0514 96.8418 18.2988C97.3465 18.5364 97.7375 18.8731 98.0146 19.3086C98.3015 19.7341 98.4452 20.2338 98.4453 20.8076V26.1826H96.6035V25.3311C96.5004 25.4449 96.3934 25.5524 96.2773 25.6484C95.9903 25.8761 95.6631 26.0539 95.2969 26.1826C94.9308 26.3013 94.5253 26.3613 94.0801 26.3613C93.5159 26.3613 93.0251 26.2672 92.6094 26.0791C92.1938 25.891 91.8721 25.6237 91.6445 25.2773C91.4169 24.921 91.3027 24.5101 91.3027 24.0449C91.3027 23.5995 91.4026 23.2038 91.6006 22.8574C91.7986 22.5011 92.1048 22.2034 92.5205 21.9658C92.9362 21.7283 93.4612 21.5599 94.0947 21.4609L96.5 21.0693V20.8076C96.4999 20.4614 96.361 20.1748 96.084 19.9473C95.8168 19.7098 95.4608 19.5909 95.0156 19.5908C94.5999 19.5908 94.228 19.704 93.9014 19.9316C93.5848 20.1493 93.3526 20.4416 93.2041 20.8076L91.6152 20.0361C91.7736 19.6105 92.0209 19.2443 92.3574 18.9375C92.7039 18.6207 93.11 18.3735 93.5752 18.1953C94.0404 18.0172 94.5455 17.9277 95.0898 17.9277ZM90.0869 26.1826H88.127V24.1045H90.0869V26.1826ZM101 26.1826H99.0547V18.1055H101V26.1826ZM94.4658 22.9014C94.0798 22.9706 93.7926 23.0943 93.6045 23.2725C93.4164 23.4506 93.3223 23.6836 93.3223 23.9707C93.3223 24.2478 93.4269 24.4704 93.6348 24.6387C93.8525 24.7969 94.1199 24.876 94.4365 24.876C94.8421 24.8759 95.1982 24.7922 95.5049 24.624C95.8216 24.4459 96.0641 24.2033 96.2324 23.8965C96.4106 23.5896 96.5 23.253 96.5 22.8867V22.5557L94.4658 22.9014ZM28.4541 11.1211C27.4379 11.1211 26.5252 11.3757 25.7168 11.8838C24.9087 12.3688 24.2734 13.0382 23.8115 13.8926C23.3727 14.724 23.1533 15.6942 23.1533 16.8027C23.1533 17.9114 23.3727 18.8935 23.8115 19.748C24.2734 20.6024 24.9087 21.2719 25.7168 21.7568C26.5252 22.2418 27.4379 22.4844 28.4541 22.4844C29.4934 22.4844 30.4061 22.2419 31.1914 21.7568C31.9765 21.2719 32.5886 20.6024 33.0273 19.748C33.4893 18.8935 33.7197 17.9114 33.7197 16.8027C33.7197 15.7173 33.4893 14.7471 33.0273 13.8926C32.5885 13.015 31.9766 12.3336 31.1914 11.8486C30.4061 11.3636 29.4934 11.1211 28.4541 11.1211ZM101 17.2002H99.0547V15.1211H101V17.2002ZM9.35449 10.7051C8.40758 10.7051 7.56426 10.9476 6.8252 11.4326C6.08611 11.8945 5.52057 12.5879 5.12793 13.5117C4.98791 13.853 4.88132 14.2225 4.80762 14.6201H13.6816C13.6448 14.1919 13.556 13.7872 13.4082 13.4072C13.108 12.5759 12.5996 11.9176 11.8838 11.4326C11.1909 10.9476 10.3476 10.7051 9.35449 10.7051Z" fill="#FF0031" />
                                </svg>
                            </div>
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
                        <div className="absolute top-4 right-4 bg-yellow-300 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            Enrollment Open
                        </div>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white text-sm font-bold mb-6">
                            <Award className="w-4 h-4 text-[#FF0031]" />
                            <span className="tracking-wide">PG CERTIFICATION</span>
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

            {/* Institute Info Section */}
            <InstituteInfo />





            {/* Comparison Section */}
            <section id="comparison" className="py-24 px-8 md:px-12 bg-gray-50/50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#FF0031] font-bold tracking-wider uppercase text-sm mb-2 block">Why This Program?</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
                            Traditional AI Courses vs. <br className="hidden md:block" />
                            <span className="text-[#FF0031]">GenAI & Agentic AI by IIT Patna</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-8 items-start">
                        {/* Labels Column (Hidden on mobile, visible on lg) */}
                        <div className="hidden lg:flex flex-col gap-7 pt-40">
                            {["Core Philosophy", "Curriculum Depth", "Tech Stack", "Project Approach", "RAG Sophistication", "Developer Experience", "Career Outcome"].map((label, i) => (
                                <div key={i} className="h-20 flex items-center text-lg font-bold text-gray-500">
                                    {label}
                                </div>
                            ))}
                        </div>

                        {/* IIT Patna Column (Winner) */}
                        <div className="relative bg-white rounded-3xl shadow-2xl border-2 border-[#FF0031] overflow-hidden z-10 transform lg:-translate-y-4">
                            <div className="bg-[#FF0031] text-white p-6 text-center">
                                <div className="inline-flex justify-center items-center w-12 h-12 bg-white/20 rounded-full mb-3">
                                    <BrainCircuit className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold">IIT Patna: GenAI & Agentic AI</h3>
                                <p className="text-white/80 text-sm mt-1">For Builders & Engineers</p>
                            </div>

                            <div className="p-8 space-y-6">
                                {[
                                    { label: "Core Philosophy", text: "Building Autonomous Agents & Systems", active: true },
                                    { label: "Curriculum Depth", text: "Agentic Workflows, MCP, Multi-Agent Orchestration", active: true },
                                    { label: "Tech Stack", text: "LangGraph, CrewAI, n8n, OpenAI, Anthropic", active: true },
                                    { label: "Project Approach", text: "Live, Production-Grade Full Stack Apps", active: true },
                                    { label: "RAG Sophistication", text: "Advanced (Hybrid, GraphRAG, Re-ranking)", active: true },
                                    { label: "Developer Experience", text: "AI-First (Cursor, Windsurf, Claude Code)", active: true },
                                    { label: "Career Outcome", text: "GenAI Product Engineer / Agentic Architect", active: true },
                                ].map((item, i) => (
                                    <div key={i} className="h-auto lg:h-20 flex flex-col justify-center border-b border-gray-100 last:border-0 py-4 lg:py-0">
                                        <span className="lg:hidden text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{item.label}</span>
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
                        <div className="bg-white rounded-3xl border border-gray-200  lg:  p-8 pt-20 lg:pt-8 opacity-80 hover:opacity-100 transition-opacity">
                            <div className="text-center mb-8 border-b border-gray-100 pb-2">
                                <div className="inline-flex justify-center items-center w-12 h-12 bg-gray-100 rounded-full mb-3">
                                    <BookOpen className="w-6 h-6 text-gray-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-700">Traditional AI Courses</h3>
                                <p className="text-gray-400 text-sm mt-1">For Researchers & Analysts</p>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { label: "Core Philosophy", text: "Theory-heavy Machine Learning & Deep Learning" },
                                    { label: "Curriculum Depth", text: "Basic Chatbots & Intro to APIs" },
                                    { label: "Tech Stack", text: "Jupyter Notebooks, Scikit-learn, Basic Python" },
                                    { label: "Project Approach", text: "Isolated Notebooks & Toy Examples" },
                                    { label: "RAG Sophistication", text: "Basic Vector Search" },
                                    { label: "Developer Experience", text: "Traditional IDEs & Manual Coding" },
                                    { label: "Career Outcome", text: "Junior ML Engineer / Data Analyst" },
                                ].map((item, i) => (
                                    <div key={i} className="h-auto lg:h-20 flex flex-col justify-center border-b border-gray-100 last:border-0 py-4 lg:py-0">
                                        <span className="lg:hidden text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{item.label}</span>
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
                        {modules.map((mod, idx) => {
                            if (idx >= 3 && !isModulesUnlocked) return null;
                            return (
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
                            );
                        })}

                        {!isModulesUnlocked && (
                            <div className="relative border border-gray-200 bg-gray-50 rounded-2xl p-8 md:p-12 text-center overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

                                <div className="relative z-10 max-w-lg mx-auto">
                                    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-200 flex items-center justify-center mx-auto mb-6 transform rotate-3">
                                        <Lock className="w-8 h-8 text-[#FF0031]" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">7 More Modules Locked</h3>
                                    <p className="text-gray-500 mb-8 max-w-sm mx-auto">
                                        Unlock the complete syllabus including RAG Systems, Agents, and Career Acceleration tracks.
                                    </p>
                                    <button
                                        onClick={() => setIsModulesUnlocked(true)}
                                        className="px-8 py-4 rounded-full bg-[#FF0031] text-white font-bold hover:bg-[#D9002A] transition-all shadow-lg hover:shadow-red-500/25 active:scale-95 flex items-center justify-center gap-2 mx-auto"
                                    >
                                        Enquire to Unlock
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="text-center mt-12">
                        <button className="px-8 py-3 rounded-full border-2 border-[#FF0031] text-[#FF0031] font-bold hover:bg-red-50 transition-colors inline-flex items-center gap-2">
                            <Download className="w-4 h-4" /> Download Detailed Syllabus
                        </button>
                    </div>
                </div>
            </section>

            {/* Mentors Section */}
            <MentorsCarousel />

            {/* Global Leaders Section */}
            <LeadersSection />

            {/* Projects */}
            <div id="projects">
                <AIProjects />
            </div>

            {/* Capstone */}
            <Capstone />

            {/* Certification Section */}
            <section id="certificate" className="py-24 px-8 md:px-12 bg-gray-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">
                        Official <span className="text-[#FF0031]">IIT Patna</span> certification <br className="hidden md:block" />
                        on completion of your program
                    </h2>
                    <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200">
                        <img
                            src="/IITPATNA-CERTIFICATE.png"
                            alt="Official IIT Patna Certificate"
                            className="w-full h-auto"
                        />
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
        </main >
    );
}
