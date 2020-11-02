const mongoose = require('mongoose');

const studentModel = new mongoose.Schema({
  full_name: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
  field_of_study: {
    type: String,
    required: true,
  },
  faculty: {
    type: String,
    required: true,
  },
  university: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('students', studentModel);
