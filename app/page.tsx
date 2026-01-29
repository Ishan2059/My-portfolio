"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import CaseStudies from "./components/CaseStudies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { EtheralShadow } from "./components/ui/etheral-shadow";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-white dark:bg-black font-sans selection:bg-purple-500 selection:text-white">
      {/* Fixed Ethereal Shadow Background */}
      <div className="fixed inset-0 z-0 opacity-50 pointer-events-none">
        <EtheralShadow
          animation={{ scale: 60, speed: 70 }}
          noise={{ opacity: 0.4, scale: 1.2 }}
          sizing="fill"
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          <Projects />
          <CaseStudies />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
