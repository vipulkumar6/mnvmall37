import React from 'react';
import { Card, CardContent } from "@mui/material";
import { MdLocationOn } from "react-icons/md";
import { FaSubway, FaRoad, FaCar, FaUsers, FaBuilding, FaShoppingBag, FaTree, FaHospital } from "react-icons/fa";
import { GiSchoolBag } from "react-icons/gi"; // Icon for schools and universities
import { MdFlight } from "react-icons/md"; // Icon for airport connectivity


const locationAdvantages = [
    {
        icon: GiSchoolBag,
        title: "University Access",
        description: "Amity University is at 13 km and Gurugram University is at 16 km"
    },

    {
        icon: FaRoad,
        title: "Excellent Connectivity",
        description: "Well-connected to NH-8, Dwarka Expressway, Golf Course Road, and Badshapur."
    },
    {
        icon: FaSubway,
        title: "Metro Proximity",
        description: "20 km drive from HUDA City Centre metro station"
    },
    {
        icon: FaHospital,
        title: "Nearby Healthcare",
        description: "Silver Streak Multi Speciality Hospital is just 9.5 km away"
    },
    {
        icon: MdFlight,
        title: "Airport Access",
        description: "30 km drive from Indira Gandhi International Airport"
    },
    {
        icon: GiSchoolBag,
        title: "Schools Nearby",
        description: "MatriKiran High School is only 8.9 km away"
    },
    {
        icon: MdLocationOn,
        title: "Prime Location",
        description: "Situated at the epicenter of New Gurugram"
    },
    {
        icon: FaCar,
        title: "Ample Parking",
        description: "200+ surface & 400+ Multi-level parking"
    },
    {
        icon: FaUsers,
        title: "High Footfall",
        description: "An average monthly footfall of 500,000"
    },
    {
        icon: FaBuilding,
        title: "Impressive Frontage",
        description: "Only mall in the area with a 1000 ft. frontage"
    },
    {
        icon: FaShoppingBag,
        title: "Retail Hub",
        description: "Diverse mix of national and international brands"
    },
    {
        icon: FaTree,
        title: "Green Spaces",
        description: "Surrounded by landscaped gardens and parks"
    }
];


export default function Location() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white md:p-8 py-6">
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-5xl font-bold text-amber-400 ">MVN Mall Sector 37D Prime Location</h1>
                    <p className="text-2xl text-amber-200">Unparalleled Connectivity & Convenience</p>
                </div>

                <div className="backdrop-blur-md rounded-xl md:p-8 p-4">
                    <div className="flex justify-center items-center">
                        <img
                            src="./images/mvn-mall-s37d-location-map.jpg"
                            alt=" MVN Mall Sector 37D Location Map"
                            className="w-11/12 items-center location-img rounded-lg shadow-lg mb-12 transform transition-transform duration-500 hover:scale-105"
                        />
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {locationAdvantages.map((advantage, index) => (
                            <div
                                key={index}

                                viewport={{ once: false, amount: 0.3 }}
                            >
                                <Card className="bg-gray-800/50 location-card border-amber-400/30 border hover:border-amber-400 hover:shadow-lg hover:shadow-amber-400/20 transition-all duration-300 group">
                                    <CardContent className="p-6 space-y-4">
                                        <div className="flex items-center space-x-4">
                                            <advantage.icon className="w-8 h-8 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
                                            <h3 className="text-xl font-semibold text-amber-200 group-hover:text-amber-300 transition-colors duration-300">
                                                {advantage.title}
                                            </h3>
                                        </div>
                                        <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                                            {advantage.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
