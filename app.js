import { TerminalPortfolio } from './scripts/core/TerminalPortfolio.js';

document.addEventListener('DOMContentLoaded', () => {
    window.app = new TerminalPortfolio();

    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'k' && window.app.currentMode === 'terminal') {
            e.preventDefault();
            const terminalInput = document.getElementById('terminal-input');
            if (terminalInput) {
                terminalInput.focus();
            }
        }
        
        if (e.key === 'Escape' && ['terminal', 'portfolio'].includes(window.app.currentMode)) {
            if (window.app.currentMode === 'terminal') {
                window.app.switchToPortfolioMode();
            } else {
                window.app.switchToTerminalMode();
            }
        }
    });
    
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
