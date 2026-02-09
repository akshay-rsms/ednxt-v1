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
        <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{
                    scale,
                    backgroundColor: i % 2 === 0 ? "#ffffff" : "#fdfdfd", // Slight variation
                    top: `calc(5vh + ${i * 25}px)`
                }}
                className="flex flex-col relative -top-[25%] h-[450px] w-full md:w-[1000px] rounded-3xl p-10 border border-gray-200 shadow-xl transform origin-top hover:shadow-2xl hover:border-[#FF0031]/20 transition-all duration-500 group"
            >
                <div className="flex h-full gap-10 flex-col md:flex-row">
                    {/* Left Content */}
                    <div className="md:w-[60%] flex flex-col justify-center relative z-10">
                        <svg className="w-12 h-12 text-[#FF0031] opacity-20 mb-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                        </svg>
                        <h3 className="text-2xl md:text-3xl font-medium text-gray-800 leading-snug mb-8">
                            "{leader.quote}"
                        </h3>

                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-gray-900">{leader.name}</span>
                            <span className="text-sm text-gray-500 font-medium uppercase tracking-wider mt-1">{leader.role}</span>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="md:w-[40%] h-full relative rounded-2xl overflow-hidden bg-gray-100 group-hover:scale-[1.02] transition-transform duration-500">
                        <motion.div style={{ scale: imageScale }} className="w-full h-full">
                            {/* Using img tag directly as requested for simplicity with provided paths, though Next/Image is better generally - sticking to standard img for these specific paths to avoid configuration overhead if verify fails */}
                            <img
                                src={leader.image}
                                alt={leader.name}
                                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                        </motion.div>
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
