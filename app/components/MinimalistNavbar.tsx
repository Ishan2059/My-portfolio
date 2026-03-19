"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

// Helper component for navigation links
const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-xs font-medium tracking-widest text-foreground/60 transition-colors hover:text-foreground uppercase"
  >
    {children}
  </a>
);

export default function MinimalistNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    
    // If it's Case Studies, navigate to the case studies page
    if (id.toLowerCase() === "case-studies") {
      window.location.href = "/case-studies";
      return;
    }
    
    // Check if we're on the home page
    if (window.location.pathname !== "/") {
      // Navigate to home page with hash
      window.location.href = `/#${id.toLowerCase().replace(/\s+/g, '-')}`;
      return;
    }
    
    // Convert to section ID format
    const sectionId = id.toLowerCase().replace(/\s+/g, '-');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'HOME', href: '#', id: 'hero' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'PROJECTS', href: '#projects', id: 'projects' },
    { label: 'CASE STUDIES', href: '/case-studies', id: 'case-studies' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0, y: -20 },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed w-full z-[100] transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 shadow-sm" 
          : "bg-transparent"
      }`}
    >
      {/* Header */}
      <header className="z-30 flex w-full max-w-7xl mx-auto items-center justify-between py-4 px-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg font-bold tracking-wider"
        >
          <Link
            href="/"
            onClick={(e) => scrollToSection(e, "hero")}
            className="text-foreground"
          >
            Ishan.
          </Link>
        </motion.div>

        <div className="hidden items-center space-x-6 md:flex">
          {navLinks.map((link) => (
            <NavLink 
              key={link.label} 
              href={link.href}
              onClick={(e) => scrollToSection(e, link.id)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex flex-col space-y-1.5 md:hidden"
            aria-label="Open menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-foreground" />
            ) : (
              <>
                <span className="block h-0.5 w-6 bg-foreground"></span>
                <span className="block h-0.5 w-6 bg-foreground"></span>
                <span className="block h-0.5 w-5 bg-foreground"></span>
              </>
            )}
          </motion.button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden pb-4 border-t border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-black/95 backdrop-blur-md"
          >
            <div className="flex flex-col space-y-2 pt-4 px-16">
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.id)}
                  variants={itemVariants}
                  className="px-4 py-2 font-medium text-foreground/70 hover:text-foreground transition-colors rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 uppercase text-xs tracking-widest"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}