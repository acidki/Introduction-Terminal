app.get('/', (req, res, next) => {
    const userAgent = req.headers['user-agent'] || '';
    if (userAgent.toLowerCase().includes('curl')) {
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
