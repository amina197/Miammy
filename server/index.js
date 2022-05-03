const path = require('path');
const express = require('express');
const app = express();
const axios = require('axios');
require('dotenv').config();

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../client/dist')));

const PORT = process.env.PORT;

app.get('/api/areas', (req, res) => {
  axios.get('http://www.themealdb.com/api/json/v1/1/list.php?a=list')
    .then(({data}) => res.status(200).send(data.meals))
    .catch(err => console.log('Error server retrieving areas', err));
});

app.get('/api/recipes', (req, res) => {
  axios.get(`http://www.themealdb.com/api/json/v1/1/filter.php?a=${req.query.area}`)
    .then(({data}) => res.status(200).send(data.meals))
    .catch(err => console.log('Error server retrieving meal by areas', err));
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})