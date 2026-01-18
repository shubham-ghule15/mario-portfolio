"""
🏰 Experience Page - Mario World Style Timeline
"""

import streamlit as st

st.set_page_config(
    page_title="Experience | World Map 🗺️",
    page_icon="🗺️",
    layout="wide"
)

# Mario-themed CSS
st.markdown("""
<style>
    @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Inter:wght@400;500;600;700&display=swap');
    
    :root {
        --mario-red: #E52521;
        --mario-blue: #049CD8;
        --mario-yellow: #FBD000;
        --mario-green: #43B047;
        --coin-gold: #FFD700;
        --pipe-green: #00A800;
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
    }
    
    /* Floating clouds */
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
            radial-gradient(ellipse 80px 50px at 45% 8%, rgba(255,255,255,0.6) 0%, transparent 70%);
        pointer-events: none;
        z-index: 0;
    }
    
    #MainMenu {visibility: hidden;}
    footer {visibility: hidden;}
    header {visibility: hidden;}
    
    [data-testid="stSidebar"] {
        background: linear-gradient(180deg, #5a4a4a 0%, #3a2a2a 100%);
        border-right: 6px solid #2a1a1a;
        box-shadow: inset -5px 0 15px rgba(0,0,0,0.5);
    }
    
    .world-header {
        font-family: 'Press Start 2P', cursive;
        font-size: 1rem;
        color: var(--coin-gold);
        text-shadow: 3px 3px 0px #000;
        text-align: center;
        padding: 1rem;
    }
    
    .world-card {
        background: linear-gradient(180deg, #1a1a3a 0%, #000020 100%);
        border: 4px solid var(--mario-blue);
        padding: 1.5rem;
        margin: 1rem 0;
        box-shadow: 4px 4px 0px #000;
        position: relative;
    }
    
    .world-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, var(--mario-red), var(--coin-gold), var(--mario-green), var(--mario-blue));
    }
    
    .world-number {
        font-family: 'Press Start 2P', cursive;
        font-size: 0.8rem;
        color: var(--coin-gold);
        margin-bottom: 0.5rem;
    }
    
    .company-name {
        font-family: 'Press Start 2P', cursive;
        font-size: 0.9rem;
        color: var(--mario-red);
        margin-bottom: 0.25rem;
    }
    
    .role-title {
        color: white;
        font-weight: 700;
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
    }
    
    .time-badge {
        display: inline-block;
        background: var(--mario-green);
        border: 2px solid #000;
        padding: 0.25rem 0.75rem;
        font-size: 0.75rem;
        color: white;
        font-weight: 600;
        margin-bottom: 1rem;
    }
    
    .achievement-list {
        list-style: none;
        padding: 0;
    }
    
    .achievement-item {
        padding: 0.5rem 0;
        padding-left: 2rem;
        color: #ccc;
        font-size: 0.9rem;
        position: relative;
        border-left: 2px solid var(--coin-gold);
        margin-left: 0.5rem;
    }
    
    .achievement-item::before {
        content: '🪙';
        position: absolute;
        left: -0.75rem;
        top: 0.5rem;
    }
    
    .coin-value {
        color: var(--coin-gold);
        font-weight: 700;
    }
    
    .castle-complete {
        background: linear-gradient(135deg, #606060 0%, #404040 100%);
        border: 4px solid var(--coin-gold);
        padding: 1.5rem;
        text-align: center;
        margin-top: 2rem;
    }
    
    .edu-card {
        background: linear-gradient(180deg, var(--mario-blue) 0%, #0066AA 100%);
        border: 4px solid #000;
        padding: 1.5rem;
        margin: 0.5rem 0;
        box-shadow: 4px 4px 0px #000;
    }
    
    .school-name {
        font-family: 'Press Start 2P', cursive;
        font-size: 0.7rem;
        color: white;
        text-shadow: 2px 2px 0px #000;
    }
</style>
""", unsafe_allow_html=True)

st.markdown("""
<div style="text-align: center; padding: 1rem;">
    <span style="font-family: 'Press Start 2P', cursive; font-size: 0.8rem; color: var(--mario-red); 
          background: black; padding: 0.5rem 1rem; border: 3px solid var(--mario-red);">
        🗺️ WORLD 3: EXPERIENCE
    </span>
</div>
""", unsafe_allow_html=True)

st.markdown('<h1 class="world-header">🏰 WORLD MAP: MY JOURNEY 🏰</h1>', unsafe_allow_html=True)

# World 3-1: American Express
st.markdown("""
<div class="world-card">
    <span class="world-number">WORLD 3-1 ⭐⭐⭐</span>
    <p class="company-name">🏦 AMERICAN EXPRESS</p>
    <p class="role-title">Assistant Manager, Analytics & Growth Strategy</p>
    <span class="time-badge">🕐 May 2025 - Present</span>
    
    <div class="achievement-list">
        <div class="achievement-item">
            Spearheaded analytics for GCS Marketing, contributing <span class="coin-value">$5M+ profit</span> and <span class="coin-value">$1B+ billed business</span>
        </div>
        <div class="achievement-item">
            Developed CLV models with <span class="coin-value">30% increased accuracy</span> for $200M marketing campaigns
        </div>
        <div class="achievement-item">
            Built 2 Decision Tree models improving targeting by <span class="coin-value">~25%</span>
        </div>
        <div class="achievement-item">
            Applied ML techniques for <span class="coin-value">22 card products</span> optimization
        </div>
    </div>
</div>
""", unsafe_allow_html=True)

