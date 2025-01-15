const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Main</h1>');
    } else if (req.url === '/json') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: 'Hello, JSON!'}));
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Page is not found');
    }
});

server.listen(3000, () => {
    console.log('Сервер працює на порту 3000');
});
