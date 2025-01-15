const http = require('http');

const server = http.createServer((req, res) => {
    console.log(`Метод: ${req.method}, URL: ${req.url}`);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Look in the console');
});

server.listen(3000, () => {
    console.log('Сервер працює на порту 3000');
});
