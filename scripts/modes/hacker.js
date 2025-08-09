export function showHackerScreen(app) {
    app.hideAllScreens();
    document.getElementById('hacker-screen').classList.remove('hidden');
    
    app.currentMode = 'hacker';
    startMatrixEffect();
    startHackerSequence(app);
}

function startMatrixEffect() {
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");
    
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    
    const drops = [];
    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }
    
    const draw = () => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff00';
        ctx.font = fontSize + 'px JetBrains Mono';
        
        for (let i = 0; i < drops.length; i++) {
            const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            
            drops[i]++;
        }
    };
    
    const matrixInterval = setInterval(draw, 35);
    
    // Stop matrix effect after hacker sequence
    setTimeout(() => {
        clearInterval(matrixInterval);
    }, 3000);
}

function startHackerSequence(app) {
    const hackerMessage = document.getElementById('hacker-message');
    const accessGranted = document.getElementById('access-granted');
    
    // Reset elements
    hackerMessage.style.display = 'block';
    accessGranted.classList.add('hidden');
    
    const messages = [
        "ACCESSING PORTFOLIO SYSTEM...",
        "BYPASSING SECURITY PROTOCOLS...", 
        "DECRYPTING USER DATA...",
        "LOADING INTERFACE..."
    ];
    
    let messageIndex = 0;
    
    const updateMessage = () => {
        if (messageIndex < messages.length) {
            hackerMessage.textContent = messages[messageIndex];
            messageIndex++;
            setTimeout(updateMessage, 600);
        } else {
            setTimeout(() => {
                hackerMessage.style.display = 'none';
                accessGranted.classList.remove('hidden');
                
                setTimeout(() => {
                    app.proceedToSelectedMode();
                }, 800);
            }, 300);
        }
    };
    
    setTimeout(updateMessage, 500);
}