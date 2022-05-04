const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/miammy');

const Schema = mongoose.Schema;
const Favorites = new Schema({
  mealId: Number
});

const addToFavorite = (fave) => {
  return Favorites.create({
    mealId: fave.idMeal,
    photoUrl: fave.strMealThumb,
    title: fave.strMeal
  })
}

module.exports.addToFavorite = addToFavorite;