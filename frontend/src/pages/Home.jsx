import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const stats = [
    { label: '🪙 PROFIT', value: '$5M+' },
    { label: '💰 REVENUE', value: '$1B+' },
    { label: '📈 CLV BOOST', value: '+30%' },
    { label: '🎮 PRODUCTS', value: '22' }
]

const skills = {
    fire: ['Python', 'SQL', 'Spark', 'ML', 'Hive', 'A/B Test'],
    star: ['Strategy', 'Roadmap', 'Pendo', 'JIRA', 'Figma', 'UX/UI'],
    leaf: ['React', 'AWS', 'Docker', 'CI/CD', 'Git', 'APIs']
}

const demos = [
    { world: '2-1', title: '🎯 SEGMENTATION', desc: 'K-Means clustering boss battle!' },
    { world: '2-2', title: '💰 CLV PREDICT', desc: 'Collect coins with ML!' },
    { world: '2-3', title: '💬 SENTIMENT', desc: 'NLP power-up analysis!' }
]

function Home() {
    return (
        <div className="page-container">
            {/* Hero Section */}
            <motion.div
                className="hero-section"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ textAlign: 'center', padding: '2rem 0' }}
            >
                <span className="mario-badge">🍄 WORLD 1-1: HOME</span>
                <h1 className="pixel-title">SHUBHAM GHULE</h1>
                <p style={{
                    fontFamily: 'var(--font-pixel)',
                    fontSize: '0.85rem',
                    color: 'white',
                    textShadow: '3px 3px 0px #000'
                }}>
                    PRODUCT MANAGER & ANALYTICS HERO
                </p>
            </motion.div>

            {/* Stats HUD */}
            <motion.div
                className="game-hud"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {stats.map((stat, i) => (
                    <div key={i} className="hud-item">
                        <span>{stat.label}</span>
                        <span className="hud-value">{stat.value}</span>
                    </div>
                ))}
            </motion.div>

            {/* Bio Section */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', marginTop: '2rem' }}>
                <motion.div
                    className="question-block"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <h3 style={{
                        fontFamily: 'var(--font-pixel)',
                        fontSize: '1rem',
                        color: '#000',
                        marginBottom: '1rem'
                    }}>
                        ❓ WHO AM I?
                    </h3>
                    <p style={{ color: '#333', fontSize: '1rem', lineHeight: 1.9 }}>
                        I'm an <strong>Analytics & Strategy professional</strong> at <strong>American Express</strong>
                        with power-ups in <strong>Machine Learning</strong>, <strong>Product Strategy</strong>, and
                        <strong>Data Engineering</strong>.
                    </p>
                    <p style={{ color: '#333', fontSize: '1rem', lineHeight: 1.9, marginTop: '1rem' }}>
                        Just like Mario collects coins, I collect <strong>$5M+ in profit</strong> and
                        <strong>$1B+ in billed business</strong> through analytics magic! 🍄
                    </p>
                </motion.div>

                <motion.div
                    style={{ textAlign: 'center', padding: '2rem' }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div style={{
                        fontSize: '9rem',
                        animation: 'titleFloat 3s ease-in-out infinite',
                        filter: 'drop-shadow(5px 5px 0 #000)'
                    }}>🦸</div>
                    <p style={{
                        fontFamily: 'var(--font-pixel)',
                        fontSize: '0.75rem',
                        color: 'white',
                        textShadow: '3px 3px #000'
                    }}>
                        LVL 99 PM
                    </p>
                </motion.div>
            </div>

            {/* Skills Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <div className="pipe-header" style={{ marginTop: '2rem' }}>
                    🍄 POWER-UPS & ABILITIES
                </div>
                <div className="skills-grid">
                    <div className="brick-block">
                        <h4 style={{
                            color: 'white',
                            fontFamily: 'var(--font-pixel)',
                            fontSize: '0.7rem',
                            marginBottom: '1rem',
                            textShadow: '2px 2px 0 #000'
                        }}>
                            🔥 FIRE FLOWER
                        </h4>
                        {skills.fire.map(skill => (
                            <span key={skill} className="powerup fire">{skill}</span>
                        ))}
                    </div>
                    <div className="brick-block">
                        <h4 style={{
                            color: 'white',
                            fontFamily: 'var(--font-pixel)',
                            fontSize: '0.7rem',
                            marginBottom: '1rem',
                            textShadow: '2px 2px 0 #000'
                        }}>
                            ⭐ STAR POWER
                        </h4>
                        {skills.star.map(skill => (
                            <span key={skill} className="powerup star">{skill}</span>
                        ))}
                    </div>
                    <div className="brick-block">
                        <h4 style={{
                            color: 'white',
                            fontFamily: 'var(--font-pixel)',
                            fontSize: '0.7rem',
                            marginBottom: '1rem',
                            textShadow: '2px 2px 0 #000'
                        }}>
                            🍃 LEAF POWER
                        </h4>
                        {skills.leaf.map(skill => (
                            <span key={skill} className="powerup leaf">{skill}</span>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* ML Demos Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <div className="pipe-header" style={{ marginTop: '2rem' }}>
                    🏰 CASTLES TO EXPLORE (ML DEMOS)
                </div>
                <div className="demos-grid">
                    {demos.map((demo, i) => (
                        <Link to="/projects" key={i} style={{ textDecoration: 'none' }}>
                            <div className="castle-card">
                                <span style={{
                                    fontFamily: 'var(--font-pixel)',
                                    fontSize: '0.75rem',
                                    color: 'var(--coin-gold)',
                                    textShadow: '1px 1px 0 #000'
                                }}>
                                    WORLD {demo.world}
                                </span>
                                <h4 style={{
                                    color: 'white',
                                    fontFamily: 'var(--font-pixel)',
                                    fontSize: '0.8rem',
                                    margin: '1rem 0'
                                }}>
                                    {demo.title}
                                </h4>
                                <p style={{ color: '#bbb', fontSize: '0.9rem' }}>{demo.desc}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </motion.div>

            {/* Footer */}
            <div className="ground-footer">
                <p style={{
                    fontFamily: 'var(--font-pixel)',
                    fontSize: '0.8rem',
                    color: 'var(--coin-gold)',
                    textShadow: '2px 2px 0 #000'
                }}>
                    🍄 THANK YOU MARIO! 🍄
                </p>
                <p style={{ color: '#ccc', fontSize: '0.85rem', marginTop: '0.75rem' }}>
                    © 2026 Shubham Ghule | Built with React 🚀
                </p>
            </div>
        </div>
    )
}

export default Home
