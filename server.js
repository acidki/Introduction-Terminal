const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 10000;

// 1. Check for curl BEFORE serving static files
app.get('/', (req, res, next) => {
    const userAgent = req.headers['user-agent'] || '';
    
    if (userAgent.toLowerCase().includes('curl')) {
        res.setHeader('Content-Type', 'text/plain');
        return res.send(`
\x1b[31macid\x1b[0m@\x1b[31mGenesis\x1b[0m
-----------------------
\x1b[31mUser\x1b[0m   > Sudipto Chakraborty
\x1b[31mOS\x1b[0m     > Ubuntu 24.04 LTS (Genesis)
\x1b[31mKernel\x1b[0m > Linux 6.17.0-generic
\x1b[31mShell\x1b[0m  > zsh / bash
\x1b[31mGithub\x1b[0m > github.com/acidki
\x1b[31mStatus\x1b[0m > Online (Daffodil Intl University)

\x1b[32m[ Website: https://${req.headers.host} ]\x1b[0m
`);
    }
    // If not curl, move to the next part (serving the website)
    next();
});

// 2. Serve the browser files
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
