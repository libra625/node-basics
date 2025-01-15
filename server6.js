const http = require('http'); // Імпортуємо вбудований модуль HTTP

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Main page');
    } else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('About page');
    } else if (req.url === '/contact') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Contacts');
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Page is not found');
    }
});

server.listen(3000, () => {
    console.log('Сервер працює на порту 3000');
});
