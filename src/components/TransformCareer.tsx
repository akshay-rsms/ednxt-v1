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
                    <div className="w-full px-0 lg:w-1/2 lg:px-32 relative z-10">
                        <h2 className="text-[32px] leading-[1.2] lg:text-6xl lg:leading-tight font-bold mb-0 tracking-tight text-left">
                            Ready to <br />
                            <span className="relative inline-block">
                                Transform
                                <svg className="absolute w-full h-3 -bottom-1 left-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="#FF0031" strokeWidth="4" fill="none" />
                                </svg>
                            </span> <br />
                            Your Career?
                            <Sparkles className="inline-block w-8 h-8 text-[#FF0031] ml-2 -mt-2 lg:-mt-8 lg:ml-4 lg:mb-4 align-top" />
                        </h2>

                        <p className="text-[16px] text-gray-400 mt-3 mb-6 lg:text-gray-300 lg:text-lg lg:mb-10 lg:mt-0 max-w-lg lg:mx-0 leading-relaxed font-light text-left">
                            Take the first step towards a brighter future. Our education
                            counselors are here to guide you through every step of your journey.
                        </p>

                        <div className="flex flex-col w-full gap-3 lg:flex-row lg:w-auto lg:gap-4 lg:justify-start lg:mt-6">
                            <button className="bg-[#FF0031] text-white w-full lg:w-auto px-5 py-3.5 rounded-full font-bold text-sm tracking-wide hover:bg-[#D9002A] transition-colors shadow-lg shadow-red-900/20 whitespace-nowrap">
                                View All Programs
                            </button>
                            <button className="bg-transparent border border-white/40 text-white w-full lg:w-auto px-5 py-3.5 rounded-full font-bold text-sm tracking-wide hover:bg-white hover:text-black transition-all whitespace-nowrap">
                                Talk to Counsellor
                            </button>
                        </div>
                    </div>

                    {/* Right Image - Mobile Strict Layout */}
                    <div className="w-full lg:hidden relative z-10 mt-6">
                        <img
                            src="/readytotransform.svg"
                            alt="Professional Woman Working"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                </div>
            </div>

            {/* Right Image - Desktop Precise Positioning */}
            {/* Right Image - Desktop Precise Positioning within Container */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none">
                <div className="container mx-auto px-6 h-full relative">
                    <div
                        className="absolute top-0 right-6 w-[556px] h-[578px] z-20 pointer-events-auto"
                        style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)" }}
                    >
                        <img
                            src="/readytotransform.svg"
                            alt="Professional Woman Working"
                            className="w-full h-full object-fill"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
