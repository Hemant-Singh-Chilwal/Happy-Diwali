// Array of base64 encoded sound effects
const soundEffects = {
    cracker1: 'data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAAFKADMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM//////////////////////////////////////////////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAAAAAAAAAAAAQXXxzfZAAAAAAD/+9DEAAAJcAF19BAAJkVHbj81kFHExE7E+mBkBAEAQBA5wcHB+D8EDgPwQBAEAQBAEP8H4Pg+D4IBAEP8H4Pg+CAIAgCAIf4Pg+D4IAgCH+D4IAgCAIAgCAIfg+D4IAgCAIA+D4Pg+CAIAgCAIAgD4IAgCAIAgCAIAgAAAAABBwcHB+SAIAgCAIAgCQAAAAABAEAQBAEAQBAEgAAAAf/h+D4Pg+D8EAQBAMQdgJACAIAgCMAgAAAEAQBAEAQBIAAAAEP/+D4Pg+CAIBAEP///B8HwQBAEAQiAEAgCAIAgCAIAgEAQBAEAQBAEAQCHBwcHBwcHBwcHBwcHBwcCgUCgUCgUCAQCAQCAQCAQEBAQEBAQEBAICAgICAgICAgICAgICAgICAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
    cracker2: 'data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAAFKADMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM//////////////////////////////////////////////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAAAAAAAAAAAAQXXxzfZAAAAAAD/+9DEAAAJcAF19BAAJkVHbj81kFHExE7E+mBkBAEAQBA5wcHB+D8EDgPwQBAEAQBAEP8H4Pg+D4IBAEP8H4Pg+CAIAgCAIf4Pg+D4IAgCH+D4IAgCAIAgCAIfg+D4IAgCAIA+D4Pg+CAIAgCAIAgD4IAgCAIAgCAIAgAAAAABBwcHB+SAIAgCAIAgCQAAAAABAEAQBAEAQBAEgAAAAf/h+D4Pg+D8EAQBAMQdgJACAIAgCMAgAAAEAQBAEAQBIAAAAEP/+D4Pg+CAIBAEP///B8HwQBAEAQiAEAgCAIAgCAIAgEAQBAEAQBAEAQCHBwcHBwcHBwcHBwcHBwcCgUCgUCgUCAQCAQCAQCAQEBAQEBAQEBAICAgICAgICAgICAgICAgICAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
    cracker3: 'data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAAFKADMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM//////////////////////////////////////////////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAAAAAAAAAAAAQXXxzfZAAAAAAD/+9DEAAAJcAF19BAAJkVHbj81kFHExE7E+mBkBAEAQBA5wcHB+D8EDgPwQBAEAQBAEP8H4Pg+D4IBAEP8H4Pg+CAIAgCAIf4Pg+D4IAgCH+D4IAgCAIAgCAIfg+D4IAgCAIA+D4Pg+CAIAgCAIAgD4IAgCAIAgCAIAgAAAAABBwcHB+SAIAgCAIAgCQAAAAABAEAQBAEAQBAEgAAAAf/h+D4Pg+D8EAQBAMQdgJACAIAgCMAgAAAEAQBAEAQBIAAAAEP/+D4Pg+CAIBAEP///B8HwQBAEAQiAEAgCAIAgCAIAgEAQBAEAQBAEAQCHBwcHBwcHBwcHBwcHBwcCgUCgUCgUCAQCAQCAQCAQEBAQEBAQEBAICAgICAgICAgICAgICAgICAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
};

// Create sparkles
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = Math.random() * window.innerWidth + 'px';
    sparkle.style.top = Math.random() * window.innerHeight + 'px';
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1500);
}

// Function to play random firecracker sound
function playFirecrackerSound() {
    const sounds = Object.values(soundEffects);
    const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
    const audio = new Audio(randomSound);
    audio.volume = 0.3; // Reduce volume to 30%
    
    // Add slight random delay for more realistic effect
    setTimeout(() => {
        audio.play().catch(err => console.log('Audio play failed:', err));
    }, Math.random() * 200);
}

// Create fireworks with sound
function createFirework() {
    const firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.left = Math.random() * window.innerWidth + 'px';
    firework.style.bottom = '0';
    firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    document.body.appendChild(firework);
    
    // Play sound when firework reaches peak
    setTimeout(() => {
        playFirecrackerSound();
    }, 1000);
    
    setTimeout(() => {
        firework.remove();
    }, 2000);
}

// Create multiple rangoli patterns
for (let i = 0; i < 3; i++) {
    const rangoli = document.createElement('div');
    rangoli.className = 'rangoli';
    rangoli.style.transform = `scale(${i + 1})`;
    document.querySelector('.container').appendChild(rangoli);
}

// Add mute/unmute button
const muteButton = document.createElement('button');
muteButton.innerHTML = '🔊';
muteButton.style.position = 'fixed';
muteButton.style.bottom = '20px';
muteButton.style.right = '20px';
muteButton.style.padding = '10px';
muteButton.style.fontSize = '24px';
muteButton.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
muteButton.style.border = 'none';
muteButton.style.borderRadius = '50%';
muteButton.style.cursor = 'pointer';
muteButton.style.zIndex = '1000';

let isMuted = false;
muteButton.addEventListener('click', () => {
    isMuted = !isMuted;
    muteButton.innerHTML = isMuted ? '🔇' : '🔊';
});

document.body.appendChild(muteButton);

// Start animations with optional sound
let isFirstInteraction = true;

// Function to start all effects
function startEffects() {
    if (isFirstInteraction) {
        // Start the continuous effects
        setInterval(createSparkle, 200);
        setInterval(createFirework, 1000);
        isFirstInteraction = false;
    }
}

// Add click listener to start effects
document.addEventListener('click', startEffects);
// Also start on any key press
document.addEventListener('keypress', startEffects);
