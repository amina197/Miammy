const path = require('path');
const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../client/dist')));

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.status(200).send('success');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})