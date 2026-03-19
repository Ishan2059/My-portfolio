"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const navItems = ["About", "Projects", "Case Studies", "Design System", "Contact"];

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
      className="fixed w-full z-50 bg-white dark:bg-black"
    >
      {/* Curved top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-red-500 to-red-500 rounded-b-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16">
        <div className="flex items-center justify-between h-16 pt-4">
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/"
              onClick={(e) => scrollToSection(e, "hero")}
              className="text-lg font-bold tracking-tight text-foreground"
            >
              Portfolio
            </Link>
          </motion.div>

          <div className="flex items-center gap-6">
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-8">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={(e) => scrollToSection(e, item)}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    whileHover={{ y: -2 }}
                    className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
              >
                <ThemeToggle />
              </motion.div>

              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="md:hidden p-2 text-foreground"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X size={24} />
                ) : (
                  <Menu size={24} />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden pb-4 border-t border-zinc-200 dark:border-zinc-800"
            >
              <div className="flex flex-col space-y-2 pt-4">
                {navItems.map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={(e) => scrollToSection(e, item)}
                    variants={itemVariants}
                    className="px-4 py-2 font-medium text-foreground/70 hover:text-foreground transition-colors rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
