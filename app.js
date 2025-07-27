// Enhanced Interactive Terminal Portfolio Application with Boot Sequence
class TerminalPortfolio {
    constructor() {
        this.currentMode = 'boot'; // 'boot', 'selection', 'hacker', 'terminal', 'portfolio'
        this.commandHistory = [];
        this.historyIndex = -1;
        this.isTyping = false;
        this.selectedMode = null;
        this.selectedOptionIndex = 0; // 0 for terminal, 1 for gui
        this.eventListenersSetup = false;
        
        // Boot sequence messages
        this.bootMessages = [
            { text: "[✓] Initializing portfolio system...", type: "success", delay: 300 },
            { text: "[✓] Loading user profile...", type: "success", delay: 500 },
            { text: "[✓] Mounting experience modules...", type: "success", delay: 400 },
            { text: "[✓] Configuring skill sets...", type: "success", delay: 600 },
            { text: "[✓] Establishing project connections...", type: "success", delay: 450 },
            { text: "[✓] Preparing interface modes...", type: "success", delay: 350 },
            { text: "[✓] System ready!", type: "success", delay: 200 }
        ];
        
        // Resume data with exact information from provided data
        this.resumeData = {
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
                status: "In Progress",
                coursework: ["Data Structures and Algorithms", "Web Technologies", "Computer Architecture", "Microprocessor and Micro Controllers"]
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

        // Funny Linux command responses
        this.funnyCommands = {
            "ls": "I know you love Linux, but this isn't your home directory! Try 'help' instead.",
            "ll": "Long listing? How about a long conversation about my projects instead? Try 'projects'!",
            "la": "Looking for hidden files? The only thing hidden here is my sense of humor! Try 'help'.",
            "cd": "Nice try! But you can't cd out of my portfolio. Use 'help' to navigate properly.",
            "sudo": "sudo make me a sandwich? This isn't that kind of terminal! Try 'help' for real commands.",
            "rm": "Whoa there! Good thing this isn't a real filesystem. No deleting my achievements!",
            "grep": "Searching for life? You found it! Try 'about' command instead.",
            "ps": "The only process running here is impressing you! Check 'experience' for real processes.",
            "top": "Top command? I'm already at the top of my game! Try 'skills' to see how.",
            "chmod": "File permissions? Here everything is open source, just like my GitHub!",
            "mv": "Can't move files, but I can move your career forward! Check out 'projects'.",
            "cp": "No copying needed, everything here is 100% original content!",
            "find": "Looking for something? You've found the right portfolio! Try 'help' to find what you need.",
            "vi": "Ah, a vim user! But there's nothing to edit here, everything's perfect already! 😄",
            "vim": "Great choice in editors! But this isn't a file to edit. Try 'help' instead.",
            "nano": "Simple editor for a complex world? I respect that! Try 'help' for navigation.",
            "cat": "Meow! 🐱 Wait, that's not right... Try 'about' to learn about this human instead.",
            "man": "Man pages? You're looking at the man himself! Try 'about' for the manual.",
            "pwd": "Present working directory: /home/abimanyu/awesome_portfolio/. Try 'help' to explore!",
            "history": "bash: history: command not found. But you can see my work history with 'experience'!",
            "exit": "You can't exit this easily! This portfolio is too engaging! Try 'help' instead.",
            "quit": "Quitting already? Try 'gui' to switch to web mode, or 'help' for more fun!",
            "mkdir": "Creating directories? The only directory you need is this portfolio! Try 'help'.",
            "rmdir": "Can't remove what doesn't exist! But you can explore what does with 'help'.",
            "touch": "Touching files? That's sweet, but try touching hearts with my 'projects' instead!",
            "which": "Which command? I'd rather show you which skills I have! Try 'skills'.",
            "locate": "locate: command not found. But you've located an awesome portfolio! Try 'help'.",
            "du": "Disk usage? This portfolio uses 100% of my passion! Try 'about' for more.",
            "df": "Filesystem info? Here's the info: this is a portfolio, not a filesystem! Try 'help'.",
            "mount": "mount: only root can do that. But anyone can explore my 'projects'!",
            "umount": "Can't unmount my enthusiasm! It's permanently attached! Try 'help'.",
            "kill": "kill: no such process. But you can kill time exploring my 'experience'!",
            "killall": "killall: command not found. I prefer to keep all my skills alive! Try 'skills'.",
            "ping": "PING portfolio.local: 64 bytes from awesome: icmp_seq=1 ttl=64 time=0.1ms",
            "wget": "wget: command not found. But you can 'get' my info with 'about'!",
            "curl": "curl: command not found. My portfolio doesn't curl, it rocks! Try 'help'.",
            "ssh": "ssh: Connection refused. This is a public portfolio, no secret access needed!",
            "scp": "scp: No such file or directory. Try 'cp'ing my enthusiasm instead!",
            "rsync": "rsync: command not found. But we're totally in sync! Try 'help'.",
            "tar": "tar: This portfolio doesn't need compression, it's already perfect! Try 'projects'.",
            "zip": "zip: Nothing to compress here, just pure talent! Try 'skills'.",
            "unzip": "unzip: Already unzipped and ready to impress! Try 'about'."
        };

        // Available commands (preserved and enhanced)
        this.commands = {
            help: {
                description: "Show available commands",
                aliases: ["h", "?"],
                execute: () => this.showHelp()
            },
            about: {
                description: "Display personal information",
                aliases: ["whoami", "info"],
                execute: () => this.showAbout()
            },
            education: {
                description: "Show educational background", 
                aliases: ["edu", "school"],
                execute: () => this.showEducation()
            },
            experience: {
                description: "List work experience",
                aliases: ["exp", "work", "jobs"],
                execute: () => this.showExperience()
            },
            skills: {
                description: "Display technical skills",
                aliases: ["tech", "technologies"],
                execute: () => this.showSkills()
            },
            projects: {
                description: "Show project portfolio", 
                aliases: ["proj", "portfolio"],
                execute: () => this.showProjects()
            },
            achievements: {
                description: "List accomplishments",
                aliases: ["awards", "accolades"],
                execute: () => this.showAchievements()
            },
            contact: {
                description: "Show contact information",
                aliases: ["reach", "connect"],
                execute: () => this.showContact()
            },
            gui: {
                description: "Switch to portfolio view mode",
                aliases: ["web"],
                execute: () => this.switchToPortfolioMode()
            },
            clear: {
                description: "Clear terminal screen",
                aliases: ["cls"],
                execute: () => this.clearTerminal()
            },
            exit: {
                description: "Exit terminal (same as gui)",
                aliases: ["quit", "q"],
                execute: () => this.switchToPortfolioMode()
            },
            theme: {
                description: "Change terminal theme",
                aliases: ["color"],
                execute: (args) => this.changeTheme(args)
            },
            history: {
                description: "Show command history",
                aliases: ["hist"],
                execute: () => this.showHistory()
            }
        };

        this.init();
    }

    init() {
        this.startBootSequence();
    }

    hideAllScreens() {
        document.getElementById('boot-sequence').classList.add('hidden');
        document.getElementById('mode-selection').classList.add('hidden');
        document.getElementById('hacker-screen').classList.add('hidden');
        document.getElementById('terminal-mode').classList.add('hidden');
        document.getElementById('portfolio-mode').classList.add('hidden');
    }

    startBootSequence() {
        this.hideAllScreens();
        document.getElementById('boot-sequence').classList.remove('hidden');
        
        const bootMessages = document.getElementById('boot-messages');
        const progressFill = document.getElementById('progress-fill');
        const progressText = document.getElementById('progress-text');

        // Clear any existing boot messages
        bootMessages.innerHTML = '';

        let currentProgress = 0;
        let messageIndex = 0;

        const addBootMessage = (message, index) => {
            setTimeout(() => {
                const messageDiv = document.createElement('div');
                messageDiv.className = `boot-message ${message.type}`;
                messageDiv.textContent = message.text;
                bootMessages.appendChild(messageDiv);
                
                // Update progress
                const progress = Math.round(((index + 1) / this.bootMessages.length) * 100);
                progressFill.style.width = progress + '%';
                progressText.textContent = progress + '%';
                
                // Scroll to bottom
                bootMessages.scrollTop = bootMessages.scrollHeight;
                
                // If last message, proceed to mode selection
                if (index === this.bootMessages.length - 1) {
                    setTimeout(() => {
                        this.showModeSelection();
                    }, 1000);
                }
            }, index * 400 + message.delay);
        };

        // Add all boot messages with delays
        this.bootMessages.forEach((message, index) => {
            addBootMessage(message, index);
        });
    }

    showModeSelection() {
        this.hideAllScreens();
        document.getElementById('mode-selection').classList.remove('hidden');
        
        this.currentMode = 'selection';
        this.setupModeSelection();
    }

    setupModeSelection() {
        // Do not select any option by default
        this.selectedOptionIndex = -1;
        
        const updateSelection = () => {
            const terminalOption = document.getElementById('terminal-option');
            const guiOption = document.getElementById('gui-option');
            
            if (terminalOption && guiOption) {
                terminalOption.classList.remove('selected');
                guiOption.classList.remove('selected');
            }
        };

        const selectMode = (mode) => {
            this.selectedMode = mode;
            
            // Check if this is the first visit
            const hasVisited = sessionStorage.getItem('hasVisited');
            
            if (!hasVisited) {
                // First visit - show hacker screen and mark as visited
                sessionStorage.setItem('hasVisited', 'true');
                this.showHackerScreen();
            } else {
                // Subsequent visits - go directly to selected mode
                this.proceedToSelectedMode();
            }
        };

        // Set up mouse interactions
        const terminalOption = document.getElementById('terminal-option');
        const guiOption = document.getElementById('gui-option');
        
        if (terminalOption && guiOption) {
            // Remove existing event listeners by cloning elements
            const newTerminalOption = terminalOption.cloneNode(true);
            const newGuiOption = guiOption.cloneNode(true);
            terminalOption.parentNode.replaceChild(newTerminalOption, terminalOption);
            guiOption.parentNode.replaceChild(newGuiOption, guiOption);

            // Add fresh event listeners
            newTerminalOption.addEventListener('click', () => selectMode('terminal'));
            newGuiOption.addEventListener('click', () => selectMode('gui'));
        }

        // Remove any existing global keyboard handler for mode selection
        if (this.modeSelectionKeyHandler) {
            document.removeEventListener('keydown', this.modeSelectionKeyHandler);
        }

        // Restore number key (1 and 2) keyboard interaction for mode selection only
        this.modeSelectionKeyHandler = (e) => {
            if (this.currentMode !== 'selection') {
                document.removeEventListener('keydown', this.modeSelectionKeyHandler);
                return;
            }
            switch (e.key) {
                case '1':
                    e.preventDefault();
                    selectMode('terminal');
                    break;
                case '2':
                    e.preventDefault();
                    selectMode('gui');
                    break;
            }
        };
        document.addEventListener('keydown', this.modeSelectionKeyHandler);
        updateSelection();
    }

    showHackerScreen() {
        this.hideAllScreens();
        document.getElementById('hacker-screen').classList.remove('hidden');
        
        this.currentMode = 'hacker';
        this.startMatrixEffect();
        this.startHackerSequence();
    }

    startMatrixEffect() {
        const canvas = document.getElementById('matrix-canvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
        const matrixArray = matrix.split("");
        
        const fontSize = 10;
        const columns = canvas.width / fontSize;
        
        const drops = [];
        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }
        
        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#00ff00';
            ctx.font = fontSize + 'px JetBrains Mono';
            
            for (let i = 0; i < drops.length; i++) {
                const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                
                drops[i]++;
            }
        };
        
        const matrixInterval = setInterval(draw, 35);
        
        // Stop matrix effect after hacker sequence
        setTimeout(() => {
            clearInterval(matrixInterval);
        }, 3000);
    }

