// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// const cors = require('cors');

// app.use(cors());

// mongoose.connect('mongodb://----', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected'))
//   .catch((error) => console.error('Error connecting', error));

// const trackerSchema = new mongoose.Schema({
//   type: { type: String, enum: ['visit', 'download'], required: true },
//   timestamp: { type: Date, default: Date.now },
// });

// const Tracker = mongoose.model('Tracker', trackerSchema);

// app.post('/api/track/visit', async (req, res) => {
//   const newVisit = new Tracker({ type: 'visit' });
//   await newVisit.save();
//   res.status(200).send('Visit tracked');
// });

// app.post('/api/track/download', async (req, res) => {
//   const newDownload = new Tracker({ type: 'download' });
//   await newDownload.save();
//   res.status(200).send('Download tracked');
// });

// app.get('/api/stats', async (req, res) => {
//   const visits = await Tracker.countDocuments({ type: 'visit' });
//   const downloads = await Tracker.countDocuments({ type: 'download' });
//   res.status(200).json({ visits, downloads });
// });

// const port = 5000;
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });
