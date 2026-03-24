// Function to handle the boot sound
const playBootSound = () => {
    const audio = new Audio('boot.mp3'); // Ensure file is named boot.mp3 on GitHub
    audio.volume = 0.3;
    audio.play().catch(e => console.log("Audio play blocked until interaction."));
};

// Trigger sound on first click
document.addEventListener('click', playBootSound, { once: true });

// Trigger sound on first keypress (if they start typing immediately)
document.addEventListener('keydown', playBootSound, { once: true });
