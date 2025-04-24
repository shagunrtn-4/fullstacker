const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  contact: String,
  healthData: {
    bloodPressure: String,
    heartRate: String,
    spo2: String,
    temp: String,
    hydrationLevel: String,
    sleepScore: String,
  },
  hashedIdentifier: String,
});

module.exports = mongoose.model('Patient', patientSchema);