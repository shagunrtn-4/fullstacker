const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Patient = require('../models/Patient');

// 🔐 Add Patient
router.post('/addPatient', async (req, res) => {
  try {
    const { name, age, gender, contact, healthData } = req.body;
    const rawIdentifier = `${contact}-${name}`;
    const salt = await bcrypt.genSalt(10);
    const hashedIdentifier = await bcrypt.hash(rawIdentifier, salt);

    const newPatient = new Patient({
      name,
      age,
      gender,
      contact,
      healthData,
      hashedIdentifier,
    });

    await newPatient.save();
    res.status(201).json({ message: 'Patient added securely!' });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong!' });
  }
});

// 🧾 Get All Patients
router.get('/patients', async (req, res) => {
  const patients = await Patient.find({}, { hashedIdentifier: 0 });
  res.json(patients);
});

module.exports = router;