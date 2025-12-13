import { useState } from 'react';
import { Search, Filter, QrCode, Phone } from 'lucide-react';
import './Exhibitors.css';

const exhibitorsData = [
    { stall: '01', name: 'Maruthi Jewellers', category: 'Jewellery', type: 'qr' },
    { stall: '02', name: "Queen's NRI Hospital", category: 'Health Services', type: 'phone' },
    { stall: '03', name: 'Swetha Hardware', category: 'Hardware & Electricals', type: 'qr' },
    { stall: '04', name: 'Sri Lakshmi Sarees', category: 'Handloom & Boutique', type: 'phone' },
    { stall: '05', name: 'EV World', category: 'EV Bikes & Bicycles', type: 'qr' },
    { stall: '06', name: 'Green Solar Solutions', category: 'Solar Products', type: 'phone' },
    { stall: '07', name: 'Home Style Interiors', category: 'Interior & Decor', type: 'qr' },
    { stall: '08', name: 'Tech Gadgets Hub', category: 'Electronics', type: 'phone' },
];

const Exhibitors = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('');

    const filteredExhibitors = exhibitorsData.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.category.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filter ? item.category.includes(filter) : true;
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="exhibitors-container">
            <div className="container mx-auto px-6">
                <div className="page-header">
                    <h1 className="page-title">Exhibitor Directory</h1>
                    <p className="page-subtitle">Find your favorite brands and partners</p>
                </div>

                {/* Search & Filter */}
                <div className="search-filter-container">
                    <div className="search-form">
                        <Search className="search-icon" size={20} />
                        <input
                            type="text"
                            placeholder="Search exhibitors..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                    </div>
                    <div className="filter-wrapper">
                        <Filter className="filter-icon" size={20} />
                        <select
                            className="filter-select"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                        >
                            <option value="">All Industries</option>
                            <option value="Jewellery">Jewellery</option>
                            <option value="Health Services">Health Services</option>
                            <option value="Hardware & Electricals">Hardware</option>
                            <option value="Handloom & Boutique">Handloom</option>
                            <option value="EV Bikes & Bicycles">EV & Auto</option>
                            <option value="Solar Products">Solar</option>
                            <option value="Interior & Decor">Interior</option>
                            <option value="Electronics">Electronics</option>
                        </select>
                    </div>
                </div>

                {/* Grid */}
                {filteredExhibitors.length > 0 ? (
                    <div className="exhibitors-grid">
                        {filteredExhibitors.map((item, index) => (
                            <div key={index} className="exhibitor-card group">
                                <div className="card-header">
                                    <div className="logo-box">
                                        {/* Placeholder Logo: First letter of name */}
                                        {item.name[0]}
                                    </div>
                                    <span className="industry-tag">
                                        {item.category}
                                    </span>
                                </div>
                                <h3 className="exhibitor-name">{item.name}</h3>
                                <div className="card-footer">
                                    <span>Stall: <strong className="stall-number">{item.stall}</strong></span>
                                    {item.type === 'qr' ? (
                                        <button className="btn-action qr">
                                            <QrCode size={16} /> Scan QR
                                        </button>
                                    ) : (
                                        <button className="btn-action phone">
                                            <Phone size={16} /> Contact
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 text-slate-500">
                        No exhibitors found matching your search.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Exhibitors;
