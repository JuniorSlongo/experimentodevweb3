const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const queryParams = parsedUrl.query;

    if (req.method === 'GET') {
        if (pathname === '/') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Exemplo HTTP</title>
            </head>
            <body>
                <h1>Exemplo HTTP</h1>
                <h2>GET Request (Login)</h2>
                <label for="username">Username:</label>
                <input type="text" id="username" placeholder="Digite o nome de usuário"><br>
                <label for="password">Password:</label>
                <input type="password" id="password" placeholder="Digite a senha"><br>
                <button onclick="sendGetRequest()">Enviar Requisição GET (Login)</button>
                <div id="getResponse"></div>
            
                <h2>POST Request</h2>
                <input type="text" id="postData" placeholder="Digite o dado a ser enviado">
                <button onclick="sendPostRequest()">Enviar Requisição POST</button>
                <div id="postResponse"></div>
            
                <script>
                    function sendGetRequest() {
                        const username = document.getElementById('username').value;
                        const password = document.getElementById('password').value;
                        fetch('/login?username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password))
                            .then(response => response.text())
                            .then(data => {
                                document.getElementById('getResponse').innerText = data;
                            })
                            .catch(error => {
                                console.error('Erro:', error);
                            });
                    }
            
                    function sendPostRequest() {
                        const postData = document.getElementById('postData').value;
                        fetch('/submit', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded'
                            },
                            body: 'secret=' + encodeURIComponent(postData)
                        })
                        .then(response => response.text())
                        .then(data => {
                            document.getElementById('postResponse').innerText = data;
                        })
                        .catch(error => {
                            console.error('Erro:', error);
                        });
                    }
                </script>
            </body>
            </html>
            
            `);
        } else if (pathname === '/login') {
            const { username, password } = queryParams;
            if (username === 'admin' && password === 'password') {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('Login successful!');
            } else {
                res.writeHead(401, { 'Content-Type': 'text/plain' });
                res.end('Unauthorized');
            }
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not found');
        }
    } else if (req.method === 'POST') {
        if (pathname === '/submit') {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', () => {
                const postData = querystring.parse(body);
                if (postData.secret === 'mysecret') {
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end('Post successful!');
                } else {
                    res.writeHead(403, { 'Content-Type': 'text/plain' });
                    res.end('Forbidden');
                }
            });
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not found');
        }
    } else {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
