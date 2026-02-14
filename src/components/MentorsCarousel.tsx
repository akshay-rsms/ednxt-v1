"use client";

import React, { useState, useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
    wrap
} from "framer-motion";
import { ArrowLeft, ArrowRight, TrendingUp, Cpu, Globe, Zap, Award, Briefcase, BarChart, Layers, Target, Rocket } from "lucide-react";

// --- Types ---
interface Profile {
    id: number;
    name: string;
    role: string;
    company: string;
    description: string;
    image: string;
    logoIcon: React.ElementType;
}

// --- Mock Data ---
const profiles: Profile[] = [

    {
        id: 1,
        name: "Simran Anand",
        role: "Chief Marketing Officer",
        company: "BrandScale",
        description: "",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
        logoIcon: TrendingUp
    },
    {
        id: 3,
        name: "Rohan Gupta",
        role: "VP of Engineering",
        company: "NextGen Systems",
        description: "Architecting scalable cloud infrastructures for high-frequency trading and real-time data processing.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
        logoIcon: Layers
    },

    {
        id: 5,
        name: "Vikram Singh",
        role: "Chief Architect",
        company: "CloudMatrix",
        description: "Designing the future of serverless computing. Focused on reducing latency and improving edge AI performance.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
        logoIcon: Globe
    },
    {
        id: 6,
        name: "Ananya Das",
        role: "Product Lead",
        company: "SoftServe",
        description: "Bridging the gap between technical feasibility and user experience. 10+ years in SaaS product management.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
        logoIcon: Zap
    },
    {
        id: 7,
        name: "Karthik Iyer",
        role: "CTO",
        company: "InnovateX",
        description: "Building the tech stack for the next unicorn. Passionate about open source and developer advocacy.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
        logoIcon: Rocket
    },
    {
        id: 8,
        name: "Meera Joshi",
        role: "Sr. Data Scientist",
        company: "DeepLearningAI",
        description: "Turning raw data into actionable business intelligence. Expert in predictive modeling and customer churn analysis.",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400",
        logoIcon: BarChart
    },
    {
        id: 9,
        name: "Sanjay Patel",
        role: "Marketing Director",
        company: "GrowthHack",
        description: "Growth hacker mindset with a focus on organic acquisition. Scaled startup from 0 to 1M users in 18 months.",
        image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=400",
        logoIcon: Target
    },
    {
        id: 10,
        name: "Divya Kapoor",
        role: "AI Ethics Lead",
        company: "FutureLabs",
        description: "Ensuring responsible AI development. Advocating for fairness, transparency, and accountability in algorithms.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
        logoIcon: Award
    }
];

function BrainCircuitIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
            <path d="M9 13a4.5 4.5 0 0 0 3-4" />
            <path d="M6.003 5.125A3 3 0 0 1 19.528 16.32" />
        </svg>
    )
}

// --- Components ---

const ProfileCard = ({ profile }: { profile: Profile }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="relative w-[260px] md:w-[320px] h-[350px] md:h-[420px] rounded-2xl overflow-hidden cursor-pointer bg-white shadow-lg mx-4 flex-shrink-0 border border-gray-100 group"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            initial={{ y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
        >
            {/* Default State Content */}
            <div className="absolute inset-0 flex flex-col h-full bg-white">
                {/* Top Image */}
                <div className="h-[60%] w-full overflow-hidden relative bg-gray-100">
                    <img
                        src={profile.image}
                        alt={profile.name}
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Bottom Content */}
                <div className="h-[40%] p-6 flex flex-col justify-center bg-white relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{profile.name}</h3>
                    <p className="text-[#FF0031] font-bold text-sm tracking-wide mb-3">{profile.company}</p>
                    <p className="text-gray-500 text-sm font-medium">{profile.role}</p>

                    {/* Minimal Logo Badge */}
                    <div className="absolute bottom-6 right-6 opacity-100 transition-opacity">
                        <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center shadow-sm group-hover:bg-white group-hover:shadow-md transition-all">
                            <profile.logoIcon className="w-5 h-5 text-gray-800 group-hover:text-[#FF0031]" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Hover State Overlay */}
            <motion.div
                className="absolute inset-0 bg-[#FF0031] p-8 flex flex-col justify-center items-start text-white"
                initial={{ opacity: 0, y: "100%" }}
                animate={{
                    opacity: isHovered ? 1 : 0,
                    y: isHovered ? "0%" : "100%"
                }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }} // cubic-bezier
            >
                <div className="bg-white/20 p-3 rounded-full mb-6 backdrop-blur-sm">
                    <profile.logoIcon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-2">{profile.name}</h3>
                <p className="text-white/80 font-semibold text-sm mb-6">{profile.role} @ {profile.company}</p>

                <p className="text-white/90 text-sm leading-relaxed mb-8">
                    {profile.description}
                </p>

                <div className="absolute bottom-8 right-8">
                    <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="w-10 h-10 rounded-full bg-white text-[#FF0031] flex items-center justify-center shadow-lg"
                    >
                        <ArrowRight className="w-5 h-5" />
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
};

