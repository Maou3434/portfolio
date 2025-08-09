export const history = (app) => {
    if (app.commandHistory.length === 0) {
        app.addToTerminal('<div class="command-output"><p class="terminal-dim">No commands in history</p></div>');
        return;
    }

    let historyText = `<div class="command-output">
        <h3 class="terminal-green">Command History</h3>
        <div style="margin-top: 15px;">`;
    
    app.commandHistory.forEach((cmd, index) => {
        historyText += `<p><span class="terminal-dim">${index + 1}.</span> ${cmd}</p>`;
    });
    
    historyText += `</div></div>`;
    
    app.addToTerminal(historyText);
};