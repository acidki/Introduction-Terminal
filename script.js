const input = document.getElementById('command-input');
const history = document.getElementById('history');
const welcomeMsg = document.getElementById('welcome-msg');

const commands = {
    help: "Available: about, projects, education, hobbies, contact, clear",
    about: "Sudipto (Acid) | CS Student at DIU | Linux Enthusiast. Building a BMO robot.",
    projects: "Godot 2D Endless Runner, BMO Robot (Arduino/Pi), Terminal CV.",
    education: "B.Sc. in CSE @ Daffodil International University | HSC @ Govt Rupnagar Model School & College.",
    hobbies: "Watching Anime, Listening to Music, Watching Movies.",
    contact: "GitHub: @acidki | Email: sudipto@example.com",
};

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
