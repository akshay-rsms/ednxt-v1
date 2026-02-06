import { ChevronDown, Trophy, Zap, TrendingUp } from "lucide-react";

export function Roadmap() {
    const steps = [
        {
            level: "LEVEL I",
            title: "Start Strong",
            description: "Begin with flexible learning modules designed for working professionals. Access content 24/7.",
            icon: Zap,
        },
        {
            level: "LEVEL II",
            title: "Accelerate Growth",
            description: "Apply new skills in real-time. Our learners report 2x faster career progression during the course.",
            icon: TrendingUp,
        },
        {
            level: "LEVEL III",
            title: "Achieve Mastery",
            description: "Graduate with industry-recognized certifications and secure top-tier placements with 40% avg hikes.",
            icon: Trophy,
        },
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden font-sans">

            {/* Background Ambience */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-100/40 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-red-100/40 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-24">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Why choose <span className="text-[#FF0031]">Online</span> Degree?
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Gain industry-relevant skills, flexible learning, and career growth
                    </p>
                </div>

                {/* Timeline Container */}
                <div className="relative">

                    {/* 
               Connecting Curve Line (CSS/SVG)
               We'll use an SVG to draw a nice wave connecting the 3 points.
            */}
                    <div className="absolute top-12 left-0 w-full hidden md:block">
                        <svg className="w-full h-40" preserveAspectRatio="none">
                            <path
                                d="M 100 20 C 400 20, 400 80, 700 80 S 1000 20, 1300 20"
                                stroke="url(#gradient-line)"
                                strokeWidth="4"
                                fill="none"
                                className="opacity-50"
                            />
                            <defs>
                                <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#E5E7EB" />
                                    <stop offset="50%" stopColor="#FF0031" />
                                    <stop offset="100%" stopColor="#E5E7EB" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                        {steps.map((step, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center group">

                                {/* Level Badge */}
                                <div className="mb-8 relative">
                                    <div className="border border-red-100 bg-white text-[#FF0031] text-xs font-bold tracking-[0.2em] px-4 py-2 rounded uppercase shadow-sm group-hover:bg-[#FF0031] group-hover:text-white transition-colors duration-300">
                                        {step.level}
                                    </div>
                                    {/* Vertical Drop Line */}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 h-12 w-[1px] bg-gradient-to-b from-[#FF0031] to-transparent block md:hidden"></div>
                                    <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-[#FF0031] to-transparent transition-all duration-500 hidden md:block
                                 ${idx === 1 ? 'h-24' : 'h-12'}
                             `}></div>
                                </div>

                                {/* Spacer for Curve Alignment (Desktop only) */}
                                <div className={`hidden md:block 
                            ${idx === 1 ? 'mt-24' : 'mt-12'}
                        `}></div>

                                {/* Card */}
                                <div className="bg-white border border-gray-100 p-8 rounded-2xl w-full hover:border-[#FF0031]/30 transition-all duration-300 relative group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_-10px_rgba(245,16,70,0.15)] shadow-sm">
                                    {/* Diamond Node */}
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#FF0031] rotate-45 border-4 border-white shadow-lg"></div>

                                    <step.icon className="w-10 h-10 text-[#FF0031] mb-4 mx-auto opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform" />

                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                        {step.description}
                                    </p>

                                    <a href="#" className="text-[#FF0031] text-xs font-bold flex items-center justify-center gap-1 hover:gap-2 transition-all">
                                        Learn more <ChevronDown className="w-3 h-3 -rotate-90" />
                                    </a>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
