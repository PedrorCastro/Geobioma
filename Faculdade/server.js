const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');

const port = process.env.PORT || 3000;
const host = '0.0.0.0';
const publicDir = path.join(__dirname);

function getLocalAddresses() {
  const interfaces = os.networkInterfaces();
  const addresses = [];

  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        addresses.push(iface.address);
      }
    }
  }

  return addresses;
}

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.geojson': 'application/geo+json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8'
};

function getContentType(filePath) {
  return mimeTypes[path.extname(filePath).toLowerCase()] || 'application/octet-stream';
}

function sendResponse(res, statusCode, data, contentType) {
  res.writeHead(statusCode, { 'Content-Type': contentType });
  res.end(data);
}

function serveStaticFile(req, res) {
  const safeUrl = req.url.split('?')[0].replace(/^(\/)+/, '');
  let filePath = path.join(publicDir, safeUrl || 'index.html');

  if (filePath.endsWith(path.sep) || req.url.endsWith('/')) {
    filePath = path.join(filePath, 'index.html');
  }

  if (!filePath.startsWith(publicDir)) {
    return sendResponse(res, 403, 'Acesso negado', 'text/plain; charset=utf-8');
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      return sendResponse(res, 404, 'Arquivo não encontrado', 'text/plain; charset=utf-8');
    }

    fs.readFile(filePath, (readErr, data) => {
      if (readErr) {
        return sendResponse(res, 500, 'Erro interno do servidor', 'text/plain; charset=utf-8');
      }

      sendResponse(res, 200, data, getContentType(filePath));
    });
  });
}

const server = http.createServer((req, res) => {
  console.log(`${new Date().toISOString()} - ${req.socket.remoteAddress} ${req.method} ${req.url}`);
  serveStaticFile(req, res);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Erro: a porta ${port} já está em uso. Escolha outra porta usando a variável de ambiente PORT ou finalize o processo que está usando a porta.`);
  } else {
    console.error('Erro do servidor:', err);
  }
  process.exit(1);
});

server.listen(port, host, () => {
  console.log(`Servidor estático iniciado em http://localhost:${port}`);
  const localIPs = getLocalAddresses();

  if (localIPs.length > 0) {
    console.log('Acesse a partir de outro dispositivo na mesma rede local usando um destes endereços:');
    localIPs.forEach((ip) => console.log(`  http://${ip}:${port}`));
  } else {
    console.log('Acesse a partir de outro dispositivo na mesma rede local usando o IP desta máquina.');
  }
});
