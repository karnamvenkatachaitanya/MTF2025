import React from 'react';
import './Schedule.css';

const Schedule = () => {
    const events = [
        {
            day: "Day 1 - Dec 15",
            items: [
                { time: "10:00 AM", title: "Opening Ceremony", desc: "Inauguration by Hon'ble Minister of Commerce. Traditional lamp lighting and keynote address." },
                { time: "11:30 AM", title: "Expo Zones Opening", desc: "All exhibition halls open for visitors. Special access for VIP pass holders." },
                { time: "02:00 PM", title: "Tech Talk: Future Issues", desc: "Panel discussion with industry leaders on the future of trade in Vizianagaram." },
                { time: "06:00 PM", title: "Cultural Night", desc: "Traditional dance performance by local artists followed by dinner." }
            ]
        },
        {
            day: "Day 2 - Dec 16",
            items: [
                { time: "10:30 AM", title: "Startup Pitch Fest", desc: "Young entrepreneurs present their innovative ideas to investors." },
                { time: "01:00 PM", title: "Networking Lunch", desc: "Open networking session for B2B card exchange and collaboration." },
                { time: "04:00 PM", title: "Automobile Showcase", desc: "Live demonstration of the latest EV models and test drives." }
            ]
        }
    ];

    return (
        <div className="schedule-container">
            <div className="container mx-auto px-6">
                <div className="page-header">
                    <h1 className="page-title">Event Schedule</h1>
                    <p className="page-subtitle">Don't miss out on the key events</p>
                </div>

                <div className="timeline-container">
                    {events.map((dayGroup, index) => (
                        <div key={index}>
                            <div className="day-header">
                                <span className="day-badge">{dayGroup.day}</span>
                            </div>
                            {dayGroup.items.map((event, i) => (
                                <div key={i} className="timeline-item">
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-content">
                                        <div className="event-card">
                                            <span className="event-time">{event.time}</span>
                                            <h3 className="event-title">{event.title}</h3>
                                            <p className="event-desc">{event.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Schedule;
