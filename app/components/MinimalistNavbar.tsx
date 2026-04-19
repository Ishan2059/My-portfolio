"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
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

  useEffect(() => {
    // Prevent background scrolling while the drawer is open
    if (!isMobileMenuOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isMobileMenuOpen]);

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
    { label: 'CASE STUDIES', href: '/case-studies', id: 'case-studies' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

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
      <header className="z-30 flex w-full max-w-7xl mx-auto items-center justify-between py-4 px-4 sm:px-8 md:px-16">
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
            className="relative z-[130] md:hidden inline-flex items-center justify-center rounded-lg p-2 bg-white/85 dark:bg-black/40 border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm text-zinc-900 dark:text-zinc-50"
            aria-label="Open menu"
          >
            {isMobileMenuOpen ? (
              <X size={26} className="text-current" strokeWidth={2} />
            ) : (
              <Menu size={26} className="text-current" strokeWidth={2} />
            )}
          </motion.button>
        </div>
      </header>

      {/* Mobile Side Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 z-[110] bg-black/30 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.aside
              className="fixed left-0 top-0 bottom-0 z-[115] w-[280px] max-w-[85vw] bg-white/95 dark:bg-black/95 backdrop-blur-md border-r border-zinc-200 dark:border-zinc-800"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
            >
              <div className="flex items-center justify-between px-4 pt-6 pb-4">
                <div className="text-lg font-bold tracking-wider">
                  <span className="text-foreground">Ishan.</span>
                </div>
              </div>

              <nav className="flex flex-col gap-2 px-4 pb-6">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.id)}
                    variants={itemVariants}
                    className="px-4 py-3 font-medium text-foreground/80 hover:text-foreground transition-colors rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 uppercase text-xs tracking-widest"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}