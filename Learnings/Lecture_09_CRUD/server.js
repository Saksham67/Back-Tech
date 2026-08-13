import express from "express";

const app = express();
const port = 1000;
app.get('/', (req,res)=>{
    res.send("Express server is running!")
})
app.listen(port, () =>{
    console.log(`Server is running on http://localhost:${port}`);
    
})

//C = Create => POST(method)
//R = Read => GET(method)
//U = Update => PUT(method)
//D = Delete => DELETE(method)
