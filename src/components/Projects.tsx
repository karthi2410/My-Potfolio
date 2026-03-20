import { useScrollAnimation } from '../hooks';

const projects = [
    {
        title: 'Optikpi Test Automation',
        description:
            'Comprehensive smoke and regression test automation framework for the Optikpi analytics platform, built with Playwright and JavaScript. Includes Docker containerization and Slack integration for automated test report delivery.',
        stack: ['Playwright', 'JavaScript', 'Docker', 'Slack', 'CI/CD'],
        github: 'https://github.com/karthi2410/Optikpi-automation-smoke-test',
        color: 'from-blue-500 to-cyan-500',
    },
    {
        title: 'Optikpi Gatling Load Tests',
        description:
            'Gatling-based load and performance test suite for OptiKPI — simulating real-world traffic across landing page, login, dashboards, workflows, library, and data platform.',
        stack: ['Gatling', 'Java', 'Maven'],
        github: 'https://github.com/karthi2410/optikpi-gatling-load-tests',
        color: 'from-orange-500 to-red-500',
    },
];

export default function Projects() {
    const [ref, isVisible] = useScrollAnimation<HTMLElement>();

    return (
        <section id="projects" ref={ref} className="section-padding bg-surface-50/50 dark:bg-surface-900/50">
            <div className="container-custom">
                <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider mb-3">Projects</p>
                    <h2 className="section-title mb-4">
                        Featured <span className="gradient-text">Work</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        Side projects and frameworks that demonstrate engineering capabilities beyond day-to-day work.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <div
                            key={project.title}
                            className={`glass-card overflow-hidden group hover:-translate-y-2 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: `${i * 150}ms` }}
                        >
                            {/* Gradient header */}
                            <div className={`h-32 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg className="w-16 h-16 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                                    </svg>
                                </div>
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                            </div>

                            <div className="p-6">
                                <h3 className="text-lg font-bold text-surface-800 dark:text-surface-100 mb-2">{project.title}</h3>
                                <p className="text-sm text-surface-600 dark:text-surface-400 leading-relaxed mb-4">{project.description}</p>

                                {/* Stack */}
                                <div className="flex flex-wrap gap-1.5 mb-5">
                                    {project.stack.map((tech) => (
                                        <span key={tech} className="text-xs px-2 py-1 rounded-md bg-surface-100 dark:bg-surface-700/50 text-surface-600 dark:text-surface-400 font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex items-center gap-3">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-sm font-medium text-surface-600 dark:text-surface-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                        aria-label={`${project.title} GitHub`}
                                        title={`View ${project.title} source code on GitHub`}
                                    >
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        View Source
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`text-center mt-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '500ms' }}>
                    <a
                        href="https://github.com/karthi2410"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary inline-flex"
                        title="View all repositories on GitHub"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        View All on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}
