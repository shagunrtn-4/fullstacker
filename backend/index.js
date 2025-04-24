

require('dotenv').config();
const { https } =require('firebase-functions');
const express=require('express');
const cors =require( 'cors');
const helmet =require ('helmet');

// Routes
const authRoutes =require ('./routes/authRoutes');
const sensorRoutes =require ('./routes/sensorRoutes');
const voiceRoutes = require( './routes/voiceRoutes');

const app = express();
app.use(helmet());
app.use(cors({ origin: true }));
app.use(json());

app.use('/api', authRoutes);
app.use('/api', sensorRoutes);
app.use('/api', voiceRoutes);

exports.api=https.onrequest(app);
if(process.env.NODE_ENV !=='production'){
    const PORT=process.env.port||3000;
    app.listen(PORT,()=>{
        console.log('server running on port ${PORT}');
    });
}
