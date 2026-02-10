"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

const teamMembers = [
    { id: 1, name: "Member Name", role: "Founder & CEO", image: "/team-placeholder.png" },
    { id: 2, name: "Member Name", role: "CTO", image: "/team-placeholder.png" },
    { id: 3, name: "Member Name", role: "Head of Product", image: "/team-placeholder.png" },
    { id: 4, name: "Member Name", role: "Lead Engineer", image: "/team-placeholder.png" },
    { id: 5, name: "Member Name", role: "Design Lead", image: "/team-placeholder.png" },
    { id: 6, name: "Member Name", role: "Marketing Head", image: "/team-placeholder.png" },
    { id: 7, name: "Member Name", role: "Curriculum Director", image: "/team-placeholder.png" },
    { id: 8, name: "Member Name", role: "Community Manager", image: "/team-placeholder.png" },
];

export function TeamCarousel() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-8 mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">Meet the <span className="text-[#FF0031]">Visionaries</span></h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    A diverse team of educators, engineers, and creators working together to transform learning.
                </p>
            </div>

            <div className="relative">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

                {/* Infinite Marquee */}
                <div className="flex w-full overflow-hidden">
                    <motion.div
                        className="flex gap-8 px-8"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 30,
                            ease: "linear"
                        }}
                        style={{ width: "max-content" }}
                    >
                        {[...teamMembers, ...teamMembers].map((member, index) => (
                            <div key={`${member.id}-${index}`} className="w-[280px] group">
                                <div className="relative h-[320px] rounded-2xl overflow-hidden mb-4 bg-gray-100 border border-gray-100 shadow-sm group-hover:shadow-xl group-hover:border-[#FF0031]/30 transition-all duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-6">
                                        <div className="flex gap-4 justify-center">
                                            <a href="#" className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-[#FF0031] transition-colors"><Linkedin size={18} /></a>
                                            <a href="#" className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-[#FF0031] transition-colors"><Twitter size={18} /></a>
                                        </div>
                                    </div>
                                    {/* Placeholder styling since no real image is provided yet */}
                                    <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400 font-bold text-4xl">
                                        {member.name.charAt(0)}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 text-center group-hover:text-[#FF0031] transition-colors">{member.name}</h3>
                                <p className="text-sm text-center text-gray-500 font-medium uppercase tracking-wide">{member.role}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
