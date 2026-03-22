const input = document.getElementById('command-input');
const history = document.getElementById('history');

const commands = {
    help: "Available commands: [about, projects, experience, contact, clear]",
    about: "I am Sudipto, a Computer Science student interested in Linux and Robotics.",
    projects: "1. 2D Endless Runner (Godot)\n2. BMO Robot (Raspberry Pi)\n3. Custom Linux Configs",
    experience: "Student at Daffodil International University | Open Source Contributor",
    contact: "Find me on GitHub: @yourusername",
};

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const cmd = input.value.toLowerCase().trim();
        processCommand(cmd);
        input.value = '';
    }
});

function processCommand(cmd) {
    const line = document.createElement('div');
    line.innerHTML = `<span>root@portfolio:~$ ${cmd}</span>`;
    history.appendChild(line);

    const result = document.createElement('div');
    result.className = 'output';

    if (cmd === 'clear') {
        history.innerHTML = '';
        return;
    }

    result.innerText = commands[cmd] || `Command not found: ${cmd}. Type 'help' for options.`;
    history.appendChild(result);
    window.scrollTo(0, document.body.scrollHeight);
}