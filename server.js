const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const clientApi = require('./clientsApi.js')

app.listen(process.env.PORT || 8000);

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

  next()
});

app.use(express.static('build'));
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(clientApi);

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './build/index.html'), function (err) {
      if (err) {
          res.status(500).send(err)
      }
  })
})