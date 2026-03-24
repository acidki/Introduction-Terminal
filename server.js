const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 10000;

// Serve static files (like script.js)
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    const userAgent = req.headers['user-agent'] || '';

    // 1. IF IT'S A TERMINAL (curl, wget, etc.)
    if (userAgent.toLowerCase().includes('curl') || userAgent.toLowerCase().includes('wget')) {
        const terminalBanner = `
\x1b[32m
 ███████╗██╗   ██╗██████╗ ██╗██████╗ ████████╗ ██████╗ 
 ██╔════╝██║   ██║██╔══██╗██║██╔══██╗╚══██╔══╝██╔═══██╗
 ███████╗██║   ██║██║  ██║██║██████╔╝   ██║   ██║   ██║
 ╚════██║██║   ██║██║  ██║██║██╔═══╝    ██║   ██║   ██║
 ███████║╚██████╔╝██████╔╝██║██║        ██║   ╚██████╔╝
 ╚══════╝ ╚═════╝ ╚═════╝ ╚═╝╚═╝        ╚═╝    ╚═════╝ 
\x1b[0m
 DevOps | Software Engineering | Automation

 Hello Sudipto! Your terminal-accessible CV is live.
 Type: \x1b[36mcurl ${req.headers.host}/help\x1b[0m for more.
        `;
        return res.send(terminalBanner);
    }
    
    // 2. IF IT'S A BROWSER (Chrome, Firefox, etc.)
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/help', (req, res) => {
    res.send("Try these: /projects, /contact, /about");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
