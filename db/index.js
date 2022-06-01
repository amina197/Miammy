const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;

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

const addToFavorite = (fave) => Favorites.findOneAndUpdate({ uid: fave.user }, {
  $push: {
    favorites: {
      idMeal: fave.id,
      strMeal: fave.title,
      strMealThumb: fave.thumbnail,
    },
  },
}, { new: true, upsert: true });

const fetchAllFavorites = (uid) => Favorites.find({ uid });

const removeFavorite = (id, uid) => Favorites.updateOne({ uid }, {
  $pull: { favorites: { _id: ObjectId(id) } },
});

// db.presentations.update(
//   {'content.assets._id': ObjectId('4fc63def5b20fb722900010e')},
//   {$pull: {'content.$.assets': {'_id': ObjectId('4fc63def5b20fb722900010e')}}}
// )

module.exports.addToFavorite = addToFavorite;
module.exports.fetchAllFavorites = fetchAllFavorites;
module.exports.removeFavorite = removeFavorite;
