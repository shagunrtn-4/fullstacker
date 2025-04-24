const express = require('express');
const connectDB = require('./config/db');
const patientRoutes = require('./routes/patientRoutes');

const app = express();
connectDB();

app.use(express.json());
app.use('/api', patientRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`SaniCare API running on http://localhost:${PORT}`);
});
