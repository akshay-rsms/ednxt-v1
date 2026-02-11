import { ArrowRight } from "lucide-react";

export function UnsureDegree() {
    return (
        <section className="py-12 md:py-20 bg-white">
            <div className="container mx-auto px-6 font-sans">
                <div className="bg-[#2B1D10] rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row relative min-h-[400px] md:min-h-[500px]">

                    {/* Left Content */}
                    <div className="w-full md:w-1/2 p-8 md:p-20 md:px-36 flex flex-col justify-center items-start text-left relative z-10">
                        <h2 className="text-white font-bold mb-6 leading-[1.14] tracking-[-0.05em] text-3xl md:text-[49.97px] font-sans">
                            Unsure which <br />
                            <span className="relative inline-block">
                                degree
                                <svg className="absolute w-full h-3 -bottom-1 left-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="#FF0031" strokeWidth="3" fill="none" />
                                </svg>
                            </span> <br />
                            <span className="relative inline-block">
                                is right
                                <svg className="absolute w-full h-3 -bottom-1 left-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="#FF0031" strokeWidth="3" fill="none" />
                                </svg>
                            </span> for you?
                        </h2>
                        <p className="text-gray-300 text-base md:text-lg mb-8 md:mb-10 max-w-md">
                            Talk to our admissions counselor and join the best degree that you deserve
                        </p>
                        <button className="bg-white text-[#FF0031] px-8 py-3 rounded-full font-bold flex items-center gap-2 w-fit hover:bg-gray-100 transition-colors shadow-lg">
                            Explore <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Right Image Section */}
                    <div className="w-full md:w-1/2 relative flex items-center justify-center overflow-visible">
                        <div className="relative w-full h-full">
                            <img
                                src="/whichprograms.svg"
                                alt="Unsure which degree is right for you"
                                className="w-full h-full object-cover"
                            />

                            {/* Floating Text Bubbles */}
                            <img
                                src="/howtochoose.svg"
                                alt="How to choose?"
                                className="absolute top-[25%] left-[15%] w-[28%] md:w-[25%] animate-bounce [animation-duration:3s]"
                            />
                            <img
                                src="/whichcourse.svg"
                                alt="Which course?"
                                className="absolute top-[20%] right-[10%] w-[28%] md:w-[25%] animate-bounce [animation-duration:4s]"
                            />
                            <img
                                src="/whatbudget.svg"
                                alt="What budget?"
                                className="absolute top-[45%] right-[5%] w-[28%] md:w-[25%] animate-bounce [animation-duration:3.5s]"
                            />
                            <img
                                src="/whentostart.svg"
                                alt="When to start?"
                                className="absolute bottom-[20%] left-[10%] w-[28%] md:w-[25%] animate-bounce [animation-duration:4.5s]"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
