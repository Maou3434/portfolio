export function startBootSequence(app) {
    app.hideAllScreens();
    document.getElementById('boot-sequence').classList.remove('hidden');
    
    const bootMessages = document.getElementById('boot-messages');
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');

    // Clear any existing boot messages
    bootMessages.innerHTML = '';

    let messageIndex = 0;

    const addBootMessage = (message, index) => {
        setTimeout(() => {
            const messageDiv = document.createElement('div');
            messageDiv.className = `boot-message ${message.type}`;
            messageDiv.textContent = message.text;
            bootMessages.appendChild(messageDiv);
            
            // Update progress
            const progress = Math.round(((index + 1) / app.bootMessages.length) * 100);
            progressFill.style.width = progress + '%';
            progressText.textContent = progress + '%';
            
            // Scroll to bottom
            bootMessages.scrollTop = bootMessages.scrollHeight;
            
            // If last message, proceed to mode selection
            if (index === app.bootMessages.length - 1) {
                setTimeout(() => {
                    app.showModeSelection();
                }, 1000);
            }
        }, index * 400 + message.delay);
    };

    // Add all boot messages with delays
    app.bootMessages.forEach((message, index) => {
        addBootMessage(message, index);
    });
}