const mongoose = require('mongoose');

const studentModel = new mongoose.Schema({
  full_name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('students', studentModel);
