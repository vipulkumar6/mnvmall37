import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaParking, FaUsers, FaBuilding, FaMoneyBillWave } from "react-icons/fa";
import { MdRestaurantMenu, MdLocalMovies, MdWifi, MdSecurity } from "react-icons/md";
import { GiWalkingBoot } from "react-icons/gi";
import { motion } from "framer-motion";

const features = [
    { icon: FaShoppingCart, title: "Retail Excellence", description: "Home to top national and international brands." },
    { icon: MdRestaurantMenu, title: "Fine Dining", description: "Exclusive restaurants offering diverse cuisines." },
    { icon: MdLocalMovies, title: "Entertainment Hub", description: "Multiplex with luxury seating and top facilities." },
    { icon: FaParking, title: "Ample Parking Space", description: "Triple-level parking for over 600+ vehicles." },
    { icon: MdWifi, title: "Smart Connectivity", description: "High-speed Wi-Fi throughout the premises." },
    { icon: MdSecurity, title: "24x7 Security", description: "CCTV and on-ground security personnel." },
    { icon: FaUsers, title: "High Footfall", description: "Averaging 500,000+ visitors monthly." },
    { icon: FaBuilding, title: "Architectural Marvel", description: "Modern design with a stunning 1000 ft. frontage." },
    { icon: GiWalkingBoot, title: "Walking Promenade", description: "Beautifully landscaped outdoor spaces for visitors." },
    { icon: FaMoneyBillWave, title: "High ROI", description: "Promising returns for retailers and investors." },
];

export default function FeatureHighlights() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="features_wrapper">
            <div className="luxury-heading">
                <div className="luxury-line"></div>
                <h1>Amenities & Features</h1>
                <div className="luxury-line"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all"
                        initial={{
                            opacity: 0,
                            y: isMobile ? 20 : (index % 2 === 0 ? -100 : 100),
                            scale: isMobile ? 1 : 0.95,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: isMobile ? 50 : 100,
                            damping: 20,
                            duration: 0.6,
                        }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <div className="flex items-center mb-4">
                            <feature.icon className="text-4xl text-indigo-600 mr-4" />
                            <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                        </div>
                        <p className="text-gray-600">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
