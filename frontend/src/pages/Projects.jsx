import { useState } from 'react'
import { motion } from 'framer-motion'

function Projects() {
    const [activeTab, setActiveTab] = useState(0)
    const [clvInputs, setClvInputs] = useState({
        tenure: 24,
        monthlySpend: 2500,
        transactions: 12,
        age: 35,
        creditScore: 720
    })
    const [sentimentText, setSentimentText] = useState(
        "I absolutely love this product! It's amazing and exceeded all my expectations."
    )
    const [kmeansParams, setKmeansParams] = useState({ clusters: 4, samples: 200 })

    // Simple CLV calculation (client-side, no backend needed for demo)
    const predictCLV = () => {
        const { tenure, monthlySpend, transactions, age, creditScore } = clvInputs
        return Math.round(tenure * 50 + monthlySpend * 2.5 + transactions * 100 + creditScore * 10)
    }

    // Simple sentiment analysis (client-side)
    const analyzeSentiment = () => {
        const positiveWords = ['love', 'amazing', 'great', 'excellent', 'awesome', 'fantastic', 'wonderful', 'happy']
        const negativeWords = ['hate', 'terrible', 'awful', 'bad', 'horrible', 'disappointed', 'angry']

        const text = sentimentText.toLowerCase()
        let score = 0
        positiveWords.forEach(word => { if (text.includes(word)) score += 0.2 })
        negativeWords.forEach(word => { if (text.includes(word)) score -= 0.2 })

        return {
            polarity: Math.max(-1, Math.min(1, score)),
            sentiment: score > 0.1 ? '🍄 POSITIVE' : score < -0.1 ? '💀 NEGATIVE' : '😐 NEUTRAL',
            powerLevel: Math.round((score + 1) * 50)
        }
    }

    const tabs = [
        { label: '🎯 WORLD 2-1', title: 'SEGMENTATION' },
        { label: '💰 WORLD 2-2', title: 'CLV PREDICTION' },
        { label: '💬 WORLD 2-3', title: 'SENTIMENT' }
    ]

    return (
        <div className="page-container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ textAlign: 'center', marginBottom: '2rem' }}
            >
                <span className="mario-badge" style={{ background: 'linear-gradient(180deg, var(--mario-red) 0%, #800000 100%)' }}>
                    🎮 WORLD 2: BOSS BATTLES
                </span>
            </motion.div>

            {/* Tabs */}
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', justifyContent: 'center' }}>
                {tabs.map((tab, i) => (
                    <button
                        key={i}
                        onClick={() => setActiveTab(i)}
                        style={{
                            fontFamily: 'var(--font-pixel)',
                            fontSize: '0.6rem',
                            padding: '0.75rem 1.5rem',
                            background: activeTab === i
                                ? 'linear-gradient(180deg, var(--mario-red) 0%, #B01010 100%)'
                                : 'linear-gradient(180deg, #555 0%, #333 100%)',
                            color: 'white',
                            border: '4px solid #000',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            boxShadow: '3px 3px 0 #000'
                        }}
                    >
                        {tab.label}
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
                {/* Segmentation Tab */}
                {activeTab === 0 && (
                    <div className="castle-card">
                        <span className="mario-badge">BOSS: SEGMENTATION BOWSER</span>
                        <h3 style={{ fontFamily: 'var(--font-pixel)', fontSize: '1rem', color: 'var(--coin-gold)', margin: '1rem 0' }}>
                            🎯 K-MEANS CLUSTERING ARENA
                        </h3>
                        <p style={{ color: '#ccc', marginBottom: '1rem' }}>Defeat the boss by finding the optimal customer segments!</p>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
                            <div className="brick-block">
                                <p style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.6rem', color: 'white', marginBottom: '1rem' }}>⚙️ POWER-UPS</p>
                                <label style={{ color: 'white', fontSize: '0.8rem', display: 'block', marginBottom: '0.5rem' }}>
                                    🍄 Clusters: {kmeansParams.clusters}
                                </label>
                                <input
                                    type="range"
                                    min="2" max="8"
                                    value={kmeansParams.clusters}
                                    onChange={(e) => setKmeansParams({ ...kmeansParams, clusters: +e.target.value })}
                                    style={{ width: '100%' }}
                                />
                                <label style={{ color: 'white', fontSize: '0.8rem', display: 'block', margin: '1rem 0 0.5rem' }}>
                                    🪙 Samples: {kmeansParams.samples}
                                </label>
                                <input
                                    type="range"
                                    min="100" max="500" step="50"
                                    value={kmeansParams.samples}
                                    onChange={(e) => setKmeansParams({ ...kmeansParams, samples: +e.target.value })}
                                    style={{ width: '100%' }}
                                />
                            </div>
                            <div style={{
                                background: '#000020',
                                border: '4px solid var(--mario-blue)',
                                borderRadius: '8px',
                                padding: '2rem',
                                textAlign: 'center',
                                minHeight: '300px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <p style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.7rem', color: 'var(--coin-gold)' }}>
                                    📊 DEMO VISUALIZATION
                                </p>
                                <p style={{ color: '#888', marginTop: '1rem', fontSize: '0.9rem' }}>
                                    {kmeansParams.clusters} clusters × {kmeansParams.samples} samples
                                </p>
                                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                                    {Array.from({ length: kmeansParams.clusters }).map((_, i) => (
                                        <div key={i} style={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '50%',
                                            background: ['#E52521', '#049CD8', '#43B047', '#FBD000', '#FF6B00', '#9932CC', '#FF69B4', '#00CED1'][i],
                                            border: '2px solid white'
                                        }} />
                                    ))}
                                </div>
                                <p style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.6rem', color: 'var(--mario-green)', marginTop: '2rem' }}>
                                    🏆 BOSS DEFEATED!
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* CLV Tab */}
                {activeTab === 1 && (
                    <div className="castle-card">
                        <span className="mario-badge">BOSS: CLV KOOPA</span>
                        <h3 style={{ fontFamily: 'var(--font-pixel)', fontSize: '1rem', color: 'var(--coin-gold)', margin: '1rem 0' }}>
                            💰 CUSTOMER LIFETIME VALUE PREDICTOR
                        </h3>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <div className="brick-block">
                                <p style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.6rem', color: 'white', marginBottom: '1rem' }}>🎮 INPUT STATS</p>

                                {Object.entries(clvInputs).map(([key, value]) => (
                                    <div key={key} style={{ marginBottom: '1rem' }}>
                                        <label style={{ color: 'white', fontSize: '0.8rem', display: 'block', marginBottom: '0.25rem' }}>
                                            {key.replace(/([A-Z])/g, ' $1').toUpperCase()}: {value}
                                        </label>
                                        <input
                                            type="range"
                                            min={key === 'creditScore' ? 300 : key === 'age' ? 18 : 1}
                                            max={key === 'creditScore' ? 850 : key === 'age' ? 80 : key === 'monthlySpend' ? 10000 : key === 'tenure' ? 120 : 50}
                                            value={value}
                                            onChange={(e) => setClvInputs({ ...clvInputs, [key]: +e.target.value })}
                                            style={{ width: '100%' }}
                                        />
                                    </div>
                                ))}
                            </div>

                            <div style={{
                                background: '#000',
                                border: '4px solid var(--coin-gold)',
                                padding: '2rem',
                                textAlign: 'center'
                            }}>
                                <p style={{ fontSize: '4rem' }}>🪙</p>
                                <p style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.8rem', color: 'white', margin: '1rem 0' }}>
                                    PREDICTED CLV
                                </p>
                                <p style={{
                                    fontFamily: 'var(--font-pixel)',
                                    fontSize: '1.5rem',
                                    color: 'var(--coin-gold)',
                                    textShadow: '0 0 20px rgba(255,215,0,0.5)'
                                }}>
                                    ${predictCLV().toLocaleString()}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Sentiment Tab */}
                {activeTab === 2 && (
                    <div className="castle-card">
                        <span className="mario-badge">BOSS: SENTIMENT GOOMBA</span>
                        <h3 style={{ fontFamily: 'var(--font-pixel)', fontSize: '1rem', color: 'var(--coin-gold)', margin: '1rem 0' }}>
                            💬 REAL-TIME SENTIMENT ANALYZER
                        </h3>

                        <textarea
                            value={sentimentText}
                            onChange={(e) => setSentimentText(e.target.value)}
                            style={{
                                width: '100%',
                                height: '100px',
                                background: 'rgba(0,0,0,0.8)',
                                border: '4px solid var(--coin-gold)',
                                borderRadius: '4px',
                                color: 'white',
                                padding: '1rem',
                                fontSize: '1rem',
                                fontFamily: 'var(--font-main)',
                                resize: 'none'
                            }}
                            placeholder="Enter text to analyze..."
                        />

                        {sentimentText && (
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '1rem' }}>
                                {(() => {
                                    const result = analyzeSentiment()
                                    const color = result.polarity > 0.1 ? 'var(--mario-green)' : result.polarity < -0.1 ? 'var(--mario-red)' : 'var(--coin-gold)'
                                    return (
                                        <>
                                            <div style={{ background: '#000', border: `4px solid ${color}`, padding: '1.5rem', textAlign: 'center' }}>
                                                <p style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.6rem', color: 'white' }}>SENTIMENT</p>
                                                <p style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.8rem', color, marginTop: '0.5rem' }}>{result.sentiment}</p>
                                            </div>
                                            <div style={{ background: '#000', border: '4px solid var(--coin-gold)', padding: '1.5rem', textAlign: 'center' }}>
                                                <p style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.6rem', color: 'white' }}>POLARITY</p>
                                                <p style={{ fontFamily: 'var(--font-pixel)', fontSize: '1.2rem', color: 'var(--coin-gold)', marginTop: '0.5rem' }}>{result.polarity.toFixed(2)}</p>
                                            </div>
                                            <div style={{ background: '#000', border: '4px solid var(--mario-blue)', padding: '1.5rem', textAlign: 'center' }}>
                                                <p style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.6rem', color: 'white' }}>POWER LVL</p>
                                                <p style={{ fontFamily: 'var(--font-pixel)', fontSize: '1.2rem', color: 'var(--mario-blue)', marginTop: '0.5rem' }}>{result.powerLevel}%</p>
                                            </div>
                                        </>
                                    )
                                })()}
                            </div>
                        )}
                    </div>
                )}
            </motion.div>

            <div className="ground-footer">
                <p style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.8rem', color: 'var(--coin-gold)', textShadow: '2px 2px 0 #000' }}>
                    🍄 ALL BOSSES DEFEATED! 🍄
                </p>
            </div>
        </div>
    )
}

export default Projects
