import { hexToRgba } from '../utils/colors.js';

export const theme = (app, args) => {
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
        app.addToTerminal(`<div class="command-output"><p class="success-message">Theme changed to ${themeName}</p></div>`);
    } else {
        app.addToTerminal(`<div class="command-output"><p class="error-message">Unknown theme: ${themeName}</p><p class="terminal-dim">Available themes: ${Object.keys(themes).join(', ')}</p></div>`);
    }
};