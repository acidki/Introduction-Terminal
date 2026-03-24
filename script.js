const input = document.getElementById('command-input');
const history = document.getElementById('history');

const commands = {
    help: "Available: about, projects, contact, clear",
    about: "Sudipto (Acid) | CS Student | Robotics & Game Dev enthusiast.",
    projects: "Godot Endless Runner, BMO Robot (Arduino/Pi), Terminal CV.",
    contact: "Email: sudipto@example.com | GitHub: @acidki",
};

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const cmd = input.value.toLowerCase().trim();
        const line = document.createElement('div');
        line.className = 'input-line';
        line.innerHTML = `<span>acid@Genesis:~$ ${cmd}</span>`;
        history.appendChild(line);

        if (cmd === 'clear') {
            history.innerHTML = '';
        } else if (commands[cmd]) {
            const output = document.createElement('div');
            output.style.margin = "5px 0 15px 0";
            output.innerText = commands[cmd];
            history.appendChild(output);
        } else if (cmd !== "") {
            const error = document.createElement('div');
            error.innerText = `Command not found: ${cmd}`;
            history.appendChild(error);
        }

        input.value = '';
        window.scrollTo(0, document.body.scrollHeight);
    }
});
