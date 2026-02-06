import { GraduationCap, Book, TrendingUp } from "lucide-react";

export function Stats() {
    return (
        <section className="py-12 bg-white relative z-20 -mt-10">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* Card 1: Active Learners - Red Border */}
                    <div className="bg-white rounded-[2rem] p-6 border border-[#FF0031] shadow-sm flex items-center justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
                        <div className="relative z-10">
                            <h3 className="text-4xl font-bold text-gray-900 mb-1">50K+</h3>
                            <p className="text-gray-500 text-sm font-medium">Active Learners</p>
                        </div>
                        {/* Icon Design */}
                        <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center relative translate-x-2">
                            <div className="absolute inset-0 bg-red-100 blur-xl opacity-50 rounded-full"></div>
                            <GraduationCap className="w-8 h-8 text-[#FF0031] fill-[#FF0031]" />
                        </div>
                    </div>

                    {/* Card 2: Courses - Light Border */}
                    <div className="bg-white rounded-[2rem] p-6 border border-red-50 shadow-sm flex items-center justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
                        <div className="relative z-10">
                            <h3 className="text-4xl font-bold text-gray-900 mb-1">200+</h3>
                            <p className="text-gray-500 text-sm font-medium">Courses</p>
                        </div>
                        <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center relative translate-x-2">
                            <div className="absolute inset-0 bg-red-100 blur-xl opacity-50 rounded-full"></div>
                            <Book className="w-7 h-7 text-[#FF0031] fill-[#FF0031]" />
                        </div>
                    </div>

                    {/* Card 3: Success Rate - Graph Background */}
                    <div className="bg-white rounded-[2rem] p-6 border border-red-50 shadow-sm flex flex-col justify-center relative overflow-hidden group hover:shadow-md transition-shadow min-h-[110px]">
                        <div className="relative z-10">
                            <h3 className="text-4xl font-bold text-gray-900 mb-1">95%</h3>
                            <p className="text-gray-500 text-sm font-medium">Success Rate</p>
                        </div>
                        {/* Graph Background Graphic */}
                        <div className="absolute right-0 bottom-0 w-32 h-full opacity-30 pointer-events-none">
                            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-red-100">
                                <path d="M0,100 L20,80 L40,90 L70,50 L100,20 V100 Z" fill="url(#gradient-graph)" />
                                <defs>
                                    <linearGradient id="gradient-graph" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#FF0031" stopOpacity="0.2" />
                                        <stop offset="100%" stopColor="#FFF" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            {/* Arrow */}
                            <svg className="absolute top-4 right-4 w-6 h-6 text-red-200" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M5 17.59L15.59 7H9V5H19V15H17V8.41L6.41 19L5 17.59Z" />
                            </svg>
                        </div>
                    </div>

                    {/* Card 4: UGC - Badge */}
                    <div className="bg-white rounded-[2rem] p-6 border border-red-50 shadow-sm flex items-center gap-4 relative overflow-hidden group hover:shadow-md transition-shadow">
                        {/* UGC Logo Placeholder */}
                        <div className="w-14 shrink-0 flex items-center justify-center">
                            {/* Approximation of the UGC logo */}
                            <div className="w-12 h-12 relative flex items-center justify-center border-2 border-red-800 rounded-full p-1">
                                <div className="w-full h-full border border-red-800 rounded-full flex items-center justify-center bg-red-50">
                                    <div className="w-2 h-2 bg-red-800 rotate-45"></div>
                                </div>
                                <span className="absolute -bottom-2 text-[6px] font-bold bg-white px-1 text-red-800">ज्ञान-विज्ञान</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-0">UGC</h3>
                            <p className="text-gray-500 text-sm font-medium">Entitled Body</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
