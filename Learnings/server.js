const http = require('http');
const server = http.createserver((req, res) => {
    res.end('Server running successfully!');
})