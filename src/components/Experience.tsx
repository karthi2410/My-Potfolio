import { useState } from 'react';
import { useScrollAnimation } from '../hooks';

interface CaseStudy {
    title: string;
    period: string;
    focus: string;
    problem: string;
    approach: string;
    outcome: string;
    stack: string[];
    metrics: string[];
}

const caseStudies: CaseStudy[] = [
    {
        title: 'Optikpi Platform',
        period: 'Sep 2025 – Present',
        focus: 'Analytics & Reporting Modules',
        problem:
            'Complex analytics platform required comprehensive data validation across reporting modules, with frequent sprint cycles demanding rapid test coverage expansion.',
        approach:
            'Completed Smoke Test automation using Playwright JS, eliminating manual smoke cycles entirely. Regression test automation in progress with key flows scripted. Leveraging AI tools with structured prompt techniques — clear context, defined format, and iterative refinement — to accelerate script generation and test documentation.',
        outcome:
            'Eliminated manual smoke testing entirely through full automation. Streamlined defect triage via ClickUp and Slack, collaborating with developers and analysts for end-to-end data validation.',
        stack: ['Playwright', 'JavaScript', 'CI/CD', 'ClickUp', 'Slack', 'AI Tools'],
        metrics: ['150+ test scenarios automated', '90% data validation coverage', 'Sprint defect resolution under 3 days'],
    },
    {
        title: 'Casino Platform',
        period: 'Apr 2022 – Dec 2022, Feb 2025 – Aug 2025',
        focus: 'Smoke/Functional Automation & Load Testing',
        problem:
            'B2B casino platform with multiple integration points required rigorous smoke and functional testing, plus load validation for server performance under peak traffic.',
        approach:
            'Built Selenium + TestNG smoke and functional automation suites. Validated integration points with B2B partner systems. Designed and executed Gatling-based load test scenarios simulating real-world traffic patterns.',
        outcome:
            'Established reliable CI-integrated test pipeline for every release. Identified critical performance bottlenecks before production deployment.',
        stack: ['Selenium', 'Java', 'TestNG', 'Gatling', 'Jira'],
        metrics: ['80+ automated smoke tests', '10K virtual users simulated', 'Server response < 200 ms under load'],
    },
    {
        title: 'Poker Platform',
        period: 'Jan 2023 – Aug 2024',
        focus: 'Web + Mobile Gameplay Validation',
        problem:
            'Multi-platform poker application required end-to-end validation of complex gameplay flows across web and mobile, with strict regression and UAT requirements.',
        approach:
            'Owned regression, smoke, and UAT testing across platforms. Integrated BDD (Cucumber) framework for readable, stakeholder-friendly test scenarios. Validated gameplay logic, tournament flows, and payment processing.',
        outcome:
            'Delivered reliable releases with comprehensive BDD coverage. Reduced manual regression effort significantly through structured automation.',
        stack: ['Selenium', 'Java', 'BDD/Cucumber', 'TestNG', 'Bitbucket'],
        metrics: ['70% regression automated', '200+ BDD scenarios', 'UAT cycles reduced by 50%'],
    },
    {
        title: 'Blaze Games',
        period: 'Sep 2024 – Jan 2025',
        focus: 'Slots, Table Games & Lottery Testing',
        problem:
            'Diverse gaming portfolio (slots, table games, lotteries) required comprehensive test coverage for gameplay mechanics and transaction flows with tight delivery timelines.',
        approach:
            'Designed test scenarios covering gameplay mechanics, RNG validation, and transaction flows. Automated critical gameplay and payment paths. Improved overall test coverage for multiple game types simultaneously.',
        outcome:
            'Achieved broad feature coverage across game categories. Automated gameplay and transaction flows, improving confidence in release quality.',
        stack: ['Selenium', 'Java', 'TestNG', 'Unfuddle'],
        metrics: ['120+ game scenarios covered', 'Transaction flow automation: 85%', 'Coverage improved by 60%'],
    },
];

function CaseStudyCard({ study, index, isVisible }: { study: CaseStudy; index: number; isVisible: boolean }) {
    const [expanded, setExpanded] = useState(false);

    const accentColors = [
        'from-blue-500 to-cyan-500',
        'from-emerald-500 to-teal-500',
        'from-violet-500 to-purple-500',
        'from-orange-500 to-amber-500',
    ];

    return (
        <div
            className={`glass-card overflow-hidden group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${index * 200}ms` }}
        >
            {/* Accent bar */}
            <div className={`h-1 bg-gradient-to-r ${accentColors[index % accentColors.length]}`} />

            <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-surface-800 dark:text-surface-100">{study.title}</h3>
                        <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">{study.focus}</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-surface-100 dark:bg-surface-700/50 text-surface-600 dark:text-surface-400 whitespace-nowrap">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>
                        {study.period}
                    </span>
                </div>

                {/* Problem → Approach → Outcome */}
                <div className="space-y-4 mb-6">
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-red-500 dark:text-red-400 mb-1.5 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500" /> Problem
                        </h4>
                        <p className="text-sm text-surface-600 dark:text-surface-400 leading-relaxed">{study.problem}</p>
                    </div>

                    {(expanded || window.innerWidth >= 768) && (
                        <>
                            <div>
                                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-500 dark:text-amber-400 mb-1.5 flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Approach
                                </h4>
                                <p className="text-sm text-surface-600 dark:text-surface-400 leading-relaxed">{study.approach}</p>
                            </div>

                            <div>
                                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-500 dark:text-emerald-400 mb-1.5 flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Outcome
                                </h4>
                                <p className="text-sm text-surface-600 dark:text-surface-400 leading-relaxed">{study.outcome}</p>
                            </div>
                        </>
                    )}

                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="md:hidden text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 inline-flex items-center gap-1 transition-colors"
                    >
                        {expanded ? 'Show less' : 'Read more'}
                        <svg
                            className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {study.stack.map((tech) => (
                        <span key={tech} className="chip text-xs">{tech}</span>
                    ))}
                </div>

                {/* Metrics */}
                <div className="flex flex-wrap gap-3">
                    {study.metrics.map((metric, mi) => (
                        <span
                            key={mi}
                            className="inline-flex items-center gap-1 text-xs text-surface-500 dark:text-surface-400 bg-surface-50 dark:bg-surface-800/50 px-2.5 py-1 rounded-md"
                        >
                            <svg className="w-3 h-3 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                            {metric}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Experience() {
    const [ref, isVisible] = useScrollAnimation<HTMLElement>();

    return (
        <section id="experience" ref={ref} className="section-padding gradient-bg">
            <div className="container-custom">
                <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider mb-3">Experience</p>
                    <h2 className="section-title mb-4">
                        Case <span className="gradient-text">Studies</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        Real-world projects showcasing the problem, approach, and measurable outcomes of quality engineering.
                    </p>
                </div>

                <div className="space-y-8">
                    {caseStudies.map((study, i) => (
                        <CaseStudyCard key={study.title} study={study} index={i} isVisible={isVisible} />
                    ))}
                </div>
            </div>
        </section>
    );
}
