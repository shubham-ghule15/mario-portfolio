import { motion } from 'framer-motion'

const experiences = [
    {
        date: 'May 2025 - Present',
        title: 'Assistant Manager, Analytics & Growth Strategy',
        company: 'American Express',
        achievements: [
            'Spearheaded analytics for GCS Marketing, contributing $5M+ profit and $1B+ billed business',
            'Developed CLV models with 30% increased accuracy for $200M marketing campaigns',
            'Built 2 Decision Tree models improving targeting by ~25%',
            'Applied ML techniques for 22 card products optimization'
        ]
    },
    {
        date: 'Apr 2024 - May 2024',
        title: "CTO's Office Intern, AI Strategy",
        company: 'Samsung R&D Bangalore',
        achievements: [
            'Developed strategies for 11 next-gen Sound AI features',
            'Analyzed 50+ initiatives targeting 1 Billion+ users',
            'Scouted 30+ open-source audio LLM projects and 15+ startups'
        ]
    },
    {
        date: 'Dec 2020 - Jun 2023',
        title: 'Senior Software Engineer',
        company: 'Dassault Systèmes',
        achievements: [
            'Built app for 30K+ clinical trials, impacting 90M+ patients',
            'Contributing $1.1B+ revenue, reviewed 100+ PRs, safeguarded 50K+ LOC',
            'Redesigned 10+ UX screens achieving ~90% CSAT for 1M+ users',
            'Leveraged Pendo for insights with $15M+ revenue impact',
            'Revamped AWS architecture saving $100K+, reduced latency by 50%'
        ]
    }
]

const education = [
    {
        school: 'IIM Bangalore',
        degree: 'MBA (Business Analytics)',
        period: '2023 - 2025',
        details: 'CGPA: 3.03/4.00 • ML, NLP, GenAI, Deep Learning'
    },
    {
        school: 'Pune University',
        degree: 'B.E. (Computer Science)',
        period: '2016 - 2020',
        details: 'CGPA: 9.24/10 • Top 5% of class'
    }
]

function Experience() {
    return (
        <div className="page-container">
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ marginTop: '2rem' }}
            >
                <h1 className="section-title">Experience</h1>
                <p className="section-subtitle">Professional journey and achievements</p>
            </motion.div>

            {/* Timeline */}
            <motion.div
                className="timeline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                {experiences.map((exp, i) => (
                    <motion.div
                        key={i}
                        className="timeline-item"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.15 }}
                    >
                        <div className="timeline-date">{exp.date}</div>
                        <h3 className="timeline-title">{exp.title}</h3>
                        <p className="timeline-company">{exp.company}</p>
                        <ul className="timeline-achievements">
                            {exp.achievements.map((ach, j) => (
                                <li key={j}>{ach}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </motion.div>

            {/* Education */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                style={{ marginTop: '4rem' }}
            >
                <div className="section-header">
                    <h2 className="section-title">Education</h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    {education.map((edu, i) => (
                        <motion.div
                            key={i}
                            className="glass-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <h3 className="card-title">{edu.school}</h3>
                            <p style={{ color: 'var(--glow-cyan)', marginBottom: '0.5rem' }}>{edu.degree}</p>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{edu.period}</p>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>{edu.details}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <footer className="footer">
                <p className="footer-text">Building impactful products since 2016</p>
            </footer>
        </div>
    )
}

export default Experience
