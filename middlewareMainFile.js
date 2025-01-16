const express = require('express')
const app = express();
const reqFilter = require('./middleWare')



// app.use(reqFilter)
app.get("/",(req, res)=>{
    res.send("<h1>Hello to welcome Screen </h1>")
})

app.get("/user",reqFilter,(req, res)=>{
    res.send("<h1>Hello to user screen  </h1>")
})

app.get("/about",(req, res)=>{
    res.send("<h1>Hello to about screen  </h1>")
})

app.listen(5000)