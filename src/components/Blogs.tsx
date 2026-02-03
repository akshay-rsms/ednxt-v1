import { ArrowRight } from "lucide-react";

export function Blogs() {
    const blogs = [
        {
            category: "TOP 10 UNIVERSITIES IN INDIA",
            title: "How to choose the BEST university in 2026",
            readTime: "3 minute read",
            comments: "35 comments",
            image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80",
        },
        {
            category: "TOP 10 UNIVERSITIES IN INDIA",
            title: "How to choose the BEST university in 2026",
            readTime: "3 minute read",
            comments: "35 comments",
            image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80",
        },
        {
            category: "TOP 10 UNIVERSITIES IN INDIA",
            title: "How to choose the BEST university in 2026",
            readTime: "3 minute read",
            comments: "35 comments",
            image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80",
        },
        {
            category: "TOP 10 UNIVERSITIES IN INDIA",
            title: "How to choose the BEST university in 2026",
            readTime: "3 minute read",
            comments: "35 comments",
            image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80",
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 font-sans">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#333] uppercase leading-tight">
                        READ OUR <br />
                        <span className="text-[#F51046]">LATEST BLOGS</span>
                    </h2>
                    <button className="bg-[#F51046] text-white px-8 py-3 rounded-lg font-bold text-sm tracking-wide flex items-center gap-2 hover:bg-red-600 transition-colors shadow-lg shadow-red-100">
                        VIEW ALL <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {blogs.map((blog, idx) => (
                        <div key={idx} className="bg-white rounded-[1.5rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group cursor-pointer">

                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-blue-500/10 z-10 mix-blend-multiply group-hover:bg-transparent transition-colors"></div>
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Overlay Text */}
                                <div className="absolute top-8 left-0 w-full text-center z-20 px-4">
                                    <span className="text-white text-[10px] font-bold tracking-widest uppercase bg-black/20 backdrop-blur-sm px-2 py-1 rounded">
                                        {blog.category.split("IN INDIA")[0]} <br /> IN INDIA
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 leading-tight mb-4 group-hover:text-[#F51046] transition-colors">
                                    {blog.title}
                                </h3>
                                <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
                                    <span>{blog.readTime}</span>
                                    <span>•</span>
                                    <span>{blog.comments}</span>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
