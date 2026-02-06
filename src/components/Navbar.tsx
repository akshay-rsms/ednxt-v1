import Link from "next/link";
import { SearchIcon } from "./icons";
import { ArrowRight } from "lucide-react";

export function Navbar() {
    return (
        <nav className="w-full bg-white z-50 flex flex-col font-sans">
            {/* Top Main Bar */}
            <div className="w-full px-8 md:px-12 h-20 flex items-center justify-between relative">

                {/* Left Side: Logo & Links */}
                <div className="flex items-center gap-12">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <img src="/logo.svg" alt="EdNxt.ai Logo" className="h-6 md:h-8 w-auto" />
                    </Link>

                    {/* Main Links */}
                    <div className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-gray-800">
                        <Link href="#" className="hover:text-[#FF0031] transition-colors">Programs</Link>
                        <Link href="#" className="hover:text-[#FF0031] transition-colors">Universities</Link>
                        <Link href="#" className="hover:text-[#FF0031] transition-colors">About Us</Link>
                        <Link href="#" className="hover:text-[#FF0031] transition-colors">Reviews</Link>
                    </div>
                </div>

                {/* Center: Search Bar (Absolute Position) */}
                <div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 w-1/3 max-w-sm">
                    <input
                        type="text"
                        placeholder="What do you want to learn?"
                        className="w-full pl-6 pr-10 py-2.5 rounded-full border border-gray-200 bg-white text-sm text-gray-600 focus:outline-none focus:border-[#FF0031] shadow-sm"
                    />
                    <SearchIcon className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>

                {/* Right Side: Action Buttons */}
                <div className="hidden lg:flex items-center gap-4">
                    <button className="px-5 py-2 rounded-full border border-[#FF0031] text-[#FF0031] text-sm font-bold hover:bg-red-50 transition-colors">
                        Talk to Counsellor
                    </button>
                    <button className="px-6 py-2 rounded-full bg-[#FF0031] text-white text-sm font-bold hover:bg-[#D9002A] transition-colors shadow-lg shadow-red-200">
                        Enroll Now
                    </button>
                </div>
            </div>

            {/* Bottom Sub-Bar */}
            <div className="w-full bg-[#FFF5F7] h-10 border-t border-red-50">
                <div className="w-full px-8 md:px-12 h-full flex items-center justify-center gap-8 text-[13px] font-bold text-[#FF0031]">
                    <span className="font-extrabold text-[#FF0031]">Explore</span>

                    <Link href="#" className="flex items-center gap-1 hover:underline">
                        <ArrowRight className="w-3 h-3" /> Under Graduate
                    </Link>
                    <Link href="#" className="flex items-center gap-1 hover:underline">
                        <ArrowRight className="w-3 h-3" /> Post Graduate
                    </Link>
                    <Link href="#" className="flex items-center gap-1 hover:underline">
                        <ArrowRight className="w-3 h-3" /> Certifications
                    </Link>
                </div>
            </div>
        </nav>
    );
}
