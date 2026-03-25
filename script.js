const commands = {
    help: `Available commands:
- about: About me
- skills: My technical skills
- projects: List of my projects
- contact: Contact information
- experience: My work experience
- education: My educational background
- languages: Languages I speak
- clear: Clear the terminal
- reload: Reload the terminal`,

    about: "Sudipto (Acid) | CS Student at DIU | Linux Enthusiast. Currently building an interactive BMO robot.",
    
    skills: "Programming: C, JavaScript, Godot Script. Tools: Linux (Ubuntu/Arch), Git, Arduino, Raspberry Pi.",
    
    projects: "1. Godot 2D Endless Runner (Mobile)\n2. BMO Robot (Interactive Hardware)\n3. Terminal CV (Node.js/Express)",
    
    contact: "GitHub: github.com/acidki | Email: [Your Email Here]",
    
    experience: "Section 70_G Football Team Organizer | Iftar Party Event Management | Open Source Contributor.",
    
    education: `[ UNIVERSITY ]
University : Daffodil International University (DIU)
Degree     : Bachelor of Science
Subject    : Computer Science & Engineering

[ COLLEGE ]
College    : Govt. Rupnagar Model School & College
Degree     : HSC
Subject    : Science`,
    
    languages: "English (Professional), Bengali (Native), [Any others?].",
};

// --- Execution Logic ---
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
            // Use innerHTML and <br> or \n for the education block
            out.innerText = commands[cmd]; 
            history.appendChild(out);
        } else if (cmd !== "") {
            const err = document.createElement('div');
            err.innerText = `Command not found: ${cmd}. Type 'help' for options.`;
            history.appendChild(err);
        }
        
        input.value = '';
        window.scrollTo(0, document.body.scrollHeight);
    }
});
