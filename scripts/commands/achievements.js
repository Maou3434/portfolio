export const achievements = (app) => {
    const { achievements, hobbies } = app.resumeData;
    
    const achievementsText = `<div class="command-output">
        <h3 class="terminal-green">Achievements & Awards</h3>
        <div style="margin-top: 15px;">
            ${achievements.map(achievement => 
                `<div style="margin: 15px 0; padding: 10px; background: rgba(0,255,0,0.05); border-radius: 5px;">
                    <p style="color: var(--terminal-yellow); font-weight: bold;">🏆 ${achievement}</p>
                </div>`
            ).join('')}
        </div>
        <div style="margin-top: 20px;">
            <h3 class="terminal-green">Hobbies & Interests</h3>
            <div style="margin-top: 15px;">
                ${hobbies.map(hobby => 
                    `<p style="margin: 10px 0; margin-left: 15px;">• ${hobby}</p>`
                ).join('')}
            </div>
        </div>
    </div>`;
    
    app.addToTerminal(achievementsText);
};