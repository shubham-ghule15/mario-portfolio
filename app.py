"""
🍄 Shubham Ghule - Mario-Themed Product & Analytics Portfolio 🍄
Enhanced with 3D effects and polished styling
"""

import streamlit as st

# Page configuration
st.set_page_config(
    page_title="Shubham Ghule | 🍄 Player Profile",
    page_icon="🍄",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Enhanced Mario-themed CSS with 3D effects
st.markdown("""
<style>
    /* Import fonts */
    @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Inter:wght@400;500;600;700;800&display=swap');
    
    /* Mario Color Palette */
    :root {
        --mario-red: #E52521;
        --mario-blue: #049CD8;
        --mario-yellow: #FBD000;
        --mario-green: #43B047;
        --mario-brown: #8B4513;
        --mario-sky: #5C94FC;
        --mario-brick: #C84C0C;
        --coin-gold: #FFD700;
        --pipe-green: #00A800;
        --cloud-white: #F8F8FF;
    }
    
    /* Consistent Mario Sky Background */
    .stApp {
        background: linear-gradient(180deg, 
            #5C94FC 0%, 
            #6BA4FF 20%, 
            #7BB4FF 40%, 
            #8BC4FF 60%, 
            #5C94FC 100%);
        font-family: 'Inter', sans-serif;
        min-height: 100vh;
    }
    
    /* Floating clouds decoration */
    .stApp::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 100%;
        background-image: 
            radial-gradient(ellipse 120px 80px at 10% 15%, rgba(255,255,255,0.8) 0%, transparent 70%),
            radial-gradient(ellipse 100px 60px at 85% 10%, rgba(255,255,255,0.7) 0%, transparent 70%),
            radial-gradient(ellipse 80px 50px at 45% 8%, rgba(255,255,255,0.6) 0%, transparent 70%),
            radial-gradient(ellipse 90px 55px at 70% 20%, rgba(255,255,255,0.5) 0%, transparent 70%);
        pointer-events: none;
        z-index: 0;
    }
    
    /* Hide Streamlit elements */
    #MainMenu {visibility: hidden;}
    footer {visibility: hidden;}
    header {visibility: hidden;}
    
    /* Sidebar - Castle Brick Style with 3D effect */
    [data-testid="stSidebar"] {
        background: linear-gradient(180deg, #5a4a4a 0%, #3a2a2a 100%);
        border-right: 6px solid #2a1a1a;
        box-shadow: 
            inset -5px 0 15px rgba(0,0,0,0.5),
            5px 0 20px rgba(0,0,0,0.3);
        background-image: 
            repeating-linear-gradient(
                0deg,
                transparent,
                transparent 24px,
                rgba(0,0,0,0.2) 24px,
                rgba(0,0,0,0.2) 26px
            ),
            repeating-linear-gradient(
                90deg,
                transparent,
                transparent 48px,
                rgba(0,0,0,0.2) 48px,
                rgba(0,0,0,0.2) 50px
            );
    }
    
    /* 3D Pixel Title */
    .pixel-title {
        font-family: 'Press Start 2P', cursive;
        font-size: 2.5rem;
        color: var(--mario-yellow);
        text-shadow: 
            0 1px 0 #CC9900,
            0 2px 0 #BB8800,
            0 3px 0 #AA7700,
            0 4px 0 #996600,
            0 5px 0 #885500,
            0 6px 0 #774400,
            0 7px 15px rgba(0,0,0,0.5),
            4px 4px 0px var(--mario-red),
            8px 8px 0px #000;
        text-align: center;
        margin: 1rem 0;
        animation: float3d 3s ease-in-out infinite;
    }
    
    @keyframes float3d {
        0%, 100% { transform: translateY(0) rotateX(0); }
        50% { transform: translateY(-10px) rotateX(5deg); }
    }
    
    /* 3D Mario World Badge */
    .mario-badge {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        background: linear-gradient(180deg, var(--mario-red) 0%, #B01010 100%);
        border: 4px solid #000;
        border-radius: 0;
        padding: 0.5rem 1.5rem;
        font-family: 'Press Start 2P', cursive;
        font-size: 0.7rem;
        color: white;
        box-shadow: 
            4px 4px 0px #000,
            inset 0 2px 0 rgba(255,255,255,0.3),
            inset 0 -2px 0 rgba(0,0,0,0.3);
        margin-bottom: 1rem;
        transform: perspective(500px) rotateX(5deg);
    }
    
    /* 3D Coin Counter with shine */
    .coin-counter {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        background: linear-gradient(180deg, #1a1a1a 0%, #000 100%);
        border: 4px solid var(--coin-gold);
        padding: 0.75rem 1.5rem;
        font-family: 'Press Start 2P', cursive;
        font-size: 1rem;
        color: var(--coin-gold);
        margin: 0.5rem;
        box-shadow: 
            0 0 20px rgba(255,215,0,0.3),
            inset 0 0 20px rgba(255,215,0,0.1),
            4px 4px 0px #000;
        animation: coin-glow 2s ease-in-out infinite;
    }
    
    @keyframes coin-glow {
        0%, 100% { box-shadow: 0 0 20px rgba(255,215,0,0.3), inset 0 0 20px rgba(255,215,0,0.1), 4px 4px 0px #000; }
        50% { box-shadow: 0 0 40px rgba(255,215,0,0.6), inset 0 0 30px rgba(255,215,0,0.2), 4px 4px 0px #000; }
    }
    
    /* 3D Question Block */
    .question-block {
        background: linear-gradient(135deg, var(--coin-gold) 0%, #E5B000 50%, #CC9900 100%);
        border: 6px solid #000;
        border-radius: 8px;
        padding: 1.5rem;
        margin: 1rem 0;
        box-shadow: 
            8px 8px 0px rgba(0,0,0,0.5),
            inset 4px 4px 0 rgba(255,255,255,0.4),
            inset -4px -4px 0 rgba(0,0,0,0.2);
        position: relative;
        transform: perspective(1000px) rotateX(2deg) rotateY(-2deg);
        transition: all 0.3s ease;
    }
    
    .question-block:hover {
        transform: perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(-10px);
        box-shadow: 
            12px 16px 0px rgba(0,0,0,0.4),
            inset 4px 4px 0 rgba(255,255,255,0.5),
            inset -4px -4px 0 rgba(0,0,0,0.2);
    }
    
    .question-block::before {
        content: '?';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: 'Press Start 2P', cursive;
        font-size: 4rem;
        color: rgba(0,0,0,0.08);
        text-shadow: 2px 2px 0 rgba(255,255,255,0.1);
    }
    
    /* 3D Brick Block */
    .brick-block {
        background: linear-gradient(180deg, #D85C2C 0%, var(--mario-brick) 50%, #A03C0C 100%);
        border: 4px solid #000;
        border-radius: 4px;
        padding: 1.5rem;
        margin: 1rem 0;
        box-shadow: 
            6px 6px 0px rgba(0,0,0,0.5),
            inset 3px 3px 0 rgba(255,255,255,0.2),
            inset -3px -3px 0 rgba(0,0,0,0.3);
        transform: perspective(800px) rotateX(3deg);
        transition: all 0.2s ease;
    }
    
    .brick-block:hover {
        transform: perspective(800px) rotateX(0deg) translateY(-5px);
        box-shadow: 8px 12px 0px rgba(0,0,0,0.4);
    }
    
    /* 3D Pipe Section Header */
    .pipe-header {
        background: linear-gradient(180deg, #00E800 0%, var(--pipe-green) 30%, #006800 100%);
        border: 6px solid #000;
        border-radius: 25px 25px 0 0;
        padding: 1rem 2rem;
        font-family: 'Press Start 2P', cursive;
        font-size: 1rem;
        color: white;
        text-shadow: 2px 2px 0px #000;
        text-align: center;
        box-shadow: 
            6px 6px 0px rgba(0,0,0,0.5),
            inset 0 10px 20px rgba(255,255,255,0.2),
            inset 0 -5px 15px rgba(0,0,0,0.3);
        transform: perspective(600px) rotateX(10deg);
    }
    
    /* 3D Power-up Tags */
    .powerup {
        display: inline-block;
        background: linear-gradient(180deg, #FF6B6B 0%, var(--mario-red) 100%);
        border: 3px solid #000;
        border-radius: 4px;
        padding: 0.4rem 0.9rem;
        margin: 0.25rem;
        font-size: 0.75rem;
        font-weight: 700;
        color: white;
        box-shadow: 
            3px 3px 0px rgba(0,0,0,0.5),
            inset 0 2px 0 rgba(255,255,255,0.3);
        transform: perspective(500px) rotateX(5deg);
        transition: all 0.15s ease;
    }
    
    .powerup:hover {
        transform: perspective(500px) rotateX(0deg) translateY(-3px) scale(1.1);
    }
    
    .powerup.fire {
        background: linear-gradient(180deg, #FF8C00 0%, #FF4500 100%);
    }
    
    .powerup.star {
        background: linear-gradient(180deg, #FFE44D 0%, var(--coin-gold) 100%);
        color: #000;
    }
    
    .powerup.leaf {
        background: linear-gradient(180deg, #5CD85C 0%, var(--mario-green) 100%);
    }
    
    /* 3D Game HUD */
    .game-hud {
        background: linear-gradient(180deg, #1a1a1a 0%, #000 100%);
        border: 4px solid white;
        border-radius: 8px;
        padding: 1.5rem;
        font-family: 'Press Start 2P', cursive;
        font-size: 0.7rem;
        color: white;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 1.5rem;
        margin: 1.5rem 0;
        box-shadow: 
            8px 8px 0px rgba(0,0,0,0.6),
            inset 0 0 30px rgba(255,255,255,0.05);
        transform: perspective(800px) rotateX(5deg);
    }
    
    .hud-item {
        text-align: center;
        padding: 0.5rem;
    }
    
    .hud-value {
        color: var(--coin-gold);
        font-size: 1.3rem;
        display: block;
        margin-top: 0.75rem;
        text-shadow: 0 0 10px rgba(255,215,0,0.5);
    }
    
    /* 3D Castle Card */
    .castle-card {
        background: linear-gradient(180deg, #505050 0%, #303030 50%, #202020 100%);
        border: 4px solid #000;
        border-radius: 8px;
        padding: 1.5rem;
        margin: 1rem 0;
        position: relative;
        box-shadow: 
            8px 8px 0px rgba(0,0,0,0.6),
            inset 0 4px 0 rgba(255,255,255,0.1),
            inset 0 -4px 0 rgba(0,0,0,0.3);
        transform: perspective(1000px) rotateX(3deg) rotateY(-1deg);
        transition: all 0.3s ease;
    }
    
    .castle-card:hover {
        transform: perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(-8px) scale(1.02);
        box-shadow: 12px 20px 0px rgba(0,0,0,0.4);
    }
    
    .castle-card::before {
        content: '🏰';
        font-size: 2.5rem;
        position: absolute;
        top: -1.2rem;
        right: 1.2rem;
        filter: drop-shadow(2px 2px 0 #000);
    }
    
    /* Level Badge */
    .level-badge {
        font-family: 'Press Start 2P', cursive;
        font-size: 0.75rem;
        color: var(--coin-gold);
        text-shadow: 1px 1px 0 #000;
        margin-bottom: 0.75rem;
    }
    
    /* 3D Buttons */
    .stButton > button {
        font-family: 'Press Start 2P', cursive !important;
        font-size: 0.7rem !important;
        background: linear-gradient(180deg, var(--mario-red) 0%, #B01010 100%) !important;
        border: 4px solid #000 !important;
        border-radius: 4px !important;
        color: white !important;
        padding: 0.75rem 1.5rem !important;
        box-shadow: 
            4px 4px 0px #000,
            inset 0 2px 0 rgba(255,255,255,0.3) !important;
        transition: all 0.1s ease !important;
        transform: perspective(500px) rotateX(5deg) !important;
    }
    
    .stButton > button:hover {
        transform: perspective(500px) rotateX(0deg) translateY(-4px) !important;
        box-shadow: 4px 8px 0px #000 !important;
    }
    
    .stButton > button:active {
        transform: perspective(500px) rotateX(0deg) translateY(2px) !important;
        box-shadow: 2px 2px 0px #000 !important;
    }
    
    /* Ground decoration at bottom */
    .ground-footer {
        background: linear-gradient(180deg, var(--mario-green) 0%, #228B22 10%, #8B4513 10%, #654321 100%);
        padding: 2rem;
        margin-top: 3rem;
        border-top: 6px solid #000;
        box-shadow: inset 0 5px 15px rgba(0,0,0,0.3);
    }
</style>
""", unsafe_allow_html=True)


def main():
    # Sidebar - Player Profile
    with st.sidebar:
        st.markdown("""
        <div style="text-align: center; padding: 1.5rem;">
            <div style="font-size: 4.5rem; margin-bottom: 0.5rem; filter: drop-shadow(3px 3px 0 #000);">🍄</div>
            <div style="font-family: 'Press Start 2P', cursive; font-size: 0.7rem; color: var(--coin-gold); 
                        margin-bottom: 0.5rem; text-shadow: 2px 2px 0 #000;">PLAYER 1</div>
            <h2 style="font-family: 'Press Start 2P', cursive; font-size: 1.1rem; color: white; 
                       text-shadow: 3px 3px 0px #000;">SHUBHAM</h2>
            <p style="color: #ccc; font-size: 0.85rem; margin-top: 0.5rem;">Analytics & Strategy</p>
        </div>
        """, unsafe_allow_html=True)
        
        st.markdown("---")
        
        # Coin counter stats
        st.markdown("""
        <div class="game-hud" style="transform: none; font-size: 0.6rem;">
            <div class="hud-item">
                🪙 COINS<br>
                <span class="hud-value" style="font-size: 1rem;">$5M+</span>
            </div>
            <div class="hud-item">
                ⭐ STARS<br>
                <span class="hud-value" style="font-size: 1rem;">22+</span>
            </div>
            <div class="hud-item">
                🏆 LEVEL<br>
                <span class="hud-value" style="font-size: 1rem;">3+YRS</span>
            </div>
        </div>
        """, unsafe_allow_html=True)
        
        st.markdown("---")
        
        st.markdown("""
        <div style="text-align: center; font-family: 'Press Start 2P', cursive; font-size: 0.55rem;">
            <p style="color: #00FF00; text-shadow: 0 0 10px #00FF00;">● ONLINE</p>
            <a href="mailto:shubhamrghule15@gmail.com" style="color: var(--coin-gold); text-decoration: none;">📧 EMAIL</a>
        </div>
        """, unsafe_allow_html=True)
    
    # Main content
    st.markdown("""
    <div style="text-align: center; padding: 2rem 0; position: relative; z-index: 1;">
        <div class="mario-badge">🍄 WORLD 1-1: HOME</div>
        <h1 class="pixel-title">SHUBHAM GHULE</h1>
        <p style="font-family: 'Press Start 2P', cursive; font-size: 0.85rem; color: white; 
                  text-shadow: 3px 3px 0px #000, 0 0 20px rgba(255,255,255,0.3);">
            PRODUCT MANAGER & ANALYTICS HERO
        </p>
    </div>
    """, unsafe_allow_html=True)
    
    # Game HUD - Key Metrics
    st.markdown("""
    <div class="game-hud" style="max-width: 950px; margin: 0 auto;">
        <div class="hud-item">
            <span>🪙 PROFIT</span>
            <span class="hud-value">$5M+</span>
        </div>
        <div class="hud-item">
            <span>💰 REVENUE</span>
            <span class="hud-value">$1B+</span>
        </div>
        <div class="hud-item">
            <span>📈 CLV BOOST</span>
            <span class="hud-value">+30%</span>
        </div>
        <div class="hud-item">
            <span>🎮 PRODUCTS</span>
            <span class="hud-value">22</span>
        </div>
    </div>
    """, unsafe_allow_html=True)
    
    st.markdown("<br>", unsafe_allow_html=True)
    
    # Bio section - Question block style
    col1, col2 = st.columns([2, 1])
    
    with col1:
        st.markdown("""
        <div class="question-block">
            <h3 style="font-family: 'Press Start 2P', cursive; font-size: 1rem; color: #000; margin-bottom: 1rem; position: relative; z-index: 1;">
                ❓ WHO AM I?
            </h3>
            <p style="color: #333; font-size: 1rem; line-height: 1.9; position: relative; z-index: 1;">
                I'm an <strong>Analytics & Strategy professional</strong> at <strong>American Express</strong> 
                with power-ups in <strong>Machine Learning</strong>, <strong>Product Strategy</strong>, and 
                <strong>Data Engineering</strong>. 
            </p>
            <p style="color: #333; font-size: 1rem; line-height: 1.9; margin-top: 1rem; position: relative; z-index: 1;">
                Just like Mario collects coins, I collect <strong>$5M+ in profit</strong> and 
                <strong>$1B+ in billed business</strong> through analytics magic! 🍄
            </p>
        </div>
        """, unsafe_allow_html=True)
    
    with col2:
        st.markdown("""
        <div style="text-align: center; padding: 2rem;">
            <div style="font-size: 9rem; animation: float3d 3s ease-in-out infinite; filter: drop-shadow(5px 5px 0 #000);">🦸</div>
            <p style="font-family: 'Press Start 2P', cursive; font-size: 0.75rem; color: white; text-shadow: 3px 3px #000;">
                LVL 99 PM
            </p>
        </div>
        """, unsafe_allow_html=True)
    
    st.markdown("<br>", unsafe_allow_html=True)
    
    # Power-ups (Skills) Section
    st.markdown("""
    <div class="pipe-header">🍄 POWER-UPS & ABILITIES</div>
    """, unsafe_allow_html=True)
    
    skill_col1, skill_col2, skill_col3 = st.columns(3)
    
    with skill_col1:
        st.markdown("""
        <div class="brick-block">
            <h4 style="color: white; font-family: 'Press Start 2P', cursive; font-size: 0.7rem; margin-bottom: 1rem; text-shadow: 2px 2px 0 #000;">
                🔥 FIRE FLOWER
            </h4>
            <span class="powerup fire">Python</span>
            <span class="powerup fire">SQL</span>
            <span class="powerup fire">Spark</span>
            <span class="powerup fire">ML</span>
            <span class="powerup fire">Hive</span>
            <span class="powerup fire">A/B Test</span>
        </div>
        """, unsafe_allow_html=True)
    
    with skill_col2:
        st.markdown("""
        <div class="brick-block">
            <h4 style="color: white; font-family: 'Press Start 2P', cursive; font-size: 0.7rem; margin-bottom: 1rem; text-shadow: 2px 2px 0 #000;">
                ⭐ STAR POWER
            </h4>
            <span class="powerup star">Strategy</span>
            <span class="powerup star">Roadmap</span>
            <span class="powerup star">Pendo</span>
            <span class="powerup star">JIRA</span>
            <span class="powerup star">Figma</span>
            <span class="powerup star">UX/UI</span>
        </div>
        """, unsafe_allow_html=True)
    
    with skill_col3:
        st.markdown("""
        <div class="brick-block">
            <h4 style="color: white; font-family: 'Press Start 2P', cursive; font-size: 0.7rem; margin-bottom: 1rem; text-shadow: 2px 2px 0 #000;">
                🍃 LEAF POWER
            </h4>
            <span class="powerup leaf">React</span>
            <span class="powerup leaf">AWS</span>
            <span class="powerup leaf">Docker</span>
            <span class="powerup leaf">CI/CD</span>
            <span class="powerup leaf">Git</span>
            <span class="powerup leaf">APIs</span>
        </div>
        """, unsafe_allow_html=True)
    
    st.markdown("<br>", unsafe_allow_html=True)
    
    # ML Demos Section
    st.markdown("""
    <div class="pipe-header">🏰 CASTLES TO EXPLORE (ML DEMOS)</div>
    """, unsafe_allow_html=True)
    
    demo_col1, demo_col2, demo_col3 = st.columns(3)
    
    with demo_col1:
        st.markdown("""
        <div class="castle-card">
            <span class="level-badge">WORLD 2-1</span>
            <h4 style="color: white; font-family: 'Press Start 2P', cursive; font-size: 0.8rem; margin: 1rem 0;">
                🎯 SEGMENTATION
            </h4>
            <p style="color: #bbb; font-size: 0.9rem;">
                K-Means clustering boss battle!
            </p>
        </div>
        """, unsafe_allow_html=True)
        if st.button("🎮 PLAY", key="seg"):
            st.switch_page("pages/2_📊_Projects.py")
    
    with demo_col2:
        st.markdown("""
        <div class="castle-card">
            <span class="level-badge">WORLD 2-2</span>
            <h4 style="color: white; font-family: 'Press Start 2P', cursive; font-size: 0.8rem; margin: 1rem 0;">
                💰 CLV PREDICT
            </h4>
            <p style="color: #bbb; font-size: 0.9rem;">
                Collect coins with ML!
            </p>
        </div>
        """, unsafe_allow_html=True)
        if st.button("🎮 PLAY", key="clv"):
            st.switch_page("pages/2_📊_Projects.py")
    
    with demo_col3:
        st.markdown("""
        <div class="castle-card">
            <span class="level-badge">WORLD 2-3</span>
            <h4 style="color: white; font-family: 'Press Start 2P', cursive; font-size: 0.8rem; margin: 1rem 0;">
                💬 SENTIMENT
            </h4>
            <p style="color: #bbb; font-size: 0.9rem;">
                NLP power-up analysis!
            </p>
        </div>
        """, unsafe_allow_html=True)
        if st.button("🎮 PLAY", key="sent"):
            st.switch_page("pages/2_📊_Projects.py")
    
    # Ground Footer
    st.markdown("""
    <div class="ground-footer">
        <div style="text-align: center; padding: 1rem 0;">
            <p style="font-family: 'Press Start 2P', cursive; font-size: 0.8rem; color: var(--coin-gold); text-shadow: 2px 2px 0 #000;">
                🍄 THANK YOU MARIO! 🍄
            </p>
            <p style="color: #ccc; font-size: 0.85rem; margin-top: 0.75rem;">
                © 2026 Shubham Ghule | Built with Streamlit 🚀
            </p>
        </div>
    </div>
    """, unsafe_allow_html=True)


if __name__ == "__main__":
    main()
