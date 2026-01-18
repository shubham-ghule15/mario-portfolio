import { motion } from 'framer-motion'

function Resume() {
    const resumeUrl = '/resume.pdf'

    return (
        <div className="page-container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ textAlign: 'center', marginBottom: '2rem' }}
            >
                <span className="mario-badge" style={{ background: 'linear-gradient(180deg, var(--coin-gold) 0%, #CC9900 100%)', color: '#000' }}>
                    ⭐ WORLD 4: RESUME
                </span>
                <h1 style={{
                    fontFamily: 'var(--font-pixel)',
                    fontSize: '1.3rem',
                    color: 'var(--coin-gold)',
                    textShadow: '4px 4px 0px #000',
                    marginTop: '1rem'
                }}>
                    ⭐ COLLECT YOUR STAR ⭐
                </h1>
            </motion.div>

            {/* Star Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                    background: 'linear-gradient(135deg, var(--coin-gold) 0%, #FFE44D 30%, #CC9900 100%)',
                    border: '8px solid #000',
                    borderRadius: '16px',
                    padding: '2.5rem',
                    textAlign: 'center',
                    boxShadow: '10px 10px 0px rgba(0,0,0,0.5), 0 0 50px rgba(255,215,0,0.4)',
                    maxWidth: '500px',
                    margin: '0 auto 2rem'
                }}
            >
                <motion.span
                    style={{ fontSize: '6rem', display: 'inline-block', filter: 'drop-shadow(0 0 20px rgba(255,215,0,0.8))' }}
                    animate={{ rotate: [0, 15, 0, -15, 0], scale: [1, 1.15, 1, 1.15, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    ⭐
                </motion.span>

                <p style={{ fontFamily: 'var(--font-pixel)', fontSize: '1rem', color: '#000', margin: '1.5rem 0 0.5rem' }}>
                    SHUBHAM GHULE
                </p>
                <p style={{ color: '#333', fontWeight: 700, fontSize: '1rem' }}>
                    Analytics & Strategy Hero
                </p>
                <p style={{ color: '#555', fontSize: '0.9rem', margin: '1rem 0' }}>
                    IIM Bangalore | 3+ Years XP | 22+ Products
                </p>

                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <span style={{
                        background: '#000',
                        color: 'var(--coin-gold)',
                        padding: '0.3rem 0.7rem',
                        fontFamily: 'var(--font-pixel)',
                        fontSize: '0.5rem',
                        borderRadius: '4px'
                    }}>
                        $5M+ PROFIT
                    </span>
                    <span style={{
                        background: '#000',
                        color: 'var(--coin-gold)',
                        padding: '0.3rem 0.7rem',
                        fontFamily: 'var(--font-pixel)',
                        fontSize: '0.5rem',
                        borderRadius: '4px'
                    }}>
                        $1B+ REVENUE
                    </span>
                </div>
            </motion.div>

            {/* Download Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{ textAlign: 'center', marginBottom: '2rem' }}
            >
                <a
                    href={resumeUrl}
                    download="Shubham_Ghule_Resume.pdf"
                    style={{
                        display: 'inline-block',
                        fontFamily: 'var(--font-pixel)',
                        fontSize: '0.75rem',
                        background: 'linear-gradient(180deg, var(--mario-red) 0%, #B01010 100%)',
                        border: '5px solid #000',
                        borderRadius: '6px',
                        color: 'white',
                        padding: '1.2rem 2.5rem',
                        textDecoration: 'none',
                        boxShadow: '5px 5px 0px #000',
                        transition: 'transform 0.15s ease, box-shadow 0.15s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-5px)'
                        e.target.style.boxShadow = '5px 12px 0px #000'
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)'
                        e.target.style.boxShadow = '5px 5px 0px #000'
                    }}
                >
                    ⬇️ DOWNLOAD STAR POWER
                </a>
            </motion.div>

            {/* PDF Preview Placeholder */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <p style={{
                    fontFamily: 'var(--font-pixel)',
                    fontSize: '0.9rem',
                    color: 'var(--coin-gold)',
                    textShadow: '3px 3px 0 #000',
                    textAlign: 'center',
                    margin: '2rem 0 1rem'
                }}>
                    📜 SCROLL OF POWER 📜
                </p>

                <div style={{
                    border: '8px solid #000',
                    borderRadius: '12px',
                    boxShadow: '8px 8px 0px rgba(0,0,0,0.5)',
                    overflow: 'hidden',
                    background: '#1a1a1a',
                    minHeight: '600px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <div style={{ textAlign: 'center', padding: '3rem' }}>
                        <p style={{ fontSize: '4rem' }}>📄</p>
                        <p style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.7rem', color: 'white', marginTop: '1rem' }}>
                            Resume Preview
                        </p>
                        <p style={{ color: '#888', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                            Click download button above to get the full PDF
                        </p>
                    </div>
                </div>
            </motion.div>

            <div className="ground-footer">
                <p style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.8rem', color: 'var(--coin-gold)', textShadow: '2px 2px 0 #000' }}>
                    ⭐ STAR COLLECTED! ⭐
                </p>
            </div>
        </div>
    )
}

export default Resume
