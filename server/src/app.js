const express = require('express');
const cors = require('cors');
const certificateRoutes = require('./routes/certificateRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/certificates', certificateRoutes);
app.use('/api/contact', contactRoutes);

const path = require("path");

// Serve frontend static files
app.use(express.static(path.join(__dirname, "../../client/dist")));

// Only handle non-API routes
app.get("*", (req, res) => {
  if (!req.originalUrl.startsWith("/api")) {
    res.sendFile(path.join(__dirname, "../../client/dist/index.html"));
  }
});

module.exports = app;
