import { Sparkles, Video, Users, BadgeCheck, Clock } from "lucide-react";

export function Features() {
    const features = [
        {
            icon: Sparkles,
            title: "AI-Powered Learning",
            description: "Personalized study paths and intelligent recommendations tailored to your learning style.",
            bg: "bg-[#FFF5F5]", // Light pink
            iconColor: "text-[#FF4D4D]",
        },
        {
            icon: Video,
            title: "Live Interactive Classes",
            description: "Engage with expert faculty through live sessions, discussions, and real-time Q&A.",
            bg: "bg-[#F2FFFA]", // Light green
            iconColor: "text-[#4CAF50]",
        },
        {
            icon: Users, // Using Users as proxy for Handshake/Collaboration which might not be exact in lucide
            title: "Peer Collaboration",
            description: "Connect with fellow learners worldwide for group projects and knowledge sharing.",
            bg: "bg-[#FFFCF2]", // Light yellow
            iconColor: "text-[#B8860B]",
        },
    ];

    const featuresBottom = [
        {
            icon: BadgeCheck,
            title: "Industry Certifications",
            description: "Personalized study paths and intelligent recommendations tailored to your learning style.",
            bg: "bg-[#F8F0FF]", // Light purple
            iconColor: "text-[#9C27B0]",
        },
        {
            icon: Clock,
            title: "Flexible Schedule",
            description: "Engage with expert faculty through live sessions, discussions, and real-time Q&A.",
            bg: "bg-[#EBF8FF]", // Light blue
            iconColor: "text-[#007BFF]",
        }
    ]

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 font-sans">

                {/* Header */}
                <div className="mb-16">
                    <h4 className="text-[#FF0031] font-bold text-sm tracking-widest uppercase mb-3">WHY CHOOSE US</h4>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Everything You Need to <span className="relative inline-block">
                            Succeed
                            <div className="absolute left-0 bottom-1 w-full h-1 bg-[#FF0031]"></div>
                        </span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl text-lg">
                        Our platform combines cutting-edge technology with proven educational methods
                        to deliver an unmatched learning experience.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="flex flex-col gap-6">

                    {/* Top Row: 3 Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {features.map((feature, idx) => (
                            <div key={idx} className={`${feature.bg} rounded-[2.5rem] p-8 md:p-10 transition-transform hover:-translate-y-1 duration-300`}>
                                <feature.icon className={`w-10 h-10 ${feature.iconColor} mb-6`} strokeWidth={2.5} />
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Row: 2 Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {featuresBottom.map((feature, idx) => (
                            <div key={idx} className={`${feature.bg} rounded-[2.5rem] p-8 md:p-10 transition-transform hover:-translate-y-1 duration-300`}>
                                <feature.icon className={`w-10 h-10 ${feature.iconColor} mb-6`} strokeWidth={2.5} />
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}
