import { useScrollAnimation } from '../hooks';

const chips = ['Playwright', 'Selenium', 'Gatling', 'CI/CD', 'BDD', 'TestNG'];

export default function Hero() {
    const [ref, isVisible] = useScrollAnimation<HTMLElement>();

    return (
        <section
            id="hero"
            ref={ref}
            className="relative min-h-screen flex items-center gradient-bg overflow-hidden"
        >
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-400/10 dark:bg-primary-500/5 rounded-full blur-3xl animate-float" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-violet-400/10 dark:bg-violet-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-300/5 dark:bg-primary-500/3 rounded-full blur-3xl" />
                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px] dark:bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)]" />
            </div>

            <div className={`container-custom relative z-10 pt-24 pb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="max-w-3xl">
                    {/* Location badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100/80 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6 backdrop-blur-sm border border-primary-200/50 dark:border-primary-700/30">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Chennai, India • Open to QA Automation roles
                    </div>

                    {/* Headline */}
                    <h1 className="section-title !text-3xl sm:!text-4xl md:!text-5xl lg:!text-6xl !leading-tight mb-6">
                        Software Test Engineer focused on{' '}
                        <span className="gradient-text">Automation, Reliability,</span> and{' '}
                        <span className="gradient-text">Release Confidence.</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-base md:text-lg lg:text-xl text-surface-600 dark:text-surface-400 leading-relaxed mb-8 max-w-2xl">
                        Driving quality for <strong className="text-surface-800 dark:text-surface-200">gaming &amp; analytics platforms</strong> through
                        robust automation frameworks, performance testing at scale, and seamless CI/CD integration.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-10">
                        <a href="#experience" className="btn-primary" title="Jump to my work experience section">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            View Experience
                        </a>
                        <a href="/BALAKARTHIKEYAN_G.pdf" download className="btn-secondary" title="Download my resume as PDF">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Download Resume
                        </a>
                    </div>

                    {/* Chips */}
                    <div className="flex flex-wrap gap-2">
                        {chips.map((chip, i) => (
                            <span
                                key={chip}
                                className="chip hover:scale-105 transition-transform cursor-default"
                                style={{ animationDelay: `${i * 100}ms` }}
                            >
                                {chip}
                            </span>
                        ))}
                    </div>
                </div>
            </div>


        </section>
    );
}
