"use client";

import React from "react";
import { motion } from "framer-motion";

export function AboutHero() {
    return (
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-black text-white">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
                <div className="w-full h-full bg-[url('/about-hero-bg.jpg')] bg-cover bg-center opacity-40 scale-105 animate-pulse-slow" />
                {/* Abstract geometric shapes */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF0031] rounded-full blur-[150px] opacity-20 animate-blob" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-20 animate-blob animation-delay-2000" />
            </div>

            <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-[#FF0031] font-bold text-sm tracking-widest uppercase mb-6 backdrop-blur-md"
                >
                    Who We Are
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8"
                >
                    Redefining the Future of <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0031] to-orange-500">
                        Tech Education
                    </span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
                >
                    We are on a mission to bridge the gap between academia and industry.
                    Building the next generation of AI-native engineers and leaders.
                </motion.p>
            </div>
        </section>
    );
}
