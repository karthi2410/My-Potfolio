import { useScrollAnimation } from '../hooks';

const skillGroups = [
    {
        category: 'Automation',
        color: 'from-blue-500 to-cyan-500',
        bgColor: 'bg-blue-50 dark:bg-blue-900/20',
        iconColor: 'text-blue-600 dark:text-blue-400',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 14.5M14.25 3.104c.251.023.501.05.75.082M19.8 14.5l-2.745 2.745a4.5 4.5 0 01-6.364 0L7.946 14.5" />
            </svg>
        ),
        skills: [
            { name: 'Selenium', detail: 'Java' },
            { name: 'Playwright', detail: 'JavaScript' },
            { name: 'TestNG', detail: 'Test Runner' },
        ],
    },
    {
        category: 'Performance',
        color: 'from-orange-500 to-red-500',
        bgColor: 'bg-orange-50 dark:bg-orange-900/20',
        iconColor: 'text-orange-600 dark:text-orange-400',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
        ),
        skills: [
            { name: 'Gatling', detail: 'Load Testing' },
        ],
    },
    {
        category: 'Testing',
        color: 'from-emerald-500 to-teal-500',
        bgColor: 'bg-emerald-50 dark:bg-emerald-900/20',
        iconColor: 'text-emerald-600 dark:text-emerald-400',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.746 3.746 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
        ),
        skills: [
            { name: 'Functional', detail: '' },
            { name: 'Non-functional', detail: '' },
            { name: 'Regression', detail: '' },
            { name: 'Smoke', detail: '' },
            { name: 'Integration', detail: '' },
            { name: 'UAT', detail: '' },
        ],
    },
    {
        category: 'Process & CI',
        color: 'from-violet-500 to-purple-500',
        bgColor: 'bg-violet-50 dark:bg-violet-900/20',
        iconColor: 'text-violet-600 dark:text-violet-400',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
            </svg>
        ),
        skills: [
            { name: 'CI/CD', detail: 'Pipelines' },
            { name: 'Agile/Scrum', detail: '' },
            { name: 'BDD', detail: 'Cucumber' },
        ],
    },
    {
        category: 'Tools',
        color: 'from-pink-500 to-rose-500',
        bgColor: 'bg-pink-50 dark:bg-pink-900/20',
        iconColor: 'text-pink-600 dark:text-pink-400',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384-3.086A2.123 2.123 0 004.75 13.84v5.32a2.123 2.123 0 001.286 1.756l5.384 3.086a2.123 2.123 0 002.16 0l5.384-3.086A2.123 2.123 0 0020.25 19.16v-5.32a2.123 2.123 0 00-1.286-1.756l-5.384-3.086a2.123 2.123 0 00-2.16 0z" />
            </svg>
        ),
        skills: [
            { name: 'ClickUp', detail: '' },
            { name: 'Jira', detail: '' },
            { name: 'Slack', detail: '' },
            { name: 'GitHub', detail: '' },
            { name: 'Bitbucket', detail: '' },
            { name: 'Unfuddle', detail: '' },
        ],
    },
    {
        category: 'Languages',
        color: 'from-amber-500 to-yellow-500',
        bgColor: 'bg-amber-50 dark:bg-amber-900/20',
        iconColor: 'text-amber-600 dark:text-amber-400',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
        ),
        skills: [
            { name: 'Java', detail: '' },
            { name: 'JavaScript', detail: '' },
        ],
    },
];

export default function Skills() {
    const [ref, isVisible] = useScrollAnimation<HTMLElement>();

    return (
        <section id="skills" ref={ref} className="section-padding bg-surface-50/50 dark:bg-surface-900/50">
            <div className="container-custom">
                <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider mb-3">Technical Skills</p>
                    <h2 className="section-title mb-4">
                        Tools & <span className="gradient-text">Technologies</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        A focused toolkit built for reliable test automation, performance analysis, and agile delivery.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillGroups.map((group, i) => (
                        <div
                            key={group.category}
                            className={`glass-card p-6 group hover:-translate-y-1 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <div className={`w-10 h-10 rounded-lg ${group.bgColor} ${group.iconColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                    {group.icon}
                                </div>
                                <h3 className="font-bold text-surface-800 dark:text-surface-100">{group.category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill.name}
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-surface-100 dark:bg-surface-700/50 text-surface-700 dark:text-surface-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                                    >
                                        {skill.name}
                                        {skill.detail && (
                                            <span className="text-xs text-surface-400 dark:text-surface-500">({skill.detail})</span>
                                        )}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
