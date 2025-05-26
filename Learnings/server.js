const http = require('http');
const server = http.createServer((req, res) => {
    res.end('Server running successfully!');
});
server.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
})