"use client";
import { ArrowRight } from "lucide-react";

import { blogs } from "@/lib/data/blogs";

export function Blogs() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 font-sans">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#333] uppercase leading-tight">
                            READ OUR <br />
                            <span className="text-[#FF0031]">LATEST BLOGS</span>
                        </h2>
                    </div>
                    <button className="bg-[#FF0031] text-white px-8 py-3 rounded-full font-bold text-sm tracking-wide flex items-center gap-2 hover:bg-[#D9002A] transition-colors shadow-lg shadow-red-100">
                        VIEW ALL <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                {/* Carousel Container */}
                <div className="flex gap-8 overflow-x-auto py-12 hide-scrollbar snap-x items-center">
                    {blogs.map((blog, idx) => (
                        <div
                            key={blog.id}
                            className={`min-w-[320px] md:min-w-[380px] bg-white rounded-[2rem] overflow-hidden border border-[#FF0031] h-[500px] flex flex-col snap-center ${idx % 2 === 0 ? "-translate-y-6" : "translate-y-6"
                                }`}
                        >
                            {/* Top Image Section */}
                            <div className="h-[55%] relative overflow-hidden">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Bottom Content Section */}
                            <div className="h-[45%] p-8 flex flex-col justify-between bg-white">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 leading-tight mb-3 line-clamp-2">
                                        {blog.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm line-clamp-3 leading-relaxed">
                                        {blog.description}
                                    </p>
                                </div>

                                {/* Static CTA Button */}
                                <div className="mt-4">
                                    <button className="text-[#FF0031] font-bold text-sm uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all">
                                        Read More <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
            <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </section >
    );
}
