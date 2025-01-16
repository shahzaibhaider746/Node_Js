const express = require('express')
const app = express();
const reqFilter = require('./middleWare')
const route =  express.Router()


// app.use(reqFilter)

route.use(reqFilter)
app.get("/",(req, res)=>{
    res.send("<h1>Hello to welcome Screen </h1>")
})

route.get("/user",(req, res)=>{
    res.send("<h1>Hello to user screen  </h1>")
})

route.get("/about",(req, res)=>{
    res.send("<h1>Hello to about screen  </h1>")
})
route.get("/contant",(req, res)=>{
    res.send("<h1>Hello to contant screen  </h1>")
})
app.use('/', route)
app.listen(5000)