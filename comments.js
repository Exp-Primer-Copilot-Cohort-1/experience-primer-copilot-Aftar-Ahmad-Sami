const { createServer } = require('http');

// Create web server
const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello. I am Sami!');
});

server.listen(3000, 'localhost', () => {
    console.log('Server running at http://localhost:3000/');
});
