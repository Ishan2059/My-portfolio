"use client";

import { motion } from "framer-motion";
import { Palette } from "lucide-react";

export default function DesignSystem() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
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
        <section id="design-system" className="py-24 bg-white dark:bg-black">
            <div className="px-6 mx-auto max-w-7xl sm:px-12 lg:px-16">
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    {/* Header */}
                    <motion.div variants={itemVariants} className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                                <Palette className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                            </div>
                            <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
                                Design System
                            </h2>
                        </div>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            I'm building a comprehensive design system to ensure consistency, scalability, and efficiency across all my projects. It includes components, typography, color palettes, spacing systems, and interaction patterns.
                        </p>
                    </motion.div>

                    {/* Content Card */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-900/20 dark:to-purple-800/10 border border-purple-200 dark:border-purple-800/50 rounded-3xl p-8 md:p-12"
                    >
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                            <div>
                                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
                                    Currently Creating
                                </h3>
                                <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
                                    Explore my design system in progress. See how I'm organizing components, defining design tokens, and building a scalable foundation for consistent design across products.
                                </p>
                            </div>
                            <motion.a
                                href="https://www.figma.com/design/m2m1B8PNHPv1WNYvjCzG6H/Design-System?node-id=0-1&t=xP9jfbC06Lg57WIT-1"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex-shrink-0 px-8 py-4 text-base font-bold text-white transition-all bg-purple-600 rounded-full hover:bg-purple-700 shadow-lg shadow-purple-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 cursor-pointer whitespace-nowrap"
                            >
                                View Design System
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
