"""
📄 Resume Page - Mario Star Collection Style with Enhanced PDF Viewer
"""

import streamlit as st
import base64
import os

st.set_page_config(
    page_title="Resume | Star Power ⭐",
    page_icon="⭐",
    layout="wide"
)

# Consistent Mario-themed CSS with 3D effects
st.markdown("""
<style>
    @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Inter:wght@400;500;600;700&display=swap');
    
    :root {
        --mario-red: #E52521;
        --coin-gold: #FFD700;
        --mario-blue: #049CD8;
        --mario-green: #43B047;
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
            radial-gradient(ellipse 120px 80px at 20% 10%, rgba(255,255,255,0.8) 0%, transparent 70%),
            radial-gradient(ellipse 100px 60px at 75% 15%, rgba(255,255,255,0.7) 0%, transparent 70%),
            radial-gradient(ellipse 80px 50px at 40% 8%, rgba(255,255,255,0.6) 0%, transparent 70%);
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
    
    /* 3D Star Card */
    .star-card {
        background: linear-gradient(135deg, var(--coin-gold) 0%, #FFE44D 30%, #CC9900 100%);
        border: 8px solid #000;
        border-radius: 16px;
        padding: 2.5rem;
        text-align: center;
        box-shadow: 
            10px 10px 0px rgba(0,0,0,0.5),
            inset 0 5px 0 rgba(255,255,255,0.4),
            inset 0 -5px 0 rgba(0,0,0,0.2),
            0 0 50px rgba(255,215,0,0.4);
        margin: 2rem auto;
        max-width: 500px;
        transform: perspective(800px) rotateX(5deg) rotateY(-2deg);
        transition: all 0.3s ease;
        position: relative;
        z-index: 1;
    }
    
    .star-card:hover {
        transform: perspective(800px) rotateX(0deg) rotateY(0deg) translateY(-10px) scale(1.02);
        box-shadow: 
            12px 20px 0px rgba(0,0,0,0.4),
            0 0 80px rgba(255,215,0,0.6);
    }
    
    .pixel-title {
        font-family: 'Press Start 2P', cursive;
        font-size: 1.3rem;
        color: var(--coin-gold);
        text-shadow: 
            0 1px 0 #CC9900,
            0 2px 0 #BB8800,
            0 3px 0 #AA7700,
            4px 4px 0px #000;
        text-align: center;
    }
    
    /* Spinning star animation */
    @keyframes starSpin {
        0% { transform: rotate(0deg) scale(1); }
        25% { transform: rotate(15deg) scale(1.15); }
        50% { transform: rotate(0deg) scale(1); }
        75% { transform: rotate(-15deg) scale(1.15); }
        100% { transform: rotate(0deg) scale(1); }
    }
    
    .spinning-star {
        animation: starSpin 2s ease-in-out infinite;
        display: inline-block;
        filter: drop-shadow(0 0 20px rgba(255,215,0,0.8));
    }
    
    /* 3D Download button */
    .stDownloadButton > button {
        font-family: 'Press Start 2P', cursive !important;
        font-size: 0.75rem !important;
        background: linear-gradient(180deg, var(--mario-red) 0%, #B01010 100%) !important;
        border: 5px solid #000 !important;
        border-radius: 6px !important;
        color: white !important;
        padding: 1.2rem 2.5rem !important;
        box-shadow: 
            5px 5px 0px #000,
            inset 0 3px 0 rgba(255,255,255,0.3),
            inset 0 -3px 0 rgba(0,0,0,0.3) !important;
        transform: perspective(500px) rotateX(5deg) !important;
        transition: all 0.15s ease !important;
    }
    
    .stDownloadButton > button:hover {
        transform: perspective(500px) rotateX(0deg) translateY(-5px) scale(1.02) !important;
        box-shadow: 5px 12px 0px #000, 0 0 30px rgba(229,37,33,0.4) !important;
    }
    
    /* PDF Viewer frame with 3D effect */
    .pdf-frame {
        border: 8px solid #000;
        border-radius: 12px;
        box-shadow: 
            8px 8px 0px rgba(0,0,0,0.5),
            inset 0 0 20px rgba(0,0,0,0.3);
        overflow: hidden;
        background: #1a1a1a;
        transform: perspective(1000px) rotateX(2deg);
        transition: all 0.3s ease;
    }
    
    .pdf-frame:hover {
        transform: perspective(1000px) rotateX(0deg);
        box-shadow: 
            10px 12px 0px rgba(0,0,0,0.4),
            0 0 40px rgba(255,215,0,0.2);
    }
    
    /* Scroll of Power header */
    .scroll-header {
        font-family: 'Press Start 2P', cursive;
        font-size: 0.9rem;
        color: var(--coin-gold);
        text-shadow: 3px 3px 0 #000;
        text-align: center;
        margin: 2rem 0 1rem;
        position: relative;
        z-index: 1;
    }
    
    /* Ground footer */
    .ground-footer {
        background: linear-gradient(180deg, var(--mario-green) 0%, #228B22 8%, #8B4513 8%, #654321 100%);
        padding: 2rem;
        margin-top: 3rem;
        border-top: 6px solid #000;
        box-shadow: inset 0 5px 15px rgba(0,0,0,0.3);
    }
</style>
""", unsafe_allow_html=True)

