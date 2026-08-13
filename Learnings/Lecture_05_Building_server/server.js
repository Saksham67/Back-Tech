import http from 'http'

const server = http.createServer((req, res) =>{
    res.end("why are you crying? Server is running now!");
});
const port = 1000;
server.listen(port, ()=>{
    console.log(`server started on: http://localhost:${port}`);
})
