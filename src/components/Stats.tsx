

export function Stats() {
    return (
        <section className="py-12 bg-white relative z-20 -mt-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* Card 1: Active Learners - Red Border */}
                    <div className="w-full h-[129px] bg-white rounded-[30px] p-8 border border-[#FFE7E7] flex items-center justify-between relative overflow-hidden group hover:border-[#FF0031] transition-colors duration-300">
                        <div className="relative z-10">
                            <h3 className="text-[38.04px] font-bold text-[#444444] leading-[1.14] tracking-[-0.05em] font-sans mb-1">50K+</h3>
                            <p className="text-[16.31px] font-normal text-[#727272] leading-[1.49] tracking-[-0.05em] font-sans">Active Learners</p>
                        </div>
                        <img src="/50k+.svg" alt="Active Learners" className="w-16 h-16 object-contain" />
                    </div>

                    {/* Card 2: Courses - Light Border */}
                    <div className="w-full h-[129px] bg-white rounded-[30px] p-8 border border-[#FFE7E7] flex items-center justify-between relative overflow-hidden group hover:border-[#FF0031] transition-colors duration-300">
                        <div className="relative z-10">
                            <h3 className="text-[38.04px] font-bold text-[#444444] leading-[1.14] tracking-[-0.05em] font-sans mb-1">200+</h3>
                            <p className="text-[16.31px] font-normal text-[#727272] leading-[1.49] tracking-[-0.05em] font-sans">Courses</p>
                        </div>
                        <img src="/200+.svg" alt="Courses" className="w-16 h-16 object-contain" />
                    </div>

                    {/* Card 3: Success Rate - Graph Background */}
                    <div className="w-full h-[129px] bg-white rounded-[30px] p-8 border border-[#FFE7E7] flex items-center justify-between relative overflow-hidden group hover:border-[#FF0031] transition-colors duration-300">
                        <div className="relative z-10">
                            <h3 className="text-[38.04px] font-bold text-[#444444] leading-[1.14] tracking-[-0.05em] font-sans mb-1">95%</h3>
                            <p className="text-[16.31px] font-normal text-[#727272] leading-[1.49] tracking-[-0.05em] font-sans">Success Rate</p>
                        </div>
                        <img src="/95%25.svg" alt="Success Rate" className="w-16 h-16 object-contain" />
                    </div>

                    {/* Card 4: UGC - Badge */}
                    <div className="w-full h-[129px] bg-white rounded-[30px] p-8 border border-[#FFE7E7] flex items-center gap-4 relative overflow-hidden group hover:border-[#FF0031] transition-colors duration-300">
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
                            <h3 className="text-[38.04px] font-bold text-[#444444] leading-[1.14] tracking-[-0.05em] font-sans mb-0">UGC</h3>
                            <p className="text-[16.31px] font-normal text-[#727272] leading-[1.49] tracking-[-0.05em] font-sans">Entitled Body</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
