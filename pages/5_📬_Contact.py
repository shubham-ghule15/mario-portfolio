"""
📬 Contact Page - Mario Warp Pipe Style with Email Integration
"""

import streamlit as st
import urllib.parse

st.set_page_config(
    page_title="Contact | Warp Zone 🟢",
    page_icon="🟢",
    layout="wide"
)

# Consistent Mario-themed CSS with 3D effects
st.markdown("""
<style>
    @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Inter:wght@400;500;600;700&display=swap');
    
    :root {
        --mario-red: #E52521;
        --coin-gold: #FFD700;
        --pipe-green: #00A800;
        --mario-blue: #049CD8;
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
            radial-gradient(ellipse 120px 80px at 15% 12%, rgba(255,255,255,0.8) 0%, transparent 70%),
            radial-gradient(ellipse 100px 60px at 80% 8%, rgba(255,255,255,0.7) 0%, transparent 70%),
            radial-gradient(ellipse 80px 50px at 50% 5%, rgba(255,255,255,0.6) 0%, transparent 70%);
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
    
    /* 3D Warp Pipe */
    .warp-pipe {
        background: linear-gradient(180deg, #00E800 0%, var(--pipe-green) 30%, #006800 100%);
        border: 6px solid #000;
        border-radius: 25px 25px 0 0;
        padding: 1.5rem 2rem;
        text-align: center;
        box-shadow: 
            6px 6px 0px rgba(0,0,0,0.5),
            inset 0 10px 25px rgba(255,255,255,0.3),
            inset 0 -8px 20px rgba(0,0,0,0.4),
            inset 8px 0 15px rgba(255,255,255,0.1),
            inset -8px 0 15px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
        transform: perspective(500px) rotateX(5deg);
        cursor: pointer;
    }
    
    .warp-pipe:hover {
        transform: perspective(500px) rotateX(0deg) translateY(-15px) scale(1.05);
        box-shadow: 
            8px 20px 0px rgba(0,0,0,0.3),
            inset 0 10px 30px rgba(255,255,255,0.4),
            0 0 30px rgba(0,168,0,0.5);
    }
    
    .pixel-title {
        font-family: 'Press Start 2P', cursive;
        font-size: 1.3rem;
        color: var(--pipe-green);
        text-shadow: 
            0 1px 0 #008800,
            0 2px 0 #006600,
            0 3px 0 #004400,
            4px 4px 0px #000;
        text-align: center;
    }
    
    /* 3D 1-UP Box */
    .oneup-box {
        background: linear-gradient(180deg, #00D800 0%, var(--pipe-green) 50%, #006800 100%);
        border: 6px solid #000;
        border-radius: 12px;
        padding: 2rem;
        text-align: center;
        box-shadow: 
            8px 8px 0px rgba(0,0,0,0.5),
            inset 0 4px 0 rgba(255,255,255,0.3),
            inset 0 -4px 0 rgba(0,0,0,0.3),
            0 0 40px rgba(0,168,0,0.3);
        margin: 1rem 0;
        transform: perspective(600px) rotateX(3deg);
        animation: pulse1up 2s ease-in-out infinite;
    }
    
    @keyframes pulse1up {
        0%, 100% { box-shadow: 8px 8px 0px rgba(0,0,0,0.5), 0 0 20px rgba(0,168,0,0.3); }
        50% { box-shadow: 8px 8px 0px rgba(0,0,0,0.5), 0 0 50px rgba(0,168,0,0.5); }
    }
    
    /* Form styling */
    .stTextInput > div > div > input,
    .stTextArea > div > div > textarea {
        background: rgba(0,0,0,0.8) !important;
        border: 4px solid var(--coin-gold) !important;
        border-radius: 4px !important;
        color: white !important;
        font-family: 'Inter', sans-serif !important;
        box-shadow: inset 0 0 10px rgba(255,215,0,0.1);
    }
    
    .stTextInput > div > div > input:focus,
    .stTextArea > div > div > textarea:focus {
        border-color: var(--pipe-green) !important;
        box-shadow: 0 0 20px rgba(0,168,0,0.3);
    }
    
    /* 3D Button */
    .stButton > button, .stFormSubmitButton > button {
        font-family: 'Press Start 2P', cursive !important;
        font-size: 0.7rem !important;
        background: linear-gradient(180deg, var(--pipe-green) 0%, #006600 100%) !important;
        border: 4px solid #000 !important;
        border-radius: 4px !important;
        color: white !important;
        padding: 1rem 2rem !important;
        box-shadow: 
            4px 4px 0px #000,
            inset 0 2px 0 rgba(255,255,255,0.3) !important;
        transform: perspective(500px) rotateX(5deg) !important;
        transition: all 0.15s ease !important;
    }
    
    .stButton > button:hover, .stFormSubmitButton > button:hover {
        transform: perspective(500px) rotateX(0deg) translateY(-4px) !important;
        box-shadow: 4px 8px 0px #000, 0 0 20px rgba(0,168,0,0.4) !important;
    }
    
    /* Ground footer */
    .ground-footer {
        background: linear-gradient(180deg, var(--mario-green, #43B047) 0%, #228B22 8%, #8B4513 8%, #654321 100%);
        padding: 2rem;
        margin-top: 3rem;
        border-top: 6px solid #000;
        box-shadow: inset 0 5px 15px rgba(0,0,0,0.3);
    }
</style>
""", unsafe_allow_html=True)

