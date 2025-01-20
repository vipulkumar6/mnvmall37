import React, { useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, IconButton, CircularProgress } from '@mui/material';
import { Box, Button, Divider, TextField } from '@mui/material';
import { toast } from 'react-toastify';
import { MdClose } from 'react-icons/md';
import { FiSend, FiPhoneCall } from 'react-icons/fi';

const DialogBox = ({ open, OnClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        message: '',
        project_name: 'Signature Global Twin Tower DXP, Sec 84',
        inquiry_type: 'Ad Campaign Inquiry',
        _email_subject: 'Signature Global Twin Tower DXP, Sec 84 Ad Campaign Inquiry',
        _email_template_footer: 'vipul',
        _email_from: 'New Lead Inquiry',
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false); // State to handle loading spinner
    const [success, setSuccess] = useState(false); // State to handle success message


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.mobile) newErrors.mobile = 'Mobile is required';
        if (!formData.email) newErrors.email = 'Email is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validate()) return;

        setLoading(true); // Show loader
        setSuccess(false); // Reset success state

        try {
            const response = await fetch('https://submit-form.com/hRWZzIStd', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success('Form submitted successfully!');
                setSuccess(true); // Show success message
                setFormData({
                    name: '',
                    mobile: '',
                    email: '',
                    message: '',
                    project_name: 'Signature Global Twin Tower DXP, Sec 84',
                    inquiry_type: 'Ad Campaign Inquiry',
                    _email_subject: 'Signature Global Twin Tower DXP, Sec 84 Ad Campaign Inquiry',
                    _email_template_footer: 'vipul',
                    _email_from: 'New Lead Inquiry',
                });
                setTimeout(() => {
                    setSuccess(false); // Reset success state for multiple submissions
                }, 3000);
            } else {
                const data = await response.json();
                toast.error(`Error: ${data.message || 'Submission failed'}`);
            }
        } catch (error) {
            toast.error('An unexpected error occurred.');
            console.error('Error:', error);
        } finally {
            setLoading(false); // Hide loader
        }
    };

    return (
        <div>
            <Dialog open={open} onClose={OnClose} maxWidth="xs" fullWidth>
                <DialogTitle
                    sx={{ fontSize: '1.25rem', padding: '8px 16px', display: 'flex', alignItems: 'center' }}
                >
                    Contact Us
                    <IconButton
                        aria-label="close"
                        onClick={OnClose}
                        sx={{ position: 'absolute', right: 8, top: 8, color: 'grey' }}
                    >
                        <MdClose />
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers sx={{ padding: '8px 16px' }}>


                    {success ? (
                        <Box textAlign="center" color="green">
                            <h2>Thank you for your inquiry!</h2>
                            <p>Our team will contact you soon.</p>
                        </Box>
                    ) : (
                        <div>
                            <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                                <h1 style={{ margin: '0', fontSize: '1.5rem', color: '#333' }}>MVN Mall, Sector 37D</h1>
                                <p style={{ margin: '4px 0 16px', fontSize: '1rem', color: '#666' }}>Gurugram,Haryana</p>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <input type="hidden" name="project_name" value="MVN Mall, Sector 37D,Gurugram" />
                                <input type="hidden" name="inquiry_type" value="Ad Campaign Inquiry" />
                                <input type="hidden" name="_email.subject" value="MVN Mall, Sector 37D,Gurugram" />
                                <input type="hidden" name="_email.template.footer" value="vipul" />
                                <input type="hidden" name="_email.from" value="New Lead Inquiry" />
                                <TextField
                                    fullWidth
                                    label="Name"
                                    variant="outlined"
                                    sx={{ marginBottom: '10px' }}
                                    size="small"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    error={!!errors.name}
                                    helperText={errors.name}
                                />
                                <TextField
                                    required
                                    fullWidth
                                    label="Mobile"
                                    variant="outlined"
                                    sx={{ marginBottom: '10px' }}
                                    size="small"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    error={!!errors.mobile}
                                    helperText={errors.mobile}
                                />
                                <TextField
                                    required
                                    fullWidth
                                    label="Email"
                                    variant="outlined"
                                    sx={{ marginBottom: '10px' }}
                                    size="small"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    error={!!errors.email}
                                    helperText={errors.email}
                                />
                                <TextField
                                    fullWidth
                                    label="Your Message"
                                    multiline
                                    rows={3}
                                    sx={{ marginBottom: '10px' }}
                                    variant="outlined"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                />

                                <Divider />
                                <Box display="flex" justifyContent="space-between" alignItems="center" marginTop="16px">
                                    <Button
                                        onClick={() => window.location.href = 'tel:+919811773111'}
                                        color="secondary"
                                        size="small"
                                    >
                                        <FiPhoneCall className="mr-1" /> +91 98117 73111
                                    </Button>
                                    <Button type="submit" color="primary" variant="contained" size="small" disabled={loading}>
                                        {loading ? (
                                            <Button color="secondary"
                                                size="small"> <CircularProgress size={15} color="inherit" /> Submitting</Button>

                                        ) : (
                                            'Submit'
                                        )}
                                    </Button>
                                </Box>
                            </form>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default DialogBox;