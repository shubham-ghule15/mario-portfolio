import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const stats = [
    { value: '$5M+', label: 'Profit Generated' },
    { value: '$1B+', label: 'Revenue Impact' },
    { value: '+30%', label: 'CLV Boost' },
    { value: '22', label: 'Products Managed' }
]

const skills = {
    analytics: ['Python', 'SQL', 'Spark', 'Machine Learning', 'A/B Testing', 'Hive'],
    strategy: ['Product Roadmap', 'GTM Strategy', 'Pendo', 'JIRA', 'Figma', 'UX Research'],
    engineering: ['React', 'AWS', 'Docker', 'CI/CD', 'Git', 'REST APIs']
}

const projects = [
    { icon: '📊', title: 'Customer Segmentation', desc: 'K-Means clustering for targeted marketing campaigns' },
    { icon: '💰', title: 'CLV Prediction', desc: 'ML model predicting customer lifetime value' },
    { icon: '💬', title: 'Sentiment Analysis', desc: 'NLP pipeline for customer feedback analysis' }
]

function Home() {
    return (
        <div className="page-container">
            {/* Hero Section */}
            <motion.section
                className="hero"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <motion.span
                    className="hero-badge"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    Available for opportunities
                </motion.span>

                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    Shubham Ghule
                </motion.h1>

                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    Product Manager & Analytics Leader at American Express
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}
                >
                    <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
                    <Link to="/resume" className="btn btn-outline">View Resume</Link>
                </motion.div>
            </motion.section>

            {/* Stats Section */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
            >
                <div className="stats-grid">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            className="stat-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 + i * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="stat-value">{stat.value}</div>
                            <div className="stat-label">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* About Section */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                style={{ marginTop: '4rem' }}
            >
                <div className="section-header">
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">Driving growth through data-driven product decisions</p>
                </div>

                <div className="glass-card">
                    <p className="card-text">
                        I'm an Analytics & Strategy professional at <strong>American Express</strong> with expertise
                        in <strong>Machine Learning</strong>, <strong>Product Strategy</strong>, and <strong>Data Engineering</strong>.
                    </p>
                    <p className="card-text" style={{ marginTop: '1rem' }}>
                        I've driven <strong>$5M+ in profit optimization</strong> and contributed to <strong>$1B+ in billed business</strong>
                        through advanced analytics and strategic product initiatives. My work spans 22+ card products
                        with a focus on customer lifetime value and targeted marketing optimization.
                    </p>
                </div>
            </motion.section>

            {/* Skills Section */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                style={{ marginTop: '4rem' }}
            >
                <div className="section-header">
                    <h2 className="section-title">Skills</h2>
                    <p className="section-subtitle">Technical expertise and strategic capabilities</p>
                </div>

                <div className="skills-grid">
                    <div className="skill-category">
                        <div className="skill-category-title">Analytics & ML</div>
                        <div className="skill-tags">
                            {skills.analytics.map(skill => (
                                <span key={skill} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>

                    <div className="skill-category">
                        <div className="skill-category-title" style={{ color: 'var(--glow-purple)' }}>Product Strategy</div>
                        <div className="skill-tags">
                            {skills.strategy.map(skill => (
                                <span key={skill} className="skill-tag purple">{skill}</span>
                            ))}
                        </div>
                    </div>

                    <div className="skill-category">
                        <div className="skill-category-title">Engineering</div>
                        <div className="skill-tags">
                            {skills.engineering.map(skill => (
                                <span key={skill} className="skill-tag green">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Projects Preview */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                style={{ marginTop: '4rem' }}
            >
                <div className="section-header">
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">Machine learning & analytics showcases</p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, i) => (
                        <Link to="/projects" key={i} style={{ textDecoration: 'none' }}>
                            <motion.div
                                className="project-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="project-icon">{project.icon}</div>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.desc}</p>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </motion.section>

            {/* Footer */}
            <footer className="footer">
                <p className="footer-text">© 2026 Shubham Ghule. Built with React & Three.js</p>
            </footer>
        </div>
    )
}

export default Home
