"use client";

import { motion } from "framer-motion";

export default function Projects() {
    const projects = [
        {
            title: "Travel Website UI",
            description: "A clean, intuitive interface designed for speed and ease. Effortlessly search, compare, and book your next adventure using a modern, minimalist layout that focuses on what matters: your journey.",
            tags: ["User Experience", "Figma", "Information Architecute"],
            link: "https://www.behance.net/dwfice",
        },
        {
            title: "Habit Flow",
            description: "A clean, intuitive interface designed for consistency. Easily track progress and build lasting routines with a modern, distraction-free design that motivates daily achievement.",
            tags: ["Usability", "Minimalist", "Accessibility"],
            link: "https://www.behance.net/dwfice",
        },
        {
            title: "Sixty",
            description: "Intuitive flows help you quickly document memories and review your progress with smart summaries.",
            tags: ["Interaction", "Research", "Vibe-Coding"],
            link: "https://www.linkedin.com/posts/ishan-mishra-b874b3287_uiuxdesign-reactnative-buildinpublic-activity-7413982695430471680-gcaS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEWptdcBR889Gk1Zb5-8-x56bz_z958FfLY",
        },
    ];

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
        <section id="projects" className="py-24">
            <div className="px-6 mx-auto max-w-7xl sm:px-12 lg:px-16">
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
                        Featured Projects
                    </motion.h2>
                    <motion.p
                        variants={headerVariants}
                        className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400"
                    >
                        Here are some of the projects I've worked on recently.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                >
                    {projects.map((project, index) => (
                        <motion.a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={cardVariants}
                            className="flex flex-col overflow-hidden transition-all duration-300 bg-white border border-zinc-200 rounded-2xl dark:bg-zinc-900 dark:border-zinc-800 hover:shadow-2xl hover:border-purple-300 dark:hover:border-purple-600 dark:hover:shadow-purple-900/20 group cursor-pointer"
                            style={{ textDecoration: 'none' }}
                        >
                            <div className="flex-1 p-6">
                                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-6">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 transition-all duration-300 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/50"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="p-6 pt-0 mt-auto">
                                <span className="inline-flex items-center text-sm font-semibold text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-all duration-300 group-hover:translate-x-1">
                                    View Project <span aria-hidden="true" className="ml-1 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                                </span>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
