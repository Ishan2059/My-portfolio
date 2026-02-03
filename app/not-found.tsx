"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" as const },
        },
    };

    return (
        <div className="relative flex flex-col min-h-screen bg-white dark:bg-black">
            <div className="flex-grow flex items-center justify-center px-6 py-24">
                <motion.div
                    className="max-w-2xl w-full text-center"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {/* 404 Number */}
                    <motion.div variants={itemVariants} className="mb-8">
                        <h1 className="text-9xl md:text-[150px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 dark:from-purple-400 dark:via-pink-400 dark:to-indigo-400 leading-none">
                            404
                        </h1>
                    </motion.div>

                    {/* Heading */}
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4"
                    >
                        Page Not Found
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        variants={itemVariants}
                        className="text-lg text-zinc-600 dark:text-zinc-400 mb-12 leading-relaxed"
                    >
                        Oops! It looks like you've wandered into uncharted territory. The page you're looking for doesn't exist or has been moved.
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center"
                    >
                        <Link href="/">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 text-base font-bold text-white transition-all bg-purple-600 rounded-full hover:bg-purple-700 shadow-lg shadow-purple-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 cursor-pointer"
                            >
                                Back to Home
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Decorative Element */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-16 pt-12 border-t border-zinc-200 dark:border-zinc-800"
                    >
                        <p className="text-sm text-zinc-500 dark:text-zinc-500">
                            Error Code: 404 | Page Not Found
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
