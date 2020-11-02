const express = require('express');
const router = express.Router();
const Student = require('../models/studentModel');
const bodyParser = require('body-parser');

// create application/json parser
const jsonParser = bodyParser.json();

router.get('/', (req, res) => {
  const skip = parseInt(req.query.skip);
  const limit = parseInt(req.query.limit);

  Student.find()
    .skip(skip)
    .limit(limit)
    .exec((err, students) => {
      if (err) {
        return res.send(err);
      }
      res.json(students);
    });
});

router.get('/:id', (req, res) => {
  Student.findById(req.params.id, (err, student) => {
    if (student == null) {
      return res.status(404).json({ message: 'Cannot find student' });
    } else if (err) {
      return res.send(err);
    }
    return res.json(student);
  });
});

router.post('/', jsonParser, (req, res) => {
  console.log(req.body);
  const student = new Student({
    full_name: req.body.full_name,
    semester: req.body.semester,
    field_of_study: req.body.field_of_study,
    faculty: req.body.faculty,
    university: req.body.university,
  });
  student.save((err, newStudent) => {
    if (err) {
      console.log('err');
      return res.send(err);
    }
    return res.status(201).json(newStudent);
  });
});

router.put('/:id', (req, res) => {
  Student.findById(req.params.id, (err, student) => {
    if (student == null) {
      return res.status(404).json({ message: 'Cannot find student' });
    } else if (err) {
      return res.send(err);
    }
    student.full_name = req.body.full_name;
    student.semester = req.body.full_name;
    student.field_of_study = req.body.field_of_study;
    student.faculty = req.body.faculty;
    student.university = req.body.university;

    student.save();
    return res.json(student);
  });
});

router.delete('/:id', (req, res) => {
  req.student.remove((err) => {
    if (err) {
      return res.send(err);
    }
    return res.status(204);
  });
});

module.exports = router;