st.markdown("""
<div style="text-align: center; padding: 1rem; position: relative; z-index: 1;">
    <span style="font-family: 'Press Start 2P', cursive; font-size: 0.8rem; color: white; 
          background: linear-gradient(180deg, var(--pipe-green) 0%, #006600 100%); 
          padding: 0.5rem 1.5rem; border: 4px solid #000; box-shadow: 4px 4px 0px #000;">
        🟢 WORLD 5: WARP ZONE
    </span>
</div>
""", unsafe_allow_html=True)

st.markdown('<h1 class="pixel-title">🟢 WARP PIPES: CONTACT 🟢</h1>', unsafe_allow_html=True)

st.markdown("""
<p style="text-align: center; color: #fff; font-size: 1.1rem; margin: 1.5rem 0; text-shadow: 2px 2px 0 rgba(0,0,0,0.5); position: relative; z-index: 1;">
    Jump into a warp pipe to connect with me! 🍄
</p>
""", unsafe_allow_html=True)

# Warp Pipes for contact
pipe_col1, pipe_col2, pipe_col3, pipe_col4 = st.columns(4)

with pipe_col1:
    st.markdown("""
    <a href="mailto:shubhamrghule15@gmail.com" style="text-decoration: none;">
        <div class="warp-pipe">
            <p style="font-size: 3rem; margin: 0; filter: drop-shadow(2px 2px 0 #000);">📧</p>
            <p style="font-family: 'Press Start 2P', cursive; font-size: 0.6rem; color: white; margin-top: 0.75rem; text-shadow: 2px 2px 0 #000;">
                EMAIL
            </p>
        </div>
    </a>
    """, unsafe_allow_html=True)

with pipe_col2:
    st.markdown("""
    <a href="https://linkedin.com/in/shubhamghule" target="_blank" style="text-decoration: none;">
        <div class="warp-pipe">
            <p style="font-size: 3rem; margin: 0; filter: drop-shadow(2px 2px 0 #000);">🔗</p>
            <p style="font-family: 'Press Start 2P', cursive; font-size: 0.6rem; color: white; margin-top: 0.75rem; text-shadow: 2px 2px 0 #000;">
                LINKEDIN
            </p>
        </div>
    </a>
    """, unsafe_allow_html=True)

with pipe_col3:
    st.markdown("""
    <a href="https://github.com/shubhamghule" target="_blank" style="text-decoration: none;">
        <div class="warp-pipe">
            <p style="font-size: 3rem; margin: 0; filter: drop-shadow(2px 2px 0 #000);">💻</p>
            <p style="font-family: 'Press Start 2P', cursive; font-size: 0.6rem; color: white; margin-top: 0.75rem; text-shadow: 2px 2px 0 #000;">
                GITHUB
            </p>
        </div>
    </a>
    """, unsafe_allow_html=True)

