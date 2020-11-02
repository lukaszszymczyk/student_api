const express = require('express');
const app = express();
const mongoose = require('mongoose');
var cors = require('cors');

mongoose.connect('mongodb://localhost/studentAPI');
mongoose.connection;

app.use(cors());
app.use('/students', require('./routes/students'));
app.use('/dict', require('./routes/dictionary'));

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
