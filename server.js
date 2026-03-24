const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 10000;

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    const userAgent = req.headers['user-agent'] || '';

    if (userAgent.toLowerCase().includes('curl')) {
        // This is the Plain Text version for your Linux Terminal
        return res.send(`
\x1b[31macid\x1b[0m@\x1b[31mGenesis\x1b[0m
-----------------------
\x1b[31mUser\x1b[0m   > Sudipto Chakraborty
\x1b[31mOS\x1b[0m     > Ubuntu 24.04 LTS
\x1b[31mGithub\x1b[0m > github.com/acidki
\x1b[31mStatus\x1b[0m > Online (DIU)

Try: curl ${req.headers.host}/help
`);
    }
    
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => console.log(`Server live on port ${PORT}`));
