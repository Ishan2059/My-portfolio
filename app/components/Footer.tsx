"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-800">
            <div className="px-4 sm:px-6 md:px-16 py-12 mx-auto max-w-7xl">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center text-xs leading-5 text-zinc-500 dark:text-zinc-400"
                >
                    &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
                </motion.p>
            </div>
        </footer>
    );
}
