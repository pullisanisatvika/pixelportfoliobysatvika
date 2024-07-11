import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    aws,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    sql,
    nodejs,
    pricewise,
    springboot,
    react,
    snapgram,
    docker,
    threads,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: sql,
        name: "SQL",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: springboot,
        name: "Spring Boot",
        type: "Frontend",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "Frontend",
    },
    {
        imageUrl: aws,
        name: "AWS",
        type: "Cloud Computing",
    }
];

export const experiences = [
    {
        title: "Artificial Intelligence Intern",
        company_name: "BSR INFINITY Services",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "Nov 2021 - Jan 2023",
        points: [
            "Developing and maintaining AI and machine learning projects.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Participated in research and development of AI solutions for real-world problems.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "SDE intern",
        company_name: "Bluestock Fintech",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jun 2024 - Present",
        points: [
            "Collaborating with the development team to implement new features and functionalities for the Bluestock mobile app.",
            "Working on bug fixes and improvements to enhance the user experience.",
            "Participating in code reviews and contributing to the overall codebase.",
            "Gaining exposure to a variety of technologies including Flutter, Django, PHP, PostgreSQL, MongoDB, AWS, and GCP.",
            "Developing a strong understanding of fintech and stock market analytics.",
        ],
    },

];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/pullisanisatvika',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/pullisani-satvika/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Railway Reservations System ',
        description: 'This Python-powered Streamlit application simplifies and streamlines railway reservations for both passengers and administrators. Passengers can conveniently book tickets, choose seats, and pay securely (planned integration). Admins can manage trains, user roles (planned), and access reports (planned).',
        link: 'https://github.com/pullisanisatvika/railway-reservation-system-using-streamlit',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'QR-Code-Generator',
        description: 'Creating a QR code generator entirely with CSS and Javascript is challenging due to the complexity of QR code generation algorithms. However, you can achieve a QR code generator using a combination of CSS for styling and Javascript for user interaction, while relying on a third-party library for the actual QR code generation.',
        link: 'https://github.com/pullisanisatvika/QR-Code-Generator',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Offline Geolocator Using Python Tkinter Library',
        description: 'The "Offline Geolocator" project utilizes Python and the Tkinter library to offer location estimates even without internet access. It leverages the GeoLite2 database, mapping your IP address to city and country offline. Simply input your IP (manually or via network tools) and see your location displayed.',
        link: 'https://github.com/pullisanisatvika/Offline-Geolocator-Using-Python-Tkinter-Library',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/pullisanisatvika/Full-stack-instagram-clone',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/pullisanisatvika/Real-Estate-Price-Prediction',
    },
    
];