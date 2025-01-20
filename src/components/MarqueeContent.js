import React from 'react';

export default function Marquee() {
    const marqueeContent = [
        "🏢 Booking Open | MVN Mall 37D",
        "📍 Prime Location: Gurugram, Dwarka Expressway",
        "🌟 20 Acres Mall | 5 Acres Frontage",
        "🇦🇪 Dubai Concept Mall | Luxury Redefined",
        "🚗 3-Level Car Parking | Convenient & Spacious",
        "💰 7% Rental Guaranteed | High Returns",
        "🛍️ Assured Gift on Every Booking",
        "🍽️ Luxury Food Court Shops | World-Class Dining",
        "🔥 Starting Price: 21 Lacs* Onwards",
        "✨ Maintenance Free for 24 Months*"
    ];

    return (
        <div className=" bg-red-800 py-1">
            <marquee className="text-lg font-semibold text-white">
                {marqueeContent.join(" | ")}
            </marquee>
        </div>
    );
}
