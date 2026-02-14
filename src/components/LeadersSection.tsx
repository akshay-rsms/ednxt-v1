"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { leaders } from "@/data/leaders";

interface CardProps {
    i: number;
    leader: typeof leaders[0];
    progress: MotionValue<number>;
    range: [number, number];
    targetScale: number;
}

const Card: React.FC<CardProps> = ({ i, leader, progress, range, targetScale }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "start start"]
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className="h-auto md:h-[75vh] flex items-start justify-center sticky top-0 pt-4 md:pt-16 sm:pt-24 mb-6 md:mb-0">
            <motion.div
                style={{
                    scale, // Always pass scale, control effect via layout or separate mobile logic if needed
                    backgroundColor: "#ffffff",
                    top: `calc(-5vh + ${i * 25}px)` // Keep the top calculation, on mobile sticky might be different so we need to validte
                }}
                className="flex flex-col relative h-[500px] md:h-[450px] w-full md:w-[1000px] rounded-3xl border border-gray-200 shadow-xl overflow-hidden transform origin-top hover:shadow-2xl transition-all duration-500 group md:top-[calc(-5vh+var(--offset))] top-0"
            >
                <div className="flex h-full gap-4 md:gap-10 flex-col md:flex-row p-6 md:p-10 pb-0 md:pb-10">
                    {/* Content Section */}
                    <div className="md:w-[60%] flex flex-col relative z-10">
                        {/* Quote - Mobile: Top */}
                        <h3 className="text-xl md:text-3xl font-medium text-gray-800 leading-snug mb-4 md:mb-8 font-serif italic md:not-italic md:font-sans">
                            "{leader.quote}"
                        </h3>

                        {/* Name & Role - Mobile: Below Quote */}
                        <div className="flex flex-col mb-6 md:mb-0">
                            <span className="text-2xl md:text-xl font-bold text-gray-900">{leader.name}</span>
                            <span className="text-sm text-gray-500 font-medium uppercase tracking-wider mt-1">{leader.role}</span>
                        </div>
                    </div>

                    {/* Image Section - Mobile: Bottom, Cutoff */}
                    <div className="md:w-[40%] h-full relative rounded-2xl md:bg-gray-100 overflow-hidden mt-auto md:mt-0">
                        {/* Desktop Image View */}
                        <motion.div style={{ scale: imageScale }} className="hidden md:block w-full h-full">
                            <img
                                src={leader.image}
                                alt={leader.name}
                                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                        </motion.div>

                        {/* Mobile Image View - Bottom Aligned, Cutoff */}
                        <div className="md:hidden w-full h-full flex items-end justify-center">
                            <img
                                src={leader.image}
                                alt={leader.name}
                                className="w-[80%] h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export const LeadersSection = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });

    return (
        <section className="bg-gradient-to-b from-gray-50 to-white text-gray-900 pb-12 font-sans border-b border-gray-100">

            {/* Header */}
            <div className="py-12 text-center max-w-4xl mx-auto px-6">
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
                    What global leaders have <br /> to say about <span className="text-[#FF0031]">AI</span>
                </h2>
                <div className="h-1 w-24 bg-[#FF0031] mx-auto rounded-full"></div>
            </div>

            <div ref={container} className="relative mt-4 mx-auto max-w-7xl px-4">
                {leaders.map((leader, i) => {
                    const targetScale = 1 - (leaders.length - i) * 0.05;
                    return (
                        <Card
                            key={i}
                            i={i}
                            leader={leader}
                            progress={scrollYProgress}
                            range={[i * 0.25, 1]}
                            targetScale={targetScale}
                        />
                    );
                })}
            </div>
        </section>
    );
};
