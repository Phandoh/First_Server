const express = require("express");
const app = express();


app.set("view engine", "ejs")
app.use(logger)

app.get('/', (req,res) => {
    res.send("Hello world!")
})

const userRouter = require("./routes/users");
app.use("/users", userRouter)


function logger(req,res,next){
    console.log(req.originalUrl);
    next()
}


app.listen(3000);