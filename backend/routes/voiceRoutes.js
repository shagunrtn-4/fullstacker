const express = require('express');
const router = express.Router();
const { postVoice } = require('../controllers/voiceController');

router.post('/voice', postVoice);

module.exports = router;
