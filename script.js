const input = document.getElementById('command-input');
const history = document.getElementById('history');
const welcomeMsg = document.getElementById('welcome-msg');

const commands = {
    help: "Available: about, skills, projects, contact, experience, education, achievements, hobbies, languages, clear, reload",
    
    about: `[ 👤 BIOGRAPHY ]
Name: Sudipto Chakraborty Suvo (Acid)
Status: CSE Student at DIU 
Goal: not sure! .`,
    
    skills: `[ 🛠️ TECHNICAL STACK ]
Languages: C, JavaScript, Python, Godot Script
Tools: Linux (Ubuntu/Arch), Git, Arduino, Raspberry Pi`,
    
    projects: `[ 🚀 WORKS ]
1. 2D Endless Runner Game
2. Desk bot
3. Terminal CV`,
    
    achievements: `[🏆 HALL OF FAME ]
1. 8th Place - DIU Prompt Battle (Daffodil International University)
2. Participant - NASA Space Apps Challenge 2024`,

    hobbies: `[ 🎭 INTERESTS ]
- Watching Anime
- Listening to Music
- Watching Movies`,

   contact: `[ 📧 REACH ME ]
Email: sudiptochakrabortysuvo@gmail.com
GitHub: github.com/acidki
LinkedIn: linkedin.com/in/sudipto-chakraborty-suvo`,
    
   experience: `[ 💼 ACTIVITIES ]
- Section 70_G Football Team Organizer
- Iftar Party Event Management`,
    
   education: `[ 🎓 ACADEMICS ]
UNIVERSITY: Daffodil International University | Degree: Bachelor of Science | Subject: Computer Science & Engineering
COLLEGE: Govt. Rupnagar Model School & College | Degree: HSC | Subject: Science`,
    
    languages: `[ 🌐 LANGUAGES ]
- English (Professional)
- Bengali (Native)
- Hindi (Can speak only)
- Japanese (Learning)`
};

// --- Typewriter Function ---
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

// --- Audio & Initialization ---
let initialized = false;
const initSite = () => {
    if (initialized) return;
    initialized = true;
    new Audio('boot.mp3').play().catch(() => {});
    typewriter(welcomeMsg, "System initialized... Type 'help' to begin.");
};

document.addEventListener('click', initSite, { once: true });
document.addEventListener('keydown', initSite, { once: true });

// --- Command Execution ---
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
            err.innerText = `Command not found: ${cmd}. Type 'help' for options.`;
            history.appendChild(err);
        }
        
        input.value = '';
        window.scrollTo(0, document.body.scrollHeight);
    }
});
