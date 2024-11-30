const mongoose = require('mongoose');

const flashcardSchema = new mongoose.Schema({
  student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  flashcard_id: Number,
  question: String,
  total_attempts: Number,
  incorrect_attempts: Number,
  deck_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Deck' },
});

module.exports = mongoose.model('Flashcard', flashcardSchema);
