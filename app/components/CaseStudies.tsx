"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";
import { ShimmerButton } from "@/app/components/ui/shimmer-button";
import { caseStudies } from "../data/caseStudies";

export default function CaseStudies() {
    // Only show the first 3 case studies
    const displayedStudies = caseStudies.slice(0, 3);

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

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" as const },
        },
    };

    return (
        <section id="case-studies" className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="px-4 mx-auto max-w-7xl">
                <motion.div
                    className="max-w-2xl mx-auto text-center mb-16"
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
                        className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400"
                    >
                        Deep dives into my design process and problem-solving approach
                    </motion.p>
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                >
                    {displayedStudies.map((study) => (
                        <motion.div
                            key={study.id}
                            variants={cardVariants}
                            className={`flex flex-col overflow-hidden transition-all duration-300 bg-white border border-zinc-200 rounded-xl dark:bg-zinc-900 dark:border-zinc-800 group shadow-sm ${study.available
                                    ? "hover:shadow-2xl hover:border-zinc-400 dark:hover:border-zinc-600 cursor-pointer md:hover:scale-105"
                                    : "opacity-75"
                                }`}
                        >
                            {study.available ? (
                                <Link href={`/case-studies/${study.id}`} className="flex flex-col h-full">
                                    {/* Image */}
                                    <div className="aspect-video bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 flex items-center justify-center overflow-hidden relative">
                                        {study.images && study.images.length > 0 ? (
                                            <img
                                                src={`/case-studies/${study.id}/Sixty images/${study.images[0]}`}
                                                alt={study.title}
                                                className="w-full h-full object-cover"
                                                    onError={(e) => {
                                                        const img = e.currentTarget;
                                                        if (img.dataset.fallbacked === "1") return;
                                                        img.dataset.fallbacked = "1";
                                                        img.src = `/case-studies/${study.id}/Sixtyimages/${study.images[0]}`;
                                                    }}
                                            />
                                        ) : (
                                            <span className="text-5xl">📱</span>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 p-6">
                                        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors duration-300 mb-3">
                                            {study.valueTitle}
                                        </h3>
                                        <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 line-clamp-3">
                                            {study.shortDescription}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {study.tags.slice(0, 3).map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 transition-all duration-300 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <div className="p-6 pt-0">
                                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-all duration-300 group-hover:translate-x-1">
                                            View Case Study
                                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                        </span>
                                    </div>
                                </Link>
                            ) : (
                                <div className="flex flex-col h-full">
                                    {/* Image Placeholder */}
                                    <div className="aspect-video bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 flex items-center justify-center overflow-hidden relative">
                                        <Lock className="w-12 h-12 text-zinc-400 dark:text-zinc-600" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 p-6">
                                        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                                            {study.valueTitle}
                                        </h3>
                                        <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 line-clamp-3">
                                            {study.shortDescription}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {study.tags.slice(0, 3).map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Coming Soon Badge */}
                                    <div className="p-6 pt-0">
                                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 dark:text-zinc-500">
                                            <Lock className="w-4 h-4" />
                                            Coming Soon
                                        </span>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                <div className="text-center flex justify-center">
                    <Link href="/case-studies">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <ShimmerButton
                                background="var(--primary)"
                                borderRadius="0.75rem"
                                shimmerColor="#ffffff"
                                className="px-8 py-4 text-base font-bold shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900 dark:focus:ring-zinc-100"
                            >
                                View All Case Studies
                            </ShimmerButton>
                        </motion.div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
