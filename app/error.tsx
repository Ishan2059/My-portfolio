"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, AlertCircle } from "lucide-react";
import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

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
                    {/* Error Icon */}
                    <motion.div variants={itemVariants} className="mb-8 flex justify-center">
                        <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                            <AlertCircle className="w-10 h-10 text-red-600 dark:text-red-400" />
                        </div>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4"
                    >
                        Something Went Wrong
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        variants={itemVariants}
                        className="text-lg text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed"
                    >
                        We encountered an unexpected error. Don't worry, our team has been notified and we're working on a fix.
                    </motion.p>

                    {/* Error Details */}
                    {error.message && (
                        <motion.div
                            variants={itemVariants}
                            className="mb-8 p-4 bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800"
                        >
                            <p className="text-sm text-zinc-600 dark:text-zinc-400 font-mono break-words">
                                {error.message}
                            </p>
                        </motion.div>
                    )}

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
                            Error ID: {error.digest || "unknown"}
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
