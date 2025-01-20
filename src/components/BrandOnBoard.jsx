import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { motion } from 'framer-motion';
import './BrandOnBoard.css';

function BrandsOnBoard() {
    const [value, setValue] = useState(0);

    // Handles tab change
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // Logos for each category (replace these with actual logos if needed)
    const logos = {
        foods: [
            'https://www.trehaniris.com/iris-broadway/images/food&beverage/12.png',
            'https://www.trehaniris.com/iris-broadway/images/food&beverage/11.png',
            'https://www.trehaniris.com/iris-broadway/images/food&beverage/1.png',
            'https://www.trehaniris.com/iris-broadway/images/food&beverage/16.png',
            'https://www.trehaniris.com/iris-broadway/images/food&beverage/5.png',
            'https://www.trehaniris.com/iris-broadway/images/food&beverage/6.png',
            'https://www.trehaniris.com/iris-broadway/images/food&beverage/7.png',
            'https://www.trehaniris.com/iris-broadway/images/food&beverage/karims_logo.png',
            'https://www.trehaniris.com/iris-broadway/images/food&beverage/14.png',
            'https://www.trehaniris.com/iris-broadway/images/food&beverage/15.png',
            'https://www.trehaniris.com/iris-broadway/images/food&beverage/8.png'
        ],
        anchors: [
            'https://www.trehaniris.com/iris-broadway/images/anchors/1.png',
            'https://www.trehaniris.com/iris-broadway/images/anchors/2.png',
            'https://www.trehaniris.com/iris-broadway/images/anchors/4.png',
            'https://www.trehaniris.com/iris-broadway/images/anchors/pvr_inox_logo.png'
        ],
        electronics: [
            'https://www.trehaniris.com/iris-broadway/images/electronics/1.png',
            'https://www.trehaniris.com/iris-broadway/images/electronics/2.png'
        ],
        kids: [
            'https://www.trehaniris.com/iris-broadway/images/kids/3.png',
        ],
        other: [
            'https://www.trehaniris.com/iris-broadway/images/others/1.png',
            'https://www.trehaniris.com/iris-broadway/images/others/11.png',
            'https://www.trehaniris.com/iris-broadway/images/others/uncover_logo.png',
            'https://www.trehaniris.com/iris-broadway/images/others/monte_carlo_logo.png',
            'https://www.trehaniris.com/iris-broadway/images/others/home_4u_logo.png',
            'https://www.trehaniris.com/iris-broadway/images/others/home_4u_logo.png',
            'https://www.trehaniris.com/iris-broadway/images/others/14.png',
            'https://www.trehaniris.com/iris-broadway/images/others/9.png',
            'https://www.trehaniris.com/iris-broadway/images/others/12.png'
        ]
    };

    // Animation variants for the logos
    const logoVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
    };

    // Render logos in a grid with animation
    const renderLogos = (category) => (
        <Box
            sx={{
                display: 'grid',
                gap: 2,
                padding: 2,
            }}
            className="tab-content"
        >
            {logos[category].map((logo, index) => (
                <motion.img
                    key={index}
                    src={logo}
                    alt={`Brand ${index + 1}`}
                    className="brand-logo"
                    initial="hidden"
                    animate="visible"
                    variants={logoVariants}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                />
            ))}
        </Box>
    );

    return (
        <Box className="brands-on-board-container" sx={{ width: '100%', padding: 4 }}>
            <div className="luxury-heading">
                <div className="luxury-line"></div>
                <h1>Brands On Board</h1>
                <div className="luxury-line"></div>
            </div>

            {/* Tabs for different categories */}
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="brands tabs"
                centered
                className='tabs'
                variant="scrollable"
                scrollButtons={false}
            >
                <Tab label="Foods" />
                <Tab label="Anchors" />
                <Tab label="Electronics" />
                <Tab label="Kids" />
                <Tab label="Other" />
            </Tabs>

            {/* Content of the active tab */}
            <motion.div
                className="tab-content-container"
                key={value}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                {value === 0 && renderLogos('foods')}
                {value === 1 && renderLogos('anchors')}
                {value === 2 && renderLogos('electronics')}
                {value === 3 && renderLogos('kids')}
                {value === 4 && renderLogos('other')}
            </motion.div>
        </Box>
    );
}

export default BrandsOnBoard;
