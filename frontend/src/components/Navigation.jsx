import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const navItems = [
    { path: '/', label: 'HOME', icon: '🏠' },
    { path: '/projects', label: 'PROJECTS', icon: '🎮' },
    { path: '/experience', label: 'WORK', icon: '💼' },
    { path: '/resume', label: 'RESUME', icon: '📄' },
    { path: '/contact', label: 'CONTACT', icon: '📬' }
]

function Navigation() {
    return (
        <header className="mario-header">
            <div className="header-content">
                <motion.div
                    className="logo-section"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="logo-icon">🍄</span>
                    <span className="logo-text">SHUBHAM G.</span>
                </motion.div>

                <nav className="nav-section">
                    {navItems.map((item, index) => (
                        <motion.div
                            key={item.path}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <NavLink
                                to={item.path}
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            >
                                <span className="nav-icon">{item.icon}</span>
                                <span className="nav-label">{item.label}</span>
                            </NavLink>
                        </motion.div>
                    ))}
                </nav>

                <div className="coin-section">
                    <span className="coin-anim">🪙</span>
                    <span className="coin-count">×99</span>
                </div>
            </div>
        </header>
    )
}

export default Navigation
