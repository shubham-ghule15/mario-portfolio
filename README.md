# 🍄 Mario-Themed PM Portfolio

A unique Product Manager portfolio built with **Streamlit**, featuring a Super Mario Bros theme with 3D effects, interactive ML demos, and game-style navigation.

![Streamlit](https://img.shields.io/badge/Streamlit-1.28+-red?logo=streamlit)
![Python](https://img.shields.io/badge/Python-3.9+-blue?logo=python)
![License](https://img.shields.io/badge/License-MIT-green)

## 🎮 Live Demo

**[🌐 Visit Portfolio →](https://sghule15.streamlit.app/)**

## ✨ Features

### 🕹️ Mario-Themed Design
- **Pixel Art Typography** - Press Start 2P font for authentic retro feel
- **3D Effects** - Perspective transforms, shadows, and hover animations
- **Game HUD** - Experience points, coins, and world levels
- **Power-Up Tags** - Skills displayed as Mario power-ups (🍄 Mushroom, ⭐ Star, 🍃 Leaf)
- **Castle Cards** - Content sections styled as Mario castles

### 📊 Interactive ML Demos
| World | Demo | Description |
|-------|------|-------------|
| 2-1 | **Customer Segmentation** | K-Means clustering with adjustable parameters |
| 2-2 | **CLV Prediction** | Gradient Boosting model for customer lifetime value |
| 2-3 | **Sentiment Analysis** | Real-time text analysis with TextBlob |

### 📄 Multi-Page Navigation
- **🍄 Player Profile** - Home page with skills, stats, and about section
- **📊 Projects** - Interactive ML demos styled as boss battles
- **💼 Experience** - Work history presented as world progression
- **📄 Resume** - PDF viewer and download functionality
- **📬 Contact** - Email contact form with warp pipe theme

## 🚀 Quick Start

### Prerequisites
- Python 3.9 or higher
- pip package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/shubham-ghule15/mario-portfolio.git
cd mario-portfolio

# Install dependencies
pip install -r requirements.txt

# Run the app
streamlit run app.py
```

The app will open at `http://localhost:8501`

## 📁 Project Structure

```
mario-portfolio/
├── app.py                    # Main application & home page
├── pages/
│   ├── 2_📊_Projects.py      # ML demos (Segmentation, CLV, Sentiment)
│   ├── 3_💼_Experience.py    # Work history timeline
│   ├── 4_📄_Resume.py        # PDF viewer & download
│   └── 5_📬_Contact.py       # Contact form
├── assets/
│   └── resume.pdf            # Resume document
├── .streamlit/
│   └── config.toml           # Streamlit theme configuration
├── requirements.txt          # Python dependencies
└── README.md                 # This file
```

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Streamlit 1.28+ |
| **Data Analysis** | Pandas, NumPy |
| **Visualization** | Plotly Express |
| **Machine Learning** | Scikit-learn |
| **NLP** | TextBlob |
| **Styling** | Custom CSS with 3D transforms |

## 📦 Dependencies

```
streamlit>=1.28.0
pandas>=2.0.0
numpy>=1.24.0
plotly>=5.18.0
scikit-learn>=1.3.0
textblob>=0.17.1
Pillow>=10.0.0
```

## 🎨 Customization

### Changing Colors
The Mario color palette is defined in CSS variables:
- `--mario-red: #E52521` - Primary red
- `--mario-blue: #049CD8` - Secondary blue
- `--mario-green: #43B047` - Accent green
- `--coin-gold: #FBD000` - Highlight gold

### Adding New Pages
Create a new file in the `pages/` directory with the format:
```
{number}_{emoji}_{Name}.py
```
Example: `6_🎯_Goals.py`

## 🌐 Deployment

### Streamlit Cloud (Recommended)
1. Push code to GitHub
2. Go to [share.streamlit.io](https://share.streamlit.io)
3. Connect your repository
4. Deploy with one click

### Docker
```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 8501
CMD ["streamlit", "run", "app.py"]
```

## 👤 Author

**Shubham Ghule**  
Analytics & Strategy @ American Express

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/shubham-ghule)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black?logo=github)](https://github.com/shubham-ghule15)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Built with 🍄 and ❤️

**⭐ Star this repo if you like it!**

</div>
