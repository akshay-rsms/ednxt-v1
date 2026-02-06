import { Check } from "lucide-react";

export function Benefits() {
    const benefits = [
        {
            title: "Flexible Learning",
            description: "Study at your own pace with 24/7 access to course materials",
        },
        {
            title: "Faster Career Growth",
            description: "Working professionals see 2x faster career progression with online degrees",
        },
        {
            title: "Career Transitions",
            description: "Switch fields seamlessly with industry-relevant certifications",
        },
        {
            title: "Real Results",
            description: "Students report avg. 40% salary hike after program completion",
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 font-sans">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-start">
                            {/* Icon Container with Glow */}
                            <div className="relative mb-6">
                                <div className="absolute inset-0 bg-red-400 blur-xl opacity-40 rounded-full scale-150"></div>
                                <div className="w-12 h-12 bg-[#FF0031] rounded-full flex items-center justify-center relative z-10 shadow-lg shadow-red-200">
                                    <Check className="w-6 h-6 text-white" strokeWidth={3} />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">{item.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-[250px]">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
