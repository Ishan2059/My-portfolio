"use client";

import { motion } from "framer-motion";
import { Palette } from "lucide-react";
import { ShimmerButton } from "@/app/components/ui/shimmer-button";

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
            <div className="px-4 sm:px-6 md:px-16 mx-auto max-w-7xl">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    {/* Icon and Title */}
                    <motion.div variants={itemVariants} className="mb-8">
                        <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 rounded-xl flex items-center justify-center mx-auto mb-6">
                            <Palette className="w-8 h-8 text-zinc-900 dark:text-zinc-100" />
                        </div>
                        <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                            Design System
                        </h2>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto">
                            Explore the comprehensive design system that powers this portfolio. Built with minimalist principles, consistent typography, and scalable components.
                        </p>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div variants={itemVariants}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ShimmerButton
                                background="var(--primary)"
                                borderRadius="0.75rem"
                                shimmerColor="#ffffff"
                                className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900 dark:focus:ring-zinc-100"
                                onClick={() => window.open("https://www.figma.com/design/m2m1B8PNHPv1WNYvjCzG6H/Design-System?node-id=0-1&t=xP9jfbC06Lg57WIT-1", "_blank")}
                            >
                                <Palette className="w-5 h-5" />
                                Check Out My Design System
                            </ShimmerButton>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
