"use client";

import { motion } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { CaseStudy } from "@/app/data/caseStudies";
import { Lightbulb, TrendingUp } from "lucide-react";

interface CaseStudyTemplateProps {
    study: CaseStudy;
}

export default function CaseStudyTemplate({ study }: CaseStudyTemplateProps) {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" as const },
        },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <div className="relative flex flex-col min-h-screen bg-white dark:bg-black">
            <Navbar />

            <main className="flex-grow pt-24">
                {/* Hero Section - F-Pattern: Strong horizontal line at top */}
                <motion.section
                    className="px-6 mx-auto max-w-6xl sm:px-12 lg:px-16 mb-16"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                >
                    <div className="max-w-4xl">
                        <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-6xl md:text-7xl mb-8 leading-snug sm:leading-tight">
                            {study.valueTitle}
                        </h1>
                        
                        {/* Meta Info - F-Pattern: Secondary horizontal scan */}
                        <div className="flex flex-wrap gap-8 text-base text-zinc-600 dark:text-zinc-400 mb-12">
                            <div><span className="font-semibold text-zinc-900 dark:text-zinc-100">Role:</span> {study.role}</div>
                            <div><span className="font-semibold text-zinc-900 dark:text-zinc-100">Timeline:</span> {study.timeline}</div>
                            <div><span className="font-semibold text-zinc-900 dark:text-zinc-100">Platform:</span> {study.platform}</div>
                        </div>

                        {/* Date Info */}
                        <div className="flex flex-wrap gap-8 text-sm text-zinc-500 dark:text-zinc-500 mb-12">
                            <div><span className="font-medium text-zinc-700 dark:text-zinc-400">Uploaded:</span> {study.dateUploaded}</div>
                            <div><span className="font-medium text-zinc-700 dark:text-zinc-400">Updated:</span> {study.dateUpdated}</div>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {study.tools.map((tool) => (
                                <span
                                    key={tool}
                                    className="px-4 py-2 text-sm font-medium bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 rounded-full"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Problem Section - F-Pattern: Left-aligned content */}
                <motion.section
                    className="px-6 mx-auto max-w-6xl sm:px-12 lg:px-16 mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                >
                    <div className="max-w-4xl">
                        <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">The Problem</h2>
                        <div className="w-20 h-1 bg-purple-600 mb-8"></div>
                        <p className="text-xl leading-relaxed text-zinc-700 dark:text-zinc-300">
                            {study.problem}
                        </p>
                    </div>
                </motion.section>

                {/* Key Insight Section - F-Pattern: Highlighted content block */}
                <motion.section
                    className="px-6 mx-auto max-w-6xl sm:px-12 lg:px-16 mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                >
                    <div className="max-w-4xl">
                        <div className="bg-purple-50 dark:bg-purple-900/10 p-8 rounded-2xl border-l-4 border-purple-600">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                                        <Lightbulb className="w-5 h-5 text-white" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Key Insight</h3>
                                    <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                                        {study.keyInsight}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Solution Section - F-Pattern: Left-aligned content */}
                <motion.section
                    className="px-6 mx-auto max-w-6xl sm:px-12 lg:px-16 mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                >
                    <div className="max-w-4xl">
                        <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">The Solution</h2>
                        <div className="w-20 h-1 bg-purple-600 mb-8"></div>
                        <p className="text-xl leading-relaxed text-zinc-700 dark:text-zinc-300">
                            {study.solution}
                        </p>
                    </div>
                </motion.section>

                {/* Process Section - F-Pattern: Vertical scanning with left alignment */}
                {study.process.length > 0 && (
                    <motion.section
                        className="px-6 mx-auto max-w-6xl sm:px-12 lg:px-16 mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        <div className="max-w-4xl">
                            <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">Process</h2>
                            <div className="w-20 h-1 bg-purple-600 mb-12"></div>

                            <div className="space-y-12">
                                {study.process.map((step, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeInUp}
                                        className="relative"
                                    >
                                        <div className="flex items-start gap-8">
                                            <div className="flex-shrink-0 relative z-10">
                                                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                                                    {index + 1}
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                                                    {step.step}
                                                </h3>
                                                <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                                                    {step.description}
                                                </p>
                                                <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
                                                    <p className="text-base font-medium text-zinc-900 dark:text-zinc-100">
                                                        <span className="text-purple-600 dark:text-purple-400 font-semibold">Outcome:</span> {step.outcome}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.section>
                )}

                {/* Images Section - F-Pattern: Visual break with grid */}
                {study.images.length > 0 && (
                    <motion.section
                        className="px-6 mx-auto max-w-6xl sm:px-12 lg:px-16 mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        <div className="max-w-4xl mb-12">
                            <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">Design Showcase</h2>
                            <div className="w-20 h-1 bg-purple-600"></div>
                        </div>

                        <div className="grid grid-cols-2 gap-6 max-w-2xl">
                            {study.images.slice(0, 4).map((image, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    className="aspect-[9/16] rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                                >
                                    <img
                                        src={`/case-studies/${study.id}/Sixty images/${image}`}
                                        alt={`${study.title} screenshot ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                )}

                {/* Results Section - F-Pattern: Final horizontal scan */}
                {study.results.length > 0 && (
                    <motion.section
                        className="px-6 mx-auto max-w-6xl sm:px-12 lg:px-16 mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        <div className="max-w-4xl">
                            <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">Results</h2>
                            <div className="w-20 h-1 bg-purple-600 mb-12"></div>

                            <div className="grid md:grid-cols-2 gap-8">
                                {study.results.map((result, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeInUp}
                                        className="relative bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-lg transition-all duration-300"
                                    >
                                        {/* Subtle accent */}
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-t-2xl"></div>
                                        
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center">
                                                <TrendingUp className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                                            </div>
                                            <h3 className="text-lg font-medium text-zinc-600 dark:text-zinc-400">
                                                {result.metric}
                                            </h3>
                                        </div>
                                        <p className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                                            {result.value}
                                        </p>
                                        <div className="w-12 h-0.5 bg-zinc-200 dark:bg-zinc-700"></div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.section>
                )}
            </main>

            <Footer />
        </div>
    );
}