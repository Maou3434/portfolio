export const help = (app) => {
    let helpText = `<div class="command-output">
        <h3 class="terminal-green">Available Commands:</h3>
        <div style="margin-top: 15px;">`;
    
    for (const [command, obj] of Object.entries(app.commands)) {
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
    
    app.addToTerminal(helpText);
};