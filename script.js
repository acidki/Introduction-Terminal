const input = document.getElementById('command-input');
const history = document.getElementById('history');
const welcomeMsg = document.getElementById('welcome-msg');

const commands = {
    help: "Available: about, projects, contact, clear",
    about: "Sudipto (Acid) | CS Student at DIU | Linux Enthusiast.",
    projects: " Endless Runner Game, BMO Robot, Linux Customizations.",
    contact: "GitHub: acidki | Email: sudiptochakrabortysuvo@gmail.com",
};

// --- Typewriter Function ---
function typewriter(element, text, speed = 40) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// --- Audio & Init Logic ---
let initialized = false;
const initSite = () => {
    if (initialized) return;
    initialized = true;

    // Play Boot Sound (Ensure boot.mp3 is on GitHub)
    const audio = new Audio('boot.mp3');
    audio.volume = 0.4;
    audio.play().catch(() => console.log("Audio blocked."));

    // Start Typewriter
    typewriter(welcomeMsg, "Hello There... Type 'help' to see available commands.");
};

// Trigger on first click or keypress
document.addEventListener('click', initSite, { once: true });
document.addEventListener('keydown', initSite, { once: true });

// --- Command Logic ---
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const cmd = input.value.toLowerCase().trim();
        const line = document.createElement('div');
        line.innerHTML = `<span>root > ${cmd}</span>`;
        history.appendChild(line);

        if (cmd === 'clear') {
            history.innerHTML = '';
        } else if (commands[cmd]) {
            const out = document.createElement('div');
            out.className = 'output';
            out.innerText = commands[cmd];
            history.appendChild(out);
        } else if (cmd !== "") {
            const err = document.createElement('div');
            err.innerText = `Command not found: ${cmd}`;
            history.appendChild(err);
        }
        
        input.value = '';
        window.scrollTo(0, document.body.scrollHeight);
    }
});
