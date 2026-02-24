const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
app.use('/uploads', express.static('uploads')); // Serve uploaded files

mongoose.connect('mongodb://localhost:27017/traveldb').then(() => console.log('DB connected')).catch(err => console.log(err));

const InquirySchema = new mongoose.Schema({
  category: String,
  details: String,
  files: [String], // Array of file paths
  timestamp: { type: Date, default: Date.now }
});
const Inquiry = mongoose.model('Inquiry', InquirySchema);

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

app.post('/api/inquiries', upload.array('files', 5), async (req, res) => {
  try {
    const { category, details } = req.body;
    const files = req.files.map(file => file.path);
    const inquiry = new Inquiry({ category, details, files });
    await inquiry.save();
    res.status(201).json({ message: 'Inquiry saved', id: inquiry._id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));