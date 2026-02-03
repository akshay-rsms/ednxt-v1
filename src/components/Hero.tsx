export function Hero() {
    return (
        <section className="bg-black relative pt-20 pb-0 overflow-hidden min-h-[700px] flex flex-col items-center">

            {/* Radial Background Lines */}
            {/* Using an SVG for precise concentric circles */}
            <div className="absolute inset-0 top-[-10%] flex items-center justify-center pointer-events-none">
                <svg width="1200" height="1200" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-30">
                    <circle cx="500" cy="500" r="150" stroke="white" strokeWidth="0.5" />
                    <circle cx="500" cy="500" r="250" stroke="white" strokeWidth="0.5" />
                    <circle cx="500" cy="500" r="350" stroke="white" strokeWidth="0.5" />
                    <circle cx="500" cy="500" r="450" stroke="white" strokeWidth="0.5" />

                    {/* Faint radial gradient overlay to fade lines at edges */}
                    <defs>
                        <radialGradient id="fade" cx="0.5" cy="0.5" r="0.5">
                            <stop offset="0%" stopColor="black" stopOpacity="0" />
                            <stop offset="80%" stopColor="black" stopOpacity="1" />
                        </radialGradient>
                    </defs>
                    <rect x="0" y="0" width="1000" height="1000" fill="url(#fade)" />
                </svg>
            </div>


            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-4 mt-8">

                {/* Trust Badge */}
                <div className="flex flex-col items-center mb-6">
                    <div className="relative w-16 h-12 flex items-center justify-center">
                        {/* Laurel Wreath SVG approximation */}
                        <svg viewBox="0 0 100 80" className="w-full h-full fill-none stroke-gray-400 stroke-[2] opacity-80">
                            <path d="M10,70 Q5,40 30,20" />
                            <path d="M90,70 Q95,40 70,20" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-[6px] leading-[8px] font-bold text-[#F51046] text-center pt-2">
                            INDIA'S<br />MOST<br />TRUSTED<br /><span className="text-[4px] text-gray-500">CONSULTANCY</span>
                        </div>
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
                    Transform Your Future with <br />
                    AI Enhanced Education
                </h1>

                {/* Buttons */}
                <div className="flex items-center gap-4 mb-20">
                    <button className="px-8 py-3 rounded-full bg-[#F51046] text-white font-bold hover:bg-red-600 transition-colors shadow-lg shadow-red-900/30">
                        Enroll Now
                    </button>
                    <button className="px-8 py-3 rounded-full border border-gray-600 text-white font-medium hover:border-white hover:bg-white/5 transition-colors">
                        Talk to Counsellor
                    </button>
                </div>
            </div>

            {/* Image Gallery Strip */}
            {/* We need a row of images. The center one is prominent. */}
            {/* To match the curve, we can use translateY on the side ones. */}

            <div className="w-full max-w-[1400px] px-4 flex justify-center items-end gap-6 relative z-10 pb-10">

                {/* Far Left */}
                <div className="hidden lg:block w-48 h-64 rounded-[2rem] overflow-hidden opacity-60 translate-y-[-20px] shadow-2xl border-2 border-white/10">
                    <div className="w-full h-full bg-gray-800 relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                        {/* Placeholder */}
                        <div className="w-full h-full bg-[linear-gradient(45deg,#1a1a1a,#333)]" />
                    </div>
                </div>

                {/* Left */}
                <div className="hidden md:block w-64 h-80 rounded-[2.5rem] overflow-hidden translate-y-[-40px] shadow-2xl border-4 border-[#1f1f1f] relative group">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                    <div className="w-full h-full bg-gray-700 bg-[url('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&q=80')] bg-cover bg-center" />
                </div>

                {/* CENTER - HERO */}
                <div className="w-full md:w-[500px] h-[350px] md:h-[400px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-[#222] relative z-20 hover:scale-[1.02] transition-transform duration-500">
                    <div className="w-full h-full bg-gray-600 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80')] bg-cover bg-center" />
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>

                {/* Right */}
                <div className="hidden md:block w-64 h-80 rounded-[2.5rem] overflow-hidden translate-y-[-40px] shadow-2xl border-4 border-[#1f1f1f] group relative">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                    <div className="w-full h-full bg-blue-900 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&q=80')] bg-cover bg-center" />
                </div>

                {/* Far Right */}
                <div className="hidden lg:block w-48 h-64 rounded-[2rem] overflow-hidden opacity-60 translate-y-[-20px] shadow-2xl border-2 border-white/10">
                    <div className="w-full h-full bg-gray-800 relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=500&q=80')] bg-cover bg-center" />
                    </div>
                </div>

            </div>

        </section>
    );
}
