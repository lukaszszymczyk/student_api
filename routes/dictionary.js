const express = require('express');
const router = express.Router();
const fieldTypes = require('../data/dictionary');

router.get('/field-types', (req, res) => {
  return res.json(fieldTypes);
});

module.exports = router;
