import { motion } from 'framer-motion'

function Resume() {
    return (
        <div className="page-container">
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ marginTop: '2rem' }}
            >
                <h1 className="section-title">Resume</h1>
                <p className="section-subtitle">Download my complete resume</p>
            </motion.div>

            {/* Resume Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                style={{
                    maxWidth: '500px',
                    margin: '0 auto'
                }}
            >
                <div className="glass-card" style={{ textAlign: 'center', padding: '3rem' }}>
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{ fontSize: '4rem', marginBottom: '1.5rem' }}
                    >
                        📄
                    </motion.div>

                    <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Shubham Ghule</h2>
                    <p style={{ color: 'var(--glow-cyan)', marginBottom: '1.5rem' }}>Product Manager & Analytics Leader</p>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
                        <span className="skill-tag">IIM Bangalore</span>
                        <span className="skill-tag purple">3+ Years XP</span>
                        <span className="skill-tag green">22+ Products</span>
                    </div>

                    <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
                        <div style={{
                            background: 'rgba(0, 212, 255, 0.1)',
                            border: '1px solid rgba(0, 212, 255, 0.2)',
                            borderRadius: '8px',
                            padding: '0.75rem 1.25rem'
                        }}>
                            <p style={{ color: 'var(--glow-cyan)', fontWeight: 600, fontSize: '1.25rem' }}>$5M+</p>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>Profit</p>
                        </div>
                        <div style={{
                            background: 'rgba(157, 78, 221, 0.1)',
                            border: '1px solid rgba(157, 78, 221, 0.2)',
                            borderRadius: '8px',
                            padding: '0.75rem 1.25rem'
                        }}>
                            <p style={{ color: 'var(--glow-purple)', fontWeight: 600, fontSize: '1.25rem' }}>$1B+</p>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>Revenue</p>
                        </div>
                    </div>

                    <a
                        href="/resume.pdf"
                        download="Shubham_Ghule_Resume.pdf"
                        className="btn btn-primary"
                        style={{ width: '100%', justifyContent: 'center' }}
                    >
                        ↓ Download Resume
                    </a>
                </div>
            </motion.div>

            {/* Quick Highlights */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                style={{ marginTop: '3rem' }}
            >
                <div className="section-header">
                    <h2 className="section-title" style={{ fontSize: '1.5rem' }}>Quick Highlights</h2>
                </div>

                <div className="glass-card">
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {[
                            'Analytics & Growth Strategy at American Express',
                            'MBA from IIM Bangalore (Business Analytics)',
                            'Built CLV models with 30% accuracy improvement',
                            'Managed 22+ card products across $200M campaigns',
                            'Previously at Samsung R&D and Dassault Systèmes'
                        ].map((item, i) => (
                            <li key={i} style={{
                                padding: '0.75rem 0',
                                borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                                color: 'var(--text-secondary)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem'
                            }}>
                                <span style={{ color: 'var(--glow-cyan)' }}>→</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>

            <footer className="footer">
                <p className="footer-text">Let's connect and build something great</p>
            </footer>
        </div>
    )
}

export default Resume
