"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CaseStudiesModal from "./CaseStudiesModal";

export default function CaseStudies() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const headerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" as const },
        },
    };

    return (
        <>
            <section id="case-studies" className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
                <div className="px-6 mx-auto max-w-7xl sm:px-12 lg:px-16">
                    <motion.div
                        className="max-w-2xl mx-auto text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                    >
                        <motion.h2
                            variants={headerVariants}
                            className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl"
                        >
                            Case Studies
                        </motion.h2>
                        <motion.p
                            variants={headerVariants}
                            className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400 mb-8"
                        >
                            Deep dives into my design process and problem-solving approach
                        </motion.p>
                        <motion.button
                            variants={headerVariants}
                            onClick={() => setIsModalOpen(true)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 text-base font-bold text-white transition-all bg-purple-600 rounded-full hover:bg-purple-700 shadow-lg shadow-purple-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 cursor-pointer"
                        >
                            View All Case Studies
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            <CaseStudiesModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
