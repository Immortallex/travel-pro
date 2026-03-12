const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
  category: { type: String, required: true },
  details: { type: String, required: true },
  files: [{
    filename: String,
    path: String,
    mimetype: String,
  }],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Inquiry', inquirySchema); 
