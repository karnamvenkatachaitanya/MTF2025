import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const organisers = [
        { name: 'Mukesh', phone: '98481 45176' },
        { name: 'Ramesh', phone: '98860 67968' },
        { name: 'Rakesh', phone: '89789 70400' },
        { name: 'Pradeep', phone: '99666 01464' },
        { name: 'Krishna', phone: '99854 72200' },
        { name: 'Venkatesh', phone: '83408 89417' }
    ];

    return (
        <div className="contact-container">
            <div className="contact-content">
                <div className="contact-header">
                    <span className="pre-heading">GET IN TOUCH</span>
                    <h1 className="main-heading">Contact <span className="highlight-text">Organisers</span></h1>
                    <p className="sub-heading">Have questions about the event? Reach out to our team</p>
                </div>

                <div className="organisers-grid">
                    {organisers.map((org, index) => (
                        <div key={index} className="organiser-card">
                            <div className="icon-box">
                                <Phone size={20} />
                            </div>
                            <div className="org-details">
                                <h3>{org.name}</h3>
                                <p>{org.phone}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="contact-footer">
                    <a href="mailto:megatfairvzm2025@gmail.com" className="email-button">
                        <Mail size={20} />
                        megatfairvzm2025@gmail.com
                    </a>

                    <p className="social-text">Follow us on social media</p>
                    <div className="social-links">
                        <a href="#" className="social-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                        <a href="#" className="social-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </a>
                        <a href="#" className="social-icon">
                            <Send size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
