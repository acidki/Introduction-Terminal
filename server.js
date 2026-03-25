const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 10000;

app.get('/', (req, res, next) => {
    const userAgent = req.headers['user-agent'] || '';
    if (userAgent.toLowerCase().includes('curl') || userAgent.toLowerCase().includes('wget')) {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        return res.send(`
Sudipto Chakraborty (Acid)
DevOps | Software Engineering | Automation
------------------------------------------
Available commands:
- help        - about       - skills
- projects    - contact     - experience
- education   - languages   - clear
- reload

[ Web Version: https://${req.headers.host} ]
`);
    }
    next();
});

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => console.log(`Server live on ${PORT}`));
