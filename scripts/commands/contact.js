export const contact = (app) => {
    const { personalInfo } = app.resumeData;
    
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
    
    app.addToTerminal(contactText);
};