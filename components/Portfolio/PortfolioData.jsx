import PortfolioImg from '@/public/images/portfolio-img.webp';
import MainImage from '@/public/images/col-1.jpg';
import PortfolioImg2 from '@/public/images/portfolio-img2.webp';
import PortfolioImg3 from '@/public/images/portfolio-img3.webp';
import PortfolioImg4 from '@/public/images/portfolio-img4.webp';


export const portfolioData = {
    mainData: {
        title: "Portfolio",
        title2: "Featured Projects",
        description: "Explore my diverse portfolio of full-stack applications, showcasing expertise in modern web technologies, blockchain solutions, and AI integration."
    },
    navigationList: [
        {
            title: "Web Apps",
            classes: "web-apps",
            dataFilter: ".web-apps"
        },
        {
            title: "AI & ML",
            classes: "ai-ml",
            dataFilter: ".ai-ml"
        }
    ],
    projects: [
        {
            projectTitle: 'Interactive E-Learning Platform',
            slug: 'e-learning-platform',
            description: 'A comprehensive web-learning platform built with the MERN stack, featuring real-time collaboration, interactive quizzes, and progress tracking. The platform supports video conferencing, document sharing, and automated assessment systems.',
            keywords: 'MongoDB, Express.js, React, Node.js, WebRTC, Socket.io',
            category: 'web-apps',
            services: 'Full Stack Development, Real-time Features, Database Design',
            client: 'Educational Institution',
            duration: '6 months',
            imageSrc: PortfolioImg2,
            mainImage: MainImage,
            codeUrl: 'https://github.com/Xmuhia/E-Learning-Platform',
            siteUrl: 'https://e-learning-platform-chi.vercel.app',
            categories: [
                { name: 'Full Stack' },
                { name: 'Education' },
                { name: 'Real-time' }
            ],
            images: [
                { image: MainImage },
                { image: MainImage },
            ]
        },
        {
            projectTitle: 'Recipe Finder',
            slug: 'e-learning-platform',
            description: 'A Simple Recipe Finder made with Vanilla JavaScript',
            keywords: 'VanillaJS, HTML, CSS',
            category: 'web-apps',
            services: 'API, Real-time Features, Database Design',
            client: 'Educational Institution',
            duration: '6 months',
            imageSrc: PortfolioImg4,
            mainImage: MainImage,
            codeUrl: 'https://github.com/Xmuhia/Recipe-App',
            siteUrl: 'https://recipeappx.netlify.app',
            categories: [
                { name: 'Full Stack' },
                { name: 'Education' },
                { name: 'Real-time' }
            ],
            images: [
                { image: MainImage },
                { image: MainImage },
            ]
        },
        {
            projectTitle: 'Camping Site Finder',
            slug: 'e-learning-platform',
            description: 'A Site to help you Camp in Style',
            keywords: 'Nextjs, React, Typescript',
            category: 'web-apps',
            services: 'Full Stack Development, Real-time Features, Database Design',
            client: 'Travel Company',
            duration: '6 months',
            imageSrc: PortfolioImg3,
            mainImage: MainImage,
            codeUrl: 'https://github.com/Xmuhia/Camping-Site-Finder',
            siteUrl: 'https://https://camping-site-finder.vercel.app',
            categories: [
                { name: 'Front-Emd' },
                { name: 'Tourism' },
                { name: 'Real-time' }
            ],
            images: [
                { image: MainImage },
                { image: MainImage },
            ]
        },
        {
            projectTitle: 'AI-Powered 3D T-Shirt Designer',
            slug: 'tshirt-designer',
            description: 'An innovative 3D customization platform that uses AI to generate and apply designs to t-shirts in real-time. Features include texture generation, pattern recognition, and realistic 3D preview with customizable lighting and angles.',
            keywords: 'Three.js, React, AI Integration, OpenAI API, WebGL',
            category: 'ai-ml',
            services: 'AI Integration, 3D Modeling, Frontend Development',
            client: 'E-commerce Brand',
            duration: '3 months',
            imageSrc: PortfolioImg,
            mainImage: MainImage,
            codeUrl: 'https://github.com/Xmuhia/Artificial-intelligence-3D-Shirtshop',
            siteUrl: 'https://aishirtshop.vercel.app',
            categories: [
                { name: '3D Graphics' },
                { name: 'AI' },
                { name: 'E-commerce' }
            ],
            images: [
                { image: MainImage },
                { image: MainImage },
            ]
        }
    ]
};