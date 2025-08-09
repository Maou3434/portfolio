export function showTerminalMode(app) {
    app.hideAllScreens();
    document.getElementById('terminal-mode').classList.remove('hidden');
    app.currentMode = 'terminal';
    setupTerminalEventListeners(app);
    startTerminalMode();
}

function setupTerminalEventListeners(app) {
    // Only set up terminal-specific event listeners
    const terminalInput = document.getElementById('terminal-input');
    if (terminalInput) {
        // Remove existing listeners
        const newInput = terminalInput.cloneNode(true);
        terminalInput.parentNode.replaceChild(newInput, terminalInput);
        
        newInput.addEventListener('keydown', (e) => handleTerminalInput(app, e));
        newInput.addEventListener('input', (e) => handleInputChange(app, e));
    }
}

function startTerminalMode() {
    const terminalInput = document.getElementById('terminal-input');
    if (terminalInput) {
        terminalInput.focus();
    }
}

function handleTerminalInput(app, e) {
    const input = e.target;
    
    switch (e.key) {
        case 'Enter':
            e.preventDefault();
            app.processCommand(input.value.trim());
            input.value = '';
            app.historyIndex = -1;
            break;
        
        case 'ArrowUp':
            e.preventDefault();
            navigateHistory(app, 'up', input);
            break;
        
        case 'ArrowDown':
            e.preventDefault();
            navigateHistory(app, 'down', input);
            break;
        
        case 'Tab':
            e.preventDefault();
            handleTabCompletion(app, input);
            break;
    }
}

function handleInputChange(app, e) {
    // Add typing effect or other input handling if needed
}

function navigateHistory(app, direction, input) {
    if (app.commandHistory.length === 0) return;

    if (direction === 'up') {
        if (app.historyIndex < app.commandHistory.length - 1) {
            app.historyIndex++;
        }
    } else {
        if (app.historyIndex > -1) {
            app.historyIndex--;
        }
    }

    if (app.historyIndex >= 0) {
        input.value = app.commandHistory[app.commandHistory.length - 1 - app.historyIndex];
    } else {
        input.value = '';
    }
}

function handleTabCompletion(app, input) {
    const partial = input.value.toLowerCase();
    if (!partial) return;

    const matches = [];
    
    // Check commands
    for (const [command, obj] of Object.entries(app.commands)) {
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
        app.addToTerminal(`Available completions: ${matches.join(', ')}`, 'info');
        app.scrollToBottom();
    }
}