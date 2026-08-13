import { log } from "console";
import express from "express"
import path from 'path'
const app = express();

const products = [
  { title: "Samsung", price: 125000 },
  { title: "Google pixel", price: 85000 },
  { title: "iphone", price: 125000 },
];

//send response in json, html and html file

const dir = path.resolve();
// console.log(dir);

const url = path.join(dir,'./index.html')
// console.log(url);

app.get("/", (req, res) => {
    //res.json({ message: "product fetched", products: products, success: true });
    // res.send('<h1>This is html content</h1>');

    res.sendFile(url)

});

const port = 2000;
app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
