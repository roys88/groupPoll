const http  = require('http');

const app = require('./app');
//listen to port 3030
const port = process.env.PORT || 3030;

const server = http.createServer(app);

server.listen(port);