import React from 'react';
import {
    Building2, Armchair, Hammer, Video, Bike, ShoppingBag, Tv, Sun,
    LayoutGrid, Sparkles, Leaf, Wheat, BookOpen, Globe, Shield, Wrench,
    Store, Gift, Flower2, Footprints, MoreHorizontal, Sprout
} from 'lucide-react';
import './EventCategories.css';

const categories = [
    { name: 'Real Estate', icon: Building2 },
    { name: 'Interior & Home Decor', icon: Armchair },
    { name: 'Plywood & Hardware', icon: Hammer },
    { name: 'Electricals & CCTV', icon: Video },
    { name: 'EV Bikes & Bicycles', icon: Bike },
    { name: 'Sarees & Boutique', icon: ShoppingBag },
    { name: 'Home Appliances', icon: Tv },
    { name: 'Furniture', icon: Armchair },
    { name: 'Solar Products', icon: Sun },
    { name: 'Tiles & Glass Works', icon: LayoutGrid },
    { name: 'Beauty & Wellness', icon: Sparkles },
    { name: 'Herbal & Ayurvedic', icon: Leaf },
    { name: 'Dry Fruits & Millets', icon: Sprout },
    { name: 'Books & Stationery', icon: BookOpen },
    { name: 'Digital Marketing', icon: Globe },
    { name: 'Insurance & Finance', icon: Shield },
    { name: 'Fabrication', icon: Wrench },
    { name: 'Department Stores', icon: Store },
    { name: 'Kids Toys & Gifts', icon: Gift },
    { name: 'Perfumes & Plants', icon: Flower2 },
    { name: 'Shoes & Lifestyle', icon: Footprints },
    { name: 'And Many More...', icon: MoreHorizontal },
];

const EventCategories = () => {
    return (
        <section className="categories-section">
            <div className="categories-container">
                <div className="categories-header">
                    <span className="categories-label">EXPLORE ALL INDUSTRIES</span>
                    <h2 className="categories-title">Featured <span className="text-secondary">Categories</span></h2>
                    <p className="categories-desc">
                        From home needs to fashion, technology to wellness — discover everything under one roof
                    </p>
                </div>

                <div className="categories-grid">
                    {categories.map((cat, index) => (
                        <div key={index} className="category-card">
                            <div className="category-icon-wrapper">
                                <cat.icon size={24} strokeWidth={1.5} />
                            </div>
                            <h3 className="category-name">{cat.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventCategories;
