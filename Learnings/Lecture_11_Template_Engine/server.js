import express from 'express'
const app = express();
const port = 1000;

const products = [
    {title: "Galaxy s24", price: 100000},
    {title: "OnePlus", price: 45000},
    {title: "Nothing", price: 35000}
]
app.get('/',(req,res) =>{
    let name = "EW"
    res.render('index.ejs',{name, products});
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
    
})