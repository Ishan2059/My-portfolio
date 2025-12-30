export default function Footer() {
    return (
        <footer className="bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-800">
            <div className="px-6 py-12 mx-auto max-w-7xl sm:px-12 lg:px-16">
                <p className="text-center text-xs leading-5 text-zinc-500 dark:text-zinc-400">
                    &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