interface ParallaxProps {
    baseVelocity: number;
    children: React.ReactNode;
    isPaused: boolean;
}

function ParallaxText({ children, baseVelocity = 100, isPaused }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    // Wrap logic: -25% to 0% because we render 4 copies.
    // Movement is continuous, wrapping creates infinite effect.
    const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);

    const directionFactor = useRef<number>(1);

    useAnimationFrame((t, delta) => {
        if (isPaused) return;

        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        // Optional: Velocity effect from scroll (can be removed if not desired)
        // if (velocityFactor.get() < 0) {
        //   directionFactor.current = -1;
        // } else if (velocityFactor.get() > 0) {
        //   directionFactor.current = 1;
        // }
        // moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="parallax overflow-hidden flex flex-nowrap m-0 whitespace-nowrap">
            <motion.div className="scroller flex flex-nowrap" style={{ x }}>
                {children}
                {children}
                {children}
                {children}
            </motion.div>
        </div>
    );
}

export function MentorsCarousel() {
    const [isPaused, setIsPaused] = useState(false);
    const [velocity, setVelocity] = useState(-0.4); // Initial speed

    // Handle Manual Navigation
    const handleNav = (direction: 'left' | 'right') => {
        // Change direction and speed temporarily
        const newVelocity = direction === 'left' ? -10 : 10;
        setVelocity(newVelocity);

        // Reset to normal speed
        setTimeout(() => {
            setVelocity(newVelocity > 0 ? 0.4 : -0.4);
        }, 500);
    };

    return (
        <section id="mentors" className="py-24 bg-gray-50 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 md:px-12 mb-12 flex items-end justify-between">
                <div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Mentors from Top <span className="text-[#FF0031]">AI Companies</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl">
                        Learn directly from experts building the future at NVIDIA, Google, and more.
                    </p>
                </div>

                {/* Navigation Arrows */}
                <div className="hidden md:flex gap-4">
                    <button
                        onMouseDown={() => handleNav('right')} // Moves content right (Scroll Left)
                        className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white hover:border-[#FF0031] hover:text-[#FF0031] hover:shadow-lg transition-all"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <button
                        onMouseDown={() => handleNav('left')} // Moves content left (Scroll Right)
                        className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white hover:border-[#FF0031] hover:text-[#FF0031] hover:shadow-lg transition-all"
                    >
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div
                className="relative w-full"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Gradient Masks for Premium Feel */}
                <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

                {/* The Marquee */}
                <ParallaxText baseVelocity={velocity} isPaused={isPaused}>
                    {profiles.map((profile, index) => (
                        <ProfileCard key={`${profile.id}-${index}`} profile={profile} />
                    ))}
                </ParallaxText>
            </div>

            {/* Mobile Hint */}
            <div className="md:hidden text-center text-sm text-gray-400 font-medium mt-8">
                Swipe to explore
            </div>
        </section>
    );
}
