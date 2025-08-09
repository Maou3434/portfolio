export const education = (app) => {
    const { education } = app.resumeData;
    
    let educationText = `<div class="command-output">
        <h3 class="terminal-green">Education</h3>`;
    
    education.forEach(edu => {
        educationText += `
            <div style="margin-top: 20px; padding: 15px; border-left: 2px solid var(--terminal-blue);">
                <h4 class="terminal-blue">${edu.degree}</h4>
                <p><span class="terminal-yellow">${edu.field}</span></p>
                <p><span class="terminal-yellow">${edu.institution}</span></p>
                <p class="terminal-dim">${edu.period} | Status: ${edu.status}</p>
            </div>`;
    });
    
    educationText += `</div>`;
    
    app.addToTerminal(educationText);
};