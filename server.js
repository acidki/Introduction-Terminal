const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 10000;

app.get('/', (req, res, next) => {
    const userAgent = req.headers['user-agent'] || '';
    
    // Check for curl first
    if (userAgent.toLowerCase().includes('curl')) {
        res.setHeader('Content-Type', 'text/plain');
        return res.send(`
SUDIPTO | DevOps & Software Engineering
---------------------------------------
User    > Sudipto Chakraborty
Status  > Online (Genesis)
Github  > github.com/acidki
        `);
    }
    next();
});

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => console.log(`Server live on ${PORT}`));
