const express = require('express');
const cors = require('cors');
const certificateRoutes = require('./routes/certificateRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://ita-patna.vercel.app",
    "https://instrumentation-training-academy.vercel.app",
    "https://ita-patna.onrender.com/api/certificates/verify"
  ],
  credentials: true,
}));

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/certificates', certificateRoutes);  
app.use('/api/contact', contactRoutes);



module.exports = app;
