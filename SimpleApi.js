const http = require('http')
const data = require('./data')

const  reeyandaralo = (req, res) =>  {
    res.writeHead(200 ,{'content-Type' : 'application/json'})
    res.write(JSON.stringify(data))
    res.end()
}

http.createServer(reeyandaralo).listen(5000)