import React, { useState } from 'react';
import { TextField, Button, Box, Divider } from '@mui/material';
import { FiSend, FiPhoneCall } from 'react-icons/fi';

const QuickContact = () => {
    const [result, setResult] = React.useState("");

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
            setResult("Thank you for the enquiry, our team will contact you soon.");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <div>
            <div className="contact-card bg-white p-6 rounded-lg shadow-lg max-w-full">
                <div className="luxury-heading">
                    <div className="luxury-line"></div>
                    <h1 className="text-2xl font-semibold mb-1">Enquiry Now</h1>
                    <div className="luxury-line"></div>
                </div>
                {/* Contact Form */}
                <form className="space-y-4 contact-form mt-4" onSubmit={onSubmit}>
                    {/* First Row: Name and Email */}
                    <div className="flex md:space-x-4 text-box ">
                        <TextField
                            label="Name"
                            name="name"
                            required
                            className="text-field w-full"
                            type="text"
                            placeholder="Enter Name"

                        />
                        <TextField
                            label="Email"
                            name="email"
                            required
                            className="text-field w-full"
                            type="email"
                            placeholder="Enter Email"

                        />
                    </div>

                    {/* Second Row: Phone and Message */}
                    <div className="flex md:space-x-4 text-box">
                        <TextField
                            label="Phone"
                            name="phone"
                            required
                            className="text-field w-full"
                            type="tel"
                            placeholder="Enter Phone"

                        />
                        <TextField
                            label="Your Message"
                            name="message"
                            multiline

                            rows={3}
                            variant="outlined"
                            className="text-field w-full"
                            placeholder="Enter Your Message"

                        />
                    </div>

                    {/* Action Buttons Row with Vertical Divider */}
                    <div className="flex items-center space-x-4">
                        <Box
                            sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                width: '100%',
                                border: '1px solid',
                                borderColor: 'divider',
                                borderRadius: 2,
                                bgcolor: 'background.paper',
                                color: 'text.secondary',
                                '& svg': {
                                    m: 1,
                                },
                            }}
                        >
                            <Button
                                type="submit"
                                className="w-full flex items-center justify-center bg-blue-600 text-white"
                            >
                                Send Message <FiSend className="ml-3" size={23} />
                            </Button>
                            <Divider orientation="vertical" variant="middle" flexItem />
                            <Button
                                onClick={() => window.location.href = 'tel:+919811773111'}
                                className="w-full flex items-center justify-center bg-green-600 text-white"
                            >
                                Call Now <FiPhoneCall className="ml-2" size={20} />
                            </Button>
                            <span>{result}</span>

                        </Box>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default QuickContact;
