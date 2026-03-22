const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const userAgent = req.headers['user-agent'];

    if (userAgent.includes('curl')) {
        // This is what users see when they type 'curl your-site.com'
        res.send("\x1b[32m[ SUDIPTO CHAKRABORTY ]\x1b[0m\nFull Stack Developer & Linux Enthusiast\n\nTry: curl your-site.com/about\n");
    } else {
        // This serves the HTML website to browsers
        res.sendFile(__dirname + '/index.html');
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));