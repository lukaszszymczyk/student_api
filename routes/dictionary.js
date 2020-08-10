const express = require('express');
const router = express.Router();
const facultyTypes = require('../data/dictionary');

router.get('/faculty-types', (req, res) => {
  return res.json(facultyTypes);
});

module.exports = router;
