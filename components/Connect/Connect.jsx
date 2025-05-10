import React, { useState } from 'react';
import { connectData } from './ConnectData';

const Connect = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        subject: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Construct email body with proper formatting
        const emailBody = `
Hello, my name is ${formData.name}.

${formData.message}

Best regards,
${formData.name}
${formData.email}
        `.trim();

        // Encode the subject and body for mailto URL
        const mailtoUrl = `mailto:${connectData.mainData.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;

        // Open default email client
        window.location.href = mailtoUrl;
    };

    return (
        <div className="section-box mt-4" id="contact">
            <div className="row">
                <div className="col-12 col-md-10 col-xl-8">
                    <h6 className="title-heading mb-3" data-backdrop-text={connectData.mainData.title}>
                        {connectData.mainData.title2}
                    </h6>
                    <h1>{connectData.mainData.title3}</h1>
                    <p>{connectData.mainData.description}</p>
                </div>
            </div>

            {/* Contact Methods */}
            <div className="row g-4 mt-4">
                <div className="col-12 col-lg-6">
                    <div className="contact-info-wrapper">
                        {/* Professional Networks */}
                        <div className="mb-5">
                            <h4 className="mb-4">Professional Networks</h4>
                            <div className="d-flex flex-column gap-3">
                                <a href={connectData.mainData.github} target="_blank" rel="noopener noreferrer" 
                                   className="contact-link">
                                    <i className="bi bi-github fs-5 me-2"></i>
                                    GitHub Profile
                                </a>
                                <a href={`mailto:${connectData.mainData.email}`} className="contact-link">
                                    <i className="bi bi-envelope fs-5 me-2"></i>
                                    {connectData.mainData.email}
                                </a>
                            </div>
                        </div>

                        {/* Preferred Contact Methods */}
                        <div className="preferred-contact">
                            <h4 className="mb-4">How to Reach Me</h4>
                            {connectData.preferredContact.map((method, index) => (
                                <div key={index} className="contact-method-card mb-4">
                                    <h5 className="method-title">
                                        <i className="bi bi-arrow-right-circle me-2"></i>
                                        {method.title}
                                    </h5>
                                    <p className="method-description mb-2">{method.description}</p>
                                    <span className="method-badge">{method.method}</span>
                                </div>
                            ))}
                        </div>

                        {/* Location & Availability */}
                        <div className="mt-4">
                            <p className="location-info">
                                <i className="bi bi-geo-alt me-2"></i>
                                {connectData.mainData.location}
                            </p>
                            <p className="availability-status">
                                <i className="bi bi-clock me-2"></i>
                                {connectData.mainData.availability}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="col-12 col-lg-6">
                    <div className="contact-form-wrapper">
                        <h4 className="mb-4">
                            <i className="bi bi-envelope-paper me-2"></i>
                            Compose Email
                        </h4>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="row g-3">
                                <div className="col-12 col-md-6">
                                    <input 
                                        type="text" 
                                        className="form-control"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        required 
                                    />
                                </div>
                                <div className="col-12 col-md-6">
                                    <input 
                                        type="email" 
                                        className="form-control"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your Email"
                                        required 
                                    />
                                </div>
                                <div className="col-12">
                                    <input 
                                        type="text" 
                                        className="form-control"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Subject"
                                        required 
                                    />
                                </div>
                                <div className="col-12">
                                    <textarea 
                                        className="form-control"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your Message"
                                        rows="5"
                                        required
                                    ></textarea>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="button button-md button-dark w-100">
                                        <i className="bi bi-envelope-paper me-2"></i>
                                        Open in Email Client
                                    </button>
                                </div>
                            </div>
                        </form>
                        <div className="text-center mt-3">
                            <small className="text-muted">
                                <i className="bi bi-info-circle me-1"></i>
                                This will open your default email client with the message
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Connect;