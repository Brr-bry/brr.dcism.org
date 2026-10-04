export function Navbar({ isDark, setIsDark }) {

    const toggleDarkMode = () => {
        setIsDark(!isDark);

        document.documentElement.classList.toggle("dark");
    };

    return (
        <nav className="w-full bg-bg text-primary">
            <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

                {/* Logo */}
                <a
                    href="#"
                    className="text-4xl font-space font-bold"
                >
                    Bry.
                </a>

                {/* Navigation + Theme Toggle */}
                <div className="flex items-center gap-8">

                    <ul className="flex items-center gap-8">
                        <li>
                            <a
                                href="#about"
                                className="transition-colors hover:text-secondary"
                            >
                                About
                            </a>
                        </li>

                        <li>
                            <a
                                href="#skills"
                                className="transition-colors hover:text-secondary"
                            >
                                Skills
                            </a>
                        </li>

                        <li>
                            <a
                                href="#works"
                                className="transition-colors hover:text-secondary"
                            >
                                Works
                            </a>
                        </li>
                    </ul>

                    {/* Dark Mode Toggle */}
                    <button
                        onClick={toggleDarkMode}
                        className="text-xl transition-colors hover:text-secondary"
                        aria-label="Toggle dark mode"
                    >
                        {isDark ? "☀" : "☾"}
                    </button>

                </div>
            </div>
        </nav>
    );
}