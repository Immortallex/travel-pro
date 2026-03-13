const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const dotenv = require('dotenv');
const path = require('path');

const authRoutes = require('./routes/authRoutes');
const inquiryRoutes = require('./routes/inquiryRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');

dotenv.config();

const app = express();

// Secure CORS – allow only your live Vercel frontend domain(s)
app.use(cors({
  origin: [
    'https://travelpro-frontend-psi.vercel.app',   // Your current production Vercel URL
    'https://travel-pro-frontend.vercel.app',      // Any preview / old Vercel domains
    'http://localhost:5173'                        // Keep for local development
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept']
}));

// Security headers (helmet) – protects against common web vulnerabilities
app.use(helmet());

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate limiting – basic DoS protection (100 requests per IP per 15 minutes)
app.use(rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: 'Too many requests from this IP, please try again later.'
}));

// Serve uploaded files (optional – secure later with auth middleware)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/inquiries', inquiryRoutes);

// Global error handler – catches everything
app.use(errorMiddleware);

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected successfully');
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`Backend running on port ${port}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit process – Render will restart automatically
  });