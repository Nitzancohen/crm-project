const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const clientApi = require('./clientsApi.js')

app.use(express.static('build'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
  
    next()
  })
  
app.use(clientApi);

app.listen(process.env.PORT || 8000);