    startHackerSequence() {
        const hackerMessage = document.getElementById('hacker-message');
        const accessGranted = document.getElementById('access-granted');
        
        // Reset elements
        hackerMessage.style.display = 'block';
        accessGranted.classList.add('hidden');
        
        const messages = [
            "ACCESSING PORTFOLIO SYSTEM...",
            "BYPASSING SECURITY PROTOCOLS...", 
            "DECRYPTING USER DATA...",
            "LOADING INTERFACE..."
        ];
        
        let messageIndex = 0;
        
        const updateMessage = () => {
            if (messageIndex < messages.length) {
                hackerMessage.textContent = messages[messageIndex];
                messageIndex++;
                setTimeout(updateMessage, 600);
            } else {
                setTimeout(() => {
                    hackerMessage.style.display = 'none';
                    accessGranted.classList.remove('hidden');
                    
                    setTimeout(() => {
                        this.proceedToSelectedMode();
                    }, 800);
                }, 300);
            }
        };
        
        setTimeout(updateMessage, 500);
    }

    proceedToSelectedMode() {
        if (this.selectedMode === 'terminal') {
            this.showTerminalMode();
        } else {
            this.showPortfolioMode();
        }
    }

    showTerminalMode() {
        this.hideAllScreens();
        document.getElementById('terminal-mode').classList.remove('hidden');
        this.currentMode = 'terminal';
        this.setupTerminalEventListeners();
        this.startTerminalMode();
    }

