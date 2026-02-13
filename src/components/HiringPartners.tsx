"use client";
import { Facebook, Search, ShoppingBag, Utensils, Monitor } from "lucide-react";

export function HiringPartners() {
    const companies = [
        { name: "Flipkart", logo: "/flipkart.svg" },
        { name: "Zomato", logo: "/zomato.svg" },
        { name: "Zoho", logo: "/zoho.svg" },
        { name: "CocaCola", logo: "/cococola.svg" },
        { name: "Meta", logo: "/meta.svg" },
        { name: "Google", logo: "/google.svg" },
        { name: "Flipkart", logo: "/flipkart.svg" },
        { name: "Zomato", logo: "/zomato.svg" },
    ];

    const companiesRow2 = [
        { name: "Google", logo: "/google.svg" },
        { name: "Meta", logo: "/meta.svg" },
        { name: "CocaCola", logo: "/cococola.svg" },
        { name: "Zoho", logo: "/zoho.svg" },
        { name: "Zomato", logo: "/zomato.svg" },
        { name: "Flipkart", logo: "/flipkart.svg" },
        { name: "Google", logo: "/google.svg" },
    ]

    const companiesRow3 = [
        { name: "Zoho", logo: "/zoho.svg" },
        { name: "CocaCola", logo: "/cococola.svg" },
        { name: "Flipkart", logo: "/flipkart.svg" },
        { name: "Zomato", logo: "/zomato.svg" },
        { name: "Meta", logo: "/meta.svg" },
        { name: "Google", logo: "/google.svg" },
        { name: "Zoho", logo: "/zoho.svg" },
    ];


    return (
        <section className="py-10 md:py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-6 font-sans mb-6 md:mb-12 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                    Get Placed at <span className="text-[#FF0031]">Leading Companies</span>
                </h2>
            </div>

            <div className="flex flex-col gap-4 md:gap-8 relative">
                {/* Gradient Masks */}
                <div className="hidden md:block absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="hidden md:block absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

                {/* Row 1 */}
                <div className="flex gap-4 md:gap-8 animate-marquee whitespace-nowrap">
                    {[...companies, ...companies].map((company, idx) => (
                        <div key={idx} className="inline-flex items-center justify-center border border-gray-100 rounded-xl px-6 py-3 md:px-12 md:py-6 bg-white shadow-sm min-w-[120px] md:min-w-[200px] hover:border-red-100 hover:shadow-md transition-all">
                            <img src={company.logo} alt={company.name} className="h-5 md:h-8 w-auto object-contain" />
                        </div>
                    ))}
                </div>

                {/* Row 2 (Reverse or Offset) */}
                <div className="flex gap-4 md:gap-8 animate-marquee-reverse whitespace-nowrap pl-20">
                    {[...companiesRow2, ...companiesRow2].map((company, idx) => (
                        <div key={idx} className="inline-flex items-center justify-center border border-gray-100 rounded-xl px-6 py-3 md:px-12 md:py-6 bg-white shadow-sm min-w-[120px] md:min-w-[200px] hover:border-red-100 hover:shadow-md transition-all">
                            <img src={company.logo} alt={company.name} className="h-5 md:h-8 w-auto object-contain" />
                        </div>
                    ))}
                </div>

                {/* Row 3 */}
                <div className="flex gap-4 md:gap-8 animate-marquee whitespace-nowrap">
                    {[...companiesRow3, ...companiesRow3].map((company, idx) => (
                        <div key={idx} className="inline-flex items-center justify-center border border-gray-100 rounded-xl px-6 py-3 md:px-12 md:py-6 bg-white shadow-sm min-w-[120px] md:min-w-[200px] hover:border-red-100 hover:shadow-md transition-all">
                            <img src={company.logo} alt={company.name} className="h-5 md:h-8 w-auto object-contain" />
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
          animation: marquee 20s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 20s linear infinite;
        }
      `}</style>
        </section>
    );
}
