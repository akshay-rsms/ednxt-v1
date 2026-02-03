"use client";
import { Facebook, Search, ShoppingBag, Utensils, Monitor } from "lucide-react";

export function HiringPartners() {
    const companies = [
        { name: "Flipkart", color: "text-[#2874F0]", icon: ShoppingBag },
        { name: "Zomato", color: "text-[#CB202D]", icon: Utensils },
        { name: "Zoho", color: "text-[#009688]", icon: Monitor }, // Approximate Teal
        { name: "CocaCola", color: "text-[#F40009]", icon: null }, // Text only
        { name: "Meta", color: "text-[#0668E1]", icon: Facebook },
        { name: "Google", color: "text-[#EA4335]", icon: Search },
        { name: "Flipkart", color: "text-[#2874F0]", icon: ShoppingBag },
        { name: "Zomato", color: "text-[#CB202D]", icon: Utensils },
    ];

    const companiesRow2 = [
        { name: "Google", color: "text-[#EA4335]", icon: Search },
        { name: "Meta", color: "text-[#0668E1]", icon: Facebook },
        { name: "CocaCola", color: "text-[#F40009]", icon: null },
        { name: "Zoho", color: "text-[#009688]", icon: Monitor },
        { name: "Zomato", color: "text-[#CB202D]", icon: Utensils },
        { name: "Flipkart", color: "text-[#2874F0]", icon: ShoppingBag },
        { name: "Google", color: "text-[#EA4335]", icon: Search },
    ]

    const companiesRow3 = [
        { name: "Zoho", color: "text-[#009688]", icon: Monitor },
        { name: "CocaCola", color: "text-[#F40009]", icon: null },
        { name: "Flipkart", color: "text-[#2874F0]", icon: ShoppingBag },
        { name: "Zomato", color: "text-[#CB202D]", icon: Utensils },
        { name: "Meta", color: "text-[#0668E1]", icon: Facebook },
        { name: "Google", color: "text-[#EA4335]", icon: Search },
        { name: "Zoho", color: "text-[#009688]", icon: Monitor },
    ];


    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-6 font-sans mb-12 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Get Placed at <span className="text-[#F51046]">Leading Companies</span>
                </h2>
            </div>

            <div className="flex flex-col gap-6 relative">
                {/* Gradient Masks */}
                <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

                {/* Row 1 */}
                <div className="flex gap-6 animate-marquee whitespace-nowrap">
                    {[...companies, ...companies].map((company, idx) => (
                        <div key={idx} className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-8 py-4 bg-white shadow-sm min-w-[180px] justify-center hover:border-red-200 transition-colors">
                            {company.icon && <company.icon className={`w-5 h-5 ${company.color}`} />}
                            <span className={`text-xl font-bold ${company.color} font-sans`}>{company.name}</span>
                        </div>
                    ))}
                </div>

                {/* Row 2 (Reverse or Offset) */}
                <div className="flex gap-6 animate-marquee-reverse whitespace-nowrap pl-20">
                    {[...companiesRow2, ...companiesRow2].map((company, idx) => (
                        <div key={idx} className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-8 py-4 bg-white shadow-sm min-w-[180px] justify-center hover:border-red-200 transition-colors">
                            {company.icon && <company.icon className={`w-5 h-5 ${company.color}`} />}
                            <span className={`text-xl font-bold ${company.color} font-sans`}>{company.name}</span>
                        </div>
                    ))}
                </div>

                {/* Row 3 */}
                <div className="flex gap-6 animate-marquee whitespace-nowrap">
                    {[...companiesRow3, ...companiesRow3].map((company, idx) => (
                        <div key={idx} className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-8 py-4 bg-white shadow-sm min-w-[180px] justify-center hover:border-red-200 transition-colors">
                            {company.icon && <company.icon className={`w-5 h-5 ${company.color}`} />}
                            <span className={`text-xl font-bold ${company.color} font-sans`}>{company.name}</span>
                        </div>
                    ))}
                </div>

            </div>

            <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }
      `}</style>
        </section>
    );
}
