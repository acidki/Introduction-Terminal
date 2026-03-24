const input = document.getElementById('command-input');
const history = document.getElementById('history');

const commands = {
    help: "Available: about, projects, contact, clear",
    about: "Sudipto | Computer Science Student at DIU | Linux Enthusiast.",
    projects: "Godot Endless Runner, BMO Robot, Linux Customizations.",
    contact: "GitHub: @acidki",
};

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
        }
        
        input.value = '';
        window.scrollTo(0, document.body.scrollHeight);
    }
});
