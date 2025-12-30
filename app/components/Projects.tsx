import Image from "next/image";

export default function Projects() {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution built with Next.js, Stripe, and PostgreSQL. Features real-time inventory and secure checkout.",
            tags: ["Next.js", "Stripe", "PostgreSQL"],
            link: "#",
        },
        {
            title: "Task Management App",
            description: "A collaborative task manager with real-time updates using Socket.io. Includes drag-and-drop organization and team workspaces.",
            tags: ["React", "Node.js", "Socket.io"],
            link: "#",
        },
        {
            title: "Weather Dashboard",
            description: "A weather application that provides detailed forecasts and data visualization. Integrates with OpenWeatherMap API.",
            tags: ["TypeScript", "Chart.js", "API"],
            link: "#",
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
