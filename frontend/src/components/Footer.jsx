import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    {/* Brand */}
                    <div className="footer-col">
                        <Link to="/" className="footer-logo">
                            <Rocket className="text-secondary" />
                            <span>MTF<span className="text-secondary">2025</span></span>
                        </Link>
                        <p className="footer-desc">
                            The first multi-industry expo in Vizianagaram.
                            <strong> Buy local, support local, grow local.</strong>
                        </p>
                        <div className="footer-socials">
                            <a href="#" className="social-link"><Facebook size={18} /></a>
                            <a href="#" className="social-link"><Instagram size={18} /></a>
                            <a href="#" className="social-link"><Twitter size={18} /></a>
                            <a href="#" className="social-link"><Linkedin size={18} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h3>Quick Links</h3>
                        <div className="footer-links">
                            <Link to="/">Home</Link>
                            <Link to="/exhibitors">Exhibitors Directory</Link>
                            <Link to="/schedule">Event Schedule</Link>
                            <Link to="/register">Get Visitor Pass</Link>
                            <Link to="/contact">Contact Us</Link>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-col">
                        <h3>Contact Info</h3>
                        <div className="footer-contact-item">
                            <MapPin className="contact-icon" size={20} />
                            <span>Lee Paradise, Ring Road,<br />Vizianagaram, AP</span>
                        </div>
                        <div className="footer-contact-item">
                            <Phone className="contact-icon" size={20} />
                            <span>+91 98481 45176</span>
                        </div>
                        <div className="footer-contact-item">
                            <Mail className="contact-icon" size={20} />
                            <span>info@megatradefair.com</span>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2025 Mega Trade Fair. All rights reserved.</p>
                    <p>Designed with ❤️ in Vizianagaram</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
