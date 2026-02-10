"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AboutHero } from "@/components/AboutHero";
import { MissionVision } from "@/components/MissionVision";
import { TeamCarousel } from "@/components/TeamCarousel";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white font-sans text-gray-900">
            <Navbar />

            <AboutHero />

            <MissionVision />

            {/* Story / Numbers Section */}
            <section className="py-24 bg-black text-white relative overflow-hidden">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#FF0031] rounded-full blur-[120px] opacity-10" />

                <div className="max-w-7xl mx-auto px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Our Journey So Far</h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Started in a small dorm room with a big dream, EdNxt has now evolved into a premier destination for advanced tech education. We've helped thousands of learners transition into their dream careers.
                        </p>
                        <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors">
                            Join Our Team
                        </button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 text-center">
                            <span className="block text-4xl md:text-5xl font-extrabold text-[#FF0031] mb-2">50k+</span>
                            <span className="text-sm text-gray-400 uppercase tracking-widest">Learners</span>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 text-center">
                            <span className="block text-4xl md:text-5xl font-extrabold text-[#FF0031] mb-2">100+</span>
                            <span className="text-sm text-gray-400 uppercase tracking-widest">Hiring Partners</span>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 text-center">
                            <span className="block text-4xl md:text-5xl font-extrabold text-[#FF0031] mb-2">95%</span>
                            <span className="text-sm text-gray-400 uppercase tracking-widest">Placement Rate</span>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 text-center">
                            <span className="block text-4xl md:text-5xl font-extrabold text-[#FF0031] mb-2">4.8</span>
                            <span className="text-sm text-gray-400 uppercase tracking-widest">Rating</span>
                        </div>
                    </div>
                </div>
            </section>

            <TeamCarousel />

            <Footer />
        </main>
    );
}
