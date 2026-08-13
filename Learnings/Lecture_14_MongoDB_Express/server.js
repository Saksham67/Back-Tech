import express from 'express';
import mongoose from 'mongoose';


const app = express();
mongoose.connect("mongodb+srv://ys8048885_db_user:s6WnWw5xj8ovhn8F@cluster0.j6l6ecd.mongodb.net/",
    {
        dbName: "nodeJs"
    }
).then(()=> console.log("mongoDB Connected...!")).catch((err)=>console.log(err));
app.get('/',(req,res) =>{
    res.send("here you're!")
})
const port = 2000;
app.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`);
    
    
})