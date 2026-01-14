"use client";

import { motion } from "framer-motion";

export default function Contact() {
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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" as const },
        },
    };

    const socialLinks = [
        { name: "GitHub", url: "https://github.com/Ishan2059" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/ishan-mishra-b874b3287/" },
        { name: "Facebook", url: "https://www.facebook.com/ishan.mishra.90226" },
    ];

    return (
        <section id="contact" className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="px-6 mx-auto max-w-7xl sm:px-12 lg:px-16">
                <motion.div
                    className="max-w-2xl mx-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl"
                    >
                        Get in Touch
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400"
                    >
                        I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </motion.p>
                    <motion.div variants={itemVariants} className="mt-10 flex items-center justify-center gap-6">
                        <motion.a
                            href="mailto:ishanmishra2059@gmail.com"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="rounded-full bg-zinc-900 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                        >
                            Say Hello
                        </motion.a>
                    </motion.div>
                    <motion.div
                        variants={itemVariants}
                        className="mt-12 flex justify-center gap-8"
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -3, scale: 1.1 }}
                                className="text-zinc-400 hover:text-zinc-500 dark:hover:text-zinc-300 transition-colors duration-200"
                                aria-label={`Visit my ${social.name} profile`}
                            >
                                <span className="sr-only">{social.name}</span>
                                <span className="text-sm font-semibold">{social.name}</span>
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
