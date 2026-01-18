"""
🎮 Projects Page - Mario Castle Style ML Demos
"""

import streamlit as st
import pandas as pd
import numpy as np
import plotly.express as px
import plotly.graph_objects as go
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import GradientBoostingRegressor

st.set_page_config(
    page_title="Projects | Boss Battles 🎮",
    page_icon="🎮",
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
    
    .boss-header {
        font-family: 'Press Start 2P', cursive;
        font-size: 1.2rem;
        color: var(--mario-red);
        text-shadow: 3px 3px 0px #000;
        text-align: center;
        padding: 1rem;
        animation: pulse 2s ease-in-out infinite;
    }
    
    @keyframes pulse {
        0%, 100% { text-shadow: 3px 3px 0px #000, 0 0 10px var(--mario-red); }
        50% { text-shadow: 3px 3px 0px #000, 0 0 30px var(--mario-red); }
    }
    
    .castle-card {
        background: linear-gradient(180deg, #404040 0%, #202020 100%);
        border: 4px solid var(--coin-gold);
        padding: 1.5rem;
        margin: 1rem 0;
        box-shadow: 4px 4px 0px #000;
    }
    
    .boss-badge {
        font-family: 'Press Start 2P', cursive;
        font-size: 0.7rem;
        background: var(--mario-red);
        color: white;
        padding: 0.25rem 0.75rem;
        border: 2px solid #000;
        display: inline-block;
        margin-bottom: 0.5rem;
    }
    
    .stTabs [data-baseweb="tab-list"] {
        background: rgba(0, 0, 0, 0.5);
        border: 3px solid var(--coin-gold);
        gap: 0;
    }
    
    .stTabs [data-baseweb="tab"] {
        font-family: 'Press Start 2P', cursive;
        font-size: 0.6rem;
        color: white;
        padding: 1rem;
    }
    
    .stTabs [aria-selected="true"] {
        background: var(--mario-red);
        color: white;
    }
    
    .power-meter {
        background: #000;
        border: 3px solid white;
        padding: 0.5rem;
        margin: 1rem 0;
    }
    
    .power-bar {
        background: linear-gradient(90deg, var(--mario-green), var(--mario-yellow), var(--mario-red));
        height: 20px;
        transition: width 0.3s ease;
    }
</style>
""", unsafe_allow_html=True)

st.markdown("""
<div style="text-align: center; padding: 1rem;">
    <span style="font-family: 'Press Start 2P', cursive; font-size: 0.8rem; color: var(--coin-gold); 
          background: black; padding: 0.5rem 1rem; border: 3px solid var(--coin-gold);">
        🏰 WORLD 2: ML DEMOS
    </span>
</div>
""", unsafe_allow_html=True)

st.markdown('<h1 class="boss-header">🎮 BOSS BATTLE: ML DEMOS 🎮</h1>', unsafe_allow_html=True)

# Tabs as different castle levels
tab1, tab2, tab3 = st.tabs(["🎯 WORLD 2-1", "💰 WORLD 2-2", "💬 WORLD 2-3"])

# ============================================
# TAB 1: Customer Segmentation
# ============================================
with tab1:
    st.markdown("""
    <div class="castle-card">
        <span class="boss-badge">BOSS: SEGMENTATION BOWSER</span>
        <h3 style="font-family: 'Press Start 2P', cursive; font-size: 1rem; color: var(--coin-gold); margin: 1rem 0;">
            🎯 CUSTOMER SEGMENTATION
        </h3>
        <p style="color: #aaa;">Defeat the segmentation boss using K-Means clustering!</p>
    </div>
    """, unsafe_allow_html=True)
    
    col1, col2 = st.columns([1, 2])
    
    with col1:
        st.markdown("""
        <div style="font-family: 'Press Start 2P', cursive; font-size: 0.7rem; color: white; margin-bottom: 1rem;">
            ⚙️ POWER SETTINGS
        </div>
        """, unsafe_allow_html=True)
        
        n_clusters = st.slider("🍄 Cluster Power (K)", 2, 8, 4)
        n_samples = st.slider("⭐ Sample Size", 100, 1000, 500, step=100)
        
        feature_x = st.selectbox("X-Axis", ["Annual Income ($K)", "Spending Score", "Age"])
        feature_y = st.selectbox("Y-Axis", ["Spending Score", "Annual Income ($K)", "Age"])
    
    with col2:
        # Generate data
        np.random.seed(42)
        data = pd.DataFrame({
            'Annual Income ($K)': np.concatenate([
                np.random.normal(30, 10, n_samples//4),
                np.random.normal(50, 8, n_samples//4),
                np.random.normal(70, 12, n_samples//4),
                np.random.normal(90, 15, n_samples//4)
            ]),
            'Spending Score': np.concatenate([
                np.random.normal(20, 10, n_samples//4),
                np.random.normal(50, 15, n_samples//4),
                np.random.normal(80, 10, n_samples//4),
                np.random.normal(40, 20, n_samples//4)
            ]),
            'Age': np.concatenate([
                np.random.normal(25, 5, n_samples//4),
                np.random.normal(35, 8, n_samples//4),
                np.random.normal(45, 10, n_samples//4),
                np.random.normal(55, 7, n_samples//4)
            ])
        })
        
        data['Annual Income ($K)'] = data['Annual Income ($K)'].clip(15, 150)
        data['Spending Score'] = data['Spending Score'].clip(1, 100)
        data['Age'] = data['Age'].clip(18, 70)
        
        features = data[[feature_x, feature_y]]
        scaler = StandardScaler()
        scaled = scaler.fit_transform(features)
        
        kmeans = KMeans(n_clusters=n_clusters, random_state=42, n_init=10)
        data['Segment'] = kmeans.fit_predict(scaled)
        
        # Mario-colored plot
        mario_colors = ['#E52521', '#049CD8', '#43B047', '#FBD000', '#FF6B00', '#9932CC', '#FF69B4', '#00CED1']
        
        fig = px.scatter(
            data, x=feature_x, y=feature_y, color='Segment',
            color_discrete_sequence=mario_colors[:n_clusters],
            title=f'🎮 Customer Segments (Power Level: {n_clusters})'
        )
        fig.update_layout(
            plot_bgcolor='#000020',
            paper_bgcolor='#000020',
            font_color='white',
            title_font=dict(size=16, color='#FFD700')
        )
        st.plotly_chart(fig, use_container_width=True)
        
        st.markdown("""
        <p style="font-family: 'Press Start 2P', cursive; font-size: 0.7rem; color: var(--mario-green); text-align: center;">
            🏆 BOSS DEFEATED! COINS COLLECTED!
        </p>
        """, unsafe_allow_html=True)


# ============================================
# TAB 2: CLV Prediction
# ============================================
with tab2:
    st.markdown("""
    <div class="castle-card">
        <span class="boss-badge">BOSS: CLV KOOPA</span>
        <h3 style="font-family: 'Press Start 2P', cursive; font-size: 1rem; color: var(--coin-gold); margin: 1rem 0;">
            💰 CLV PREDICTION
        </h3>
        <p style="color: #aaa;">Predict customer lifetime value like collecting coins!</p>
    </div>
    """, unsafe_allow_html=True)
    
    col1, col2 = st.columns([1, 1])
    
    with col1:
        st.markdown("""
        <div style="font-family: 'Press Start 2P', cursive; font-size: 0.7rem; color: white; margin-bottom: 1rem;">
            👤 PLAYER STATS
        </div>
        """, unsafe_allow_html=True)
        
        tenure = st.slider("🕐 Tenure (months)", 1, 120, 24)
        monthly_spend = st.slider("💰 Monthly Spend ($)", 100, 10000, 1500)
        transactions = st.slider("🛒 Transactions/Month", 1, 50, 10)
        age = st.slider("🎂 Age", 18, 80, 35)
        credit_score = st.slider("⭐ Credit Score", 300, 850, 720)
        
        product = st.selectbox("🃏 Card Type", 
            ["Premium Cards", "Travel & Rewards", "Business Cards", "Cashback Cards"])
    
    with col2:
        # Train model
        np.random.seed(42)
        n = 1000
        train_data = pd.DataFrame({
            'tenure': np.random.randint(1, 120, n),
            'monthly_spend': np.random.uniform(100, 10000, n),
            'transactions': np.random.randint(1, 50, n),
            'age': np.random.randint(18, 80, n),
            'credit_score': np.random.randint(300, 850, n),
            'premium': np.random.choice([0, 1], n),
        })
        
        train_data['clv'] = (
            train_data['monthly_spend'] * 12 * 0.15 +
            train_data['tenure'] * 50 +
            train_data['transactions'] * 20 +
            (train_data['credit_score'] - 300) * 5 +
            train_data['premium'] * 2000 +
            np.random.normal(0, 500, n)
        ).clip(500, 50000)
        
        X = train_data[['tenure', 'monthly_spend', 'transactions', 'age', 'credit_score', 'premium']]
        y = train_data['clv']
        
        model = GradientBoostingRegressor(n_estimators=100, random_state=42)
        model.fit(X, y)
        
        premium = 1 if product in ["Premium Cards", "Travel & Rewards"] else 0
        input_features = np.array([[tenure, monthly_spend, transactions, age, credit_score, premium]])
        predicted_clv = model.predict(input_features)[0]
        
        # Display as coin collection
        st.markdown(f"""
        <div style="background: #000; border: 4px solid var(--coin-gold); padding: 2rem; text-align: center; margin-top: 2rem;">
            <p style="font-size: 4rem; margin: 0;">🪙</p>
            <p style="font-family: 'Press Start 2P', cursive; font-size: 0.8rem; color: white; margin: 0.5rem 0;">
                COINS COLLECTED
            </p>
            <p style="font-family: 'Press Start 2P', cursive; font-size: 1.5rem; color: var(--coin-gold);">
                ${predicted_clv:,.0f}
            </p>
            <p style="color: #aaa; font-size: 0.8rem;">5-Year Customer Value</p>
        </div>
        """, unsafe_allow_html=True)
        
        # Feature importance as power-ups
        st.markdown("""
        <p style="font-family: 'Press Start 2P', cursive; font-size: 0.7rem; color: white; margin-top: 2rem;">
            🍄 POWER-UP INFLUENCE
        </p>
        """, unsafe_allow_html=True)
        
        importance_df = pd.DataFrame({
            'Power-Up': ['Monthly $', 'Tenure', 'Transactions', 'Age', 'Credit', 'Premium'],
            'Power': model.feature_importances_
        }).sort_values('Power', ascending=True)
        
        fig = px.bar(importance_df, x='Power', y='Power-Up', orientation='h',
                     color_discrete_sequence=['#E52521'])
        fig.update_layout(
            plot_bgcolor='#000020',
            paper_bgcolor='#000020',
            font_color='white',
            showlegend=False,
            height=250
        )
        st.plotly_chart(fig, use_container_width=True)


# ============================================
# TAB 3: Sentiment Analysis
# ============================================
with tab3:
    st.markdown("""
    <div class="castle-card">
        <span class="boss-badge">BOSS: SENTIMENT GOOMBA</span>
        <h3 style="font-family: 'Press Start 2P', cursive; font-size: 1rem; color: var(--coin-gold); margin: 1rem 0;">
            💬 SENTIMENT ANALYSIS
        </h3>
        <p style="color: #aaa;">Analyze the vibes of any text - is it a 1-UP or Game Over?</p>
    </div>
    """, unsafe_allow_html=True)
    
    sample_texts = {
        "🍄 Positive": "I absolutely love this product! Amazing quality and great service!",
        "💀 Negative": "Terrible experience. Product broke immediately. Very disappointed.",
        "⭐ Neutral": "The product works as expected. Nothing special.",
        "✏️ Custom": ""
    }
    
    text_option = st.selectbox("Choose your text", list(sample_texts.keys()))
    
    if text_option == "✏️ Custom":
        user_text = st.text_area("Enter your text", height=150)
    else:
        user_text = st.text_area("Text to analyze", value=sample_texts[text_option], height=150)
    
    if st.button("🎮 ANALYZE!", type="primary"):
        if user_text:
            positive_words = ['love', 'amazing', 'excellent', 'great', 'wonderful', 'fantastic', 'best', 'happy', 'helpful']
            negative_words = ['hate', 'terrible', 'awful', 'bad', 'worst', 'disappointed', 'horrible', 'poor', 'broken']
            
            text_lower = user_text.lower()
            pos_count = sum(1 for word in positive_words if word in text_lower)
            neg_count = sum(1 for word in negative_words if word in text_lower)
            
            total = pos_count + neg_count + 1
            pos_score = (pos_count + 0.5) / total
            neg_score = (neg_count + 0.5) / total
            
            if pos_score > neg_score + 0.1:
                result = "1-UP! 🍄"
                color = "#43B047"
                emoji = "🍄"
            elif neg_score > pos_score + 0.1:
                result = "GAME OVER 💀"
                color = "#E52521"
                emoji = "💀"
            else:
                result = "NEUTRAL ⭐"
                color = "#FBD000"
                emoji = "⭐"
            
            col1, col2 = st.columns(2)
            
            with col1:
                st.markdown(f"""
                <div style="background: #000; border: 4px solid {color}; padding: 2rem; text-align: center;">
                    <p style="font-size: 4rem; margin: 0;">{emoji}</p>
                    <p style="font-family: 'Press Start 2P', cursive; font-size: 1rem; color: {color};">
                        {result}
                    </p>
                    <p style="color: #aaa; font-size: 0.8rem; margin-top: 1rem;">
                        Confidence: {max(pos_score, neg_score)*100:.0f}%
                    </p>
                </div>
                """, unsafe_allow_html=True)
            
            with col2:
                fig = go.Figure(data=[go.Pie(
                    labels=['Positive', 'Negative', 'Neutral'],
                    values=[pos_score, neg_score, 1-pos_score-neg_score],
                    marker_colors=['#43B047', '#E52521', '#FBD000'],
                    hole=0.5
                )])
                fig.update_layout(
                    plot_bgcolor='#000020',
                    paper_bgcolor='#000020',
                    font_color='white',
                    height=300,
                    showlegend=True
                )
                st.plotly_chart(fig, use_container_width=True)

# Footer
st.markdown("---")
st.markdown("""
<div style="text-align: center; padding: 1rem;">
    <p style="font-family: 'Press Start 2P', cursive; font-size: 0.6rem; color: var(--coin-gold);">
        🎮 ALL BOSSES DEFEATED! 🎮
    </p>
</div>
""", unsafe_allow_html=True)
