export const skills = (app) => {
    const { skills } = app.resumeData;
    
    const skillsText = `<div class="command-output">
        <h3 class="terminal-green">Technical Skills</h3>
        <div style="margin-top: 15px;">
            <h4 class="terminal-blue">Programming Languages:</h4>
            <p style="margin-left: 15px;">${skills.programmingLanguages.join(', ')}</p>
            
            <h4 class="terminal-blue" style="margin-top: 15px;">Web Development:</h4>
            <p style="margin-left: 15px;">${skills.webDevelopment.join(', ')}</p>
            
            <h4 class="terminal-blue" style="margin-top: 15px;">Databases:</h4>
            <p style="margin-left: 15px;">${skills.databases.join(', ')}</p>
            
            <h4 class="terminal-blue" style="margin-top: 15px;">Cloud Technologies:</h4>
            <p style="margin-left: 15px;">${skills.cloudTechnologies.join(', ')}</p>
            
            <h4 class="terminal-blue" style="margin-top: 15px;">Protocols:</h4>
            <p style="margin-left: 15px;">${skills.protocols.join(', ')}</p>
            
            <h4 class="terminal-blue" style="margin-top: 15px;">Tools:</h4>
            <p style="margin-left: 15px;">${skills.tools.join(', ')}</p>
        </div>
    </div>`;
    
    app.addToTerminal(skillsText);
};