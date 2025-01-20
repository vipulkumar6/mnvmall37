'use client'

import { useState, useEffect, useRef } from 'react'
import 'react-tabs/style/react-tabs.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import { Box, Button, Divider, TextField } from '@mui/material'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaCircleChevronUp } from "react-icons/fa6";
import './EnhancedRealEstateLanding.css'
import { FaPhone } from 'react-icons/fa';
import { CiMail } from "react-icons/ci";
import Gallery from './Gallery'
import { IoCall } from "react-icons/io5";
import Location from './Locations'
import { FaArrowRightLong } from "react-icons/fa6";
import FeatureHighlights from './Features'
import BrandsOnBoard from './BrandOnBoard'
import AboutUs from './AboutUs'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from '@mui/material';
import { MdClose } from 'react-icons/md'
import { motion } from 'framer-motion';
import { FiSend, FiPhoneCall } from "react-icons/fi";
import QuickContact from './QuickContact'
import ContactForm from './ContactForm'
import { Link } from 'react-router-dom'
import Marquee from './MarqueeContent'

export default function RealEstateLandingPage({ sectionsRefs }) {

    const [scrolled, setScrolled] = useState(false);
    const [result, setResult] = useState("");

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',

    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setIsDialogOpen(true);
        const timer = setTimeout(() => {
            setIsDialogOpen(true);
        }, 15000);

        return () => clearTimeout(timer);
    }, []);

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    // Handle form field changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Validate form fields
    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.mobile) newErrors.mobile = 'Mobile is required';
        if (!formData.email) newErrors.email = 'Email is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = () => {
        if (validate()) {
            toast.success('Form submitted successfully!');
            setIsDialogOpen(false);
            setFormData({ name: '', mobile: '', email: '' });
        }
    };

    const [isVisible, setIsVisible] = useState({
        hero: false,
        about: false,
        features: false,
        amenities: false,
        tabs: false,
        gallery: false,
        map: false,
        brands: false,
        cta: false,
        contact: false,
    })

    const [showScrollTop, setShowScrollTop] = useState(false)

    const scrollToSection = (sectionName) => {
        const sectionRef = sectionsRefs[sectionName];
        if (sectionRef && sectionRef.current) {
            sectionRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);




    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "a8a012e6-00c9-41b7-a19a-8a8e86863963");
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setIsDialogOpen(false)
            toast("Thank you for the enquiry!");
            setResult("Thank you for the enquiry, our team will contact you soon.");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <div className="enhanced-real-estate-landing">


            <div>
                {/* Compact Dialog Form */}
                <Dialog open={isDialogOpen} onClose={handleCloseDialog} maxWidth="xs" fullWidth>
                    <DialogTitle sx={{ fontSize: '1.25rem', padding: '8px 16px', display: 'flex', alignItems: 'center' }}>
                        Contact Us
                        <IconButton
                            aria-label="close"
                            onClick={handleCloseDialog}
                            sx={{ position: 'absolute', right: 8, top: 8, color: 'grey' }}
                        >
                            <MdClose />
                        </IconButton>
                    </DialogTitle>
                    <DialogContent dividers sx={{ padding: '8px 16px' }}>
                        <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                            <h1 style={{ margin: '0', fontSize: '1.5rem', color: '#333' }}>MVN Mall Sector 37D</h1>
                            <p style={{ margin: '4px 0 16px', fontSize: '1rem', color: '#666' }}>Gurugram,Haryana</p>
                        </div>
                        <form method="POST" action="https://submit-form.com/hRWZzIStd"

                        >

                            {/* Hidden Fields */}
                            <input type="hidden" name="project_name" value="MVN Mall Sector 37D, Gurugram, Haryana" />
                            <input type="hidden" name="inquiry_type" value="Ad Campaign Inquiry" />
                            <TextField
                                fullWidth
                                label="Name"
                                variant="outlined"
                                sx={{ marginBottom: '10px' }}
                                size="small"
                                name="name"
                                type="text"
                                required

                            />

                            <input type="hidden" name="_email.subject" value="MVN Mall Sector 37D, Gurugram, Haryana" />
                            <input type="hidden" name="_email.template.footer" value="vipul" />
                            <input type="hidden" name="_email.from" value="New Lead Inquiry" />
                            <TextField
                                required
                                fullWidth
                                label="Mobile"
                                variant="outlined"
                                sx={{ marginBottom: '10px' }}
                                size="small"
                                name="mobile"
                                type="tel"
                            />
                            <TextField
                                required
                                fullWidth
                                label="Email"
                                variant="outlined"
                                sx={{ marginBottom: '10px' }}
                                size="small"
                                name="email"
                                type="email"
                            />
                            <TextField
                                fullWidth
                                label="Your Message"
                                multiline
                                rows={3}
                                sx={{ marginBottom: '10px' }}
                                variant="outlined"
                                className='text-field'
                                placeholder="Enter Your Message"
                                name="message"
                            />

                            <Divider />
                            <div className="mt-3 flex justify-end gap-2 items-center content-center">
                                <Button
                                    onClick={() => window.location.href = 'tel:+919811773111'}
                                    color="secondary"
                                    size="small"
                                >
                                    <FiPhoneCall className="mr-1" /> +91 98117 73111
                                </Button>
                                <Button type="submit" color="primary" variant="contained" size="small">
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </DialogContent>

                </Dialog>

                {/* Toast Notification */}
                <ToastContainer position="top-right" autoClose={3000} />
            </div>

            <main>
                <motion.section
                    ref={sectionsRefs.hero}
                    id="hero"
                    className="hero"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <motion.div
                        className="hero-background"
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                    >

                        {/* <div style={{ position: 'absolute', top: '70px', width: '100%' }}>
                            <Marquee />
                        </div> */}

                        <img src="https://www.themvnmall.com/wp-content/uploads/2025/01/gallery1.jpg" alt="Luxurious home" className="hero-image" />
                        <motion.div
                            className="overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            transition={{ delay: 0.5, duration: 1 }}
                        ></motion.div>
                    </motion.div>

                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 1 }}
                    >

                        <h1>Step Into the Future of Shopping & Entertainment!</h1>
                        <p>Experience Gurugram's Largest Centrally Air-Conditioned Mall on Dwarka Expressway.</p>
                        <motion.button
                            className='enquery-btn'
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            onClick={() => setIsDialogOpen(true)}
                        >

                            <i class="animation"></i>Explore MVN Mall<i class="animation"></i>
                            <FaArrowRightLong className='ml-3 arrow' size={20} />
                        </motion.button>
                    </motion.div>
                </motion.section>

                <div ref={sectionsRefs.about} className="content-wrapper">
                    <AboutUs />
                </div>
                <div ref={sectionsRefs.amenities}>
                    <FeatureHighlights />
                </div>
                <QuickContact />
                <Location />
                <div ref={sectionsRefs.gallery}>

                    <Gallery />
                </div>
                <section>
                    <BrandsOnBoard />
                </section>

                <section id="contact" ref={sectionsRefs.contact} className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div class="luxury-heading">
                            <div class="luxury-line"></div>
                            <h1>Contact Us </h1>
                            <div class="luxury-line"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div
                                initial={{ opacity: 0, x: -20 }}
                                animate={isVisible.contact ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.5 }}
                            >

                                <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
                                <ContactForm />
                            </div>
                            <div
                                initial={{ opacity: 0, x: 20 }}
                                animate={isVisible.contact ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="space-y-6"
                            >
                                <h3 className="text-2xl font-semibold mb-4">Our Office</h3>
                                <div className="flex items-start space-x-4">
                                    <FaMapMarkerAlt className="text-primary" />
                                    <p>MVN Mall Sector 37D, Gurugram, Haryana </p>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <FaPhone className="text-primary" />
                                    <p>+91 9999999999</p>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <CiMail className="text-primary" />
                                    <p>info@gmail.in</p>
                                </div>
                                <div className="mt-8">
                                    <div style={{ width: '100%' }}><iframe title='map IRIS' width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=MVN%20Mall%20Infrastructure,%20Sector%2037D,%20Gurugram,%20Haryana%20122004+(MVN%20Mall%20Sector%2037D)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <div className="hidden-keywords" style={{ display: "none" }}>
                MVN Mall, shopping in Gurugram, dining in Gurugram, multiplex near NH-8, Gurugram entertainment, best malls in Haryana,MVN Mall Sector 37D
            </div>

            <footer className="footer">
                {/* Disclaimer Text */}
                <div className="footer-disclaimer text-center text-gray-400 px-4 py-5">
                    <p>
                        Disclaimer: The content provided on this website is for information purposes only and does not constitute an offer to avail any service. The prices mentioned are subject to change without prior notice, and the availability of properties mentioned is not guaranteed. The images displayed on the website are for representation purposes only and may not reflect the actual properties accurately. Please note that this is the official website of an authorized marketing partner.
                    </p>
                </div>


                {/* Footer Content */}
                <div className="footer-content">
                    <img onClick={() => scrollToSection("hero")} src="./images/mvn-mall-Logo.png" alt="Logo" className="footer-logo" />
                    <ul className="footer-links">
                        <li><a onClick={() => scrollToSection("hero")}>Home</a></li>
                        <li><a onClick={() => scrollToSection("about")}>About Us</a></li>
                        <li><a onClick={() => scrollToSection("contact")}>Contact</a></li>
                        <li onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} s><Link to='privacy-policy'>Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom text-center text-gray-400 py-4">
                    <p>&copy; {new Date().getFullYear()} MVN Mall Gurugram. All rights reserved.</p>
                </div>
            </footer>

            {showScrollTop && (
                <button onClick={scrollToTop} className="scroll-top">
                    <FaCircleChevronUp size={24} />
                </button>
            )}
        </div>
    )
}
