"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";
import { caseStudies } from "@/app/data/caseStudies";

interface CaseStudiesModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CaseStudiesModal({ isOpen, onClose }: CaseStudiesModalProps) {
    const availableStudies = caseStudies.filter((study) => study.available);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" as const },
        },
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
                    >
                        <div className="w-full max-w-6xl max-h-[90vh] bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 sm:p-8 border-b border-zinc-200 dark:border-zinc-800">
                                <div>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                                        Case Studies
                                    </h2>
                                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                                        Explore my design process and problem-solving approach
                                    </p>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={onClose}
                                    className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
                                >
                                    <X className="w-6 h-6 text-zinc-600 dark:text-zinc-400" />
                                </motion.button>
                            </div>

                            {/* Content */}
                            <div className="flex-1 overflow-y-auto p-6 sm:p-8">
                                <motion.div
                                    className="grid gap-6 md:grid-cols-2"
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    {availableStudies.map((study) => (
                                        <motion.div
                                            key={study.id}
                                            variants={cardVariants}
                                            className="group"
                                        >
                                            <Link
                                                href={`/case-studies/${study.id}`}
                                                onClick={onClose}
                                                className="flex flex-col h-full overflow-hidden transition-all duration-300 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-2xl hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-600 cursor-pointer"
                                            >
                                                {/* Image */}
                                                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 flex items-center justify-center overflow-hidden">
                                                    <span className="text-5xl">📱</span>
                                                </div>

                                                {/* Content */}
                                                <div className="flex-1 p-5">
                                                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-2">
                                                        {study.title}
                                                    </h3>
                                                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                                                        {study.shortDescription}
                                                    </p>

                                                    {/* Tags */}
                                                    <div className="flex flex-wrap gap-2 mt-4">
                                                        {study.tags.slice(0, 2).map((tag) => (
                                                            <span
                                                                key={tag}
                                                                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                        {study.tags.length > 2 && (
                                                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-zinc-600 dark:text-zinc-400">
                                                                +{study.tags.length - 2}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Footer */}
                                                <div className="p-5 pt-0">
                                                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-all duration-300 group-hover:translate-x-1">
                                                        View Details
                                                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                                    </span>
                                                </div>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