st.markdown("""
<div style="text-align: center; padding: 1rem; position: relative; z-index: 1;">
    <span style="font-family: 'Press Start 2P', cursive; font-size: 0.8rem; color: #000; 
          background: linear-gradient(180deg, var(--coin-gold) 0%, #CC9900 100%); 
          padding: 0.5rem 1.5rem; border: 4px solid #000; box-shadow: 4px 4px 0px #000;">
        ⭐ WORLD 4: RESUME
    </span>
</div>
""", unsafe_allow_html=True)

st.markdown('<h1 class="pixel-title">⭐ COLLECT YOUR STAR ⭐</h1>', unsafe_allow_html=True)

# Star Card with enhanced 3D effect
resume_path = "assets/resume.pdf"

col1, col2, col3 = st.columns([1, 2, 1])

with col2:
    st.markdown("""
    <div class="star-card">
        <span class="spinning-star" style="font-size: 6rem;">⭐</span>
        <p style="font-family: 'Press Start 2P', cursive; font-size: 1rem; color: #000; margin: 1.5rem 0 0.5rem;">
            SHUBHAM GHULE
        </p>
        <p style="color: #333; font-weight: 700; font-size: 1rem;">
            Analytics & Strategy Hero
        </p>
        <p style="color: #555; font-size: 0.9rem; margin: 1rem 0;">
            IIM Bangalore | 3+ Years XP | 22+ Products
        </p>
        <div style="margin-top: 1.5rem;">
            <span style="background: #000; color: var(--coin-gold); padding: 0.3rem 0.7rem; 
                         font-family: 'Press Start 2P', cursive; font-size: 0.5rem; border-radius: 4px;">
                $5M+ PROFIT
            </span>
            <span style="background: #000; color: var(--coin-gold); padding: 0.3rem 0.7rem; 
                         font-family: 'Press Start 2P', cursive; font-size: 0.5rem; border-radius: 4px; margin-left: 0.5rem;">
                $1B+ REVENUE
            </span>
        </div>
    </div>
    """, unsafe_allow_html=True)
    
    if os.path.exists(resume_path):
        with open(resume_path, "rb") as pdf_file:
            pdf_bytes = pdf_file.read()
        
        st.download_button(
            label="⬇️ DOWNLOAD STAR POWER",
            data=pdf_bytes,
            file_name="Shubham_Ghule_Resume.pdf",
            mime="application/pdf",
            use_container_width=True
        )
    else:
        st.warning("⭐ Star loading... Resume PDF not found in assets folder.")

# PDF Preview with enhanced frame
if os.path.exists(resume_path):
    st.markdown('<p class="scroll-header">📜 SCROLL OF POWER 📜</p>', unsafe_allow_html=True)
    
    with open(resume_path, "rb") as pdf_file:
        pdf_bytes = pdf_file.read()
    
    base64_pdf = base64.b64encode(pdf_bytes).decode('utf-8')
    
    # Enhanced PDF viewer with 3D frame
    st.markdown(f"""
    <div class="pdf-frame">
        <iframe 
            src="data:application/pdf;base64,{base64_pdf}#toolbar=1&navpanes=0&scrollbar=1" 
            width="100%" 
            height="800px" 
            style="border: none; background: white;">
        </iframe>
    </div>
    """, unsafe_allow_html=True)

# Ground Footer
st.markdown("""
<div class="ground-footer">
    <div style="text-align: center; padding: 1rem 0;">
        <p style="font-family: 'Press Start 2P', cursive; font-size: 0.8rem; color: var(--coin-gold); text-shadow: 2px 2px 0 #000;">
            ⭐ STAR COLLECTED! ⭐
        </p>
        <p style="color: #ccc; font-size: 0.85rem; margin-top: 0.75rem;">
            © 2026 Shubham Ghule | Built with Streamlit 🚀
        </p>
    </div>
</div>
""", unsafe_allow_html=True)
