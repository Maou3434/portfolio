export function showModeSelection(app) {
    app.hideAllScreens();
    document.getElementById('mode-selection').classList.remove('hidden');
    
    app.currentMode = 'selection';
    setupModeSelection(app);
}

function setupModeSelection(app) {
    // Do not select any option by default
    app.selectedOptionIndex = -1;
    
    const updateSelection = () => {
        const terminalOption = document.getElementById('terminal-option');
        const guiOption = document.getElementById('gui-option');
        
        if (terminalOption && guiOption) {
            terminalOption.classList.remove('selected');
            guiOption.classList.remove('selected');
        }
    };

    const selectMode = (mode) => {
        app.selectedMode = mode;
        
        // Check if this is the first visit
        const hasVisited = sessionStorage.getItem('hasVisited');
        
        if (!hasVisited) {
            // First visit - show hacker screen and mark as visited
            sessionStorage.setItem('hasVisited', 'true');
            app.showHackerScreen();
        } else {
            // Subsequent visits - go directly to selected mode
            app.proceedToSelectedMode();
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
    if (app.modeSelectionKeyHandler) {
        document.removeEventListener('keydown', app.modeSelectionKeyHandler);
    }

    // Restore number key (1 and 2) keyboard interaction for mode selection only
    app.modeSelectionKeyHandler = (e) => {
        if (app.currentMode !== 'selection') {
            document.removeEventListener('keydown', app.modeSelectionKeyHandler);
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
    document.addEventListener('keydown', app.modeSelectionKeyHandler);
    updateSelection();
}