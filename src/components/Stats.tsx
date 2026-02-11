

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
                        <img src="/success_graph.svg" alt="Success Rate" className="w-20 h-20 object-contain" />
                    </div>

                    {/* Card 4: UGC - Badge */}
                    <div className="w-full h-[129px] bg-white rounded-[30px] p-8 border border-[#FFE7E7] flex items-center justify-between relative overflow-hidden group hover:border-[#FF0031] transition-colors duration-300">
                        <div>
                            <h3 className="text-[38.04px] font-bold text-[#444444] leading-[1.14] tracking-[-0.05em] font-sans mb-0">UGC</h3>
                            <p className="text-[16.31px] font-normal text-[#727272] leading-[1.49] tracking-[-0.05em] font-sans">Entitled Body</p>
                        </div>
                        <img src="/UGC.svg" alt="UGC" className="w-16 h-16 object-contain" />
                    </div>

                </div>
            </div>
        </section>
    );
}
