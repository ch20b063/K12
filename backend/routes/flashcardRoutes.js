const express = require('express');
const { getWeakFlashcards } = require('../controllers/flashcardController');
const router = express.Router();

router.get('/performance/weak_flashcards/:student_id', getWeakFlashcards);

module.exports = router;
