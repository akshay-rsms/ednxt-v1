"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Lightbulb, Users, Globe } from "lucide-react";

export function MissionVision() {
    const features = [
        {
            icon: Target,
            title: "Our Mission",
            desc: "To democratize access to premium, industry-aligned education, enabling millions to build meaningful careers in the age of AI."
        },
        {
            icon: Lightbulb,
            title: "Our Vision",
            desc: "To be the global standard for outcome-based learning, where every learner is empowered to create, innovate, and lead."
        }
    ];

    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white skew-x-12 transform translate-x-20"></div>

            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-[#FF0031] font-bold tracking-wider uppercase text-sm mb-4 block">Core Values</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
                            Driven by Purpose, <br />
                            <span className="text-[#FF0031]">Fuelled by Innovation</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            At EdNxt, we believe education is not just about consuming content, but about building capabilities. We are re-engineering the learning DNA for the future workforce.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="flex gap-4">
                                <div className="p-3 bg-red-50 rounded-lg text-[#FF0031] h-fit"><Users /></div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-2">Student Centric</h4>
                                    <p className="text-sm text-gray-500">Every decision we make starts with the learner's success in mind.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="p-3 bg-red-50 rounded-lg text-[#FF0031] h-fit"><Globe /></div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-2">Global Impact</h4>
                                    <p className="text-sm text-gray-500">Creating world-class talent pool accessible from anywhere.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-6">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-[#FF0031] hover:shadow-2xl transition-all"
                            >
                                <div className="w-14 h-14 bg-[#FF0031]/10 rounded-full flex items-center justify-center text-[#FF0031] mb-6">
                                    <feature.icon size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
