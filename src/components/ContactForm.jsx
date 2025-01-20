import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { FiSend } from 'react-icons/fi';

export default function ContactForm() {
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
        <form onSubmit={onSubmit} className="space-y-4 contact-form">
            <TextField
                label="Name"
                className='text-field'
                type="text"
                placeholder="Enter Name"
                name="name"
                required

            />
            <TextField
                label="Email"
                className='text-field'
                type="email"
                required
                placeholder="Enter Email"
                name="email"
            />
            <TextField
                label="Phone"
                className='text-field'
                type="tel"
                required
                placeholder="Enter Phone"
                name="phone"

            />
            <TextField
                label="Your Message"
                multiline
                rows={3}
                variant="outlined"
                className='text-field'
                placeholder="Enter Your Message"
                name="message"

            />
            <Button type="submit" className="w-full button flex items-center">
                Send Message <FiSend className='ml-3' size={23} />
            </Button>
            <span>{result}</span>
        </form>


    );
}
