import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setIsPopupOpen(true);
    };

    const handleSendEmail = () => {
        alert('Message sent to: info@restaurant.com');
        setIsPopupOpen(false);
    };

    return (
        <div className="contact-container">
            <h2 className="contact-heading">Contact Us</h2>

            <div className="contact-info">
                <div className="contact-details">
                    <h3>Our Address</h3>
                    <p>Athidhi Restaurant</p>
                    <p>Tanuku</p>
                    <p>opposite to dmart, NGO'S Colony, Palangi, Tanuku, Andhra Pradesh 534311</p>
                    <p>Phone: 7780155504</p>
                    <p>Email: athidhirestaurant.@gmail.com</p>
                </div>

                <div className="contact-form-wrapper">
                    <div className="contact-form">
                        <h3>Get in Touch</h3>
                        <form onSubmit={handleFormSubmit}>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />

                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                            
                            <button type="submit">Send Message</button>
                        </form>
                    </div>

                    {isPopupOpen && (
                        <div className="popup-overlay show">
                            <div className="popup-content">
                                <h3>Confirm Details</h3>
                                <p><strong>Name:</strong> {formData.name}</p>
                                <p><strong>Email:</strong> {formData.email}</p>
                                <p><strong>Message:</strong> {formData.message}</p>
                                <div className="popup-buttons">
                                    <button onClick={handleSendEmail}>Confirm & Send</button>
                                    <button onClick={() => setIsPopupOpen(false)}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="location-section">
                <h3>Find Us Here</h3>
                <div className="map-container">
                <iframe
          className="gmap_iframe"
          src="https://maps.google.com/maps?width=720&amp;height=525&amp;hl=en&amp;q=tanuku, athidhi restaurant&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
