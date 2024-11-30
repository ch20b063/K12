const mongoose = require('mongoose');

const deckSchema = new mongoose.Schema({
  deck_id: Number,
  deck_name: String,
});

module.exports = mongoose.model('Deck', deckSchema);
