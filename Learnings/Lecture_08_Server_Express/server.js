import express from 'express'

const app = express();
const port = 3000;

//Routing
app.get('/', (req,res) =>{
    res.send('Hello! Express server is running')
})
app.get('/about', (req,res) =>{
    res.send('You\'re at about page' )
})
app.listen(port,() => console.log(`Server is running on http://localhost:${port}`))