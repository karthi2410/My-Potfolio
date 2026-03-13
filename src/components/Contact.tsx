import { useState, type FormEvent } from 'react';
import { useScrollAnimation } from '../hooks';

export default function Contact() {
    const [ref, isVisible] = useScrollAnimation<HTMLElement>();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setFormData({ name: '', email: '', message: '' });
    };

    const inputClass = "w-full px-4 py-3 rounded-xl bg-surface-50 dark:bg-surface-800/50 border border-surface-200 dark:border-surface-700 text-surface-800 dark:text-surface-200 placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all duration-200";

    return (
        <section id="contact" ref={ref} className="section-padding bg-surface-50/50 dark:bg-surface-900/50 relative">
            <div className="container-custom relative">
                <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider mb-3">Get in Touch</p>
                    <h2 className="section-title mb-4">Let's <span className="gradient-text">Connect</span></h2>
                    <p className="section-subtitle mx-auto">Open to QA Automation roles. Drop me a message!</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div className={`glass-card p-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="contact-name" className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-2">Name</label>
                                <input id="contact-name" type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClass} placeholder="Your name" />
                            </div>
                            <div>
                                <label htmlFor="contact-email" className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-2">Email</label>
                                <input id="contact-email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClass} placeholder="your@email.com" />
                            </div>
                            <div>
                                <label htmlFor="contact-message" className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-2">Message</label>
                                <textarea id="contact-message" required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={`${inputClass} resize-none`} placeholder="Tell me about your opportunity..." />
                            </div>
                            <button type="submit" className="btn-primary w-full justify-center" disabled={submitted} title="Send your message">
                                {submitted ? '✓ Message Sent!' : 'Send Message'}
                            </button>
                        </form>
                    </div>

                    <div className={`flex flex-col justify-center gap-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '250ms' }}>
                        <a href="mailto:karthi24102000@gmail.com" className="glass-card p-5 flex items-center gap-4 group hover:-translate-y-1 transition-all duration-300" title="Send an email to karthi24102000@gmail.com">
                            <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                            </div>
                            <div>
                                <p className="text-xs font-medium text-surface-500 uppercase tracking-wider">Email</p>
                                <p className="text-sm font-semibold text-surface-800 dark:text-surface-200">karthi24102000@gmail.com</p>
                            </div>
                        </a>

                        <a href="https://linkedin.com/in/balakarthikeyan-g-152121227" target="_blank" rel="noopener noreferrer" className="glass-card p-5 flex items-center gap-4 group hover:-translate-y-1 transition-all duration-300" title="View LinkedIn profile">
                            <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                            </div>
                            <div>
                                <p className="text-xs font-medium text-surface-500 uppercase tracking-wider">LinkedIn</p>
                                <p className="text-sm font-semibold text-surface-800 dark:text-surface-200">Balakarthikeyan G</p>
                            </div>
                        </a>

                        <div className="glass-card p-5 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                            </div>
                            <div>
                                <p className="text-xs font-medium text-surface-500 uppercase tracking-wider">Location</p>
                                <p className="text-sm font-semibold text-surface-800 dark:text-surface-200">Chennai, India</p>
                            </div>
                        </div>

                        <div className="glass-card p-4 flex items-center gap-3 border-l-4 border-emerald-500">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                            <p className="text-sm font-medium text-surface-700 dark:text-surface-300">
                                Currently open to <strong className="text-emerald-600 dark:text-emerald-400">QA Automation roles</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
