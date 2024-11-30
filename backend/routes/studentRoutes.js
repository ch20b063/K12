const express = require('express');
const { resetPerformance } = require('../controllers/studentController');
const router = express.Router();

router.post('/performance/reset/:student_id', resetPerformance);

module.exports = router;
