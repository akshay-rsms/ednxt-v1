import { ArrowRight, TrendingUp } from "lucide-react";

export function UniversityPartners() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 font-sans">

                {/* Header */}
                <div className="mb-12">
                    <h4 className="text-[#F51046] font-bold text-sm tracking-widest uppercase mb-3">UNIVERSITY PARTNERS</h4>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                        Learn from <span className="relative inline-block">
                            Top-Ranked
                            <svg className="absolute w-full h-3 -bottom-1 left-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="#F51046" strokeWidth="3" fill="none" />
                            </svg>
                        </span> Institutions
                    </h2>

                    <div className="flex flex-col md:flex-row md:items-center gap-6 text-sm">
                        <button className="bg-[#F51046] text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-red-600 transition-colors shadow-lg shadow-red-100">
                            Explore All <ArrowRight className="w-4 h-4" />
                        </button>
                        <div className="flex items-center gap-1 font-medium text-gray-700">
                            <span className="font-bold text-black">100+ Universities available</span>
                            <span className="text-gray-500">throughout the country!</span>
                            <a href="#" className="flex items-center gap-1 text-gray-400 hover:text-[#F51046] ml-1 transition-colors">
                                Explore Now <ArrowRight className="w-3 h-3" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

                    {/* Large Card (Left) - Spans 3 columns */}
                    <div className="lg:col-span-3 bg-[#FFFDE7] rounded-[2.5rem] relative overflow-hidden min-h-[400px] group cursor-pointer">
                        <div className="p-10 relative z-10">
                            <span className="text-[#F51046] text-xs font-bold tracking-widest uppercase mb-2 block">EXPLORE</span>
                            <h3 className="text-4xl font-bold text-gray-900 mb-4 flex items-center gap-2 group-hover:gap-4 transition-all">
                                Jain Online <ArrowRight className="w-8 h-8" />
                            </h3>
                            <div className="bg-[#4A4A35] text-white text-[10px] font-bold px-3 py-1.5 rounded-full inline-flex items-center gap-1 uppercase tracking-wider">
                                TRENDING <TrendingUp className="w-3 h-3" />
                            </div>
                        </div>
                        {/* Image positioned at bottom */}
                        <div className="absolute bottom-0 right-0 w-full h-[60%] lg:h-[70%]">
                            <img
                                src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80"
                                alt="Jain University Campus"
                                className="w-full h-full object-cover object-top mask-gradient-top"
                            />
                            {/* Gradient fade for smooth blend if needed, though design looks sharp cut or naturally integrated */}
                        </div>
                    </div>

                    {/* Right Column - Stacked Cards - Spans 2 columns */}
                    <div className="lg:col-span-2 flex flex-col gap-6">

                        {/* Top Card */}
                        <div className="flex-1 bg-[#E0F7FA] rounded-[2.5rem] relative overflow-hidden p-8 flex flex-row items-center justify-between group cursor-pointer min-h-[200px]">
                            <div className="relative z-10 max-w-[50%]">
                                <span className="text-[#F51046] text-xs font-bold tracking-widest uppercase mb-2 block">EXPLORE</span>
                                <h3 className="text-2xl font-bold text-gray-900 leading-tight flex flex-col gap-1 group-hover:translate-x-1 transition-transform">
                                    University <br /> Name <ArrowRight className="w-6 h-6 inline-block" />
                                </h3>
                            </div>
                            <div className="absolute right-0 bottom-0 w-[45%] h-full">
                                <img
                                    src="https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=400&q=80"
                                    alt="University Building"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Bottom Card */}
                        <div className="flex-1 bg-[#E8F5E9] rounded-[2.5rem] relative overflow-hidden p-8 flex flex-row items-center justify-between group cursor-pointer min-h-[200px]">
                            <div className="relative z-10 max-w-[50%]">
                                <span className="text-[#F51046] text-xs font-bold tracking-widest uppercase mb-2 block">EXPLORE</span>
                                <h3 className="text-2xl font-bold text-gray-900 leading-tight flex flex-col gap-1 group-hover:translate-x-1 transition-transform">
                                    University <br /> Name <ArrowRight className="w-6 h-6 inline-block" />
                                </h3>
                            </div>
                            <div className="absolute right-0 bottom-0 w-[45%] h-full">
                                <img
                                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&q=80"
                                    alt="University Building"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}