# World 3-2: Samsung R&D
st.markdown("""
<div class="world-card">
    <span class="world-number">WORLD 3-2 ⭐⭐</span>
    <p class="company-name">📱 SAMSUNG R&D BANGALORE</p>
    <p class="role-title">CTO's Office Intern, AI Strategy</p>
    <span class="time-badge">🕐 Apr 2024 - May 2024</span>
    
    <div class="achievement-list">
        <div class="achievement-item">
            Developed strategies for <span class="coin-value">11 next-gen Sound AI features</span>
        </div>
        <div class="achievement-item">
            Analyzed <span class="coin-value">50+ initiatives</span> targeting <span class="coin-value">1 Billion+ users</span>
        </div>
        <div class="achievement-item">
            Scouted <span class="coin-value">30+ open-source</span> audio LLM projects and <span class="coin-value">15+ startups</span>
        </div>
    </div>
</div>
""", unsafe_allow_html=True)

# World 3-3: Dassault Systèmes
st.markdown("""
<div class="world-card">
    <span class="world-number">WORLD 3-3 ⭐⭐⭐</span>
    <p class="company-name">💻 DASSAULT SYSTÈMES</p>
    <p class="role-title">Senior Software Engineer</p>
    <span class="time-badge">🕐 Dec 2020 - Jun 2023</span>
    
    <div class="achievement-list">
        <div class="achievement-item">
            Built app for <span class="coin-value">30K+ clinical trials</span>, impacting <span class="coin-value">90M+ patients</span>
        </div>
        <div class="achievement-item">
            Contributing <span class="coin-value">$1.1B+ revenue</span>, reviewed <span class="coin-value">100+ PRs</span>, safeguarded <span class="coin-value">50K+ LOC</span>
        </div>
        <div class="achievement-item">
            Redesigned 10+ UX screens achieving <span class="coin-value">~90% CSAT</span> for <span class="coin-value">1M+ users</span>
        </div>
        <div class="achievement-item">
            Leveraged Pendo for insights with <span class="coin-value">$15M+ revenue impact</span>
        </div>
        <div class="achievement-item">
            Revamped AWS architecture saving <span class="coin-value">$100K+</span>, reduced latency by <span class="coin-value">50%</span>
        </div>
        <div class="achievement-item">
            Managed <span class="coin-value">4 countries</span>, <span class="coin-value">15+ teams</span>, <span class="coin-value">300+ members</span>
        </div>
    </div>
</div>
""", unsafe_allow_html=True)

st.markdown("---")

# Education - Bonus World
st.markdown("""
<div style="text-align: center; margin: 2rem 0;">
    <span style="font-family: 'Press Start 2P', cursive; font-size: 1rem; color: var(--coin-gold); text-shadow: 3px 3px 0px #000;">
        🌟 BONUS WORLD: EDUCATION 🌟
    </span>
</div>
""", unsafe_allow_html=True)

edu_col1, edu_col2 = st.columns(2)

with edu_col1:
    st.markdown("""
    <div class="edu-card">
        <p style="font-size: 2rem; margin: 0;">🎓</p>
        <p class="school-name">IIM BANGALORE</p>
        <p style="color: white; font-weight: 600; margin: 0.5rem 0;">MBA (Business Analytics)</p>
        <p style="color: #ddd; font-size: 0.85rem;">2023 - 2025 | CGPA: 3.03/4.00</p>
        <p style="color: var(--coin-gold); font-size: 0.75rem; margin-top: 0.5rem;">
            ML, NLP, GenAI, Deep Learning 🍄
        </p>
    </div>
    """, unsafe_allow_html=True)

with edu_col2:
    st.markdown("""
    <div class="edu-card">
        <p style="font-size: 2rem; margin: 0;">🎓</p>
        <p class="school-name">PUNE UNIVERSITY</p>
        <p style="color: white; font-weight: 600; margin: 0.5rem 0;">B.E. (Computer Science)</p>
        <p style="color: #ddd; font-size: 0.85rem;">2016 - 2020 | CGPA: 9.24/10</p>
        <p style="color: var(--coin-gold); font-size: 0.75rem; margin-top: 0.5rem;">
            Top 5% of class ⭐
        </p>
    </div>
    """, unsafe_allow_html=True)

# Castle Complete
st.markdown("""
<div class="castle-complete">
    <p style="font-size: 4rem; margin: 0;">🏰</p>
    <p style="font-family: 'Press Start 2P', cursive; font-size: 0.8rem; color: var(--coin-gold); margin: 1rem 0;">
        WORLD COMPLETE!
    </p>
    <p style="color: #aaa; font-size: 0.9rem;">
        Thank you for exploring my journey! 🍄
    </p>
</div>
""", unsafe_allow_html=True)
