const express = require('express');
const multer = require('multer');
const path = require('path');
const { createInquiry, getInquiries } = require('../controllers/inquiryController');
const authMiddleware = require('../middlewares/authMiddleware');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } });  // 5MB max

const router = express.Router();

router.post('/', authMiddleware, upload.array('files', 5), createInquiry);
router.get('/', authMiddleware, getInquiries);

module.exports = router;