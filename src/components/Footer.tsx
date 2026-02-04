import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#0A0A0A] text-white py-16 font-sans">
            <div className="container mx-auto px-6">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="md:w-1/3">
                        <a href="#" className="flex items-center mb-6">
                            <img src="/logo.svg" alt="EdNxt.ai Logo" className="h-12 w-auto" />
                        </a>

                        {/* Social Placeholders (Gray Circles) */}
                        <div className="flex gap-4">
                            <div className="w-10 h-10 bg-gray-400 rounded-full hover:bg-white transition-colors cursor-pointer"></div>
                            <div className="w-10 h-10 bg-gray-400 rounded-full hover:bg-white transition-colors cursor-pointer"></div>
                            <div className="w-10 h-10 bg-gray-400 rounded-full hover:bg-white transition-colors cursor-pointer"></div>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="flex gap-20 md:pr-20">
                        {/* Company */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-lg font-normal mb-2 text-gray-200">Company</h4>
                            <a href="#" className="text-gray-400 hover:text-[#F51046] transition-colors">About Us</a>
                            <a href="#" className="text-gray-400 hover:text-[#F51046] transition-colors">Reviews</a>
                            <a href="#" className="text-gray-400 hover:text-[#F51046] transition-colors">Resources</a>
                            <a href="#" className="text-gray-400 hover:text-[#F51046] transition-colors">FREE Courses</a>
                        </div>

                        {/* Support */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-lg font-normal mb-2 text-gray-200">Support</h4>
                            <a href="#" className="text-gray-400 hover:text-[#F51046] transition-colors">Contact Us</a>
                            <a href="#" className="text-gray-400 hover:text-[#F51046] transition-colors">Call Us</a>
                            <a href="#" className="text-gray-400 hover:text-[#F51046] transition-colors">Email Us</a>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-gray-500 text-sm">
                        © 2015-2025 EdNxt.ai Education Private Limited. All rights reserved
                    </p>

                    <div className="flex items-center gap-4">
                        <button className="bg-[#F51046] hover:bg-red-600 text-white text-xs font-bold px-6 py-2.5 rounded-full transition-colors">
                            Get a Callback
                        </button>
                        <button className="bg-transparent border border-[#F51046] text-[#F51046] hover:bg-[#F51046] hover:text-white text-xs font-bold px-6 py-2.5 rounded-full transition-colors">
                            Whatsapp Us
                        </button>
                    </div>
                </div>

            </div>
        </footer>
    );
}
