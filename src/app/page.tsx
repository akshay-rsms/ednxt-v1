import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Programs } from "@/components/Programs";
import { Features } from "@/components/Features";
import { UnsureDegree } from "@/components/UnsureDegree";
import { UniversityPartners } from "@/components/UniversityPartners";
import { Roadmap } from "@/components/Roadmap";
import { Blogs } from "@/components/Blogs";
import { TransformCareer } from "@/components/TransformCareer";
import { HiringPartners } from "@/components/HiringPartners";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen font-sans bg-white">
      <div className="sticky top-0 z-[1000]">
        <Navbar />
      </div>
      <Hero />
      <Stats />
      <Programs />
      <Features />
      <UnsureDegree />
      <UniversityPartners />
      <Roadmap />
      <Blogs />
      <TransformCareer />
      <HiringPartners />
      <Testimonials />
      <Footer />
    </main>
  );
}
