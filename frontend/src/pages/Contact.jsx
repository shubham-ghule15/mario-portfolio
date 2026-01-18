import { useState } from 'react'
import { motion } from 'framer-motion'

function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (form.name && form.email && form.message) {
            const subject = `Portfolio Contact from ${form.name}`
            const body = `Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0A%0D%0AMessage:%0D%0A${form.message}`
            window.open(`mailto:shubhamrghule15@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`, '_blank')
            setSubmitted(true)
        }
    }

    return (
        <div className="page-container">
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ marginTop: '2rem' }}
            >
                <h1 className="section-title">Get in Touch</h1>
                <p className="section-subtitle">Let's discuss opportunities and ideas</p>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="glass-card">
                        <h3 className="card-title">Let's Connect</h3>
                        <p className="card-text" style={{ marginBottom: '2rem' }}>
                            I'm always open to discussing product management opportunities,
                            analytics projects, or potential collaborations.
                        </p>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Email</p>
                            <a href="mailto:shubhamrghule15@gmail.com" style={{ color: 'var(--glow-cyan)', textDecoration: 'none' }}>
                                shubhamrghule15@gmail.com
                            </a>
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Phone</p>
                            <a href="tel:+917720911123" style={{ color: 'var(--glow-cyan)', textDecoration: 'none' }}>
                                +91 77209 11123
                            </a>
                        </div>

                        <div className="contact-links">
                            <a href="https://linkedin.com/in/shubhamghule" target="_blank" rel="noopener noreferrer" className="contact-link">
                                in
                            </a>
                            <a href="https://github.com/shubhamghule" target="_blank" rel="noopener noreferrer" className="contact-link">
                                gh
                            </a>
                            <a href="mailto:shubhamrghule15@gmail.com" className="contact-link">
                                @
                            </a>
                        </div>
                    </div>

                    <motion.div
                        className="glass-card"
                        style={{ marginTop: '1.5rem', textAlign: 'center' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <p style={{ color: 'var(--glow-cyan)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>● Available</p>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                            Open to full-time opportunities
                        </p>
                    </motion.div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    {submitted ? (
                        <div className="glass-card" style={{ textAlign: 'center', padding: '3rem' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
                            <h3 style={{ color: 'var(--glow-cyan)', marginBottom: '0.5rem' }}>Message Ready!</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                Your email client should open with the message ready to send.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="glass-card">
                            <div className="form-group">
                                <label className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder="Your name"
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-input"
                                    placeholder="your@email.com"
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Message</label>
                                <textarea
                                    className="form-textarea"
                                    placeholder="Your message..."
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    required
                                />
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                Send Message
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>

            <footer className="footer">
                <p className="footer-text">© 2026 Shubham Ghule</p>
            </footer>
        </div>
    )
}

export default Contact
