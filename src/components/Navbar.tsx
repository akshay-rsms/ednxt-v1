import Link from "next/link";
import { SearchIcon } from "./icons";
import { ArrowRight, ChevronDown, BookOpen, Flag } from "lucide-react";
import { blogs } from "@/lib/data/blogs";

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

                        {/* Resources Dropdown */}
                        <div className="group relative">
                            <button className="flex items-center gap-2 px-6 py-2.5  text-sm font-bold text-[#FF0031] hover:bg-red-50 transition-colors">
                                RESOURCES <ChevronDown className="w-4 h-4 text-[#FF0031] group-hover:rotate-180 transition-transform duration-300" />
                            </button>

                            {/* Dropdown Menu */}
                            <div className="absolute top-full left-0 mt-2 w-[900px] bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden flex">

                                {/* Left Column: Navigation Links */}
                                <div className="w-1/3 p-8 border-r border-gray-50 bg-white">
                                    <h4 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-6">Resources & Company</h4>
                                    <div className="space-y-6">
                                        <Link href="#" className="flex gap-4 group/item hover:bg-gray-50 p-3 -mx-3 rounded-lg transition-colors">
                                            <BookOpen className="w-6 h-6 text-gray-600 group-hover/item:text-[#FF0031] mt-1" />
                                            <div>
                                                <h5 className="font-bold text-gray-900 group-hover/item:text-[#FF0031]">Blogs & Insights</h5>
                                                <p className="text-sm text-gray-500 mt-1">Latest news, updates, & info from our expert team</p>
                                            </div>
                                        </Link>

                                        <Link href="#" className="flex gap-4 group/item hover:bg-gray-50 p-3 -mx-3 rounded-lg transition-colors">
                                            <Flag className="w-6 h-6 text-gray-600 group-hover/item:text-[#FF0031] mt-1" />
                                            <div>
                                                <h5 className="font-bold text-gray-900 group-hover/item:text-[#FF0031]">About Us</h5>
                                                <p className="text-sm text-gray-500 mt-1">Learn more about our story, our mission and offerings</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                                {/* Right Column: Featured Blogs */}
                                <div className="w-2/3 p-8 bg-gray-50">
                                    <div className="flex items-center justify-between mb-6">
                                        <h4 className="text-gray-500 text-sm font-bold">Featured from Blog</h4>
                                        <Link href="#" className="text-sm font-bold text-gray-900 flex items-center gap-1 hover:text-[#FF0031] transition-colors">
                                            All Blogs <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        {blogs.slice(0, 2).map((blog) => (
                                            <Link href="#" key={blog.id} className="group/blog block">
                                                <div className="aspect-video rounded-lg overflow-hidden mb-3 relative">
                                                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover/blog:scale-105 transition-transform duration-500" />
                                                </div>
                                                <h5 className="font-bold text-gray-900 leading-tight mb-2 group-hover/blog:text-[#FF0031] transition-colors line-clamp-2">
                                                    {blog.title}
                                                </h5>
                                                <span className="text-[#FF0031] text-xs font-bold underline decoration-transparent group-hover/blog:decoration-[#FF0031] transition-all">Read more</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

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