    showPortfolioMode() {
        this.hideAllScreens();
        document.getElementById('portfolio-mode').classList.remove('hidden');
        this.currentMode = 'portfolio';
        this.setupPortfolioEventListeners();
        this.setupPortfolioAnimations();
    }

    setupTerminalEventListeners() {
        // Only set up terminal-specific event listeners
        const terminalInput = document.getElementById('terminal-input');
        if (terminalInput) {
            // Remove existing listeners
            const newInput = terminalInput.cloneNode(true);
            terminalInput.parentNode.replaceChild(newInput, terminalInput);
            
            newInput.addEventListener('keydown', (e) => this.handleTerminalInput(e));
            newInput.addEventListener('input', (e) => this.handleInputChange(e));
        }
    }

    setupPortfolioEventListeners() {
        // Mobile navigation
        this.setupMobileNavigation();
        // Form handling
        this.setupFormHandling();
        // Scroll animations
        this.setupScrollAnimations();
        // Portfolio navigation
        this.setupPortfolioNavigation();
    }

    setupMobileNavigation() {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');

        if (hamburger && navMenu) {
            // Remove existing event listeners
            const newHamburger = hamburger.cloneNode(true);
            hamburger.parentNode.replaceChild(newHamburger, hamburger);
            
            newHamburger.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                newHamburger.classList.toggle('active');
                
                const spans = newHamburger.querySelectorAll('span');
                if (newHamburger.classList.contains('active')) {
                    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                    spans[1].style.opacity = '0';
                    spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
                } else {
                    spans.forEach(span => {
                        span.style.transform = '';
                        span.style.opacity = '';
                    });
                }
            });

