const input = document.getElementById('command-input');
const history = document.getElementById('history');
const welcomeMsg = document.getElementById('welcome-msg');

const commands = {
    help: "Available: about, skills, projects, contact, experience, education, languages, clear, reload",
    about: "Sudipto (Acid) | CS Student at DIU | Linux Enthusiast. Currently building an interactive BMO robot.",
    skills: "Programming: C, JavaScript, Godot Script. Tools: Linux (Ubuntu/Arch), Git, Arduino, Raspberry Pi.",
    projects: "1. Godot 2D Endless Runner\n2. BMO Robot (Hardware)\n3. Terminal CV (Node.js)",
    contact: "GitHub: github.com/acidki | Email: sudipto@example.com",
    experience: "Section 70_G Football Team Organizer | Iftar Party Event Management.",
    education: "UNIVERSITY: Daffodil International University | Degree: Bachelor of Science | Subject: Computer Science & Engineering\n\nCOLLEGE: Govt. Rupnagar Model School & College | Degree: HSC | Subject: Science",
    languages: "English (Professional), Bengali (Native).",
};

function typewriter(element, text, speed = 40) {
    let i = 0;
    element.innerHTML = "";
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

let initialized = false;
const initSite = () => {
    if (initialized) return;
    initialized = true;
    new Audio('boot.mp3').play().catch(() => {});
    typewriter(welcomeMsg, "System initialized... Type 'help' to begin.");
};

document.addEventListener('click', initSite, { once: true });
document.addEventListener('keydown', initSite, { once: true });

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const cmd = input.value.toLowerCase().trim();
        const line = document.createElement('div');
        line.innerHTML = `<span>root > ${cmd}</span>`;
        history.appendChild(line);

        if (cmd === 'clear') {
            history.innerHTML = '';
        } else if (cmd === 'reload') {
            location.reload();
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
