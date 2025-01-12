const express = require('express')
const app = express();


app.get('', (req, res) => {
    console.log("data is sent by ", req.query.name)
    res.send(' <h1> hello this is responed </h1>')
});

app.get('/about', (req, res) => {
    res.send(`
        <input type="text" placeholder="UserName" value="${req.query.name}"/>
        <button>Submit</button>
        `)
});
app.get('/help', (req, res) => {
    res.send([
        {
            name:'shahzaib',
            email:'shahzaib@gmail.com'
        },
        {
            name:'shahzaib',
            email:'shahzaib@gmail.com'
        },
        {
            name:'shahzaib',
            email:'shahzaib@gmail.com'
        },
        {
            name:'shahzaib',
            email:'shahzaib@gmail.com'
        }
    ])
});

app.listen(3000)