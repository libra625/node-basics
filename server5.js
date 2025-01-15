const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        req.on('end', () => {
            let data = JSON.parse(body);
            const queryString = Object.keys(data).map(key => `${key}=${data[key]}`).join('&');
            //console.log(queryString);
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(`Data obtained: ${queryString}`);
        });
    }
});

server.listen(3000, () => {
    console.log('Сервер працює на порту 3000');
});
