import React from 'react';
import './Schedule.css';

const Schedule = () => {
    const events = [
        {
            day: "DAY 1 – BUILDING ENERGY, OPENING & CROWD PULL",
            theme: "Launch • Visibility • First Impressions",
            items: [
                {
                    time: "11:00 - 12:00 AM",
                    title: "GRAND INAUGURATION & OPENING CEREMONY",
                    icon: "⏰",
                    details: [
                        {
                            type: 'subheading',
                            text: 'Protocol Order on Dais:'
                        },
                        {
                            type: 'list-numbered',
                            items: [
                                { name: "Sri Kondapalli Srinivas Rao Garu", role: "Hon'ble Minister for MSME, Govt. of Andhra Pradesh" },
                                { name: "Sri Kalisetti Appala Naidu Garu", role: "Hon'ble Member of Parliament" },
                                { name: "Smt. Aditi Vijayalaxmi Gajapati Raju Garu", role: "Hon'ble MLA, Vizianagaram" },
                                { name: "Sri S. Ram Sundhar Reddy Garu", role: "IAS, District Collector & Magistrate" },
                                { name: "Sri Majji Srinivas Rao Garu", role: "Zilla Parishad Chairperson" },
                                { name: "Sri Kolagatla Veerabhadra Swamy Garu", role: "Former MLA & Former Deputy Speaker" }
                            ]
                        },
                        {
                            type: 'subheading',
                            text: 'Flow:'
                        },
                        {
                            type: 'list-bullet',
                            items: [
                                "Welcome Address (Bilingual)",
                                "Dignitary Introductions",
                                "Ceremonial Lamp Lighting",
                                "Inaugural Declaration",
                                "Visitor Welcome Announcement"
                            ]
                        }
                    ]
                },
                {
                    time: "12:00 AM",
                    title: "Lucky Dip Round #1",
                    icon: "🎁",
                    desc: ""
                },
                {
                    time: "12:15 AM",
                    title: "Micro Podcast Session",
                    icon: "🎙️",
                    details: [
                        {
                            type: 'text',
                            text: 'Topic: "How Local Businesses Are Transforming Vizianagaram – 2025"'
                        }
                    ]
                }
            ]
        }
    ];

    const renderDetail = (detail, idx) => {
        switch (detail.type) {
            case 'subheading':
                return <h4 key={idx} className="font-bold text-gray-800 mt-4 mb-2">{detail.text}</h4>;
            case 'list-numbered':
                return (
                    <ol key={idx} className="list-decimal list-inside space-y-2 mb-4">
                        {detail.items.map((item, i) => (
                            <li key={i} className="text-gray-700 text-sm">
                                <span className="font-semibold">{item.name}</span>
                                {item.role && <span className="block text-gray-500 ml-5 text-xs">{item.role}</span>}
                            </li>
                        ))}
                    </ol>
                );
            case 'list-bullet':
                return (
                    <ul key={idx} className="list-disc list-inside space-y-1 mb-4">
                        {detail.items.map((item, i) => (
                            <li key={i} className="text-gray-600 text-sm">{item}</li>
                        ))}
                    </ul>
                );
            case 'text':
                return <p key={idx} className="text-gray-600 italic mb-2">{detail.text}</p>;
            default:
                return null;
        }
    };

    return (
        <div className="schedule-container">
            <div className="container mx-auto px-6">
                <div className="page-header text-center mb-12">
                    <h1 className="page-title text-4xl font-bold text-slate-800 mb-2">Event Schedule</h1>
                    <p className="page-subtitle text-slate-500">Don't miss out on the key events</p>
                </div>

                <div className="timeline-container max-w-4xl mx-auto relative">
                    {/* Vertical Line for Desktop */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-200"></div>

                    {events.map((dayGroup, index) => (
                        <div key={index} className="mb-16">
                            <div className="day-header text-center mb-8 relative z-10">
                                <div className="inline-block bg-white border border-slate-200 px-6 py-2 rounded-full shadow-sm">
                                    <span className="block font-bold text-blue-800 text-lg">{dayGroup.day}</span>
                                    {dayGroup.theme && (
                                        <span className="block text-xs text-amber-600 font-semibold mt-1 tracking-wider uppercase">
                                            🎉 THEME: {dayGroup.theme}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {dayGroup.items.map((event, i) => (
                                <div key={i} className={`timeline-item flex flex-col md:flex-row ${i % 2 === 0 ? 'md:flex-row-reverse' : ''} mb-8 relative`}>

                                    {/* Timeline Dot */}
                                    <div className="timeline-dot absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-blue-500 border-4 border-white rounded-full flex items-center justify-center shadow-lg z-10">
                                        <span className="text-white text-xs">{event.icon || '📅'}</span>
                                    </div>

                                    {/* Content */}
                                    <div className={`timeline-content ml-16 md:ml-0 md:w-5/12 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                        <div className={`event-card bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow ${i % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                                            <div className={`event-header mb-3 ${i % 2 === 0 ? 'md:flex md:flex-col md:items-end' : ''}`}>
                                                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full mb-2">
                                                    {event.time}
                                                </span>
                                                <h3 className="text-xl font-bold text-slate-800 leading-tight">{event.title}</h3>
                                            </div>

                                            <div className={`event-body ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-left`}>
                                                {event.desc && <p className="text-slate-600 mb-4">{event.desc}</p>}
                                                {event.details && event.details.map((detail, idx) => (
                                                    <div key={idx} className={`text-left ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                                                        {/* Force text alignment inside details if needed, or keep standard text-left for readability of lists */}
                                                        {/* Lists usually look better left aligned even in right-sided cards, but let's see. 
                                                            Actually, rigorous right alignment for lists is hard to read. 
                                                            Let's keep the internal details text-left even if the card is on the right, 
                                                            or maybe align them based on the card side. 
                                                            For now, I'll force text-left for lists inside the renderDetail to ensure readability, 
                                                            rendering 'renderDetail' wrapper with text-left.
                                                        */}
                                                        <div className="text-left">
                                                            {renderDetail(detail, idx)}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
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
