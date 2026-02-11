import { ArrowRight, TrendingUp } from "lucide-react";

export function UniversityPartners() {
    return (
        <section className="py-12 md:py-20 bg-white">
            <div className="container mx-auto px-6 font-sans">

                {/* Header */}
                <div className="mb-12">
                    <h4 className="text-[#FF0031] font-bold text-sm tracking-widest uppercase mb-3">UNIVERSITY PARTNERS</h4>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
                        Learn from <span className="relative inline-block">
                            Top-Ranked
                            <svg className="absolute w-full h-3 -bottom-1 left-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="#FF0031" strokeWidth="3" fill="none" />
                            </svg>
                        </span> Institutions
                    </h2>

                    <div className="flex flex-col md:flex-row md:items-center gap-6 text-sm">
                        <button className="bg-[#FF0031] text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-[#D9002A] transition-colors shadow-lg shadow-red-100 w-fit">
                            Explore All <ArrowRight className="w-4 h-4" />
                        </button>
                        <div className="flex items-center gap-1 font-medium text-gray-700">
                            <span className="font-bold text-black">100+ Universities available</span>
                            <span className="text-gray-500">throughout the country!</span>
                            <a href="#" className="flex items-center gap-1 text-gray-400 hover:text-[#FF0031] ml-1 transition-colors">
                                Explore Now <ArrowRight className="w-3 h-3" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

                    {/* Large Card (Left) - Spans 3 columns */}
                    <div className="lg:col-span-3 bg-[#FFFCDA] rounded-[2.5rem] relative overflow-hidden min-h-[400px] group cursor-pointer">
                        {/* Background Image */}
                        <div className="absolute inset-0 w-full h-full">
                            <img
                                src="/iit_madras_campus.png"
                                alt="IIT Madras Campus"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Gradient Overlay for Text Visibility */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent opacity-80"></div>
                        </div>

                        <div className="p-10 relative z-10">
                            <span className="text-white/90 text-xs font-bold tracking-widest uppercase mb-2 block">EXPLORE</span>
                            <h3 className="text-4xl font-bold text-white mb-4 flex items-center gap-2 group-hover:gap-4 transition-all drop-shadow-lg">
                                IIT Madras <ArrowRight className="w-8 h-8" />
                            </h3>
                            <div className="bg-[#4A4A35] text-white text-[10px] font-bold px-3 py-1.5 rounded-full inline-flex items-center gap-1 uppercase tracking-wider backdrop-blur-sm">
                                TRENDING <TrendingUp className="w-3 h-3" />
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Stacked Cards - Spans 2 columns */}
                    <div className="lg:col-span-2 flex flex-col gap-6">

                        {/* Top Card */}
                        <div className="flex-1 bg-[#D3FFFF] rounded-[2.5rem] relative overflow-hidden p-8 flex flex-col justify-between group cursor-pointer min-h-[300px]">
                            {/* Background Image */}
                            <div className="absolute inset-0 w-full h-full">
                                <img
                                    src="/nit_trichy_campus.png"
                                    alt="NIT Trichy"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent opacity-80"></div>
                            </div>

                            <div className="relative z-10">
                                <span className="text-white/90 text-xs font-bold tracking-widest uppercase mb-2 block">EXPLORE</span>
                                <h3 className="text-2xl font-bold text-white leading-tight flex items-center gap-2 group-hover:gap-3 transition-all drop-shadow-lg">
                                    NIT Trichy <ArrowRight className="w-6 h-6" />
                                </h3>
                            </div>
                        </div>

                        {/* Bottom Card */}
                        <div className="flex-1 bg-[#DEFFEC] rounded-[2.5rem] relative overflow-hidden p-8 flex flex-col justify-between group cursor-pointer min-h-[300px]">
                            {/* Background Image */}
                            <div className="absolute inset-0 w-full h-full">
                                <img
                                    src="/iit_bombay_campus.png"
                                    alt="IIT Bombay"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent opacity-80"></div>
                            </div>

                            <div className="relative z-10">
                                <span className="text-white/90 text-xs font-bold tracking-widest uppercase mb-2 block">EXPLORE</span>
                                <h3 className="text-2xl font-bold text-white leading-tight flex items-center gap-2 group-hover:gap-3 transition-all drop-shadow-lg">
                                    IIT Bombay <ArrowRight className="w-6 h-6" />
                                </h3>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}