            // Close mobile menu when clicking on a link
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                    newHamburger.classList.remove('active');
                    
                    const spans = newHamburger.querySelectorAll('span');
                    spans.forEach(span => {
                        span.style.transform = '';
                        span.style.opacity = '';
                    });
                });
            });
        }
    }

    setupFormHandling() {
        const contactForm = document.getElementById('contact-form');
        const formOutput = document.getElementById('form-output');

        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmission(contactForm, formOutput);
            });
        }
    }

    setupScrollAnimations() {
        const sections = document.querySelectorAll('.section');
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    
                    // Trigger specific animations
                    if (entry.target.id === 'skills') {
                        this.animateSkillBars();
                    }
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });
    }

    setupPortfolioNavigation() {
        // Smooth scrolling for navigation links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 60; // Account for fixed navbar
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });

                    // Update active link
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            });
        });
    }

    animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach((bar, index) => {
            setTimeout(() => {
                const width = bar.dataset.width || '70';
                bar.style.width = width + '%';
            }, index * 100);
        });
    }

    handleFormSubmission(form, output) {
        const submitBtn = form.querySelector('.submit-btn');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');

        // Show loading state
        btnText.classList.add('hidden');
        btnLoading.classList.remove('hidden');
        submitBtn.disabled = true;

        // Simulate form processing
        setTimeout(() => {
            // Hide loading state
            btnText.classList.remove('hidden');
            btnLoading.classList.add('hidden');
            submitBtn.disabled = false;

            // Show success message
            output.classList.remove('hidden');
            form.reset();

            // Hide success message after 5 seconds
            setTimeout(() => {
                output.classList.add('hidden');
            }, 5000);
        }, 2000);
    }

    startTerminalMode() {
        const terminalInput = document.getElementById('terminal-input');
        if (terminalInput) {
            terminalInput.focus();
        }
    }

    handleTerminalInput(e) {
        const input = e.target;
        
        switch (e.key) {
            case 'Enter':
                e.preventDefault();
                this.processCommand(input.value.trim());
                input.value = '';
                this.historyIndex = -1;
                break;
            
            case 'ArrowUp':
                e.preventDefault();
                this.navigateHistory('up', input);
                break;
            
            case 'ArrowDown':
                e.preventDefault();
                this.navigateHistory('down', input);
                break;
            
            case 'Tab':
                e.preventDefault();
                this.handleTabCompletion(input);
                break;
        }
    }

    handleInputChange(e) {
        // Add typing effect or other input handling if needed
    }

    processCommand(commandLine) {
        if (!commandLine) return;

        // Add to history
        this.commandHistory.push(commandLine);

        // Display command
        this.addToTerminal(`abimanyu@portfolio:~$ ${commandLine}`, 'command');

        // Parse command and arguments
        const parts = commandLine.split(' ');
        const command = parts[0].toLowerCase();
        const args = parts.slice(1);

        // Check for funny Linux commands first
        if (this.funnyCommands[command]) {
            this.addToTerminal(`<div class="command-output"><p class="info-message">${this.funnyCommands[command]}</p></div>`);
            this.scrollToBottom();
            return;
        }

        // Find actual command (including aliases)
        let commandObj = this.commands[command];
        if (!commandObj) {
            // Check aliases
            for (const [key, cmd] of Object.entries(this.commands)) {
                if (cmd.aliases && cmd.aliases.includes(command)) {
                    commandObj = cmd;
                    break;
                }
            }
        }

        if (commandObj) {
            commandObj.execute(args);
        } else {
            this.addToTerminal(`Command not found: ${command}. Type 'help' for available commands.`, 'error');
        }

        this.scrollToBottom();
    }

    navigateHistory(direction, input) {
        if (this.commandHistory.length === 0) return;

        if (direction === 'up') {
            if (this.historyIndex < this.commandHistory.length - 1) {
                this.historyIndex++;
            }
        } else {
            if (this.historyIndex > -1) {
                this.historyIndex--;
            }
        }

        if (this.historyIndex >= 0) {
            input.value = this.commandHistory[this.commandHistory.length - 1 - this.historyIndex];
        } else {
            input.value = '';
        }
    }

    handleTabCompletion(input) {
        const partial = input.value.toLowerCase();
        if (!partial) return;

        const matches = [];
        
        // Check commands
        for (const [command, obj] of Object.entries(this.commands)) {
            if (command.startsWith(partial)) {
                matches.push(command);
            }
            // Check aliases too
            if (obj.aliases) {
                obj.aliases.forEach(alias => {
                    if (alias.startsWith(partial)) {
                        matches.push(alias);
                    }
                });
            }
        }

        if (matches.length === 1) {
            input.value = matches[0];
        } else if (matches.length > 1) {
            this.addToTerminal(`Available completions: ${matches.join(', ')}`, 'info');
            this.scrollToBottom();
        }
    }

    addToTerminal(content, type = 'output') {
        const terminalContent = document.getElementById('terminal-content');
        if (!terminalContent) return;
        
        const outputDiv = document.createElement('div');
        
        outputDiv.className = `terminal-output ${type}`;
        
        if (type === 'command') {
            outputDiv.innerHTML = `<span class="terminal-green">$</span> ${content}`;
        } else if (type === 'error') {
            outputDiv.innerHTML = `<span class="error-message">${content}</span>`;
        } else if (type === 'success') {
            outputDiv.innerHTML = `<span class="success-message">${content}</span>`;
        } else if (type === 'info') {
            outputDiv.innerHTML = `<span class="info-message">${content}</span>`;
        } else {
            outputDiv.innerHTML = content;
        }
        
        terminalContent.appendChild(outputDiv);
    }

    scrollToBottom() {
        const terminalContent = document.getElementById('terminal-content');
        if (terminalContent) {
            terminalContent.scrollTop = terminalContent.scrollHeight;
        }
    }

    clearTerminal() {
        const terminalContent = document.getElementById('terminal-content');
        if (!terminalContent) return;
        
        terminalContent.innerHTML = `
            <div class="welcome-message">
                <pre class="ascii-logo">
    ██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗
    ██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝
    ██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗  
    ██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝  
    ╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗
     ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝
                </pre>
                <div class="welcome-text">
                    <p class="terminal-green">Welcome to Abimanyu Jayaganesh's Interactive Portfolio Terminal!</p>
                    <p>Type <span class="command-highlight">'help'</span> to see available commands</p>
                    <p>Type <span class="command-highlight">'gui'</span> to switch to portfolio view</p>
                    <p class="terminal-dim">Use ↑↓ arrow keys to navigate command history</p>
                </div>
            </div>
        `;
    }

    showHelp() {
        let helpText = `<div class="command-output">
            <h3 class="terminal-green">Available Commands:</h3>
            <div style="margin-top: 15px;">`;
        
        for (const [command, obj] of Object.entries(this.commands)) {
            const aliases = obj.aliases ? ` (aliases: ${obj.aliases.join(', ')})` : '';
            helpText += `
                <div style="margin-bottom: 8px;">
                    <span class="terminal-blue">${command}</span>${aliases}
                    <br>
                    <span class="terminal-dim" style="margin-left: 15px;">${obj.description}</span>
                </div>`;
        }
        
        helpText += `
            </div>
            <div style="margin-top: 20px;">
                <p class="terminal-dim">Pro tip: Use Tab for command completion and ↑↓ for history navigation</p>
                <p class="terminal-dim">🎃 Easter egg: Try some Linux commands and see what happens!</p>
            </div>
        </div>`;
        
        this.addToTerminal(helpText);
    }

    showAbout() {
        const { personalInfo } = this.resumeData;
        
        const aboutText = `<div class="command-output">
            <h3 class="terminal-green">Personal Information</h3>
            <div style="margin-top: 15px;">
                <p><span class="terminal-blue">Name:</span> ${personalInfo.name}</p>
                <p><span class="terminal-blue">Role:</span> ${personalInfo.role}</p>
                <p><span class="terminal-blue">Location:</span> ${personalInfo.location}</p>
                <p><span class="terminal-blue">Email:</span> <a href="mailto:${personalInfo.email}" class="terminal-green">${personalInfo.email}</a></p>
                <p><span class="terminal-blue">Phone:</span> ${personalInfo.phone}</p>
            </div>
            <div style="margin-top: 20px;">
                <h4 class="terminal-yellow">Bio:</h4>
                <p style="margin-top: 10px; color: var(--terminal-text-dim);">${personalInfo.bio}</p>
            </div>
            <div style="margin-top: 20px;">
                <h4 class="terminal-yellow">Language Proficiency:</h4>
                ${Object.entries(this.resumeData.languageProficiency).map(([lang, level]) => 
                    `<p style="margin-left: 15px;"><span class="terminal-blue">${lang}:</span> ${level}</p>`
                ).join('')}
            </div>
        </div>`;
        
        this.addToTerminal(aboutText);
    }

    showEducation() {
        const { education } = this.resumeData;
        
        let educationText = `<div class="command-output">
            <h3 class="terminal-green">Education</h3>`;
        
        education.forEach(edu => {
            educationText += `
                <div style="margin-top: 20px; padding: 15px; border-left: 2px solid var(--terminal-blue);">
                    <h4 class="terminal-blue">${edu.degree}</h4>
                    <p><span class="terminal-yellow">${edu.field}</span></p>
                    <p><span class="terminal-yellow">${edu.institution}</span></p>
                    <p class="terminal-dim">${edu.period} | Status: ${edu.status}</p>
                    <div style="margin-top: 10px;">
                        <h5 class="terminal-green">Relevant Coursework:</h5>
                        ${edu.coursework.map(course => 
                            `<p style="margin-left: 15px;">• ${course}</p>`
                        ).join('')}
                    </div>
                </div>`;
        });
        
        educationText += `</div>`;
        
        this.addToTerminal(educationText);
    }

    showExperience() {
        const { experience } = this.resumeData;
        
        let experienceText = `<div class="command-output">
            <h3 class="terminal-green">Work Experience</h3>`;
        
        experience.forEach(exp => {
            experienceText += `
                <div style="margin-top: 20px; padding: 15px; border-left: 2px solid var(--terminal-purple);">
                    <h4 class="terminal-purple">${exp.role}</h4>
                    <p><span class="terminal-yellow">${exp.company}</span>, ${exp.location}</p>
                    <p class="terminal-dim">${exp.period} | Status: ${exp.status}</p>
                    <p style="margin-top: 10px; color: var(--terminal-text-dim);">${exp.description}</p>
                    <div style="margin-top: 10px;">
                        <h5 class="terminal-green">Key Responsibilities:</h5>
                        ${exp.responsibilities.map(resp => 
                            `<p style="margin-left: 15px; margin: 5px 0;">• ${resp}</p>`
                        ).join('')}
                    </div>
                    <div style="margin-top: 10px;">
                        <h5 class="terminal-green">Technologies:</h5>
                        <p style="margin-left: 15px;">${exp.technologies.join(', ')}</p>
                    </div>
                </div>`;
        });
        
        experienceText += `</div>`;
        
        this.addToTerminal(experienceText);
    }

    showSkills() {
        const { skills } = this.resumeData;
        
        const skillsText = `<div class="command-output">
            <h3 class="terminal-green">Technical Skills</h3>
            <div style="margin-top: 15px;">
                <h4 class="terminal-blue">Programming Languages:</h4>
                <p style="margin-left: 15px;">${skills.programmingLanguages.join(', ')}</p>
                
                <h4 class="terminal-blue" style="margin-top: 15px;">Web Development:</h4>
                <p style="margin-left: 15px;">${skills.webDevelopment.join(', ')}</p>
                
                <h4 class="terminal-blue" style="margin-top: 15px;">Databases:</h4>
                <p style="margin-left: 15px;">${skills.databases.join(', ')}</p>
                
                <h4 class="terminal-blue" style="margin-top: 15px;">Cloud Technologies:</h4>
                <p style="margin-left: 15px;">${skills.cloudTechnologies.join(', ')}</p>
                
                <h4 class="terminal-blue" style="margin-top: 15px;">Protocols:</h4>
                <p style="margin-left: 15px;">${skills.protocols.join(', ')}</p>
                
                <h4 class="terminal-blue" style="margin-top: 15px;">Tools:</h4>
                <p style="margin-left: 15px;">${skills.tools.join(', ')}</p>
            </div>
        </div>`;
        
        this.addToTerminal(skillsText);
    }

    showProjects() {
        const { projects } = this.resumeData;
        
        let projectsText = `<div class="command-output">
            <h3 class="terminal-green">Projects</h3>`;
        
        projects.forEach((project, index) => {
            projectsText += `
                <div style="margin-top: 20px; padding: 15px; border-left: 2px solid var(--terminal-yellow);">
                    <h4 class="terminal-yellow">${project.name}</h4>
                    <p class="terminal-dim">${project.description}</p>
                    <p style="margin-top: 10px;"><span class="terminal-blue">Category:</span> ${project.category}</p>
                    <p><span class="terminal-blue">Technologies:</span> ${project.technologies.join(', ')}</p>
                    <div style="margin-top: 10px;">
                        <h5 class="terminal-green">Project Details:</h5>
                        ${project.details.map(detail => 
                            `<p style="margin-left: 15px; margin: 5px 0;">• ${detail}</p>`
                        ).join('')}
                    </div>
                </div>`;
        });
        
        projectsText += `</div>`;
        
        this.addToTerminal(projectsText);
    }

    showAchievements() {
        const { achievements, hobbies } = this.resumeData;
        
        const achievementsText = `<div class="command-output">
            <h3 class="terminal-green">Achievements & Awards</h3>
            <div style="margin-top: 15px;">
                ${achievements.map(achievement => 
                    `<div style="margin: 15px 0; padding: 10px; background: rgba(0,255,0,0.05); border-radius: 5px;">
                        <p style="color: var(--terminal-yellow); font-weight: bold;">🏆 ${achievement}</p>
                    </div>`
                ).join('')}
            </div>
            <div style="margin-top: 20px;">
                <h3 class="terminal-green">Hobbies & Interests</h3>
                <div style="margin-top: 15px;">
                    ${hobbies.map(hobby => 
                        `<p style="margin: 10px 0; margin-left: 15px;">• ${hobby}</p>`
                    ).join('')}
                </div>
            </div>
        </div>`;
        
        this.addToTerminal(achievementsText);
    }

    showContact() {
        const { personalInfo } = this.resumeData;
        
        const contactText = `<div class="command-output">
            <h3 class="terminal-green">Contact Information</h3>
            <div style="margin-top: 15px;">
                <p>📧 <span class="terminal-blue">Email:</span> <a href="mailto:${personalInfo.email}" class="terminal-green">${personalInfo.email}</a></p>
                <p>📱 <span class="terminal-blue">Phone:</span> <a href="tel:+917339666043" class="terminal-green">${personalInfo.phone}</a></p>
                <p>📍 <span class="terminal-blue">Location:</span> ${personalInfo.location}</p>
            </div>
            <div style="margin-top: 20px; padding: 15px; border: 1px solid var(--terminal-green); border-radius: 5px;">
                <p class="terminal-green">💡 Ready for new opportunities!</p>
                <p class="terminal-dim">Feel free to reach out for collaborations, internships, or just to connect!</p>
            </div>
        </div>`;
        
        this.addToTerminal(contactText);
    }

    showHistory() {
        if (this.commandHistory.length === 0) {
            this.addToTerminal('<div class="command-output"><p class="terminal-dim">No commands in history</p></div>');
            return;
        }

        let historyText = `<div class="command-output">
            <h3 class="terminal-green">Command History</h3>
            <div style="margin-top: 15px;">`;
        
        this.commandHistory.forEach((cmd, index) => {
            historyText += `<p><span class="terminal-dim">${index + 1}.</span> ${cmd}</p>`;
        });
        
        historyText += `</div></div>`;
        
        this.addToTerminal(historyText);
    }

    changeTheme(args) {
        const themes = {
            green: { primary: '#00ff00', secondary: '#00aa00' },
            blue: { primary: '#00aaff', secondary: '#0088cc' },
            purple: { primary: '#aa00ff', secondary: '#8800cc' },
            red: { primary: '#ff0044', secondary: '#cc0033' }
        };

        const themeName = args[0] || 'green';
        const theme = themes[themeName];

        if (theme) {
            document.documentElement.style.setProperty('--terminal-green', theme.primary);
            document.documentElement.style.setProperty('--terminal-cursor', theme.primary);
            document.documentElement.style.setProperty('--terminal-accent', theme.primary);
            document.documentElement.style.setProperty('--terminal-accent-secondary', theme.secondary);
            document.documentElement.style.setProperty('--terminal-glow', `0 0 20px ${theme.primary}, 0 0 30px ${theme.primary}`);
            document.documentElement.style.setProperty('--terminal-box-shadow', `0 0 50px ${theme.primary}, 0 0 10px ${theme.secondary}`);
            document.documentElement.style.setProperty('--terminal-accent-bg', hexToRgba(theme.primary, 0.1));
            this.addToTerminal(`<div class="command-output"><p class="success-message">Theme changed to ${themeName}</p></div>`);
        } else {
            this.addToTerminal(`<div class="command-output"><p class="error-message">Unknown theme: ${themeName}</p><p class="terminal-dim">Available themes: ${Object.keys(themes).join(', ')}</p></div>`);
        }
    }

    switchToPortfolioMode() {
        this.addToTerminal('<div class="command-output"><p class="success-message">Initiating GUI mode transition...</p></div>');
        
        setTimeout(() => {
            this.selectedMode = 'gui';
            // Skip hacker screen for mode switching - go directly
            this.proceedToSelectedMode();
        }, 800);
    }

    switchToTerminalMode() {
        this.selectedMode = 'terminal';
        // Skip hacker screen for mode switching - go directly
        this.proceedToSelectedMode();
    }

    setupPortfolioAnimations() {
        // Animate sections as they come into view
        const sections = document.querySelectorAll('.section');
        sections.forEach((section, index) => {
            setTimeout(() => {
                section.classList.add('animate');
            }, index * 200);
        });

        // Animate skill bars
        setTimeout(() => {
            this.animateSkillBars();
        }, 1000);
    }
}

