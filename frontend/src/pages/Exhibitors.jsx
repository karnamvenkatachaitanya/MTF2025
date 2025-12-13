import { useState } from 'react';
import { Search, Filter, QrCode, Phone } from 'lucide-react';
import './Exhibitors.css';

// Convert Excel data to structured format
const exhibitorsData = [
    // AUDITORIUM STALLS
    { stall: '1', name: 'SIVVA JAGAN', category: 'PLYWOOD & WEIGHING MACHINES', phone: '9866198661', website: '' },
    { stall: '2', name: 'GUDISA NITHIN', category: 'REAL ESTATE', phone: '8248105424', website: '' },
    { stall: '3', name: 'ASHOK TRAVELS', category: 'TOURS AND TRAVELS', phone: '9948007928', website: '' },
    { stall: '4', name: 'ADITYA HIWAGA', category: 'SALOON', phone: '9597467913', website: '' },
    { stall: '5', name: 'K.V.G.S GUPTA', category: 'GENERAL INSURANCE', phone: '9908248999', website: '' },
    { stall: '6', name: 'SANDEEP SLR CYCLES', category: 'CYCLES', phone: '9398640886', website: '' },
    { stall: '7', name: 'ASHOK BFH', category: 'CURTAINS', phone: '9848145323', website: '' },
    { stall: '8', name: 'SANTOSH NALAM', category: 'STATIONARY', phone: '9849375396', website: '' },
    { stall: '9,10', name: 'KIRAN LIVING LINES', category: 'TILES', phone: '8074253744', website: '' },
    { stall: '11', name: 'VIJAY PULIPATI', category: 'HANDLOOMS', phone: '9440105405', website: '' },
    { stall: '12', name: 'VIJAY PENTAPATI', category: 'GIFTS & TOYS', phone: '8142436707', website: '' },
    { stall: '13', name: 'VENKATESH PASUMARTHI', category: 'CC TV', phone: '8340889417', website: '' },
    { stall: '14', name: 'INDUPURI SUMAN', category: 'ELECTRICAL', phone: '9989254444', website: '' },
    { stall: '15', name: 'G.S GUPTA', category: 'ELECTRICAL BIKES', phone: '9603849183', website: '' },
    { stall: '16,17', name: 'PERLA SUMAN', category: 'PAINTS', phone: '9246667445', website: '' },
    { stall: '18,19', name: 'SIRISH', category: 'SOLAR SYSTEMS', phone: '8790177566', website: '' },
    { stall: '20', name: 'CHANDRA MOULI', category: 'INTERIOR DESIGNOR', phone: '9550934826', website: '' },
    { stall: '21', name: 'RAM KUMAR', category: 'RSM SAREES', phone: '9849533111', website: '' },
    { stall: '22', name: 'SRINIVAS SAI', category: 'GLASS WORKS', phone: '9885347991', website: '' },
    { stall: '23', name: 'DATTA', category: 'MEGHANA MATCHIGS', phone: '8096127074', website: '' },
    { stall: '24', name: 'KUSUMANCHI READYMADES', category: 'KIDS & GENTS WEAR', phone: '9966514213', website: '' },
    { stall: '25', name: 'VT FOOR WEAR', category: 'FOOT WEAR', phone: '9959132326', website: '' },
    { stall: '26', name: 'CHANDOO', category: 'AYURVEDIC HERBS', phone: '9849653053', website: '' },
    { stall: '27', name: 'VENKATESH LIFESTYLE', category: 'FURNITURE', phone: '9440192658', website: '' },
    { stall: '28', name: 'VINOD GUDISA', category: 'VASU OPITCALS', phone: '9848443377', website: '' },
    { stall: '29', name: 'G. PADMAVATHI', category: 'BOTIQUE', phone: '9292606683', website: '' },
    { stall: '30', name: 'VIJAY PENTAPATI', category: 'BUTTERFLY KITCHEN WEAR', phone: '8142436707', website: '' },
    { stall: '31', name: 'SANTOSH GUDIMETLA', category: 'FABRICATION', phone: '9989927802', website: '' },
    { stall: '32', name: 'SAI KATTAMURI', category: 'DIGITAL MARKETING', phone: '9010244245', website: '' },
    { stall: '33', name: 'PRADEEP CHENNA', category: 'DRY FRUITS', phone: '9966601464', website: '' },
    { stall: '34', name: 'GRANDI TEJA', category: 'MILLETS', phone: '9985472200', website: '' },
    { stall: '35', name: 'NAGA KIRAN', category: 'BOTIQUE VARNAMZZ', phone: '9885143386', website: '' },
    { stall: '36', name: 'SUDHEER', category: 'AGARBATTI', phone: '9491571083', website: '' },
    { stall: '37', name: 'HARIKRISHNA', category: 'HEALTH INSURANCE', phone: '9848833656', website: '' },
    { stall: '38', name: 'SRUJAN', category: 'NUTRITIONIST', phone: '9494294593', website: '' },
    { stall: '39', name: 'MSQUARE DINESH', category: 'CLOTH READYMADES', phone: '9848145351', website: '' },
    { stall: '40', name: 'BANDARY AYYAPPA', category: 'SILK HOUSE', phone: '9550526555', website: '' },
    { stall: '41', name: 'RAKESH BODDU', category: 'TYRES', phone: '8978970400', website: '' },

    // SMALL SIZE STALLS
    { stall: '42', name: 'SWAMY CHITS', category: 'CHITS', phone: '9490657222', website: '' },
    { stall: '43', name: 'KALYANI NIV', category: 'TALLY SOFTWARE', phone: '8712553990', website: '' },
    { stall: '44', name: 'KANNAN', category: 'E BOOKS', phone: '436705505455', website: '' },
    { stall: '45', name: 'BOLISETTY SRINIVAS', category: 'LANDSCAPING', phone: '9490107236', website: '' },
    { stall: '46', name: 'ANAND KELLA', category: 'COLOUR LAB', phone: '9030994266', website: '' },
    { stall: '47', name: 'RAGHUVEER', category: 'RO FILTERS', phone: '9848304037', website: '' },
    { stall: '48', name: 'HARSHA ENTERPRISES', category: 'FRAGRANCES', phone: '6281204224', website: '' },

    // OUTSIDE STALLS
    { stall: 'O=1', name: 'HIMALAYA KISHORE', category: 'MADGULA HALWA', phone: '7731836996', website: '' },
    { stall: 'O=2', name: 'OLD TOWN FLAVORS', category: 'READY MIXTURES', phone: '8008935854', website: '' },
    { stall: 'O=3', name: 'SRAVAN ADI3', category: 'GROCERIES', phone: '9505555656', website: '' },
    // Stall O=4 is empty in Excel

    // FOOD STALLS LAWN
    { stall: 'F=1', name: 'EATERS', category: 'FOOD STALL', phone: '9052666688', website: '' },
    { stall: 'F=3', name: 'SVN LAKE PALACE', category: 'FOOD STALL', phone: '9333777789', website: '' },
    { stall: 'F=4', name: 'DESSERTINO SUVARNA', category: 'FOOD STALL', phone: '9885000708', website: '' },
    { stall: 'F=5', name: 'JAGANNATH FOODS ABHISHEK', category: 'FOOD STALL', phone: '8142026590', website: '' },
    { stall: 'F=6', name: 'FC DENS RAMYA', category: 'FOOD STALL', phone: '8978247425', website: '' },
    { stall: 'F=7', name: 'FOUR CORNERS AVINASH', category: 'FOOD STALL', phone: '7288001337', website: '' },
    // Stalls F=2, F=8, F=9, F=10 are empty in Excel

    // PARKING SLOTS
    { stall: 'P=1', name: 'AQUA GUARD', category: 'PARKING SPONSOR', phone: '6301664497', website: '' },
    { stall: 'P=2', name: 'IFB', category: 'PARKING SPONSOR', phone: '63016064497', website: '' },
    { stall: 'P=3', name: 'VINAYAKA ENTERPRISES', category: 'PARKING SPONSOR', phone: '9701362991', website: '' },
    { stall: 'P=4', name: 'NAGENDRA STEELS', category: 'PARKING SPONSOR', phone: '9848021066', website: '' },
    // Stall P=5 is empty in Excel
];

