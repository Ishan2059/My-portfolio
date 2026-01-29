"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Lock, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { caseStudies } from "@/app/data/caseStudies";

const STUDIES_PER_PAGE = 6; // Show 6 case studies per page

export default function CaseStudiesPage() {
    const [currentPage, setCurrentPage] = useState(1);
    
    const totalPages = Math.ceil(caseStudies.length / STUDIES_PER_PAGE);
    const startIndex = (currentPage - 1) * STUDIES_PER_PAGE;
    const endIndex = startIndex + STUDIES_PER_PAGE;
    const currentStudies = caseStudies.slice(startIndex, endIndex);

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
        <div className="relative flex flex-col min-h-screen bg-white dark:bg-black">
            <Navbar />

            <main className="flex-grow pt-24">
                {/* Hero Section */}
                <motion.section
                    className="px-6 mx-auto max-w-4xl sm:px-12 lg:px-16 mb-20"
                    initial="hidden"
                    animate="visible"
                    variants={headerVariants}
                >
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl md:text-6xl mb-6">
                            Case Studies
                        </h1>
                        <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 mb-8">
                            Deep dives into my design process and problem-solving approach. Each project showcases how I translate complex challenges into intuitive, user-centered solutions.
                        </p>
                        <div className="w-16 h-1 bg-purple-600 mx-auto mb-4"></div>
                        <p className="text-sm text-zinc-500 dark:text-zinc-500">
                            {caseStudies.length} case studies • Page {currentPage} of {totalPages}
                        </p>
                    </div>
                </motion.section>

                {/* Case Studies Grid */}
                <section className="px-6 mx-auto max-w-6xl sm:px-12 lg:px-16 mb-16">
                    <motion.div
                        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={containerVariants}
                        key={currentPage} // Re-animate when page changes
                    >
                        {currentStudies.map((study) => (
                            <motion.div
                                key={study.id}
                                variants={cardVariants}
                                className={`flex flex-col overflow-hidden transition-all duration-300 bg-white border border-zinc-200 rounded-3xl dark:bg-zinc-900 dark:border-zinc-800 group shadow-sm ${
                                    study.available
                                        ? "hover:shadow-2xl hover:border-purple-300 dark:hover:border-purple-600 cursor-pointer hover:scale-105"
                                        : "opacity-75"
                                }`}
                            >
                                {study.available ? (
                                    <Link href={`/case-studies/${study.id}`} className="flex flex-col h-full">
                                        {/* Image */}
                                        <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 flex items-center justify-center overflow-hidden relative">
                                            {study.images && study.images.length > 0 ? (
                                                <img
                                                    src={`/case-studies/${study.id}/Sixty images/${study.images[0]}`}
                                                    alt={study.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <span className="text-5xl">📱</span>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 p-6">
                                            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 mb-3">
                                                {study.valueTitle}
                                            </h3>
                                            <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                                                {study.shortDescription}
                                            </p>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2">
                                                {study.tags.slice(0, 3).map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 transition-all duration-300 group-hover:bg-purple-200 dark:group-hover:bg-purple-900/50"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* CTA */}
                                        <div className="p-6 pt-0">
                                            <span className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-all duration-300 group-hover:translate-x-1">
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
                                            <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
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
                </section>

                {/* Pagination */}
                {totalPages > 1 && (
                    <section className="px-6 mx-auto max-w-6xl sm:px-12 lg:px-16 mb-16">
                        <div className="flex items-center justify-center gap-4">
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <ChevronLeft className="w-4 h-4" />
                                Previous
                            </button>

                            <div className="flex items-center gap-2">
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`w-10 h-10 text-sm font-medium rounded-lg transition-colors ${
                                            page === currentPage
                                                ? "bg-purple-600 text-white"
                                                : "text-zinc-600 dark:text-zinc-400 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                                        }`}
                                    >
                                        {page}
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                Next
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </section>
                )}
            </main>

            <Footer />
        </div>
    );
}