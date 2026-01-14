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
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="flex flex-col overflow-hidden transition-all bg-white border border-zinc-200 rounded-2xl dark:bg-zinc-900 dark:border-zinc-800 hover:shadow-xl dark:hover:border-zinc-700 group"
                        >
                            <div className="flex-1 p-6">
                                <motion.h3
                                    className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
                                >
                                    {project.title}
                                </motion.h3>
                                <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-6">
                                    {project.tags.map((tag, tagIndex) => (
                                        <motion.span
                                            key={tag}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: tagIndex * 0.1 }}
                                            whileHover={{ scale: 1.1 }}
                                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                            <div className="p-6 pt-0 mt-auto">
                                <motion.a
                                    href={project.link}
                                    whileHover={{ x: 5 }}
                                    className="inline-flex items-center text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500"
                                >
                                    View Project <span aria-hidden="true" className="ml-1">&rarr;</span>
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
