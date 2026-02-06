import { ArrowRight, Sparkles } from "lucide-react";

export function TransformCareer() {
    return (
        <section className="bg-black relative overflow-hidden">
            <div className="container mx-auto px-6 font-sans relative z-10">
                <div className="flex flex-col lg:flex-row items-center font-sans min-h-[500px]">

                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 py-20 lg:py-0 pr-0 lg:pr-20">
                        <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-8">
                            Ready to <br />
                            <span className="relative inline-block">
                                Transform
                                <svg className="absolute w-full h-4 -bottom-2 left-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="#FF0031" strokeWidth="4" fill="none" />
                                </svg>
                            </span> <br />
                            Your Career?
                            <Sparkles className="inline-block w-8 h-8 text-[#FF0031] ml-4 mb-4" />
                        </h2>

                        <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
                            Take the first step towards a brighter future. Our education
                            counselors are here to guide you through every step of your journey.
                        </p>

                        <div className="flex items-center gap-4">
                            <button className="bg-[#FF0031] text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wide hover:bg-[#D9002A] transition-colors shadow-lg shadow-red-900/20">
                                View All Programs
                            </button>
                            <button className="bg-transparent border border-gray-600 text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wide hover:bg-white hover:text-black transition-all">
                                Talk to Counsellor
                            </button>
                        </div>
                    </div>

                    {/* Right Image with Slanted Cip */}
                    <div className="w-full lg:w-1/2 h-[500px] lg:h-[600px] relative lg:absolute lg:right-0 lg:top-0">
                        {/* 
                We need a slanted cut styling. 
                Using clip-path allows us to create the angled shape.
                Polygon points: (Top Left indented), (Top Right), (Bottom Right), (Bottom Left indented more or less) 
             */}
                        <div className="w-full h-full relative" style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)" }}>
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                                alt="Professional Woman Working"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent lg:hidden"></div>
                        </div>

                        {/* Mobile-only gradient overlay to make text readable if it overlaps, though standard layout puts text above on mobile */}
                    </div>

                </div>
            </div>
        </section>
    );
}