with pipe_col4:
    st.markdown("""
    <a href="tel:+917720911123" style="text-decoration: none;">
        <div class="warp-pipe">
            <p style="font-size: 3rem; margin: 0; filter: drop-shadow(2px 2px 0 #000);">📱</p>
            <p style="font-family: 'Press Start 2P', cursive; font-size: 0.5rem; color: white; margin-top: 0.75rem; text-shadow: 2px 2px 0 #000;">
                PHONE
            </p>
        </div>
    </a>
    """, unsafe_allow_html=True)

st.markdown("<br>", unsafe_allow_html=True)

# 1-UP Card
col1, col2, col3 = st.columns([1, 2, 1])
with col2:
    st.markdown("""
    <div class="oneup-box">
        <p style="font-size: 5rem; margin: 0; filter: drop-shadow(3px 3px 0 #000);">🍄</p>
        <p style="font-family: 'Press Start 2P', cursive; font-size: 1rem; color: white; margin: 0.75rem 0; text-shadow: 2px 2px 0 #000;">
            1-UP!
        </p>
        <p style="color: #ddd; font-size: 0.95rem;">
            Open to new opportunities and collaborations!
        </p>
        <p style="font-family: 'Press Start 2P', cursive; font-size: 0.65rem; color: #00FF00; margin-top: 1rem; text-shadow: 0 0 10px #00FF00;">
            ● ONLINE
        </p>
    </div>
    """, unsafe_allow_html=True)

st.markdown("<br>", unsafe_allow_html=True)

# Message Form that redirects to email
st.markdown("""
<p style="font-family: 'Press Start 2P', cursive; font-size: 0.9rem; color: var(--coin-gold); text-align: center; margin: 2rem 0; text-shadow: 2px 2px 0 #000; position: relative; z-index: 1;">
    📨 SEND A MESSAGE
</p>
""", unsafe_allow_html=True)

# Form that creates mailto link
with st.form("contact_form"):
    col1, col2 = st.columns(2)
    with col1:
        name = st.text_input("🎮 YOUR NAME")
        email = st.text_input("📧 YOUR EMAIL")
    with col2:
        subject = st.text_input("📝 SUBJECT")
        company = st.text_input("🏢 COMPANY (Optional)")
    
    message = st.text_area("💬 MESSAGE", height=150)
    
    submitted = st.form_submit_button("🍄 SEND 1-UP", use_container_width=True)
    
    if submitted:
        if name and email and message:
            # Create mailto link with form data
            email_to = "shubhamrghule15@gmail.com"
            email_subject = f"Portfolio Contact: {subject}" if subject else f"Portfolio Contact from {name}"
            email_body = f"""Hello Shubham!

Name: {name}
Email: {email}
Company: {company if company else 'Not specified'}

Message:
{message}

---
Sent via Mario Portfolio 🍄"""
            
            # URL encode the email body
            encoded_subject = urllib.parse.quote(email_subject)
            encoded_body = urllib.parse.quote(email_body)
            mailto_link = f"mailto:{email_to}?subject={encoded_subject}&body={encoded_body}"
            
            st.success("🍄 1-UP READY! Click below to send via your email client!")
            st.markdown(f"""
            <a href="{mailto_link}" target="_blank" style="text-decoration: none;">
                <div style="background: linear-gradient(180deg, var(--pipe-green) 0%, #006600 100%); 
                            border: 4px solid #000; border-radius: 8px; padding: 1rem 2rem; 
                            text-align: center; margin: 1rem 0; cursor: pointer;
                            box-shadow: 4px 4px 0px #000;">
                    <p style="font-family: 'Press Start 2P', cursive; font-size: 0.8rem; color: white; margin: 0;">
                        📧 OPEN EMAIL CLIENT
                    </p>
                </div>
            </a>
            """, unsafe_allow_html=True)
            st.balloons()
        else:
            st.error("💀 GAME OVER! Please fill in Name, Email, and Message.")

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
