const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 10000;

// Middleware to check for terminal access
app.get('/', (req, res, next) => {
    const userAgent = req.headers['user-agent'] || '';
    
    if (userAgent.toLowerCase().includes('curl') || userAgent.toLowerCase().includes('wget')) {
        res.setHeader('Content-Type', 'text/plain');
        // Neofetch style for terminal users
        return res.send(`
\x1b[31macid\x1b[0m@\x1b[31mGenesis\x1b[0m
-----------------------
\x1b[31mUser\x1b[0m   > Sudipto Chakraborty
\x1b[31mOS\x1b[0m     > Ubuntu 24.04 LTS (Genesis)
\x1b[31mStatus\x1b[0m > Online (Daffodil Intl University)
\x1b[31mGithub\x1b[0m > github.com/acidki

\x1b[33m[!] FOR THE FULL RETRO EXPERIENCE, VISIT:\x1b[0m
\x1b[32mhttps://${req.headers.host}\x1b[0m
`);
    }
    next();
});

// Serve the CRT website for browsers
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
