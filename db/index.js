const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/miammy');

const { Schema } = mongoose;
const favoriteSchema = new Schema({
  uid: String,
  favorites: [{
    idMeal: String,
    strMeal: String,
    strMealThumb: String,
  }],
});
const Favorites = mongoose.model('Favorites', favoriteSchema);

// const addToFavorite = (fave) => Favorites.findOneAndUpdate({ idMeal: fave.id }, {
//   idMeal: fave.id,
//   strMeal: fave.title,
//   strMealThumb: fave.thumbnail,
// }, { new: true, upsert: true });

const addToFavorite = (fave) => Favorites.findOneAndUpdate({ uid: fave.user }, {
  $push: {
    favorites: {
      idMeal: fave.id,
      strMeal: fave.title,
      strMealThumb: fave.thumbnail,
    },
  },
}, { new: true, upsert: true });

const fetchAllFavorites = () => Favorites.find();

const removeFavorite = (faveId) => Favorites.deleteOne({ idMeal: faveId });

module.exports.addToFavorite = addToFavorite;
module.exports.fetchAllFavorites = fetchAllFavorites;
module.exports.removeFavorite = removeFavorite;
