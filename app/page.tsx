"use client";

import Hero from "./components/Hero";
import About from "./components/About";
import CaseStudies from "./components/CaseStudies";
import DesignSystem from "./components/DesignSystem";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MinimalistNavbar from "./components/MinimalistNavbar";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-white dark:bg-black font-sans selection:bg-foreground selection:text-background">
      {/* Minimalist Navbar */}
      <MinimalistNavbar />
      
      {/* Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <main className="flex-grow">
          <Hero />
          <About />
          <CaseStudies />
          <DesignSystem />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
