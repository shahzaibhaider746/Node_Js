const express = require('express')
const app = express();

app.get("/",(req, res)=>{
    res.send("<h1>Hello to you </h1>")
})

app.get("/user",(req, res)=>{
    res.send("<h1>Hello to user screen  </h1>")
})



app.listen(5000)