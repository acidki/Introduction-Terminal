const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 10000;

// This line tells Express to serve files like script.js and index.html automatically
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    const userAgent = req.headers['user-agent'] || '';

    // If it's a terminal using curl
    if (userAgent.includes('curl')) {
        const banner = `
\x1b[32m ███████╗██╗   ██╗██████╗ ██╗██████╗ ████████╗ ██████╗ 
 ██╔════╝██║   ██║██╔══██╗██║██╔══██╗╚══██╔══╝██╔═══██╗
 ███████╗██║   ██║██║  ██║██║██████╔╝   ██║   ██║   ██║
 ╚════██║██║   ██║██║  ██║██║██╔═══╝    ██║   ██║   ██║
 ███████║╚██████╔╝██████╔╝██║██║        ██║   ╚██████╔╝
 ╚══════╝ ╚═════╝ ╚═════╝ ╚═╝╚═╝        ╚═╝    ╚═════╝ \x1b[0m
 
 DevOps | Software Engineering | Automation
 
 Type: \x1b[36mcurl ${req.headers.host}/help\x1b[0m to see more.
        `;
        return res.send(banner);
    }
    
    // FORCE the browser to treat this as HTML
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Adding a /help route for curl users
app.get('/help', (req, res) => {
    res.send("Available Commands: about, projects, contact\nExample: curl " + req.headers.host + "/projects");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
