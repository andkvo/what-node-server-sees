const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/query', (req, res, next) => {
  console.log(req.query);
  res.json(req.query);
})

app.listen(9999, () => {
  console.log("server listenin");
})