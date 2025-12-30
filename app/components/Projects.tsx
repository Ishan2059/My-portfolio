import Image from "next/image";

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
            link: "https://www.behance.net/dwfice",
        },
    ];

    return (
        <section id="projects" className="py-24">
            <div className="px-6 mx-auto max-w-7xl sm:px-12 lg:px-16">
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
                        Featured Projects
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                        Here are some of the projects I've worked on recently.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="flex flex-col overflow-hidden transition-all bg-white border border-zinc-200 rounded-2xl dark:bg-zinc-900 dark:border-zinc-800 hover:shadow-lg dark:hover:border-zinc-700 group"
                        >
                            <div className="flex-1 p-6">
                                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-6">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="p-6 pt-0 mt-auto">
                                <a
                                    href={project.link}
                                    className="inline-flex items-center text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500"
                                >
                                    View Project <span aria-hidden="true" className="ml-1">&rarr;</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
