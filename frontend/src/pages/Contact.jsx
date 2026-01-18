import { useState } from 'react'
import { motion } from 'framer-motion'

const contactLinks = [
    { icon: '📧', label: 'EMAIL', href: 'mailto:shubhamrghule15@gmail.com' },
    { icon: '🔗', label: 'LINKEDIN', href: 'https://linkedin.com/in/shubhamghule' },
    { icon: '💻', label: 'GITHUB', href: 'https://github.com/shubhamghule' },
    { icon: '📱', label: 'PHONE', href: 'tel:+917720911123' }
]

function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', company: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (form.name && form.email && form.message) {
            const subject = form.subject || `Portfolio Contact from ${form.name}`
            const body = `Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0ACompany: ${form.company || 'Not specified'}%0D%0A%0D%0AMessage:%0D%0A${form.message}`
            window.open(`mailto:shubhamrghule15@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`, '_blank')
            setSubmitted(true)
        }
    }

    return (
        <div className="page-container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ textAlign: 'center', marginBottom: '2rem' }}
            >
                <span className="mario-badge" style={{ background: 'linear-gradient(180deg, var(--pipe-green) 0%, #006600 100%)' }}>
                    🟢 WORLD 5: WARP ZONE
                </span>
                <h1 style={{
                    fontFamily: 'var(--font-pixel)',
                    fontSize: '1.3rem',
                    color: 'var(--pipe-green)',
                    textShadow: '4px 4px 0px #000',
                    marginTop: '1rem'
                }}>
                    🟢 WARP PIPES: CONTACT 🟢
                </h1>
                <p style={{ color: '#fff', fontSize: '1.1rem', marginTop: '1rem', textShadow: '2px 2px 0 rgba(0,0,0,0.5)' }}>
                    Jump into a warp pipe to connect with me! 🍄
                </p>
            </motion.div>

            {/* Warp Pipes */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
                {contactLinks.map((link, i) => (
                    <motion.a
                        key={i}
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="warp-pipe"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ y: -15, scale: 1.05 }}
                    >
                        <p style={{ fontSize: '3rem', margin: 0, filter: 'drop-shadow(2px 2px 0 #000)' }}>{link.icon}</p>
                        <p style={{
                            fontFamily: 'var(--font-pixel)',
                            fontSize: '0.6rem',
                            color: 'white',
                            marginTop: '0.75rem',
                            textShadow: '2px 2px 0 #000'
                        }}>
                            {link.label}
                        </p>
                    </motion.a>
                ))}
            </div>

            {/* 1-UP Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                style={{
                    background: 'linear-gradient(180deg, #00D800 0%, var(--pipe-green) 50%, #006800 100%)',
                    border: '6px solid #000',
                    borderRadius: '12px',
                    padding: '2rem',
                    textAlign: 'center',
                    boxShadow: '8px 8px 0px rgba(0,0,0,0.5), 0 0 40px rgba(0,168,0,0.3)',
                    maxWidth: '500px',
                    margin: '0 auto 2rem'
                }}
            >
                <motion.p
                    style={{ fontSize: '5rem', margin: 0, filter: 'drop-shadow(3px 3px 0 #000)' }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    🍄
                </motion.p>
                <p style={{ fontFamily: 'var(--font-pixel)', fontSize: '1rem', color: 'white', margin: '0.75rem 0', textShadow: '2px 2px 0 #000' }}>
                    1-UP!
                </p>
                <p style={{ color: '#ddd', fontSize: '0.95rem' }}>
                    Open to new opportunities and collaborations!
                </p>
                <p style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.65rem', color: '#00FF00', marginTop: '1rem', textShadow: '0 0 10px #00FF00' }}>
                    ● ONLINE
                </p>
            </motion.div>

            {/* Contact Form */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <p style={{
                    fontFamily: 'var(--font-pixel)',
                    fontSize: '0.9rem',
                    color: 'var(--coin-gold)',
                    textAlign: 'center',
                    margin: '2rem 0',
                    textShadow: '2px 2px 0 #000'
                }}>
                    📨 SEND A MESSAGE
                </p>

                {submitted ? (
                    <div style={{ textAlign: 'center', padding: '2rem' }}>
                        <p style={{ fontSize: '4rem' }}>✅</p>
                        <p style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.8rem', color: 'var(--mario-green)', marginTop: '1rem' }}>
                            1-UP SENT!
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                            <input
                                type="text"
                                placeholder="🎮 YOUR NAME"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                required
                                style={inputStyle}
                            />
                            <input
                                type="email"
                                placeholder="📧 YOUR EMAIL"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                required
                                style={inputStyle}
                            />
                            <input
                                type="text"
                                placeholder="📝 SUBJECT"
                                value={form.subject}
                                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                                style={inputStyle}
                            />
                            <input
                                type="text"
                                placeholder="🏢 COMPANY (Optional)"
                                value={form.company}
                                onChange={(e) => setForm({ ...form, company: e.target.value })}
                                style={inputStyle}
                            />
                        </div>
                        <textarea
                            placeholder="💬 MESSAGE"
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            required
                            style={{ ...inputStyle, height: '150px', resize: 'none', marginBottom: '1rem' }}
                        />
                        <button
                            type="submit"
                            style={{
                                width: '100%',
                                fontFamily: 'var(--font-pixel)',
                                fontSize: '0.7rem',
                                background: 'linear-gradient(180deg, var(--pipe-green) 0%, #006600 100%)',
                                border: '4px solid #000',
                                borderRadius: '4px',
                                color: 'white',
                                padding: '1rem 2rem',
                                cursor: 'pointer',
                                boxShadow: '4px 4px 0px #000',
                                transition: 'transform 0.15s ease'
                            }}
                            onMouseEnter={(e) => e.target.style.transform = 'translateY(-4px)'}
                            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                        >
                            🍄 SEND 1-UP
                        </button>
                    </form>
                )}
            </motion.div>

            <div className="ground-footer">
                <p style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.8rem', color: 'var(--coin-gold)', textShadow: '2px 2px 0 #000' }}>
                    🍄 THANK YOU MARIO! 🍄
                </p>
            </div>
        </div>
    )
}

const inputStyle = {
    width: '100%',
    background: 'rgba(0,0,0,0.8)',
    border: '4px solid var(--coin-gold)',
    borderRadius: '4px',
    color: 'white',
    padding: '1rem',
    fontSize: '1rem',
    fontFamily: 'var(--font-main)'
}

export default Contact
