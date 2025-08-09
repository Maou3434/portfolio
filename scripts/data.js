export const resumeData = {
    personalInfo: {
        name: "Abimanyu Jayaganesh",
        role: "Computer Science Engineering Student",
        location: "Coimbatore, TN",
        email: "abimanyu.jayaganesh@gmail.com",
        phone: "(+91) 73396 66043",
        bio: "Passionate Computer Science and Engineering student at VIT Vellore with hands-on experience in software development and IoT systems. Currently developing expertise in full-stack development, machine learning, and innovative technology solutions."
    },
    education: [{
        institution: "Vellore Institute of Technology (VIT), Vellore, TN",
        degree: "Bachelor of Technology",
        field: "Computer Science and Engineering", 
        period: "Expected 2027",
        status: "In Progress"
    }],
    experience: [
        {
            company: "VVDN Technologies",
            location: "Coimbatore, TN",
            role: "Java Intern",
            period: "June 2025 - July 2025",
            status: "Completed",
            description: "Developed Online Learning Platform Management System using Spring Boot with dual-database architecture.",
            responsibilities: [
                "Developed Online Learning Platform Management System using Spring Boot, implementing dual-database architecture with MySQL for transactional operations and MongoDB for read performance",
                "Designed and built RESTful APIs supporting CRUD functionality for users, courses, and platforms across multiple endpoints",
                "Architected asynchronous data synchronization processes maintaining consistency between MySQL and MongoDB databases",
                "Managed complex data relationships across user enrollments, course assignments, and automated cascading deletions",
                "Applied Controller-Service-Repository architecture pattern for code organization and maintainability",
                "Utilized SonarQube for static code analysis to identify technical debt and code quality issues"
            ],
            technologies: ["Spring Boot", "MySQL", "MongoDB", "REST APIs", "SonarQube", "Apache Maven"]
        },
        {
            company: "IMIK Technologies",
            location: "Coimbatore, TN", 
            role: "IoT Development Intern",
            period: "May 2024 - June 2024",
            status: "Completed",
            description: "Constructed unified IoT monitoring platform using Django and AWS EC2.",
            responsibilities: [
                "Constructed unified IoT monitoring platform using Django and AWS EC2, consolidating 3 microservices and reducing cloud costs by 1.5x",
                "Deployed MQTT protocol for device communication across IoT network infrastructure",
                "Architected multi-tenant system with role-based access controls for Admin, Owner, and Worker user types",
                "Improved data visualization speed by 10x through RMS algorithm modifications",
                "Participated in Agile development cycles with daily standups and sprint planning"
            ],
            technologies: ["Django", "AWS EC2", "MQTT", "IoT", "Python"]
        },
        {
            company: "Otaku Club VIT",
            location: "Vellore, TN",
            role: "Public Relations and Media Head", 
            period: "Dec 2024 - Present",
            status: "Active",
            description: "Leading PR campaigns and digital outreach for cultural events.",
            responsibilities: [
                "Secured sponsorships through partnership development and vendor negotiations",
                "Managed PR campaigns and digital outreach reaching 1,500+ students, coordinating 3 cultural events during Riviera festival with 200+ participants"
            ],
            technologies: ["Leadership", "Event Management", "Public Relations", "Digital Marketing"]
        }
    ],
    skills: {
        programmingLanguages: ["Python", "Java", "C++", "JavaScript"],
        webDevelopment: ["Django", "HTML/CSS", "Spring Boot", "REST APIs"],
        databases: ["MySQL", "MongoDB", "SQLite", "DynamoDB", "SQL"],
        cloudTechnologies: ["AWS EC2", "Cloud Deployment"],
        protocols: ["MQTT (IoT Communication)"],
        tools: ["Git", "SonarQube", "Apache Maven", "Agile Methodologies"]
    },
    languageProficiency: {
        "Tamil": "Native Proficiency",
        "English": "Professional Fluency", 
        "Japanese": "Basic Communication",
        "Hindi": "Conversational Proficiency"
    },
    projects: [
        {
            name: "Fuzzy Logic Color Recommendation System",
            type: "Research Proposal",
            category: "Academic Research",
            description: "Designed machine learning-based framework for color-blind fashion assistance using fuzzy logic algorithms. Developed processing pipeline combining GrabCut segmentation, K-Means clustering, and BP Neural Network classification.",
            technologies: ["Machine Learning", "Fuzzy Logic", "Python", "HSV Color Space"],
            details: [
                "Designed machine learning-based framework for color-blind fashion assistance using fuzzy logic algorithms",
                "Developed processing pipeline combining GrabCut segmentation, K-Means clustering, and BP Neural Network classification",
                "Researched HSV color space applications for color representation in accessibility tools",
                "Co-authored research proposal with 3 team members addressing implementation challenges"
            ],
            image: "https://picsum.photos/400/250?random=1"
        },
        {
            name: "Smart RFID Access Control System",
            category: "IoT Project",
            description: "Developed RFID-based security system using ESP32 microcontroller supporting 20+ user credentials with Google Sheets integration for real-time access logging.",
            technologies: ["ESP32", "C++", "IoT", "RFID", "WiFi"],
            details: [
                "Developed RFID-based security system using ESP32 microcontroller supporting 20+ user credentials",
                "Built local authentication system with EEPROM storage for credential management",
                "Established Google Sheets integration via WiFi for real-time access logging with 2-second response time",
                "Created web dashboard using HTML, CSS, and JavaScript for remote monitoring",
                "Implemented master card functionality for centralized user management"
            ],
            image: "https://picsum.photos/400/250?random=2"
        },
        {
            name: "WhatsApp Chat Analyzer",
            category: "Data Visualization",
            description: "Built interactive data visualization dashboards using Chart.js for analyzing 100,000+ WhatsApp messages with sub-second processing.",
            technologies: ["JavaScript", "Chart.js", "Data Visualization", "Analytics"],
            details: [
                "Built interactive data visualization dashboards using Chart.js for analyzing 100,000+ WhatsApp messages with sub-second processing",
                "Programmed emoji frequency tracking, message pattern analysis, and user activity metrics",
                "Redesigned data structures improving processing speed and memory usage"
            ],
            image: "https://picsum.photos/400/250?random=3"
        }
    ],
    achievements: [
        "2nd Place, IEEE IAS CodeDoc Hackathon (VIT Vellore) - Only freshman in top 5 teams",
        "IIMUN Winner - Indian International Model UN, Best Delegate award",
        "KCT MUN Runner-Up - University-level Model UN competition in Coimbatore",
        "NCC Achievements: 2 Silver Medals (Aeromodelling & Shooting), Leadership Training, Best Cadet Finalist"
    ],
    hobbies: [
        "Reading, listening to music, and swimming",
        "Digital illustration and graphic design", 
        "Proofreading translated works and novel editing"
    ]
};
