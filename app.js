const express = require('express');
const app = express();
const mongoose = require('mongoose');

const Student = require('./models/studentModel');

mongoose.connect('mongodb://localhost/studentAPI');
const db = mongoose.connection;

const studentRouter = require('./routes/students');
app.use('/students', studentRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
