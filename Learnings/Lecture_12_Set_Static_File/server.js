import express from 'express'
import path from 'path'
const app = express();
const port = 1000;

app.use(express.static(path.join(path.resolve(), 'public')));

app.get('/',(req,res) =>{
    let name = "EW"
    res.render('index.ejs',{name});
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
    

})