"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ThemeChangeOverlay() {
    const [isChanging, setIsChanging] = useState(false);

    useEffect(() => {
        const handleThemeChange = () => {
            setIsChanging(true);
            setTimeout(() => setIsChanging(false), 300);
        };

        // Listen for theme changes
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        mediaQuery.addEventListener("change", handleThemeChange);

        return () => mediaQuery.removeEventListener("change", handleThemeChange);
    }, []);

    return (
        <AnimatePresence>
            {isChanging && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="fixed inset-0 bg-white dark:bg-black pointer-events-none z-50"
                />
            )}
        </AnimatePresence>
    );
}

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ThemeChangeOverlay />
            {children}
        </ThemeProvider>
    );
}
