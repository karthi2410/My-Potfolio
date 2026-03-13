import { useScrollAnimation } from '../hooks';

const strengths = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 14.5M14.25 3.104c.251.023.501.05.75.082M19.8 14.5l-2.745 2.745a4.5 4.5 0 01-6.364 0L7.946 14.5m11.854 0l-.854.854M7.946 14.5l.854.854m8.854 0L13.5 19.5m-3-5.146L6.354 18.5" />
            </svg>
        ),
        title: 'Quality Engineering Mindset',
        desc: 'I think beyond test case pass/fail — focussing on risk, coverage gaps, and test architecture that scales with the product.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384-3.086A2.123 2.123 0 004.75 13.84v5.32a2.123 2.123 0 001.286 1.756l5.384 3.086a2.123 2.123 0 002.16 0l5.384-3.086A2.123 2.123 0 0020.25 19.16v-5.32a2.123 2.123 0 00-1.286-1.756l-5.384-3.086a2.123 2.123 0 00-2.16 0z" />
            </svg>
        ),
        title: 'Automation Architecture',
        desc: 'Building maintainable, modular test suites with page-object models, data-driven design, and clean separation of concerns.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
        ),
        title: 'Cross-Team Collaboration',
        desc: 'Strong defect triage skills and clear communication with developers, product managers, and stakeholders across sprints.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
            </svg>
        ),
        title: 'Data Validation Mindset',
        desc: 'Expertise in validating analytics dashboards, reporting modules, and ensuring data accuracy and consistency across pipelines.',
    },
];

export default function About() {
    const [ref, isVisible] = useScrollAnimation<HTMLElement>();

    return (
        <section id="about" ref={ref} className="section-padding gradient-bg relative">
            <div className="container-custom">
                <div className={`max-w-3xl mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider mb-3">About Me</p>
                    <h2 className="section-title mb-6">
                        Why <span className="gradient-text">Hire Me</span>
                    </h2>
                    <p className="text-lg text-surface-600 dark:text-surface-400 leading-relaxed">
                        Detail-oriented Software Test Engineer with <strong className="text-surface-800 dark:text-surface-200">3.7 years of experience</strong> in
                        automation, manual, and performance testing for gaming and analytics platforms. I don't just find bugs — I build
                        quality into every release cycle through strategic test planning, scalable automation frameworks, and data-driven
                        performance insights.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {strengths.map((item, i) => (
                        <div
                            key={i}
                            className={`glass-card p-6 group hover:-translate-y-1 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: `${200 + i * 150}ms` }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-surface-800 dark:text-surface-100 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-surface-600 dark:text-surface-400 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
