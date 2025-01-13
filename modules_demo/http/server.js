const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('hello, Node.js!');
});

server.listen(3000, () => {
    console.log('Сервер працює на порту 3000');
});
