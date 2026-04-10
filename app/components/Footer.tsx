"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-800">
            <div className="px-4 sm:px-6 md:px-16 py-12 mx-auto max-w-7xl">
                <div className="flex flex-col items-center gap-6">
                    {/* Social Icons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-6"
                    >
                        <a
                            href="https://dribbble.com/Ishan_Mishra"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-600 hover:text-[#1a1a1a] dark:text-zinc-400 dark:hover:text-white transition-colors"
                            aria-label="Dribbble"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm8.19 6.55c1.45 1.77 2.33 4.03 2.33 6.45 0 .31-.02.61-.04.91-2.09-.43-4.28-.65-6.48-.65-1.17 0-2.33.08-3.48.23-.21-.52-.43-1.04-.66-1.55 2.42-1 4.54-2.54 6.33-4.39zM12 2.04c2.1 0 4.01.68 5.58 1.83-1.63 1.69-3.58 3.08-5.82 4.03-1.09-2-2.38-3.82-3.85-5.43A9.91 9.91 0 0112 2.04zM5.93 3.62c1.42 1.56 2.67 3.32 3.73 5.25-2.33.75-4.88 1.16-7.62 1.16-.31 0-.62-.01-.93-.02.48-2.49 1.75-4.7 3.57-6.39h.25zM2.04 12c0-.14 0-.28.01-.42 3.09.03 5.98-.42 8.64-1.29.21.42.41.85.6 1.28-2.99.84-5.59 2.38-7.73 4.47A9.91 9.91 0 012.04 12zm2.93 5.39c1.97-1.92 4.35-3.32 7.08-4.08.77 2 1.38 4.09 1.82 6.26-1.74.68-3.66 1.06-5.66 1.06-1.31 0-2.57-.21-3.76-.6.17-.21.34-.42.52-.64zm10.1 3.32c-.47-2.05-1.06-4.03-1.78-5.93 1.04-.14 2.09-.21 3.15-.21 1.94 0 3.86.19 5.73.56-.48 2.83-2.09 5.27-4.38 6.82-.57-.73-1.16-1.48-1.72-2.24z"/>
                            </svg>
                        </a>
                        <a
                            href="https://linkedin.com/in/ishan-mishra-b874b3287"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-600 hover:text-[#1a1a1a] dark:text-zinc-400 dark:hover:text-white transition-colors"
                            aria-label="LinkedIn"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                    </motion.div>

                    {/* Copyright */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-center text-xs leading-5 text-zinc-500 dark:text-zinc-400"
                    >
                        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
                    </motion.p>
                </div>
            </div>
        </footer>
    );
}
