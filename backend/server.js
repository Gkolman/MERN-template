const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
const JSON = require('json')
const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.resolve(__dirname + './../client/dist')))
var cors = require("cors");
app.use(cors());
const axios =  require('axios')


app.use('*', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });


app.get('/quote', async (req, res) => {
  try {
    const { data } = await axios.get('https://zenquotes.io/api/random')
    res.send(data)
  }catch(error) {
    res.send(error)
  }
})

app.post('/send/it', (req, res) => {
    console.log("request ->", req.body)
    res.send(req.body)
})

app.listen(port, () => {
    console.log('Server started at http://localhost:' + port);
})