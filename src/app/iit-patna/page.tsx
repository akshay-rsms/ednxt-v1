"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, Clock, Globe, Award, BookOpen, PenTool, Database, Cpu, Brain, Layers, Code, PlayCircle, Star, Users } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const modules = [
    {
        title: "Module 1: Fundamentals of Generative AI and LLMs",
        duration: "4 Weeks",
        content: [
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
        content: [
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
        content: [
            "Event-based Workflow Design",
            "No-code Automation (Zapier, Make)",
            "Local Hosting & Scaling with Docker",
            "Running and Integrating n8n Locally",
            "Connecting APIs using Webhooks and Postman",
            "Leveraging Firebase for Realtime Automation"
        ]
    },
    {
        title: "AI Agents Implementation",
        duration: "3 Weeks",
        content: ["Building Autonomous Agents", "Agentic Workflows", "Multi-Agent Systems"]
    },
    {
        title: "AI App Building",
        duration: "4 Weeks",
        content: ["Full Stack AI Apps", "Streamlit & Gradio", "Deployment & Monitoring"]
    },
    {
        title: "Domain Applications & Career",
        duration: "2 Weeks",
        content: ["AI in Finance, Marketing, Healthcare", "Resume Building", "Interview Prep"]
    }
];

const tools = [
    "OpenAI", "Gemini", "Llama 3", "Mistral", "Ollama", "LangChain",
    "HuggingFace", "Midjourney", "ElevenLabs", "Runway ML", "Zapier",
    "Make", "n8n", "Docker", "Firebase", "Postman"
];

const projects = [
    {
        title: "RAG-powered FAQ Chatbot",
        description: "Develop a chatbot using LM Studio that answers queries based on custom documents."
    },
    {
        title: "Visual Branding Kit",
        description: "Design a complete visual identity for a brand using Midjourney and other AI tools."
    },
    {
        title: "AI-Generated Voice Ad",
        description: "Produce a professional voice advertisement using ElevenLabs text-to-speech technology."
    },
    {
        title: "Multimodal Video Campaign",
        description: "Launch a comprehensive video marketing campaign using Runway ML for video generation."
    },
    {
        title: "Smart Email Automation",
        description: "Build a system to automatically categorize and valid draft responses to emails using Make."
    },
    {
        title: "Custom CRM Workflow",
        description: "Host and integrate a custom Customer Relationship Management workflow with local n8n."
    }
];

export default function IITPatnaPage() {
    const [activeModule, setActiveModule] = useState<number | null>(0);

    return (
        <main className="min-h-screen bg-white font-sans text-gray-900">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-8 md:px-12 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF0031] rounded-full blur-[120px] opacity-20 translate-x-1/3 -translate-y-1/3"></div>

                <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-900/30 border border-red-500/30 text-[#FF0031] text-sm font-bold">
                            <Award className="w-4 h-4" /> Certified by IIT Patna
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                            Generative AI Certification Program <span className="text-[#FF0031]">for Professionals</span>
                        </h1>
                        <p className="text-lg text-gray-300 max-w-2xl">
                            Master 50+ AI tools, build automated workflows, and create AI-powered apps. Learn directly from industry experts in this 6-month intensive program.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="px-8 py-3.5 rounded-full bg-[#FF0031] text-white font-bold text-lg hover:bg-[#D9002A] transition-colors shadow-lg shadow-red-900/20">
                                Apply Now
                            </button>
                            <button className="px-8 py-3.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-lg hover:bg-white/20 transition-colors">
                                Download Brochure
                            </button>
                        </div>
                        <div className="flex items-center gap-6 pt-4 text-sm font-medium text-gray-400">
                            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#FF0031]" /> 6 Months</span>
                            <span className="flex items-center gap-2"><Globe className="w-4 h-4 text-[#FF0031]" /> Online Format</span>
                            <span className="flex items-center gap-2"><Users className="w-4 h-4 text-[#FF0031]" /> 1000+ Enrolled</span>
                        </div>
                    </div>

                    {/* Hero Image/Form Placeholder */}
                    <div className="flex-1 w-full max-w-md bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 shadow-2xl">
                        <h3 className="text-2xl font-bold mb-6">Program Highlights</h3>
                        <ul className="space-y-4">
                            {[
                                "50+ AI Tools Covered",
                                "10+ Hands-on Projects",
                                "Capstone Project",
                                "Campus Immersion (Optional)",
                                "30+ Live Classes",
                                "No Coding Experience Required"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-[#FF0031] shrink-0 mt-0.5" />
                                    <span className="text-gray-200">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Curriculum Section */}
            <section className="py-20 px-8 md:px-12 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Comprehensive Curriculum</h2>
                        <p className="text-gray-600 text-lg">A step-by-step path that turns any professional into a Generative AI power user.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Modules List */}
                        <div className="lg:col-span-1 space-y-4">
                            {modules.map((mod, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => setActiveModule(activeModule === idx ? null : idx)}
                                    className={`p-5 rounded-xl border cursor-pointer transition-all duration-300 ${activeModule === idx
                                            ? "bg-white border-[#FF0031] shadow-md border-l-4 border-l-[#FF0031]"
                                            : "bg-white border-gray-100 hover:border-red-200"
                                        }`}
                                >
                                    <div className="flex justify-between items-center mb-1">
                                        <span className={`text-xs font-bold uppercase tracking-wider ${activeModule === idx ? "text-[#FF0031]" : "text-gray-400"}`}>
                                            {mod.duration}
                                        </span>
                                        {activeModule === idx && <ArrowRight className="w-4 h-4 text-[#FF0031]" />}
                                    </div>
                                    <h4 className={`font-bold text-lg ${activeModule === idx ? "text-gray-900" : "text-gray-600"}`}>
                                        {mod.title}
                                    </h4>
                                </div>
                            ))}
                        </div>

                        {/* Module Details */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-8 h-full">
                                {activeModule !== null ? (
                                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-[#FF0031]">
                                                <BookOpen className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-900">{modules[activeModule].title}</h3>
                                                <p className="text-gray-500 font-medium">{modules[activeModule].duration} • Live Sessions</p>
                                            </div>
                                        </div>

                                        <h4 className="text-sm font-bold uppercase text-gray-400 tracking-wider mb-4">What You'll Learn</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {modules[activeModule].content.map((item, i) => (
                                                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF0031] mt-2 shrink-0" />
                                                    <span className="text-gray-700 font-medium text-sm leading-relaxed">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="h-full flex flex-col items-center justify-center text-center text-gray-400 p-12">
                                        <Layers className="w-16 h-16 mb-4 opacity-20" />
                                        <p className="text-lg">Select a module to view details</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tools Section */}
            <section className="py-20 px-8 md:px-12 bg-white border-y border-gray-100">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-12">Master 50+ AI Tools</h2>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                        {tools.map((tool, i) => (
                            <div key={i} className="px-6 py-3 rounded-full bg-gray-50 border border-gray-100 text-gray-600 font-bold hover:bg-white hover:border-[#FF0031] hover:text-[#FF0031] hover:shadow-lg hover:shadow-red-50 transition-all duration-300 cursor-default">
                                {tool}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-20 px-8 md:px-12 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-5"></div>
                <div className="relative z-10 max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Build a Portfolio of <span className="text-[#FF0031]">Real-World Projects</span></h2>
                            <p className="text-gray-400 text-lg max-w-xl">Apply your learning by building 10+ industry-relevant projects and a comprehensive Capstone Project.</p>
                        </div>
                        <button className="flex items-center gap-2 text-[#FF0031] font-bold hover:text-white transition-colors">
                            View All Projects <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, idx) => (
                            <div key={idx} className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#FF0031]/50 transition-all duration-300">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Code className="w-6 h-6 text-[#FF0031]" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-[#FF0031] transition-colors">{project.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">{project.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certificate/CTA */}
            <section className="py-24 px-8 md:px-12 bg-white">
                <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#FF0031] to-[#D9002A] rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl shadow-red-500/30 relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Ready to Transform Your Career?</h2>
                        <p className="text-red-100 text-lg max-w-2xl mx-auto mb-10">
                            Join the next cohort of the IIT Patna Generative AI Certification Program and become an AI leader.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button className="px-10 py-4 rounded-full bg-white text-[#FF0031] font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
                                Apply Now
                            </button>
                            <button className="px-10 py-4 rounded-full bg-red-800/20 border border-white/30 text-white font-bold text-lg hover:bg-red-800/40 transition-colors backdrop-blur-sm">
                                Download Syllabus
                            </button>
                        </div>
                    </div>
                    {/* Decorative Circles */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
