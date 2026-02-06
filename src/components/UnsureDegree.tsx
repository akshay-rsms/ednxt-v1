import { ArrowRight } from "lucide-react";

export function UnsureDegree() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 font-sans">
                <div className="bg-[#2B1D10] rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row relative min-h-[500px]">

                    {/* Left Content */}
                    <div className="w-full md:w-1/2 p-12 md:p-16 flex flex-col justify-center items-start text-left relative z-10">
                        <h2 className="text-white font-bold mb-6 leading-[1.14] tracking-[-0.05em]" style={{ fontSize: '49.97px', fontFamily: 'Inter, sans-serif' }}>
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
                    <div className="w-full md:w-1/2 relative flex items-center justify-center overflow-hidden">
                        <img
                            src="/whichprograms.svg"
                            alt="Unsure which degree is right for you"
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
