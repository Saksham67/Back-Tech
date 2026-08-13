import express from "express";
import mongoose from "mongoose";
import { User } from "./Models/User.js";
const app = express();
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://ys8048885_db_user:s6WnWw5xj8ovhn8F@cluster0.j6l6ecd.mongodb.net/",
    {
      dbName: "Nodejs_Form_Handling",
    }
  )
  .then(() => console.log("MongoDB Connected...!"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/form-submit", async (req, res) => {
  //   console.log(req.body);
  try {
    let user = await User.create(req.body);
    res.json({
      message: "User created successfully..!",
      NewUser: user,
      success: true,
    });
  } catch (err) {
    res.json({ message: err.message });
  }
});

const port = 1000;
app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
