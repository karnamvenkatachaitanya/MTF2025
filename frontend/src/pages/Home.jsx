import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight, Store, Star, Utensils, Gift, Tag, Rocket, Smile, Handshake, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import EventCategories from '../components/EventCategories';
import EventMap from '../components/EventMap';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-bg-image"></div>
                <div className="hero-gradient"></div>

                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >

                        <h1 className="hero-title">
                            Mega Trade Fair <span className="text-accent">2025</span>
                        </h1>
                        <h2 className="hero-subtitle">
                            The Biggest Opportunity Under One Roof
                        </h2>
                        <p className="hero-desc">
                            Experience 100+ Exhibitors from all business categories showcasing products, innovations, and services
                        </p>

                        <div className="hero-meta-row">
                            <div className="meta-pill">
                                <Calendar size={18} className="text-accent" />
                                <span>Dec 14, 15 & 16, 2025</span>
                            </div>
                            <div className="meta-pill">
                                <MapPin size={18} className="text-accent" />
                                <span>Lee Paradise, Ring Road</span>
                            </div>
                        </div>
                        <span className="badge" style={{ marginTop: '2rem', display: 'inline-block' }}>
                            ● First Time in Vizianagaram
                        </span>
                        <div className="hero-buttons">
                            <Link to="/register" className="btn-hero-yellow">
                                Get Visitor Pass <ArrowRight size={20} />
                            </Link>
                            <Link to="/register" className="btn-hero-outline">
                                Get Event Pass
                            </Link>
                            <a href="#map" className="btn-hero-outline">
                                <MapPin size={18} /> Get Directions
                            </a>
                        </div>
                        <div className="hero-stats-row">
                            <div className="hero-stat">
                                <span className="stat-val">100+</span>
                                <span className="stat-label">Exhibitors</span>
                            </div>
                            <div className="hero-stat">
                                <span className="stat-val">20+</span>
                                <span className="stat-label">Categories</span>
                            </div>
                            <div className="hero-stat">
                                <span className="stat-val">3</span>
                                <span className="stat-label">Days</span>
                            </div>
                            <div className="hero-stat">
                                <span className="stat-val">10K+</span>
                                <span className="stat-label">Expected Visitors</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About & Mission Section */}
            <section className="about-section">
                <div className="section-container">
                    <span className="about-label">ABOUT THE EVENT</span>
                    <h2 className="about-title">Mega Trade Fair <span className="about-year">2025</span></h2>
                    <p className="about-text">
                        Mega Trade Fair 2025 is the first-of-its-kind multi-industry expo in Vizianagaram, bringing together entrepreneurs from every business category to showcase products, innovations, and services to thousands of visitors.
                    </p>

                    <div className="mission-banner">
                        <h3 className="mission-label">Our Mission</h3>
                        <p className="mission-statement">
                            "Buy in Vizianagaram • Support Vizianagaram • Grow Vizianagaram"
                        </p>
                    </div>

                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon-box">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>
                            </div>
                            <h4 className="feature-title">First of Its Kind</h4>
                            <p className="feature-desc">The first multi-industry expo in Vizianagaram history.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon-box">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                            </div>
                            <h4 className="feature-title">Community Growth</h4>
                            <p className="feature-desc">Connecting entrepreneurs with thousands of visitors.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon-box">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                            </div>
                            <h4 className="feature-title">Shop Local</h4>
                            <p className="feature-desc">Discover products from 100+ local and regional businesses.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon-box">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" /><path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12" /></svg>
                            </div>
                            <h4 className="feature-title">Quality Guaranteed</h4>
                            <p className="feature-desc">Curated exhibitors across every business category.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Highlights Section */}
            {/* Event Highlights Section */}
            <section className="highlights-section">
                <div className="section-container">
                    <div className="highlights-header">
                        <span className="highlights-label">WHAT TO EXPECT</span>
                        <h2 className="highlights-title">Event <span className="text-secondary">Highlights</span></h2>
                        <p className="highlights-subtitle">Three days packed with exclusive opportunities, entertainment, and discovery</p>
                    </div>

                    <div className="highlights-grid-new">
                        <div className="highlight-card-new">
                            <div className="h-icon-box"><Store size={32} /></div>
                            <h3>100+ Business Exhibitors</h3>
                        </div>
                        <div className="highlight-card-new">
                            <div className="h-icon-box"><Star size={32} /></div>
                            <h3>All Categories Under One Roof</h3>
                        </div>
                        <div className="highlight-card-new">
                            <div className="h-icon-box"><Utensils size={32} /></div>
                            <h3>Dedicated Food Fest Zone</h3>
                        </div>
                        <div className="highlight-card-new">
                            <div className="h-icon-box"><Gift size={32} /></div>
                            <h3>Lucky Draw Every Hour</h3>
                        </div>
                        <div className="highlight-card-new">
                            <div className="h-icon-box"><Tag size={32} /></div>
                            <h3>Exclusive Event Discounts</h3>
                        </div>
                        <div className="highlight-card-new">
                            <div className="h-icon-box"><Rocket size={32} /></div>
                            <h3>New Product Launches</h3>
                        </div>
                        <div className="highlight-card-new">
                            <div className="h-icon-box"><Smile size={32} /></div>
                            <h3>Kids & Family-Friendly</h3>
                        </div>
                        <div className="highlight-card-new">
                            <div className="h-icon-box"><Handshake size={32} /></div>
                            <h3>Networking for Entrepreneurs</h3>
                        </div>
                        <div className="highlight-card-new">
                            <div className="h-icon-box"><Users size={32} /></div>
                            <h3>First Time in Vizianagaram</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <EventCategories />

            {/* Event Map Section */}
            <EventMap />
        </div>
    );
};

export default Home;
