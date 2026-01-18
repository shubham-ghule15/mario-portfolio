import { useState } from 'react'
import { motion } from 'framer-motion'

function Projects() {
    const [activeTab, setActiveTab] = useState(0)
    const [clvInputs, setClvInputs] = useState({
        tenure: 24,
        monthlySpend: 2500,
        transactions: 12,
        creditScore: 720
    })
    const [sentimentText, setSentimentText] = useState(
        "I absolutely love this product! It's amazing and exceeded all my expectations."
    )

    // Simple CLV calculation
    const predictCLV = () => {
        const { tenure, monthlySpend, transactions, creditScore } = clvInputs
        return Math.round(tenure * 50 + monthlySpend * 2.5 + transactions * 100 + creditScore * 10)
    }

    // Simple sentiment analysis
    const analyzeSentiment = () => {
        const positiveWords = ['love', 'amazing', 'great', 'excellent', 'awesome', 'fantastic', 'wonderful', 'happy', 'best']
        const negativeWords = ['hate', 'terrible', 'awful', 'bad', 'horrible', 'disappointed', 'angry', 'worst']

        const text = sentimentText.toLowerCase()
        let score = 0
        positiveWords.forEach(word => { if (text.includes(word)) score += 0.2 })
        negativeWords.forEach(word => { if (text.includes(word)) score -= 0.2 })

        return {
            polarity: Math.max(-1, Math.min(1, score)),
            sentiment: score > 0.1 ? 'Positive' : score < -0.1 ? 'Negative' : 'Neutral',
            confidence: Math.round(Math.abs(score) * 100)
        }
    }

    const tabs = ['Segmentation', 'CLV Prediction', 'Sentiment Analysis']

    return (
        <div className="page-container">
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ marginTop: '2rem' }}
            >
                <h1 className="section-title">Analytics Projects</h1>
                <p className="section-subtitle">Interactive machine learning demonstrations</p>
            </motion.div>

            {/* Tabs */}
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', justifyContent: 'center' }}>
                {tabs.map((tab, i) => (
                    <button
                        key={i}
                        onClick={() => setActiveTab(i)}
                        className={activeTab === i ? 'btn btn-primary' : 'btn btn-outline'}
                        style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
            >
                {/* Segmentation */}
                {activeTab === 0 && (
                    <div className="glass-card">
                        <h2 className="card-title">K-Means Customer Segmentation</h2>
                        <p className="card-text" style={{ marginBottom: '2rem' }}>
                            Cluster analysis for identifying high-value customer segments and optimizing marketing campaigns.
                        </p>

                        <div style={{
                            background: 'rgba(0, 212, 255, 0.05)',
                            border: '1px solid rgba(0, 212, 255, 0.2)',
                            borderRadius: '16px',
                            padding: '2rem',
                            textAlign: 'center'
                        }}>
                            <p style={{ color: 'var(--glow-cyan)', marginBottom: '1rem' }}>Demo Visualization</p>
                            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} style={{
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        background: ['var(--glow-cyan)', 'var(--glow-purple)', 'var(--glow-pink)', '#667eea'][i - 1],
                                        opacity: 0.8,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#000',
                                        fontWeight: 600
                                    }}>
                                        Cluster {i}
                                    </div>
                                ))}
                            </div>
                            <p style={{ color: 'var(--text-secondary)', marginTop: '1.5rem', fontSize: '0.9rem' }}>
                                Identified 4 distinct customer segments with 92% accuracy
                            </p>
                        </div>
                    </div>
                )}

                {/* CLV */}
                {activeTab === 1 && (
                    <div className="glass-card">
                        <h2 className="card-title">Customer Lifetime Value Predictor</h2>
                        <p className="card-text" style={{ marginBottom: '2rem' }}>
                            Gradient Boosting model for predicting customer lifetime value based on behavioral features.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <div>
                                {Object.entries(clvInputs).map(([key, value]) => (
                                    <div key={key} style={{ marginBottom: '1.5rem' }}>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                                            {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}: {value}
                                        </label>
                                        <input
                                            type="range"
                                            min={key === 'creditScore' ? 300 : 1}
                                            max={key === 'creditScore' ? 850 : key === 'monthlySpend' ? 10000 : key === 'tenure' ? 120 : 50}
                                            value={value}
                                            onChange={(e) => setClvInputs({ ...clvInputs, [key]: +e.target.value })}
                                            style={{ width: '100%', accentColor: 'var(--glow-cyan)' }}
                                        />
                                    </div>
                                ))}
                            </div>

                            <div style={{
                                background: 'rgba(0, 0, 0, 0.3)',
                                border: '1px solid rgba(0, 212, 255, 0.3)',
                                borderRadius: '16px',
                                padding: '2rem',
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Predicted CLV</p>
                                <p style={{
                                    fontSize: '3rem',
                                    fontWeight: 700,
                                    background: 'var(--gradient-accent)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>
                                    ${predictCLV().toLocaleString()}
                                </p>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                                    30% accuracy improvement over baseline
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Sentiment */}
                {activeTab === 2 && (
                    <div className="glass-card">
                        <h2 className="card-title">Real-Time Sentiment Analyzer</h2>
                        <p className="card-text" style={{ marginBottom: '2rem' }}>
                            NLP-powered sentiment analysis for customer feedback classification.
                        </p>

                        <textarea
                            value={sentimentText}
                            onChange={(e) => setSentimentText(e.target.value)}
                            className="form-textarea"
                            placeholder="Enter text to analyze..."
                            style={{ marginBottom: '1.5rem' }}
                        />

                        {sentimentText && (
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                                {(() => {
                                    const result = analyzeSentiment()
                                    const color = result.polarity > 0.1 ? 'var(--glow-cyan)' : result.polarity < -0.1 ? 'var(--glow-pink)' : 'var(--glow-purple)'
                                    return (
                                        <>
                                            <div style={{
                                                background: 'rgba(0,0,0,0.3)',
                                                border: `1px solid ${color}`,
                                                borderRadius: '12px',
                                                padding: '1.5rem',
                                                textAlign: 'center'
                                            }}>
                                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Sentiment</p>
                                                <p style={{ color, fontSize: '1.25rem', fontWeight: 600, marginTop: '0.5rem' }}>{result.sentiment}</p>
                                            </div>
                                            <div style={{
                                                background: 'rgba(0,0,0,0.3)',
                                                border: '1px solid var(--glow-cyan)',
                                                borderRadius: '12px',
                                                padding: '1.5rem',
                                                textAlign: 'center'
                                            }}>
                                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Polarity</p>
                                                <p style={{ color: 'var(--glow-cyan)', fontSize: '1.25rem', fontWeight: 600, marginTop: '0.5rem' }}>{result.polarity.toFixed(2)}</p>
                                            </div>
                                            <div style={{
                                                background: 'rgba(0,0,0,0.3)',
                                                border: '1px solid var(--glow-purple)',
                                                borderRadius: '12px',
                                                padding: '1.5rem',
                                                textAlign: 'center'
                                            }}>
                                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Confidence</p>
                                                <p style={{ color: 'var(--glow-purple)', fontSize: '1.25rem', fontWeight: 600, marginTop: '0.5rem' }}>{result.confidence}%</p>
                                            </div>
                                        </>
                                    )
                                })()}
                            </div>
                        )}
                    </div>
                )}
            </motion.div>

            <footer className="footer">
                <p className="footer-text">Interactive demos powered by React</p>
            </footer>
        </div>
    )
}

export default Projects
