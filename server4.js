const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const query = parsedUrl.query;

    if (req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(`You passed the parameters: ${JSON.stringify(query)}`);
    }
});

server.listen(3000, () => {
    console.log('Сервер працює на порту 3000');
});
