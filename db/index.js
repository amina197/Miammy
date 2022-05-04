const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/miammy');

const Schema = mongoose.Schema;
const favoriteSchema = new Schema({
  idMeal: String,
  strMeal: String,
  strMealThumb: String
});
const Favorites = mongoose.model('Favorites', favoriteSchema);

const addToFavorite = (fave) => {
  return Favorites.findOneAndUpdate( {idMeal: fave.id}, {
    idMeal: fave.id,
    strMeal: fave.title,
    strMealThumb: fave.thumbnail
  }, {new: true, upsert: true})
}

const fetchAllFavorites = () => {
  return Favorites.find()
}

module.exports.addToFavorite = addToFavorite;
module.exports.fetchAllFavorites = fetchAllFavorites;