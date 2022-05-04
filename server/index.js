require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const axios = require('axios');
const { addToFavorite, fetchAllFavorites } = require('./../db/index.js');

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../client/dist')));

const PORT = process.env.PORT;

app.get('/api/areas', (req, res) => {
  axios.get('http://www.themealdb.com/api/json/v1/1/list.php?a=list')
    .then(({data}) => res.status(200).send(data.meals))
    .catch(err => console.log('Error server retrieving areas', err));
});

app.get('/api/categories', (req, res) => {
  axios.get('http://www.themealdb.com/api/json/v1/1/list.php?c=list')
    .then(({data}) => res.status(200).send(data.meals))
    .catch(err => console.log('Error server retrieving areas', err));
});

app.get('/api/meals', (req, res) => {
  let url = '';
  if (req.query.area) {
    url = `http://www.themealdb.com/api/json/v1/1/filter.php?a=${req.query.area}`
  }

  if (req.query.category) {
    url = `http://www.themealdb.com/api/json/v1/1/filter.php?c=${req.query.category}`
  }

  axios.get(url)
    .then(({data}) => res.status(200).send(data.meals))
    .catch(err => console.log('Error server retrieving meals by areas', err));
});

app.get('/api/meals/recipe', (req, res) => {
  axios.get(`http://www.themealdb.com/api/json/v1/1/lookup.php?i=${req.query.id}`)
    .then(({data}) => { res.status(200).send(data.meals[0])})
    .catch(err => console.log('Error server retrieving meal recipe', err));
});

app.get('/favorites', (req, res) => {
  fetchAllFavorites()
    .then(data => res.status(200).send(data))
    .catch(err => console.log('Error fetching favorites in DB', err));
})

app.post('/favorite/add', (req, res) => {
  console.log(req.body.params);
  addToFavorite(req.body.params)
    .then(dataSaved => res.status(201).send('recipe successfully saved in favorites'))
    .catch(({err}) => console.log('Error insertion in DB', err));
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})