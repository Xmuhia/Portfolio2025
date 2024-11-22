// Resume.tsx
import React from 'react';
import { resumeData } from './ResumeData';

const Resume = () => {
    return (
        <div className="section-box mt-4" id="resume">
            <div className="row">
                <div className="col-12 col-md-10 col-xl-8">
                    <h6 className="title-heading mb-3" data-backdrop-text={resumeData.mainData.title}>
                        {resumeData.mainData.title}
                    </h6>
                    <h1>{resumeData.mainData.title2}</h1>
                    <p>{resumeData.mainData.description}</p>
                </div>
            </div>

            {/* Professional Experience Section */}
            <div className="row g-4 mt-2">
                <div className="col-12">
                    <div className="resume-wrapper">
                        <div className="d-flex align-items-center mb-4">
                            <div className="icon-2xl text-black me-3">
                                <i className="bi bi-briefcase line-height-100"></i>
                            </div>
                            <h3 className="mb-0">Professional Experience</h3>
                        </div>

                        {resumeData.experience.map((item, index) => (
                            <div key={index} className="resume-box mb-4">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h4 className="fw-bold mb-0">
                                        <span className="badge bg-primary">{item.degree}</span>
                                    </h4>
                                    <span className="resume-date">{item.date}</span>
                                </div>
                                <div className="mb-3">
                                    <span className="company-name">@ {item.university}</span>
                                </div>
                                <p className="lead mb-3">{item.description}</p>
                                {item.highlights && (
                                    <div className="highlights-section">
                                        <ul className="list-unstyled mb-0">
                                            {item.highlights.map((highlight, idx) => (
                                                <li key={idx} className="mb-2">
                                                    <i className="bi bi-check2-circle text-primary me-2"></i>
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Certifications Section */}
            <div className="row g-4 mt-2">
                <div className="col-12">
                    <div className="resume-wrapper">
                        <div className="d-flex align-items-center mb-4">
                            <div className="icon-2xl text-black me-3">
                                <i className="bi bi-award line-height-100"></i>
                            </div>
                            <h3 className="mb-0">Professional Certifications</h3>
                        </div>
                        
                        {resumeData.certifications.map((item, index) => (
                            <div key={index} className="resume-box mb-4">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h4 className="fw-bold mb-0">
                                        <span className="badge bg-primary">{item.degree}</span>
                                    </h4>
                                    <span className="resume-date">{item.date}</span>
                                </div>
                                <div className="mb-3">
                                    <span className="company-name">@ {item.university}</span>
                                </div>
                                <p className="mb-0">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Skills Section remains the same */}
            <div className="row g-4 mt-2">
                <div className="col-12">
                    <div className="resume-wrapper">
                        <div className="d-flex align-items-center mb-4">
                            <div className="icon-2xl text-black me-3">
                                <i className="bi bi-tools line-height-100"></i>
                            </div>
                            <h3 className="mb-0">Technical Expertise</h3>
                        </div>

                        <div className="row g-4">
                            <div className="col-12 col-lg-6">
                                <div className="skill-box">
                                    <h5 className="mb-3">Technical Skills</h5>
                                    <div className="d-flex flex-wrap gap-2">
                                        {resumeData.skills.technical.map((skill, index) => (
                                            <span key={index} className="skill-badge">
                                                <i className="bi bi-code-square me-2"></i>
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="skill-box">
                                    <h5 className="mb-3">Professional Skills</h5>
                                    <div className="d-flex flex-wrap gap-2">
                                        {resumeData.skills.soft.map((skill, index) => (
                                            <span key={index} className="skill-badge">
                                                <i className="bi bi-person-workspace me-2"></i>
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;