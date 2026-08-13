import http from 'http'

const server = http.createServer((req, res) =>{
    console.log(req.url);
    
    if(req.url === '/home'){

        res.end("you're at home page");
    }
    else if(req.url === '/about'){

        res.end("you're at about page");
    }
    else {
        res.end("server running");
    }
})
const port = 3000;
server.listen(port,() =>{
    console.log(`Server is running here: http://localhost:${port}`);
    
})