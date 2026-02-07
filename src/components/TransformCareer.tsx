import { ArrowRight, Sparkles } from "lucide-react";

export function TransformCareer() {
    return (
        <section className="relative overflow-hidden min-h-[600px] flex items-center pt-8 lg:pt-0">
            {/* Background SVG - Full Cover, offset down by 32px relative to FG */}
            <div className="absolute inset-x-0 top-[32px] z-0 h-[510px]">
                <img
                    src="/readytotransformbg.svg"
                    alt="Background Pattern"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="container mx-auto px-6 py-12 font-sans relative z-10 text-white">
                <div className="flex flex-col lg:flex-row items-center">

                    {/* Left Content */}
                    <div className="w-full px-32 lg:w-1/2 py-10 lg:py-0 pr-0 lg:pr-20 relative z-10">
                        <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
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

                        <p className="text-gray-300 text-lg mb-10 max-w-lg leading-relaxed">
                            Take the first step towards a brighter future. Our education
                            counselors are here to guide you through every step of your journey.
                        </p>

                        <div className="flex items-center gap-4">
                            <button className="bg-[#FF0031] text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wide hover:bg-[#D9002A] transition-colors shadow-lg shadow-red-900/20">
                                View All Programs
                            </button>
                            <button className="bg-transparent border border-white/30 text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wide hover:bg-white hover:text-black transition-all">
                                Talk to Counsellor
                            </button>
                        </div>
                    </div>

                    {/* Right Image - Mobile Only Stacking */}
                    <div className="w-full lg:hidden relative mt-12 z-10">
                        <div className="w-full h-[400px] relative rounded-2xl overflow-hidden">
                            <img
                                src="/readytotransform.svg"
                                alt="Professional Woman Working"
                                className="w-full h-full object-cover"
                            />
                            {/* Mobile gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Right Image - Desktop Precise Positioning */}
            <div
                className="hidden lg:block absolute top-0 right-80  w-[556px] h-[578px] z-20"
                style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)" }}
            >
                <img
                    src="/readytotransform.svg"
                    alt="Professional Woman Working"
                    className="w-full h-full object-fill"
                />
            </div>
        </section>
    );
}
