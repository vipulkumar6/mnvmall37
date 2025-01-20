import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { FiSend, FiPhoneCall } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import DialogBox from './DialogBox';

const Navbar = ({ sectionsRefs }) => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    // Function to handle dialog open/close
    const handleDialogToggle = () => {
        setIsDialogOpen((prev) => !prev);
    };
    const scrollToSection = (sectionName) => {
        const sectionRef = sectionsRefs[sectionName];
        if (sectionRef && sectionRef.current) {
            sectionRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
        setIsMobileMenuOpen(false); // Close mobile menu on navigation
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > window.innerHeight);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <header className={`header ${scrolled ? 'scrolled' : ''}`}>
                <nav className="nav">
                    <div className="nav-container">
                        <Link to='/'
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            <img className='brand_logo' src="./images/mvn-mall-Logo.png" alt="MVN Mall Sector 37D, Gurugram, Haryana Logo" />
                        </Link>

                        {/* Hamburger Menu for Mobile */}
                        <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            {isMobileMenuOpen ? <FiX size={24} color='white' /> : <FiMenu size={24} color='white' />}
                        </div>

                        <div className={`nav-links-container ${isMobileMenuOpen ? 'open' : ''}`}>
                            <Link className='nav-links' onClick={() => scrollToSection('about')}>About</Link>
                            <Link className='nav-links' onClick={() => scrollToSection('amenities')}>Amenities</Link>
                            <Link className='nav-links' onClick={handleDialogToggle}>Price List</Link>
                            <Link className='nav-links' onClick={() => scrollToSection('gallery')}>Gallery</Link>
                            <Link className='nav-links' onClick={handleDialogToggle}>Brochure</Link>
                            <Link className='nav-links' onClick={handleDialogToggle}>Book a Site Visit</Link>
                        </div>
                        <div className="nav-actions">
                            <span className="call-now-nav flex items-center"
                                onClick={() => window.location.href = 'tel:+98xxxxxxxx'}
                            >
                                <FiPhoneCall color='white' />
                                <p>+91 98117 73111</p>
                            </span>
                            <Button onClick={handleDialogToggle} className="nav-button">Enquiry Now</Button>



                        </div>
                    </div>
                </nav>
            </header>
            <DialogBox open={isDialogOpen} OnClose={handleDialogToggle} />


        </div>
    );
}

export default Navbar;