const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const port = 4000;

app.use(bodyparser.json());
app.get('/', (req, res) => res.send('Hello World!'));
app.post('/createUser', (req, res) =>
  res.status(200).send({ username: 'Admin', password: 'test' })
);
app.post('/AuthenticateUser', (req, res) => res.status(404).send('test'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
