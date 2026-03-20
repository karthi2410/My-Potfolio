import { useState, useCallback } from 'react';
import { useDarkMode, useActiveSection } from '../hooks';

const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'metrics', label: 'Impact' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
];

const sectionIds = navLinks.map((l) => l.id);

export default function Navbar() {
    const [isDark, toggleDark] = useDarkMode();
    const activeSection = useActiveSection(sectionIds);
    const [mobileOpen, setMobileOpen] = useState(false);

    const scrollTo = useCallback((id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMobileOpen(false);
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass" role="navigation" aria-label="Main navigation">
            <div className="container-custom flex items-center justify-between h-16 md:h-18">
                {/* Logo */}
                <button onClick={() => scrollTo('hero')} className="flex items-center gap-2 group" aria-label="Go to top" title="Back to top">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-violet-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-primary-500/20 group-hover:shadow-primary-500/40 transition-shadow">
                        BG
                    </div>
                    <span className="hidden sm:block font-bold text-lg text-surface-800 dark:text-surface-100">
                        Bala<span className="gradient-text">karthikeyan</span>
                    </span>
                </button>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollTo(link.id)}
                            title={`Go to ${link.label} section`}
                            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeSection === link.id
                                ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30'
                                : 'text-surface-600 dark:text-surface-400 hover:text-surface-800 dark:hover:text-surface-200 hover:bg-surface-100 dark:hover:bg-surface-800'
                                }`}
                        >
                            {link.label}
                        </button>
                    ))}
                </div>

                {/* Controls */}
                <div className="flex items-center gap-2">
                    <a
                        href="https://github.com/karthi2410"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-800 transition-all duration-200"
                        aria-label="GitHub profile"
                        title="View GitHub profile"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>

                    <button
                        onClick={toggleDark}
                        className="p-2.5 rounded-xl text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-800 transition-all duration-200"
                        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                        title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                    >
                        {isDark ? (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        )}
                    </button>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden p-2.5 rounded-xl text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-800 transition-all"
                        aria-label="Toggle menu"
                        title="Toggle navigation menu"
                        aria-expanded={mobileOpen}
                    >
                        {mobileOpen ? (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? 'max-h-96 border-t border-surface-200/50 dark:border-surface-700/50' : 'max-h-0'
                    }`}
            >
                <div className="container-custom py-3 flex flex-col gap-1">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollTo(link.id)}
                            className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${activeSection === link.id
                                ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30'
                                : 'text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-800'
                                }`}
                        >
                            {link.label}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
}
