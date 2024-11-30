const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  student_id: Number,
  name: String,
});

module.exports = mongoose.model('Student', studentSchema);
