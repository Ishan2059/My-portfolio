"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import CaseStudies from "./components/CaseStudies";
import DesignSystem from "./components/DesignSystem";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { EtheralShadow } from "./components/ui/etheral-shadow";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-white dark:bg-black font-sans selection:bg-purple-500 selection:text-white">
      {/* Fixed Ethereal Shadow Background - Hidden on mobile for performance */}
      <div className="hidden md:block fixed inset-0 z-0 opacity-30 pointer-events-none">
        <EtheralShadow
          animation={{ scale: 40, speed: 30 }}
          noise={{ opacity: 0.2, scale: 0.8 }}
          sizing="fill"
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          <CaseStudies />
          <Projects />
          <DesignSystem />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
