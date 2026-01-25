"use client";

import { motion } from "framer-motion";

export default function About() {
    const skills = [
        "Figma",
        "UX Research",
        "IA Structure",
        "Prototyping",
        "Wireframing",
        "User Testing",
        "Visual Design",
        "Interaction Design",
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" as const },
        },
    };

    const skillVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4, ease: "easeOut" as const },
        },
    };

    return (
        <section id="about" className="relative py-32 bg-zinc-50 dark:bg-zinc-900/50 overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-20 right-0 w-64 h-64 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob dark:bg-cyan-900 dark:opacity-30 will-change-[transform]"></div>
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-lime-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000 dark:bg-lime-900 dark:opacity-30 will-change-[transform]"></div>

            <div className="relative px-6 mx-auto max-w-7xl sm:px-12 lg:px-16 z-10">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                    >
                        <motion.h2
                            variants={itemVariants}
                            className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl mb-6"
                        >
                            {["A", "b", "o", "u", "t", " "].map((letter, index) => (
                                <span key={index} className="hover-rubber cursor-default">{letter}</span>
                            ))}
                            <span className="text-purple-600 dark:text-purple-400">
                                {["M", "e"].map((letter, index) => (
                                    <span key={index} className="hover-rubber cursor-default">{letter}</span>
                                ))}
                            </span>
                        </motion.h2>
                        <motion.p variants={itemVariants} className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                            I am a dedicated UI/UX Designer with a focus on building accessible, pixel-perfect user interfaces that blend art with code.
                        </motion.p>
                        <motion.p variants={itemVariants} className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                            I approach design with empathy, research, and iteration—starting from understanding user needs to delivering polished, scalable solutions. I'm especially interested in crafting seamless user flows, meaningful interactions, and modern design systems that balance usability with business goals.
                        </motion.p>
                        <motion.p variants={itemVariants} className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                            When I'm not at the computer, I'm usually hanging out with my friends, reading, or running.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                    >
                        <motion.h3
                            variants={itemVariants}
                            className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6"
                        >
                            {["S", "k", "i", "l", "l", "s"].map((letter, index) => (
                                <span key={index} className="hover-rubber cursor-default">{letter}</span>
                            ))}
                        </motion.h3>
                        <ul className="grid grid-cols-2 gap-4">
                            {skills.map((skill, index) => (
                                <motion.li
                                    key={skill}
                                    variants={skillVariants}
                                    custom={index}
                                    className="flex items-center px-4 py-3 text-sm font-medium text-zinc-700 bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-lg dark:bg-zinc-800/80 dark:border-zinc-700 dark:text-zinc-300 shadow-sm transition-all duration-200 hover:scale-105 hover:border-purple-500 dark:hover:border-purple-400"
                                >
                                    <motion.span
                                        className="w-2 h-2 mr-3 bg-purple-500 rounded-full"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                                    />
                                    {skill}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
