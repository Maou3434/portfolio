export const experience = (app) => {
    const { experience } = app.resumeData;
    
    let experienceText = `<div class="command-output">
        <h3 class="terminal-green">Work Experience</h3>`;
    
    experience.forEach(exp => {
        experienceText += `
            <div style="margin-top: 20px; padding: 15px; border-left: 2px solid var(--terminal-purple);">
                <h4 class="terminal-purple">${exp.role}</h4>
                <p><span class="terminal-yellow">${exp.company}</span>, ${exp.location}</p>
                <p class="terminal-dim">${exp.period} | Status: ${exp.status}</p>
                <p style="margin-top: 10px; color: var(--terminal-text-dim);">${exp.description}</p>
                <div style="margin-top: 10px;">
                    <h5 class="terminal-green">Key Responsibilities:</h5>
                    ${exp.responsibilities.map(resp => 
                        `<p style="margin-left: 15px; margin: 5px 0;">• ${resp}</p>`
                    ).join('')}
                </div>
                <div style="margin-top: 10px;">
                    <h5 class="terminal-green">Technologies:</h5>
                    <p style="margin-left: 15px;">${exp.technologies.join(', ')}</p>
                </div>
            </div>`;
    });
    
    experienceText += `</div>`;
    
    app.addToTerminal(experienceText);
};