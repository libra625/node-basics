const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, its my first HTTP-server!');
});

server.listen(3000, () => {
    console.log('Сервер працює на порту 3000');
});
