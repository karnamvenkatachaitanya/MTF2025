import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';
import clsx from 'clsx';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Exhibitors', path: '/exhibitors' },
        { name: 'Schedule', path: '/schedule' },
        { name: 'Contact', path: '/contact' },
    ];

    const isHome = location.pathname === '/';

    return (
        <nav className={`navbar ${scrolled || !isHome ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    <Rocket className="text-secondary" />
                    <span>MTF<span className="text-secondary">2025</span></span>
                </Link>

                {/* Desktop Nav */}
                <div className="nav-desktop">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/register"
                        className="btn-get-pass"
                    >
                        Get Pass
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button onClick={() => setIsOpen(!isOpen)} className="nav-mobile-toggle">
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="mobile-menu">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className="mobile-link"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/register"
                        onClick={() => setIsOpen(false)}
                        className="mobile-btn"
                    >
                        Get Visitor Pass
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
