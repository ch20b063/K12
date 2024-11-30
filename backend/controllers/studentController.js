const Flashcard = require('../models/flashcardModel');

exports.resetPerformance = async (req, res) => {
  try {
    const { student_id } = req.params;
    const { deck_id } = req.body;  // Optional: reset for specific deck

    const query = deck_id ? { student_id, deck_id } : { student_id };
    await Flashcard.updateMany(query, { total_attempts: 0, incorrect_attempts: 0 });

    res.json({ message: 'Performance data reset successfully' });
  } catch (error) {
    res.status(500).send('Server Error');
  }
};
