const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 10000;

// Data for both Browser and Terminal
const data = {
    about: "Sudipto (Acid) | CS Student at DIU | Linux Enthusiast. Building a BMO robot.",
    skills: "Programming: C, JavaScript, Godot Script. Tools: Linux, Git, Arduino.",
    projects: "1. Godot Runner 2. BMO Robot 3. Terminal CV",
    education: "B.Sc in CSE @ Daffodil Intl University | HSC @ Govt. Rupnagar Model",
    languages: "English (Professional), Bengali (Native)",
    experience: "Football Team Organizer | Event Management."
};

// Handle CURL requests for specific commands (e.g., /about, /skills)
app.get('/:cmd', (req, res, next) => {
    const userAgent = req.headers['user-agent'] || '';
    const cmd = req.params.cmd.toLowerCase();
    
    if (userAgent.toLowerCase().includes('curl') && data[cmd]) {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        return res.send(`\n[ ${cmd.toUpperCase()} ]\n${data[cmd]}\n`);
    }
    next();
});

// Original logic for the main page
app.get('/', (req, res, next) => {
    const userAgent = req.headers['user-agent'] || '';
    if (userAgent.toLowerCase().includes('curl')) {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        return res.send(`\nSudipto Chakraborty (Acid)\nAvailable: help, about, skills, projects, education, languages, experience\nTry: curl ${req.headers.host}/about\n`);
    }
    next();
});

app.use(express.static(path.join(__dirname)));
app.get('/', (req, res) => { res.sendFile(path.join(__dirname, 'index.html')); });
app.listen(PORT, () => console.log(`Server live on ${PORT}`));
