const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use((req, res, next) => {
  const timer = console.time('req');
  console.log(`${req.method} ${req.url}`);
  console.log("Query: ", req.query);
  console.log("Body: " + JSON.stringify(req.body, null, 2));
  console.timeEnd('req');
  console.log('');
  return res.json("OK");
});

// app.get('/query', (req, res, next) => {
//   console.log(req.query);
//   res.json(req.query);
// });

// app.post('/', (req, res, next) => {
//   console.log(JSON.stringify(req.body, null, 2));
//   res.json({ success: true });
// });

const port = 8899;

app.listen(port, () => {
  console.log(`server listenin on some sweet port ${port} action, baby`);
})
