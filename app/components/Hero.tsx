"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const scrollToContact = () => {
        const contact = document.getElementById("contact");
        if (contact) {
            contact.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Prevent hydration mismatch by returning a placeholder or default consistency
    // However, for critical LCP image, we might want to default to one and swap.
    // Given the visual difference, simple conditional rendering after mount is safest for exact match.
    // Or simpler: use CSS variables or classes? Next.js Image src needs to be JS.

    return (
        <section
            id="hero"
            className="relative flex items-center min-h-screen overflow-hidden"
        >
            {/* Background Blobs (Creative/Gummy vibe) - Now relative to full viewport */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob dark:bg-purple-900 dark:opacity-30"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000 dark:bg-yellow-900 dark:opacity-30"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000 dark:bg-pink-900 dark:opacity-30"></div>

            {/* Content Container - Centered and Constrained */}
            <div className="relative w-full px-6 pt-16 pb-32 mx-auto sm:px-12 lg:px-16 max-w-7xl">
                <div className="flex flex-col-reverse items-center justify-between w-full gap-12 lg:flex-row">
                    <div className="relative z-10 max-w-2xl lg:w-1/2">
                        <h2 className="mb-4 text-sm font-bold tracking-wide text-purple-600 dark:text-purple-400 uppercase animate-pulse">
                            Solve Problems With Beauty
                        </h2>
                        <h1 className="mb-8 text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-6xl md:text-7xl">
                            {/* Rubber Band Text Effect */}
                            {["B", "u", "i", "l", "d", "i", "n", "g"].map((letter, index) => (
                                <span key={index} className="hover-rubber cursor-default">{letter}</span>
                            ))}
                            {" "}
                            {["D", "i", "g", "i", "t", "a", "l"].map((letter, index) => (
                                <span key={index} className="hover-rubber cursor-default">{letter}</span>
                            ))} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 dark:from-purple-400 dark:via-pink-400 dark:to-indigo-400">
                                {/* Word 'Freedom' instead of Experiences because it fits the theme better, or reverting to Experiences but rubberized? User said 'Building Digital Experiences' earlier but 'Freedom' fits the vibe better. Sticking to Experiences as per original content but making it fancy?
                  User plan said: "Rubbery Text: The 'Building Digital Experiences' text will be interactive."
                  Let's stick to "Experiences" to respect the content, or "Freedom" if I want to be bold.
                  Actually, in the previous 'Gear 5' attempt I changed it to Freedom. The user liked the design but found it too distracting.
                  Let's go with "Experiences" but rubberized to satisfy the "Rubbery Text" requirement exactly.
               */}
                                Experiences
                            </span>
                            .
                        </h1>
                        <p className="max-w-xl mb-10 text-lg text-zinc-600 dark:text-zinc-400 sm:text-xl leading-relaxed">
                            I'm a UI/UX Designer who translates complex problems into intuitive, comfortable digital experiences. My focus is on Human-Centered design, ensuring every pixel serves a purpose.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={scrollToContact}
                                className="px-8 py-4 text-base font-bold text-white transition-all bg-purple-600 rounded-full hover:bg-purple-700 hover:scale-105 shadow-lg shadow-purple-500/30 animate-pulse focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600"
                            >
                                Get in touch
                            </button>
                            <a
                                href="#projects"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="px-8 py-4 text-base font-bold text-zinc-900 transition-all border-2 border-zinc-200 rounded-full hover:bg-zinc-50 hover:border-purple-500 hover:text-purple-600 dark:text-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-900 dark:hover:border-purple-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-200"
                            >
                                View work
                            </a>
                        </div>
                    </div>

                    <div className="relative z-10 flex justify-center lg:w-1/2 lg:justify-end lg:-mt-16 lg:-mr-12">
                        {mounted && (
                            <a
                                href="https://www.instagram.com/ish_ann1/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cursor-pointer transition-transform hover:scale-105"
                            >
                                <div
                                    className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[640px] lg:h-[640px] animate-fade-in-up"
                                    style={{
                                        maskImage: theme === 'dark'
                                            ? 'radial-gradient(circle closest-side, black 95%, transparent 100%)'
                                            : 'linear-gradient(to bottom, black 80%, transparent 100%)',
                                        WebkitMaskImage: theme === 'dark'
                                            ? 'radial-gradient(circle closest-side, black 95%, transparent 100%)'
                                            : 'linear-gradient(to bottom, black 80%, transparent 100%)'
                                    }}
                                >
                                    <Image
                                        src={theme === 'dark' ? "/profile-final.png" : "/profile-light.png"}
                                        alt="Profile Photo"
                                        fill
                                        className={`transition-all duration-500 ${theme === 'dark'
                                            ? 'object-contain grayscale hover:grayscale-0'
                                            : 'object-cover object-top grayscale-0 scale-85 translate-y-12'
                                            }`}
                                        priority
                                    />
                                </div>
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Background decoration - positioned relative to viewport */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl -z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl -z-10 pointer-events-none" />

            {/* Cloud/Wave Divider at the bottom */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
                <svg
                    className="relative block w-full h-[100px] sm:h-[150px]"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="fill-white dark:fill-zinc-900"
                        style={{ transform: 'scaleY(-1)' }} // Flip to make it look like a cloud bottom
                    ></path>
                    {/* Note: fill color needs to match the NEXT section's background basically, or this section's background?
               Wait, dividers usually overlay the CURRENT section and color match the NEXT section, OR they overlay the NEXT section and color match the CURRENT.
               Since we want to "blend" into the next section, let's assume the next section (About) has the default background.
               Actually, to make it look like clouds, maybe it's better to have a white cloud shape transition?
               Let's try a classic 'wave' that fills with the background color of the body (transparent/gradient) or the About section.
               Let's assume the About section has a matching background.
           */}
                </svg>
            </div>
        </section>
    );
}
