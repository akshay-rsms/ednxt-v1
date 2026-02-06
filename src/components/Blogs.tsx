"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const blogs = [
    {
        id: 1,
        title: "Why an Online MBA is the Future of Business Leadership",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
        description: "Discover how an online MBA can fast-track your career and build essential leadership skills in today's digital economy."
    },
    {
        id: 2,
        title: "Mastering AI & Data Science with an Online MCA",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
        description: "Explore the curriculum and career opportunities available for MCA graduates in the age of Artificial Intelligence."
    },
    {
        id: 3,
        title: "Modernizing Finance: The Scope of Online B.Com",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        description: "See how a B.Com degree adapts to the fintech revolution and the changing landscape of global finance."
    },
    {
        id: 4,
        title: "Top Career Paths After Completing Your Online BBA",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
        description: "From marketing to HR, find out where your BBA degree can take you and how to start your management journey."
    },
    {
        id: 5,
        title: "How to Choose the Best University for Online Learning",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
        description: "A comprehensive guide to selecting the right institution/university for your ed-tech journey and career goals."
    },
    {
        id: 6,
        title: "Salary Trends for Online Degree Graduates in 2026",
        image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80",
        description: "Analyze the ROI and salary expectations for various online degree programs in the current job market."
    }
];

export function Blogs() {
    const [width, setWidth] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (carouselRef.current) {
            setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
        }
    }, []);

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
                <motion.div
                    ref={carouselRef}
                    className="cursor-grab active:cursor-grabbing overflow-visible py-12" // Added vertical padding for stagger space
                    whileTap={{ cursor: "grabbing" }}
                >
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        className="flex gap-8"
                    >
                        {blogs.map((blog, idx) => (
                            <motion.div
                                key={blog.id}
                                className={`min-w-[320px] md:min-w-[380px] bg-white rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 h-[500px] flex flex-col ${idx % 2 !== 0 ? "mt-12" : ""
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

                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
