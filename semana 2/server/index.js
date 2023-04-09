const fs = require('fs');
const http = require('http');
const PORT = 8080;

function handleRequest(req, res) {
  if (req.method === 'GET' && req.url === '/') {
    fs.readFile('index.html', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.statusCode = 500;
        res.end('Erro interno do servidor');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      }
    });
  }else{
    fs.readFile('404.html', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.statusCode = 500;
        res.end('Erro interno do servidor');
      } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      }
    });
  }
}

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

