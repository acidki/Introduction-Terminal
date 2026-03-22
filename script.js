const input = document.getElementById('command-input');
const history = document.getElementById('history');

const commands = {
    help: "AVAILABLE COMMANDS:\n- about\n- projects\n- experience\n- education\n- contact\n- clear",
    about: "I am Sudipto, a CS student at DIU focused on Linux, Robotics, and Godot.",
    projects: "Current focus: BMO Robot (Pi) & 2D Endless Runner (Godot).",
    experience: "Building custom Linux environments and researching CS topics.",
    education: "Daffodil International University (DIU)",
    contact: "GitHub: @acidki",
};

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const cmd = input.value.toLowerCase().trim();
        processCommand(cmd);
        input.value = '';
    }
});

function processCommand(cmd) {
    if (cmd === '') return;

    const line = document.createElement('div');
    line.innerHTML = `<span>root > ${cmd}</span>`;
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