// Extract unique categories for filter dropdown
const categories = [...new Set(exhibitorsData.map(item => item.category))].sort();

const Exhibitors = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('');
    const [visibleCount, setVisibleCount] = useState(12);

    // Filter function with phone number search support
    const filteredExhibitors = exhibitorsData.filter(item => {
        if (!item.name || item.name.trim() === '') return false; // Skip empty stalls

        const matchesSearch =
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.phone.includes(searchTerm);

        const matchesFilter = filter ? item.category === filter : true;

        return matchesSearch && matchesFilter;
    });

    const displayedExhibitors = filteredExhibitors.slice(0, visibleCount);

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 12);
    };

    return (
        <div className="exhibitors-container">
            <div className="container mx-auto px-6">
                <div className="page-header">
                    <h1 className="page-title">MTF Exhibitor Directory</h1>
                    <p className="page-subtitle">Find exhibitors and stall owners at the event</p>
                </div>

                {/* Search & Filter */}
                <div className="search-filter-container">
                    <div className="search-form">
                        <Search className="search-icon" size={20} />
                        <input
                            type="text"
                            placeholder="Search by name, category, or phone..."
                            value={searchTerm}
                            onChange={(e) => { setSearchTerm(e.target.value); setVisibleCount(12); }}
                            className="search-input"
                        />
                    </div>
                    <div className="filter-wrapper">
                        <Filter className="filter-icon" size={20} />
                        <select
                            className="filter-select"
                            value={filter}
                            onChange={(e) => { setFilter(e.target.value); setVisibleCount(12); }}
                        >
                            <option value="">All Categories</option>
                            {categories.map((category, index) => (
                                <option key={index} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>



                {/* Grid */}
                {filteredExhibitors.length > 0 ? (
                    <>
                        <div className="exhibitors-grid">
                            {displayedExhibitors.map((item, index) => (
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
                                        <div className="action-buttons">
                                            <a
                                                href={item.website || `https://www.google.com/search?q=${encodeURIComponent(item.name + " Vizianagaram")}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-action qr"
                                            >
                                                <QrCode size={16} /> Link
                                            </a>
                                            <a href={`tel:${item.phone}`} className="btn-action phone">
                                                <Phone size={16} /> {item.phone}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {visibleCount < filteredExhibitors.length && (
                            <div className="load-more-container">
                                <button
                                    onClick={handleLoadMore}
                                    className="btn-load-more"
                                >
                                    Show More Exhibitors
                                </button>
                            </div>
                        )}
                    </>
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