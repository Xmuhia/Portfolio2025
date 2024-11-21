import PortfolioImg from '@/public/images/portfolio-img.jpg';
import MainImage from '@/public/images/col-1.jpg';

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
            title: "Blockchain",
            classes: "blockchain",
            dataFilter: ".blockchain"
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
            imageSrc: PortfolioImg,
            mainImage: MainImage,
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
            projectTitle: 'NFT Marketplace',
            slug: 'nft-marketplace',
            description: 'A decentralized marketplace for NFT trading, built using Solidity smart contracts and React. Features include wallet integration, automated royalty distribution, and real-time price tracking. The platform supports multiple blockchain networks.',
            keywords: 'Ethereum, Solidity, Web3.js, React, Smart Contracts',
            category: 'blockchain',
            services: 'Smart Contract Development, Frontend Development, Web3 Integration',
            client: 'Crypto Startup',
            duration: '4 months',
            imageSrc: PortfolioImg,
            mainImage: MainImage,
            categories: [
                { name: 'Blockchain' },
                { name: 'Web3' },
                { name: 'DeFi' }
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
            categories: [
                { name: '3D Graphics' },
                { name: 'AI' },
                { name: 'E-commerce' }
            ],
            images: [
                { image: MainImage },
                { image: MainImage },
            ]
        },
        {
            projectTitle: 'Enterprise Admin Dashboard',
            slug: 'admin-dashboard',
            description: 'A comprehensive admin dashboard built with React and Material-UI, featuring advanced data visualization, real-time analytics, and role-based access control. Includes features for user management, reporting, and system monitoring.',
            keywords: 'React, Material-UI, Redux, Chart.js, REST API',
            category: 'web-apps',
            services: 'Frontend Development, UI/UX Design, API Integration',
            client: 'Enterprise Solution',
            duration: '5 months',
            imageSrc: PortfolioImg,
            mainImage: MainImage,
            categories: [
                { name: 'Dashboard' },
                { name: 'Analytics' },
                { name: 'Enterprise' }
            ],
            images: [
                { image: MainImage },
                { image: MainImage },
            ]
        },
    ]
};