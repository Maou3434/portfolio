import { resumeData } from '../data.js';
import * as commands from '../commands/index.js';
import { startBootSequence } from '../modes/boot.js';
import { showModeSelection } from '../modes/selection.js';
import { showHackerScreen } from '../modes/hacker.js';
import { showTerminalMode } from '../modes/terminal.js';
import { showPortfolioMode } from '../modes/portfolio.js';

export class TerminalPortfolio {
    constructor() {
        this.currentMode = 'boot'; // 'boot', 'selection', 'hacker', 'terminal', 'portfolio'
        this.commandHistory = [];
        this.historyIndex = -1;
        this.isTyping = false;
        this.selectedMode = null;
        this.selectedOptionIndex = 0; // 0 for terminal, 1 for gui
        this.eventListenersSetup = false;
        
        this.bootMessages = [
            { text: "[✓] Initializing portfolio system...", type: "success", delay: 300 },
            { text: "[✓] Loading user profile...", type: "success", delay: 500 },
            { text: "[✓] Mounting experience modules...", type: "success", delay: 400 },
            { text: "[✓] Configuring skill sets...", type: "success", delay: 600 },
            { text: "[✓] Establishing project connections...", type: "success", delay: 450 },
            { text: "[✓] Preparing interface modes...", type: "success", delay: 350 },
            { text: "[✓] System ready!", type: "success", delay: 200 }
        ];
        
        this.resumeData = resumeData;

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

        this.commands = {
            help: {
                description: "Show available commands",
                aliases: ["h", "?"],
                execute: () => commands.help(this)
            },
            about: {
                description: "Display personal information",
                aliases: ["whoami", "info"],
                execute: () => commands.about(this)
            },
            education: {
                description: "Show educational background", 
                aliases: ["edu", "school"],
                execute: () => commands.education(this)
            },
            experience: {
                description: "List work experience",
                aliases: ["exp", "work", "jobs"],
                execute: () => commands.experience(this)
            },
            skills: {
                description: "Display technical skills",
                aliases: ["tech", "technologies"],
                execute: () => commands.skills(this)
            },
            projects: {
                description: "Show project portfolio", 
                aliases: ["proj", "portfolio"],
                execute: () => commands.projects(this)
            },
            achievements: {
                description: "List accomplishments",
                aliases: ["awards", "accolades"],
                execute: () => commands.achievements(this)
            },
            contact: {
                description: "Show contact information",
                aliases: ["reach", "connect"],
                execute: () => commands.contact(this)
            },
            gui: {
                description: "Switch to portfolio view mode",
                aliases: ["web"],
                execute: () => commands.gui(this)
            },
            clear: {
                description: "Clear terminal screen",
                aliases: ["cls"],
                execute: () => commands.clear(this)
            },
            exit: {
                description: "Exit terminal (same as gui)",
                aliases: ["quit", "q"],
                execute: () => commands.exit(this)
            },
            theme: {
                description: "Change terminal theme",
                aliases: ["color"],
                execute: (args) => commands.theme(this, args)
            },
            history: {
                description: "Show command history",
                aliases: ["hist"],
                execute: () => commands.history(this)
            }
        };

        this.init();
    }

    init() {
        this.startBootSequence();
    }

    startBootSequence() {
        startBootSequence(this);
    }

    showModeSelection() {
        showModeSelection(this);
    }

    showHackerScreen() {
        showHackerScreen(this);
    }

    proceedToSelectedMode() {
        if (this.selectedMode === 'terminal') {
            this.showTerminalMode();
        } else {
            this.showPortfolioMode();
        }
    }

    showTerminalMode() {
        showTerminalMode(this);
    }

    showPortfolioMode() {
        showPortfolioMode(this);
    }

    hideAllScreens() {
        document.getElementById('boot-sequence').classList.add('hidden');
        document.getElementById('mode-selection').classList.add('hidden');
        document.getElementById('hacker-screen').classList.add('hidden');
        document.getElementById('terminal-mode').classList.add('hidden');
        document.getElementById('portfolio-mode').classList.add('hidden');
    }

    processCommand(commandLine) {
        if (!commandLine) return;

        this.commandHistory.push(commandLine);

        this.addToTerminal(`abimanyu@portfolio:~$ ${commandLine}`, 'command');

        const parts = commandLine.split(' ');
        const command = parts[0].toLowerCase();
        const args = parts.slice(1);

        if (this.funnyCommands[command]) {
            this.addToTerminal(`<div class="command-output"><p class="info-message">${this.funnyCommands[command]}</p></div>`);
            this.scrollToBottom();
            return;
        }

        let commandObj = this.commands[command];
        if (!commandObj) {
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

    switchToPortfolioMode() {
        this.addToTerminal('<div class="command-output"><p class="success-message">Initiating GUI mode transition...</p></div>');
        
        setTimeout(() => {
            this.selectedMode = 'gui';
            this.proceedToSelectedMode();
        }, 800);
    }

    switchToTerminalMode() {
        this.selectedMode = 'terminal';
        this.proceedToSelectedMode();
    }
}
