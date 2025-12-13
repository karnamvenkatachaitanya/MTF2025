import { useState } from 'react';
import { Ticket, CheckCircle } from 'lucide-react';
import './Register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '', phone: '', email: '', city: '', gender: '', age: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwO5mzWKcJQSEn8X70dMPDtLJL_l56R7WphHQfJCkw8YeDh5An7kELUTcClRT4lvy3v/exec";

        try {
            // Save to LocalStorage (Backup)
            const existingData = JSON.parse(localStorage.getItem('registrations') || '[]');
            const newData = { ...formData, id: Date.now(), timestamp: new Date().toISOString() };
            localStorage.setItem('registrations', JSON.stringify([...existingData, newData]));

            // Send to Google Sheets
            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // Important: Bypasses CORS restrictions
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newData)
            });

            setStatus('success');
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="register-success-container">
                <div className="success-card">
                    <CheckCircle className="success-icon" />
                    <h2 className="success-title">Registration Successful!</h2>
                    <p className="success-text">Your visitor pass has been generated. Please check your email and phone for the pass details.</p>
                    <button onClick={() => setStatus('idle')} className="btn-submit">Register Another</button>
                </div>
            </div>
        );
    }

    return (
        <div className="register-container">
            <div className="register-content">
                <div className="register-card-wrapper">
                    <div className="register-card">
                        <div className="card-title-row">
                            <Ticket className="title-icon" />
                            <h1 className="success-title" style={{ marginBottom: 0 }}>Get Visitor Pass</h1>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="form-group">
                                <label className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Phone Number</label>
                                <input
                                    type="tel"
                                    className="form-input"
                                    value={formData.phone}
                                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Email Address</label>
                                <input
                                    type="email"
                                    className="form-input"
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Gender</label>
                                <select
                                    className="form-input"
                                    value={formData.gender}
                                    onChange={e => setFormData({ ...formData, gender: e.target.value })}
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Age</label>
                                <input
                                    type="number"
                                    className="form-input"
                                    value={formData.age}
                                    onChange={e => setFormData({ ...formData, age: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">City</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    value={formData.city}
                                    onChange={e => setFormData({ ...formData, city: e.target.value })}
                                />
                            </div>

                            <button
                                disabled={status === 'submitting'}
                                className="btn-submit"
                            >
                                {status === 'submitting' ? 'Generating Pass...' : 'Generate Pass'}
                            </button>

                            {status === 'error' && (
                                <p className="error-text">Something went wrong. Please try again.</p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
