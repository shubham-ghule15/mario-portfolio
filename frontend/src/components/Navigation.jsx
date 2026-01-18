import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Experience' },
    { path: '/resume', label: 'Resume' },
    { path: '/contact', label: 'Contact' }
]

function Navigation() {
    return (
        <motion.header
            className="nav-header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <NavLink to="/" className="nav-logo">
                SG
            </NavLink>

            <nav className="nav-links">
                {navItems.map((item, index) => (
                    <motion.div
                        key={item.path}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                        <NavLink
                            to={item.path}
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        >
                            {item.label}
                        </NavLink>
                    </motion.div>
                ))}
            </nav>
        </motion.header>
    )
}

export default Navigation
