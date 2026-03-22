const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 10000;

// Serve static files from the 'introduction terminal' folder
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    const userAgent = req.headers['user-agent'] || '';

    if (userAgent.includes('curl')) {
        // ANSI Color Code \x1b[32m is Bright Green
        const banner = `
\x1b[32m ███████╗██╗   ██╗██████╗ ██╗██████╗ ████████╗ ██████╗ 
 ██╔════╝██║   ██║██╔══██╗██║██╔══██╗╚══██╔══╝██╔═══██╗
 ███████╗██║   ██║██║  ██║██║██████╔╝   ██║   ██║   ██║
 ╚════██║██║   ██║██║  ██║██║██╔═══╝    ██║   ██║   ██║
 ███████║╚██████╔╝██████╔╝██║██║        ██║   ╚██████╔╝
 ╚══════╝ ╚═════╝ ╚═════╝ ╚═╝╚═╝        ╚═╝    ╚═════╝ \x1b[0m
 
 DevOps | Software Engineering | Automation
 
 Type: \x1b[36mcurl [url]/help\x1b[0m to see more.
        `;
        return res.send(banner);
    }
    
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
