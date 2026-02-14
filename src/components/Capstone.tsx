"use client";

import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { Lock } from "lucide-react";

export function Capstone() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <section className="pb-12 md:pb-24 pt-4 px-2 md:px-4 flex justify-center bg-white perspective-[1000px]">
            <motion.div
                onMouseMove={handleMouseMove}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group relative w-[98%] md:w-[95%] max-w-[1800px] h-[400px] md:h-[600px] rounded-[32px] md:rounded-[48px] overflow-hidden bg-black border border-white/5 shadow-2xl hover:scale-[1.01] transition-transform duration-700 ease-out"
            >
                {/* --- LAYER 1: Deep Base Gradient --- */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050001] to-[#1a0003]" />

                {/* --- LAYER 2: Mouse Follow Spotlight --- */}
                <motion.div
                    className="pointer-events-none absolute -inset-px rounded-[48px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                rgba(255, 0, 49, 0.15),
                transparent 80%
              )
            `,
                    }}
                />

                {/* --- LAYER 3: Ambient Red Glow (Pulsing) --- */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF0031]/10 rounded-full blur-[180px] animate-pulse-slow pointer-events-none" />

                {/* --- LAYER 4: Floating Particles --- */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute bg-[#FF0031] rounded-full blur-sm opacity-20"
                            initial={{
                                x: Math.random() * 1600,
                                y: Math.random() * 600,
                                scale: Math.random() * 0.5 + 0.5,
                            }}
                            animate={{
                                y: [null, Math.random() * -100],
                                opacity: [0.2, 0.5, 0.2],
                            }}
                            transition={{
                                duration: Math.random() * 5 + 5,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            style={{
                                width: Math.random() * 6 + 2 + "px",
                                height: Math.random() * 6 + 2 + "px",
                            }}
                        />
                    ))}
                </div>

                {/* --- LAYER 5: Noise Overlay --- */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

                {/* --- CONTENT CONTAINER --- */}
                <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
                    
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-8"
                    >
                        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(255,0,49,0.1)] group-hover:border-[#FF0031]/40 group-hover:shadow-[0_0_30px_rgba(255,0,49,0.3)] transition-all duration-500">
                            <Lock className="w-3.5 h-3.5 text-[#FF0031]" />
                            <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">Locked Content</span>
                        </div>
                    </motion.div>

                    {/* Main Title with Shimmer */}
                    <motion.h2 
                        className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-6 relative"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        CAPSTONE
                        <br className="md:hidden" /> PROJECT
                        
                        {/* Light Sweep Animation */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-[200%] h-full -skew-x-12 translate-x-[-150%] animate-[shimmer_4s_infinite_linear] pointer-events-none mix-blend-overlay"></div>
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="text-lg md:text-2xl text-gray-400 font-medium tracking-wide max-w-2xl mx-auto"
                    >
                        Will be revealed once you&apos;re part of the program in Module 6
                    </motion.p>
                </div>

                {/* --- BORDER GLOW --- */}
                <div className="absolute inset-0 rounded-[48px] border border-white/5 group-hover:border-[#FF0031]/30 transition-colors duration-700 pointer-events-none" />
                <div className="absolute inset-0 rounded-[48px] shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] pointer-events-none" />
            </motion.div>
        </section>
    );
}
