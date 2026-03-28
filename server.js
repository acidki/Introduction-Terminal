const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 10000;

app.get('/', (req, res, next) => {
    const userAgent = req.headers['user-agent'] || '';
    
    if (userAgent.toLowerCase().includes('curl') || userAgent.toLowerCase().includes('wget')) {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        
        return res.send(`
\x1b[32m⣿⣿⣿⡅⡹⢿⠆⠙⠋⠉⠻⠿⣿⣿⣿       \x1b[31macid\x1b[0m@\x1b[31mGenesis\x1b[0m
\x1b[32m⣿⣶⠐⠁⠀⣀⣠⣤⠄⠀⠀⠈⠙⠻⣿⣿      -----------------------
\x1b[32m⡛⡩⠖⠀⣴⣿⣿⣿⠀⠀⠀⠀⠸⠇⠀⠙⢿     \x1b[31mUser\x1b[0m   > Sudipto Chakraborty Suvo
\x1b[32m⢻⣦⢀⣹⣿⣿⣿⣇⠀⠄⠀⠀⠀⡀⠀⠈⢻     \x1b[31mGit\x1b[0m     > github.com/acidki
\x1b[32m⣼⣄⢫⡌⣿⣿⣿⣿⣿⣦⡈⠲⣄⣤⣤⡡⢀⣠     \x1b[31mUni\x1b[0m    > Daffodil Intl University
\x1b[32m⣿⣦⠱⢻⣿⣿⣿⣿⣿⣿⣷⣬⣍⣭⣥⣾⣿⣿     \x1b[31mStatus\x1b[0m > Pursuing BSc in CSE
\x1b[32m⠻⣿⣷⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿     \x1b[31mHobby\x1b[0m  > Anime, Music, Movies
\x1b[32m⠃⣧⡹⣿⣷⡄⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿     \x1b[31mACHV\x1b[0m   > 8th @ DIU Prompt Battle
\x1b[32m⣜⢷⡌⠻⣿⣿⣦⣝⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿     \x1b[31mACHV\x1b[0m   > NASA Space Apps Participant
\x1b[32m⠛⢷⣜⢷⡌⠻⣿⣿⣦⣝⣻⣿⣿⣿⣿⣿⣿⣿     |
\x1b[32m⢷⣜⢷⡌⠻⣿⣿⣦⣝⣻⣿⣿⣿⣿⣿⣿⣿⣿     \x1b[33m[!] WEB VERSION:\x1b[0m
\x1b[32m⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿     \x1b[32mhttps://${req.headers.host}\x1b[0m
\x1b[32m⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿     \x1b[34m[████████░░░] 70% Progress\x1b[0m
\x1b[0m`);
    }
    next();
});

app.use(express.static(path.join(__dirname)));
app.get('/', (req, res) => { res.sendFile(path.join(__dirname, 'index.html')); });
app.listen(PORT, () => console.log(`Server live on port ${PORT}`));
