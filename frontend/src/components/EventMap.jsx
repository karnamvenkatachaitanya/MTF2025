import React from 'react';
import { MapPin, Calendar, Clock, Download, ExternalLink, Car, Navigation2, Info } from 'lucide-react';
import './EventMap.css';

const EventMap = () => {
    const handleOpenMap = () => {
        window.open('https://www.google.com/maps?q=Lee+Paradise+Ring+Road+Vizianagaram', '_blank');
    };

    return (
        <section className="map-section" id="map">
            <div className="map-container">
                <div className="map-header">
                    <span className="map-subtitle">EVENT LOCATION</span>
                    <h2 className="map-title">Find Us at <span className="text-gold">Lee Paradise</span></h2>
                    <p className="map-desc">
                        Conveniently located on Ring Road, Vizianagaram with ample parking space
                    </p>
                </div>

                <div className="map-grid">
                    {/* Left Column: Map */}
                    <div className="map-frame-container">
                        <iframe
                            title="Google Map Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15198.88371360058!2d83.43572970505373!3d18.11874268673756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3be571f5f2066f%3A0xe744e27f6e127394!2sLee%20Paradise!5e0!3m2!1sen!2sin!4v1715423854321!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="google-map-iframe"
                        ></iframe>
                    </div>

                    {/* Right Column: Details */}
                    <div className="venue-details-card">
                        <h3 className="venue-title">Venue Details</h3>

                        <div className="venue-info-list">
                            <div className="venue-item">
                                <div className="venue-icon-box bg-gold-light">
                                    <MapPin size={22} className="text-gold-dark" />
                                </div>
                                <div className="venue-text">
                                    <span className="venue-label">Venue</span>
                                    <p className="venue-val">Lee Paradise, Ring Road</p>
                                </div>
                            </div>

                            <div className="venue-item">
                                <div className="venue-icon-box bg-gold-light">
                                    <Navigation2 size={22} className="text-gold-dark" />
                                </div>
                                <div className="venue-text">
                                    <span className="venue-label">City</span>
                                    <p className="venue-val">Vizianagaram, Andhra Pradesh</p>
                                </div>
                            </div>

                            <div className="venue-item">
                                <div className="venue-icon-box bg-gold-light">
                                    <Car size={22} className="text-gold-dark" />
                                </div>
                                <div className="venue-text">
                                    <span className="venue-label">Parking</span>
                                    <p className="venue-val">Free parking available</p>
                                </div>
                            </div>

                            <div className="venue-item">
                                <div className="venue-icon-box bg-gold-light">
                                    <Clock size={22} className="text-gold-dark" />
                                </div>
                                <div className="venue-text">
                                    <span className="venue-label">Timings</span>
                                    <p className="venue-val">10:00 AM - 9:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="venue-actions">
                            <button onClick={handleOpenMap} className="btn-map-gold">
                                <Navigation2 size={18} /> Open in Google Maps
                            </button>
                            <button className="btn-map-outline">
                                Download Event Map (PDF)
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventMap;
