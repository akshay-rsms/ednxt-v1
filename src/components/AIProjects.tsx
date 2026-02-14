"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Your Own AI Chat Assistant",
        description: "Build a memory-powered AI chatbot with a polished UI, architected with clean, modular, production-ready code — your first real ChatGPT-style app.",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=600"
    },
    {
        title: "Autonomous AI Agents",
        description: "Develop AI copilots that can think, plan, and take action — capable of calling APIs, fetching data, and reasoning through tasks like a digital teammate.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=600"
    },
    {
        title: "Smart Text Transformation Tools",
        description: "Create LLM-powered text apps that rewrite, summarize, and format content automatically with validated structured outputs and fail-safe parsing.",
        image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=600"
    },
    {
        title: "Multi-Step Agentic Workflows",
        description: "Orchestrate complex AI workflows that plan → act → reflect intelligently using LangGraph-style pipelines, guardrails, and scalable architecture patterns.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600"
    },
    {
        title: "Knowledge Retrieval Assistants (RAG)",
        description: "Build a 'Chat with Your Documents' system that can understand PDFs, websites, and notes — retrieving accurate, citation-backed answers.",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=600"
    },
    {
        title: "Portfolio-Ready AI Developer Assistant",
        description: "Combine everything into a flagship AI portfolio project — an end-to-end assistant that integrates RAG, agents, memory, and multiple LLMs.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600"
    }
];

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export function AIProjects() {
    return (
        <section id="projects" className="py-12 md:py-24 px-2 md:px-4 bg-white flex justify-center">
            <div className="w-[98%] md:w-[95%] max-w-[1800px] bg-gradient-to-b from-black via-[#0a0002] to-[#3d000b] rounded-[2rem] md:rounded-[3rem] p-6 md:p-20 relative overflow-hidden shadow-2xl border border-gray-800">
                {/* Background Gradients */}
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,_transparent_0%,_#ff003120_100%)] pointer-events-none" />

                <div className="relative z-10">
                    <div className="text-left mb-8 md:mb-16">
                        <h2 className="text-3xl md:text-6xl font-extrabold text-white mb-4 md:mb-6 tracking-tight">
                            Stuff you're going to build by the end of the program
                        </h2>
                        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mb-6 md:mb-8">
                            No prior coding experience required
                        </p>
                        <button className="bg-[#FF0031] text-white px-6 py-2.5 md:px-8 md:py-3 rounded-lg font-bold hover:bg-[#D9002A] transition-colors shadow-lg shadow-red-900/20">
                            Apply Now
                        </button>
                        <p className="text-gray-500 text-xs md:text-sm mt-6 md:mt-8 max-w-4xl">
                            Note: In certain parts of the curriculum, coding may be required, which will be covered in the program and supported by the faculty
                        </p>
                    </div>

                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.1 } }
                        }}
                    >
                        {projects.map((project, idx) => (
                            <motion.div
                                key={idx}
                                variants={cardVariants}
                                className="group relative bg-[#0a0c14] rounded-xl md:rounded-3xl overflow-hidden flex flex-col h-[260px] md:h-[500px]"
                            >
                                {/* Top Image Area */}
                                <div className="h-[140px] md:h-[300px] w-full overflow-hidden relative shrink-0">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-3 md:p-8 flex-grow flex flex-col justify-end bg-[#0a0c14]">
                                    <h3 className="text-sm md:text-2xl font-bold text-white mb-2 md:mb-4 leading-tight line-clamp-3 md:line-clamp-none">
                                        {project.title}
                                    </h3>
                                    <div className="inline-flex">
                                        <span className="bg-[#ccff00] text-black text-[10px] md:text-xs font-bold px-2 py-1 md:px-3 md:py-1.5 rounded-full flex items-center gap-1 whitespace-nowrap">
                                            No coding required ⚡
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
