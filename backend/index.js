// Entry point for Firebase Functions
require('dotenv').config();
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// Routes
const authRoutes = require('./routes/authRoutes');
const sensorRoutes = require('./routes/sensorRoutes');
const voiceRoutes = require('./routes/voiceRoutes');

const app = express();
app.use(helmet());
app.use(cors({ origin: true }));
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', sensorRoutes);
app.use('/api', voiceRoutes);

// Export as Firebase HTTP Function
exports.api = functions.https.onRequest(app);
