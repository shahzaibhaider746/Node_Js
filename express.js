const express = require('express')
const app = express();


app.get('', (req, res) => {
    console.log("data is sent by ", req.query.name)
    res.send('hello this is responed ')
});

app.get('/about', (req, res) => {
    res.send('hello this is  About page ')
});
app.get('/help', (req, res) => {
    res.send('welcome this is responed Help ')
});

app.listen(3000)