const express = require('express');
const router = express.Router();
const { postSensor, getData } = require('../controllers/sensorController');

router.post('/sensors', postSensor);
router.get('/data', getData);

module.exports = router;
