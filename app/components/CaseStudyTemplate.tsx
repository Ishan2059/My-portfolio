"use client";

import { motion } from "framer-motion";
import MinimalistNavbar from "@/app/components/MinimalistNavbar";
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
            <MinimalistNavbar />

            <main className="flex-grow pt-24">
                {/* Hero Section - F-Pattern: Strong horizontal line at top */}
                <motion.section
                    className="px-4 sm:px-6 md:px-16 mx-auto max-w-6xl mb-16"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                >
                    <div className="max-w-4xl">
                        <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-6xl md:text-7xl mb-8 leading-snug sm:leading-tight">
                            {study.valueTitle}
                        </h1>
                        
                        {/* Notion Link - if available */}
                        {study.notionLink && (
                            <div className="mb-8">
                                <a
                                    href={study.notionLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-6 py-3 text-base font-semibold text-white dark:text-zinc-900 bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-zinc-200 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/>
                                    </svg>
                                    View Full Case Study on Notion
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        )}
                        
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
                                    className="px-4 py-2 text-sm font-medium bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 rounded-full"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Problem Section - F-Pattern: Left-aligned content */}
                <motion.section
                    className="px-4 sm:px-6 md:px-16 mx-auto max-w-6xl mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                >
                    <div className="max-w-4xl">
                        <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">The Problem</h2>
                        <div className="w-20 h-1 bg-zinc-900 dark:bg-zinc-100 mb-8"></div>
                        <p className="text-xl leading-relaxed text-zinc-700 dark:text-zinc-300">
                            {study.problem}
                        </p>
                    </div>
                </motion.section>

                {/* Key Insight Section - F-Pattern: Highlighted content block */}
                <motion.section
                    className="px-4 sm:px-6 md:px-16 mx-auto max-w-6xl mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                >
                    <div className="max-w-4xl">
                        <div className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-xl border-l-4 border-zinc-900 dark:border-zinc-100">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 bg-zinc-900 dark:bg-zinc-100 rounded-full flex items-center justify-center">
                                        <Lightbulb className="w-5 h-5 text-white dark:text-zinc-900" />
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
                    className="px-4 sm:px-6 md:px-16 mx-auto max-w-6xl mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                >
                    <div className="max-w-4xl">
                        <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">The Solution</h2>
                        <div className="w-20 h-1 bg-zinc-900 dark:bg-zinc-100 mb-8"></div>
                        <p className="text-xl leading-relaxed text-zinc-700 dark:text-zinc-300">
                            {study.solution}
                        </p>
                    </div>
                </motion.section>

                {/* Process Section - F-Pattern: Vertical scanning with left alignment */}
                {study.process.length > 0 && (
                    <motion.section
                        className="px-4 sm:px-6 md:px-16 mx-auto max-w-6xl mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        <div className="max-w-4xl">
                            <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">Process</h2>
                            <div className="w-20 h-1 bg-zinc-900 dark:bg-zinc-100 mb-12"></div>

                            <div className="space-y-12">
                                {study.process.map((step, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeInUp}
                                        className="relative"
                                    >
                                        <div className="flex items-start gap-8">
                                            <div className="flex-shrink-0 relative z-10">
                                                <div className="w-12 h-12 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
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
                                                        <span className="text-zinc-900 dark:text-zinc-100 font-semibold">Outcome:</span> {step.outcome}
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
                        className="px-4 sm:px-6 md:px-16 mx-auto max-w-6xl mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        <div className="max-w-4xl mb-12">
                            <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">Design Showcase</h2>
                            <div className="w-20 h-1 bg-zinc-900 dark:bg-zinc-100"></div>
                        </div>

                        <div className="flex justify-center max-w-full">
                            {study.images.slice(0, 4).map((image, index) => {
                                // Determine the correct image path based on the case study
                                const imagePath = (study.id === 'minto' || study.id === 'roam')
                                    ? `/case-studies/${study.id}/${image}`
                                    : `/case-studies/${study.id}/Sixty images/${image}`;
                                const fallbackPath = `/case-studies/${study.id}/Sixtyimages/${image}`;
                                
                                return (
                                    <motion.div
                                        key={index}
                                        variants={fadeInUp}
                                        className="w-full max-w-4xl rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        <img
                                            src={imagePath}
                                            alt={`${study.title} screenshot ${index + 1}`}
                                            className="w-full h-auto object-contain"
                                            onError={(e) => {
                                                const img = e.currentTarget;
                                                if (img.dataset.fallbacked === "1") return;
                                                img.dataset.fallbacked = "1";
                                                img.src = fallbackPath;
                                            }}
                                        />
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.section>
                )}

                {/* Results Section - F-Pattern: Final horizontal scan */}
                {study.results.length > 0 && (
                    <motion.section
                        className="px-4 sm:px-6 md:px-16 mx-auto max-w-6xl mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        <div className="max-w-4xl">
                            <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">Results</h2>
                            <div className="w-20 h-1 bg-zinc-900 dark:bg-zinc-100 mb-12"></div>

                            <div className="grid md:grid-cols-2 gap-8">
                                {study.results.map((result, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeInUp}
                                        className="relative bg-white dark:bg-zinc-900 p-8 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-lg transition-all duration-300"
                                    >
                                        {/* Subtle accent */}
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-zinc-100 dark:to-zinc-300 rounded-t-xl"></div>
                                        
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