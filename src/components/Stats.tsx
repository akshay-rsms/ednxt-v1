

export function Stats() {
    return (
        <section className="py-12 bg-white relative z-20 -mt-10">
            <div className="container mx-auto px-3 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">

                    {/* Card 1: Active Learners - Red Border */}
                    <div className="w-full h-auto md:h-[129px] bg-white rounded-2xl md:rounded-[30px] p-4 md:p-8 border border-[#FF0031] md:border-[#FFE7E7] flex flex-row items-center justify-between relative overflow-hidden group hover:border-[#FF0031] transition-colors duration-300">
                        <div className="relative z-10">
                            <h3 className="text-lg md:text-[38.04px] font-bold text-[#444444] leading-tight tracking-[-0.05em] font-sans mb-0 md:mb-1">50K+</h3>
                            <p className="text-[10px] md:text-[16.31px] font-normal text-[#727272] leading-tight tracking-[-0.05em] font-sans">Active Learners</p>
                        </div>
                        <img src="/50k+.svg" alt="Active Learners" className="w-8 h-8 md:w-16 md:h-16 object-contain" />
                    </div>

                    {/* Card 2: Courses - Light Border */}
                    <div className="w-full h-auto md:h-[129px] bg-white rounded-2xl md:rounded-[30px] p-4 md:p-8 border border-[#FF0031] md:border-[#FFE7E7] flex flex-row items-center justify-between relative overflow-hidden group hover:border-[#FF0031] transition-colors duration-300">
                        <div className="relative z-10">
                            <h3 className="text-lg md:text-[38.04px] font-bold text-[#444444] leading-tight tracking-[-0.05em] font-sans mb-0 md:mb-1">200+</h3>
                            <p className="text-[10px] md:text-[16.31px] font-normal text-[#727272] leading-tight tracking-[-0.05em] font-sans">Courses</p>
                        </div>
                        <img src="/200+.svg" alt="Courses" className="w-8 h-8 md:w-16 md:h-16 object-contain" />
                    </div>

                    {/* Card 3: Success Rate - Graph Background */}
                    <div className="w-full h-auto md:h-[129px] bg-white rounded-2xl md:rounded-[30px] p-4 md:p-8 border border-[#FF0031] md:border-[#FFE7E7] flex flex-row items-center justify-between relative overflow-hidden group hover:border-[#FF0031] transition-colors duration-300">
                        <div className="relative z-10">
                            <h3 className="text-lg md:text-[38.04px] font-bold text-[#444444] leading-tight tracking-[-0.05em] font-sans mb-0 md:mb-1">95%</h3>
                            <p className="text-[10px] md:text-[16.31px] font-normal text-[#727272] leading-tight tracking-[-0.05em] font-sans">Success Rate</p>
                        </div>
                        <img src="/success_graph.svg" alt="Success Rate" className="w-10 h-10 md:w-20 md:h-20 object-contain" />
                    </div>

                    {/* Card 4: UGC - Badge */}
                    <div className="w-full h-auto md:h-[129px] bg-white rounded-2xl md:rounded-[30px] p-4 md:p-8 border border-[#FF0031] md:border-[#FFE7E7] flex flex-row items-center justify-between relative overflow-hidden group hover:border-[#FF0031] transition-colors duration-300">
                        <div>
                            <h3 className="text-lg md:text-[38.04px] font-bold text-[#444444] leading-tight tracking-[-0.05em] font-sans mb-0">UGC</h3>
                            <p className="text-[10px] md:text-[16.31px] font-normal text-[#727272] leading-tight tracking-[-0.05em] font-sans">Entitled Body</p>
                        </div>
                        <img src="/UGC.svg" alt="UGC" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                    </div>

                </div>
            </div>
        </section>
    );
}
