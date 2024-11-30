const Flashcard = require('../models/flashcardModel');
const Deck = require('../models/deckModel');

exports.getWeakFlashcards = async (req, res) => {
  try {
    const studentId = req.params.student_id;
    const flashcards = await Flashcard.find({ student_id: studentId }).populate('deck_id');

    const weakFlashcards = flashcards
      .filter(card => (card.total_attempts - card.incorrect_attempts) / card.total_attempts < 0.5)
      .map(card => ({
        flashcard_id: card.flashcard_id,
        question: card.question,
        success_rate: ((card.total_attempts - card.incorrect_attempts) / card.total_attempts) * 100,
        deck_name: card.deck_id.deck_name,
      }));

    // Group by deck name
    const groupedByDeck = weakFlashcards.reduce((acc, card) => {
      if (!acc[card.deck_name]) acc[card.deck_name] = [];
      acc[card.deck_name].push(card);
      return acc;
    }, {});

    res.json({ student_id: studentId, weak_flashcards: groupedByDeck });
  } catch (error) {
    res.status(500).send('Server Error');
  }
};
