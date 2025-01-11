const http = require('http')


const  reeyandaralo = (req, res) =>  {
    res.write("<h1>Hello i am shahzaib </h1> , <h2>Reeyan daaralooo</h2>")
    res.end()
}

http.createServer(reeyandaralo).listen(4500)