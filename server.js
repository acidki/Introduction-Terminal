const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 10000;

// 1. Detect Terminal Users (curl/wget)
app.get('/', (req, res, next) => {
    const userAgent = req.headers['user-agent'] || '';
    
    if (userAgent.toLowerCase().includes('curl') || userAgent.toLowerCase().includes('wget')) {
        res.setHeader('Content-Type', 'text/plain');
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

// 2. Serve static files (boot.mp3, script.js, etc.)
app.use(express.static(path.join(__dirname)));

// 3. Serve the CRT Browser Website
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
