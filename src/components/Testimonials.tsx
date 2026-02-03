"use client";
import { ArrowRight, Star } from "lucide-react";

export function Testimonials() {
    const testimonials = [
        {
            type: "image-top",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80",
            content: "Balancing work and study was tough, but the support team here made it possible.",
            name: "Meera Patel",
            role: "MBA Graduate, Founder of StartupX",
            rating: 5,
        },
        {
            type: "image-full",
            image: "https://images.unsplash.com/photo-1627556592933-ffe99c1cd9eb?w=600&q=80",
            content: "",
            name: "Meera Patel",
            role: "MBA Graduate, Founder of StartupX",
            rating: 5,
        },
        {
            type: "image-top-text",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
            content: "Choosing to pursue my MBA in Online Manipal at MUJ was an easy choice for me because I had also completed my BBA from here.",
            name: "Meera Patel",
            role: "MBA Batch - JAIN Online",
            rating: 5,
        },
        {
            type: "text-only",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
            content: "The recorded lectures were legitimate life-savers! I recall an incident 4 years ago when I started BBA, I was really nervous.",
            name: "Meera Patel",
            role: "MBA Graduate, Founder of StartupX",
            rating: 5,
        },
        {
            type: "image-full",
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80",
            content: "",
            name: "Meera Patel",
            role: "MBA Graduate, Founder of StartupX",
            rating: 5,
        },
    ];

    return (
        <section className="py-20 bg-white relative overflow-hidden">

            {/* Background Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                <span className="text-[15rem] md:text-[20rem] font-bold text-red-50/50 whitespace-nowrap opacity-60">
                    5000+ reviews
                </span>
            </div>

            <div className="container mx-auto px-6 font-sans relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
                        Hear from our <span className="relative inline-block">
                            learners
                            <svg className="absolute w-full h-3 -bottom-1 left-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="#F51046" strokeWidth="4" fill="none" />
                            </svg>
                        </span>
                    </h2>
                    <button className="bg-[#F51046] text-white px-8 py-4 rounded-full font-bold tracking-wide flex items-center gap-2 hover:bg-red-600 transition-colors shadow-lg shadow-red-200 uppercase text-sm">
                        All Success Stories <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                {/* Scrollable Container */}
                <div className="flex gap-6 overflow-x-auto pb-12 hide-scrollbar snap-x">
                    {testimonials.map((card, idx) => (
                        <div key={idx} className="min-w-[300px] md:min-w-[350px] bg-white rounded-[2rem] border border-red-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 snap-center flex flex-col">

                            {/* Render based on type */}
                            {card.type === 'image-top' && (
                                <>
                                    <div className="h-48 overflow-hidden">
                                        <img src={card.image} alt={card.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="p-8 flex flex-col flex-1 justify-between">
                                        <p className="text-gray-600 mb-6 leading-relaxed">"{card.content}"</p>
                                        <div>
                                            <h4 className="font-bold text-lg text-gray-900">{card.name}</h4>
                                            <p className="text-xs text-gray-500 mb-2">{card.role}</p>
                                            <div className="flex gap-1">
                                                {[...Array(card.rating)].map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {card.type === 'image-full' && (
                                <>
                                    <div className="h-[300px] overflow-hidden">
                                        <img src={card.image} alt={card.name} className="w-full h-full object-cover object-top" />
                                    </div>
                                    <div className="p-8">
                                        <h4 className="font-bold text-lg text-gray-900">{card.name}</h4>
                                        <p className="text-xs text-gray-500 mb-2">{card.role}</p>
                                        <div className="flex gap-1">
                                            {[...Array(card.rating)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}

                            {card.type === 'image-top-text' && (
                                <>
                                    <div className="h-48 overflow-hidden">
                                        <img src={card.image} alt={card.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="p-8 flex flex-col flex-1">
                                        <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-1">{card.content}</p>
                                        <div className="border-t border-gray-100 pt-4">
                                            <h4 className="font-bold text-lg text-gray-900">{card.name}</h4>
                                            <p className="text-xs text-gray-500 mb-2">{card.role}</p>
                                        </div>
                                    </div>
                                </>
                            )}

                            {card.type === 'text-only' && (
                                <div className="p-8 flex flex-col h-full justify-between">
                                    <p className="text-gray-700 text-lg italic mb-8 leading-relaxed">
                                        "{card.content}"
                                    </p>
                                    <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                                        <img src={card.image} alt={card.name} className="w-12 h-12 rounded-full object-cover" />
                                        <div>
                                            <h4 className="font-bold text-lg text-gray-900">{card.name}</h4>
                                            <p className="text-xs text-gray-500 mb-1">{card.role}</p>
                                            <div className="flex gap-1">
                                                {[...Array(card.rating)].map((_, i) => (
                                                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    ))}
                </div>

            </div>
            <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </section>
    );
}
