export const projects = (app) => {
    const { projects } = app.resumeData;
    
    let projectsText = `<div class="command-output">
        <h3 class="terminal-green">Projects</h3>`;
    
    projects.forEach((project, index) => {
        projectsText += `
            <div style="margin-top: 20px; padding: 15px; border-left: 2px solid var(--terminal-yellow);">
                <h4 class="terminal-yellow">${project.name}</h4>
                <p class="terminal-dim">${project.description}</p>
                <p style="margin-top: 10px;"><span class="terminal-blue">Category:</span> ${project.category}</p>
                <p><span class="terminal-blue">Technologies:</span> ${project.technologies.join(', ')}</p>
                <div style="margin-top: 10px;">
                    <h5 class="terminal-green">Project Details:</h5>
                    ${project.details.map(detail => 
                        `<p style="margin-left: 15px; margin: 5px 0;">• ${detail}</p>`
                    ).join('')}
                </div>
            </div>`;
    });
    
    projectsText += `</div>`;
    
    app.addToTerminal(projectsText);
};