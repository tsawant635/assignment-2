const express = require("express");
const app = express();
const postRouter = require("./routes/posts");
const userRouter = require("./routes/users"); 


const mongoose = require("mongoose");

app.use(express.json());


app.use("/", userRouter);
app.use("/posts", postRouter);

app.get("/", (req, res) =>{
    res.send("hi ");
});


const port = 3000
mongoose.connect('mongodb://localhost:27017/instaclone').then(console.log("db connected"))
app.listen(port, () => console.log(`Insta app listening on port ${port}!`))

