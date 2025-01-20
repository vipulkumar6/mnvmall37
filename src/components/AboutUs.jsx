import React, { useState, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AboutUs = () => {
    // Define animations
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const slideInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    };

    const slideInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    };

    // State to check screen width
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1024);

    // Update screen size on resize
    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 1024);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="about-us-page">
            {/* About Us Section */}
            <motion.div
                className="luxury-heading"
                variants={isLargeScreen ? fadeIn : {}}
                initial="hidden"
                whileInView="visible"
                style={{ overflow: "hidden" }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="luxury-line"></div>
                <h1> MVN Mall Sector 37D, Gurugram.</h1>
                <div className="luxury-line"></div>
            </motion.div>
            <motion.div
                className="about-us-page-intro text-content"
                variants={isLargeScreen ? fadeIn : {}}
                initial="hidden"
                whileInView="visible"
                style={{ overflow: "hidden" }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <p className="intro-quote">"Where luxury and convenience meet to create the ultimate shopping experience."</p>
                <p className='text-start'>
                    Welcome to MVN Mall, Sector 37D, a groundbreaking lifestyle destination redefining the shopping and entertainment experience in the heart of Gurgaon. Spanning an impressive 20 acres with an unmatched 5-acre prime frontage, our mall is strategically located along the Dwarka Expressway, ensuring effortless connectivity and visibility.

                </p>
                <br />
                <p className='text-start'>
                    Designed to captivate, MVN Mall is NCR's largest centralized air-conditioned mall, blending luxury, comfort, and innovation under one roof. Whether you’re here for premium retail therapy, culinary adventures at our vibrant food courts, or blockbuster entertainment at our state-of-the-art multiplex, MVN Mall has it all.

                </p>
                <br />
                {/* <p className='text-start'>

                    Inspired by Dubai’s iconic shopping experiences, we’ve created a welcoming atmosphere perfect for families, friends, and travelers alike. With a unique Dubai Concept design envisioned by the world’s finest architects, every corner of MVN Mall exudes sophistication, elegance, and a promise of unparalleled moments.

                </p> */}
            </motion.div>

            {/* Shopping Meets Luxury Section */}
            <div className="about-us-page-section shopping-meets-luxury">
                <motion.div
                    className="about-us-page-text left"
                    variants={isLargeScreen ? slideInLeft : {}}
                    initial="hidden"
                    whileInView="visible"
                    style={{ overflow: "hidden" }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <h2 className="heading">Top Highlights MVN Mall Sector 37d Gurgaon</h2>

                    <ul className="description">
                        <li><FaCheck className='mr-3' />
                            Gurugram’s Largest Centrally Air-Conditioned Shopping Destination
                        </li>
                        <li><FaCheck className='mr-3' />
                            Situated at Downtown New Gurugram, ensuring higher footfalls and excellent connectivity
                        </li>
                        <li><FaCheck className='mr-3' />
                            Close proximity to NCR’s major landmarks, including Delhi and surrounding areas
                        </li>
                        <li><FaCheck className='mr-3' />
                            Abundance of green spaces and serene water bodies
                        </li>
                        <li><FaCheck className='mr-3' />
                            Energy-efficient lighting and on-site waste management systems
                        </li>
                        <li><FaCheck className='mr-3' />
                            High ROI, assured rental income, and significant capital appreciation.
                        </li>

                    </ul>
                </motion.div>
                <motion.div
                    className="about-us-page-image right"
                    variants={isLargeScreen ? slideInRight : {}}
                    initial="hidden"
                    whileInView="visible"
                    style={{ overflow: "hidden" }}
                    viewport={{ once: false, amount: 0.2 }}
                >

                    <img
                        src="./images/MVN-Mall-Sector-37-D-Gurgaon.jpg"
                        alt="Shopping Meets Luxury"
                        className="zoom-on-hover"
                    />
                </motion.div>
            </div>

            {/* Hotel Suites Section */}
            <div className="about-us-page-section hotel-suites">
                <motion.div
                    className="about-us-page-image left"
                    variants={isLargeScreen ? slideInLeft : {}}
                    initial="hidden"
                    whileInView="visible"
                    style={{ overflow: "hidden" }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <img className="zoom-on-hover" src="./images/mvn-mall-gn.jpg" />
                </motion.div>
                <motion.div
                    className="about-us-page-text right"
                    variants={isLargeScreen ? slideInRight : {}}
                    initial="hidden"
                    whileInView="visible"
                    style={{ overflow: "hidden" }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <h2 className="heading">Top Highlights MVN Mall Sector 37d Gurgaon</h2>
                    <ul className="description desc-hotel">
                        <li><FaCheck className='mr-3' />
                            Designed for both business and leisure travelers in Gurugram.
                        </li>
                        <li><FaCheck className='mr-3' /> Ideal for quick lunches or relaxing lounge experiences.</li>
                        <li><FaCheck className='mr-3' /> Offers a luxurious and comfortable stay for every need.</li>
                        <li><FaCheck className='mr-3' />
                            Located at the first and only drop-off point of the elevated Dwarka Expressway (22 KM Stone)
                        </li>
                        <li><FaCheck className='mr-3' />
                            A true haven for fashion enthusiasts and lifestyle shoppers
                        </li>
                        <li><FaCheck className='mr-3' />
                            Dedicated play zone area for kids with safe and fun activities.
                        </li>
                    </ul>
                </motion.div>
            </div>
        </div>
    );
}

export default AboutUs;
