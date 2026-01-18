import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Navigation from './components/Navigation'

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'))
const Projects = lazy(() => import('./pages/Projects'))
const Experience = lazy(() => import('./pages/Experience'))
const Resume = lazy(() => import('./pages/Resume'))
const Contact = lazy(() => import('./pages/Contact'))

// Loading component
const Loading = () => (
    <div className="loading-screen">
        <div className="loading-mushroom">🍄</div>
        <p>Loading...</p>
    </div>
)

function App() {
    return (
        <div className="app">
            <Navigation />
            <main className="main-content">
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Suspense>
            </main>
            <div className="floating-decorations">
                <span className="q-block">❓</span>
                <span className="q-block">❓</span>
                <span className="floating-coin">🪙</span>
                <span className="floating-coin">🪙</span>
            </div>
        </div>
    )
}

export default App
