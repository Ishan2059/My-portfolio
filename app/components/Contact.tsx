export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="px-6 mx-auto max-w-7xl sm:px-12 lg:px-16">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
                        Get in Touch
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                        I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-6">
                        <a
                            href="mailto:hello@example.com"
                            className="rounded-full bg-zinc-900 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                        >
                            Say Hello
                        </a>
                    </div>
                    <div className="mt-12 flex justify-center gap-8">
                        {/* Social Links Placeholders */}
                        {["GitHub", "LinkedIn", "Twitter"].map((social) => (
                            <a
                                key={social}
                                href="#"
                                className="text-zinc-400 hover:text-zinc-500 dark:hover:text-zinc-300"
                            >
                                <span className="sr-only">{social}</span>
                                <span className="text-sm font-semibold">{social}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
