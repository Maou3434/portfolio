export const about = (app) => {
    const { personalInfo } = app.resumeData;
    
    const aboutText = `<div class="command-output">
        <h3 class="terminal-green">Personal Information</h3>
        <div style="margin-top: 15px;">
            <p><span class="terminal-blue">Name:</span> ${personalInfo.name}</p>
            <p><span class="terminal-blue">Role:</span> ${personalInfo.role}</p>
            <p><span class="terminal-blue">Location:</span> ${personalInfo.location}</p>
            <p><span class="terminal-blue">Email:</span> <a href="mailto:${personalInfo.email}" class="terminal-green">${personalInfo.email}</a></p>
            <p><span class="terminal-blue">Phone:</span> ${personalInfo.phone}</p>
        </div>
        <div style="margin-top: 20px;">
            <h4 class="terminal-yellow">Bio:</h4>
            <p style="margin-top: 10px; color: var(--terminal-text-dim);">${personalInfo.bio}</p>
        </div>
        <div style="margin-top: 20px;">
            <h4 class="terminal-yellow">Language Proficiency:</h4>
            ${Object.entries(app.resumeData.languageProficiency).map(([lang, level]) => 
                `<p style="margin-left: 15px;"><span class="terminal-blue">${lang}:</span> ${level}</p>`
            ).join('')}
        </div>
    </div>`;
    
    app.addToTerminal(aboutText);
};