// Utility functions
function hexToRgba(hex, alpha) {
    let c = hex.replace('#', '');
    if (c.length === 3) c = c.split('').map(x => x + x).join('');
    const num = parseInt(c, 16);
    return `rgba(${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255}, ${alpha})`;
}

function closeTerminal() {
    console.log('Terminal close clicked');
}

function minimizeTerminal() {
    console.log('Terminal minimize clicked');
}

function maximizeTerminal() {
    console.log('Terminal maximize clicked');
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Create global app instance
    window.app = new TerminalPortfolio();
    
    // Add keyboard shortcuts for quick navigation
    document.addEventListener('keydown', (e) => {
        // Ctrl + K to focus terminal (like VS Code)
        if (e.ctrlKey && e.key === 'k' && window.app.currentMode === 'terminal') {
            e.preventDefault();
            const terminalInput = document.getElementById('terminal-input');
            if (terminalInput) {
                terminalInput.focus();
            }
        }
        
        // Escape to switch modes (only when in terminal or portfolio mode)
        if (e.key === 'Escape' && ['terminal', 'portfolio'].includes(window.app.currentMode)) {
            if (window.app.currentMode === 'terminal') {
                window.app.switchToPortfolioMode();
            } else {
                window.app.switchToTerminalMode();
            }
        }
    });
    
    // Window resize handler for matrix canvas
    window.addEventListener('resize', () => {
        const canvas = document.getElementById('matrix-canvas');
        if (canvas && window.app.currentMode === 'hacker') {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
    });

    console.log(`
    🚀 Enhanced Terminal Portfolio Loaded Successfully!
    
    Available modes:
    - Boot Sequence: Realistic system loading animation
    - Mode Selection: Choose between Terminal or GUI mode with arrow key navigation and glow feedback
    - Hacker Screen: Matrix-style transition animation (ONLY on first visit)
    - Terminal Mode: Interactive command-line interface with funny Linux responses
    - Portfolio Mode: Modern web portfolio view
    
    Quick shortcuts:
    - ESC: Switch between terminal/portfolio modes
    - Ctrl+K: Focus terminal input
    - ↑↓: Navigate command history & mode selection
    - Tab: Command completion
    
    Try typing common Linux commands for some laughs! 😄
    `);
});