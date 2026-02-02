"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 transition-all duration-300 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
            aria-label="Toggle theme"
        >
            {theme === "dark" ? (
                <Moon className="w-5 h-5 text-purple-500" />
            ) : (
                <Sun className="w-5 h-5 text-amber-500" />
            )}
        </button>
    );
}
