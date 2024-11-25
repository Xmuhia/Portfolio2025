import Image from 'next/image';
import React from 'react';

const PortfolioItem = ({ imageSrc, category, projectTitle, codeUrl, siteUrl }) => {
    return (
        <div className={`col-12 col-xl-6 portfolio-item ${category}`}>
            <div className="portfolio-box">
                <Image src={imageSrc} alt={projectTitle} placeholder="blur" />
                <span className="portfolio-category">{category}</span>
                <div className="portfolio-caption">
                    <h1>{projectTitle}</h1>
                    <div className="portfolio-buttons mt-3">
                        <a 
                            href={codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-primary me-2"
                        >
                            View Code
                        </a>
                        <a
                            href={siteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            View Site
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioItem;