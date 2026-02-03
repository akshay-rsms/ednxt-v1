import { ArrowRight } from "lucide-react";

export function UnsureDegree() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 font-sans">
                <div className="bg-[#2A1C15] rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row relative min-h-[500px]">

                    {/* Left Content */}
                    <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center relative z-10">
                        <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                            Unsure which <br />
                            <span className="relative inline-block">
                                degree
                                <svg className="absolute w-full h-3 -bottom-1 left-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="#F51046" strokeWidth="3" fill="none" />
                                </svg>
                            </span> <br />
                            <span className="relative inline-block">
                                is right
                                <svg className="absolute w-full h-3 -bottom-1 left-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="#F51046" strokeWidth="3" fill="none" />
                                </svg>
                            </span> for you?
                        </h2>
                        <p className="text-gray-300 text-lg mb-10 max-w-md">
                            Talk to our admissions counselor and join the best degree that you deserve
                        </p>
                        <button className="bg-white text-[#F51046] px-8 py-3 rounded-full font-bold flex items-center gap-2 w-fit hover:bg-gray-100 transition-colors shadow-lg">
                            Explore <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Right Image Section */}
                    <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-full">
                        <div className="absolute inset-0">
                            <img
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80"
                                alt="Confused Student"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#2A1C15] via-transparent to-transparent"></div>
                        </div>

                        {/* Floating Bubbles */}
                        <div className="absolute top-10 left-10 bg-white px-4 py-2 rounded-full shadow-lg transform -rotate-6">
                            <span className="text-[#F51046] font-bold italic font-serif">how to choose?</span>
                        </div>
                        <div className="absolute top-20 right-20 bg-white px-4 py-2 rounded-full shadow-lg transform rotate-3">
                            <span className="text-[#F51046] font-bold italic font-serif">which course?</span>
                        </div>
                        <div className="absolute bottom-32 right-32 bg-white px-4 py-2 rounded-full shadow-lg transform -rotate-3">
                            <span className="text-[#F51046] font-bold italic font-serif">what budget?</span>
                        </div>
                        <div className="absolute bottom-10 left-20 bg-white px-4 py-2 rounded-full shadow-lg transform rotate-6">
                            <span className="text-[#F51046] font-bold italic font-serif">when to start?</span>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
