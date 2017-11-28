const request = require('request');
const http = require('http');

const serverUrl = 'http://localhost';
const port = 4000;
const baseUrl = `${serverUrl}:${port}`;

//emulate server
let app = require('../app');
app.set('port', port);
let server = http.createServer(app);
server.listen(port);