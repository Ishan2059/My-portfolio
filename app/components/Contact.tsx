"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { ShimmerButton } from "@/app/components/ui/shimmer-button";

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
        { name: "Instagram", url: "https://www.instagram.com/ishan.mishra.90226/" },
        { name: "Twitter", url: "https://twitter.com/ishan2059" },
    ];

    return (
        <section id="contact" className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="px-4 sm:px-6 md:px-16 mx-auto max-w-7xl">
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
                    <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ShimmerButton
                                background="var(--primary)"
                                borderRadius="0.75rem"
                                shimmerColor="#ffffff"
                                className="w-full sm:w-auto text-center px-8 py-3.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:focus-visible:outline-zinc-100 transition-colors duration-200"
                                onClick={() => window.location.href = "mailto:ishanmishra2059@gmail.com"}
                            >
                                Say Hello
                            </ShimmerButton>
                        </motion.div>
                        <motion.a
                            href="/Ishan_Mishra_Resume.pdf"
                            download="Ishan_Mishra_Resume.pdf"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border-2 border-zinc-900 bg-transparent px-8 py-3.5 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50 dark:border-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-900 transition-all duration-200 cursor-pointer"
                        >
                            <Download className="w-4 h-4" />
                            Download Resume
                        </motion.a>
                    </motion.div>


                </motion.div>
            </div>
        </section>
    );
}
