const Inquiry = require('../models/Inquiry');
const nowpayments = require('nowpayments-api');  // Correct import (it's a function, not a class)

exports.createInquiry = async (req, res) => {
  try {
    const { category, details } = req.body;
    const files = req.files ? req.files.map(file => ({
      filename: file.originalname,
      path: file.path,
      mimetype: file.mimetype,
    })) : [];

    const inquiry = new Inquiry({ category, details, files, user: req.user.id });
    await inquiry.save();

    // Create NowPayments invoice using the correct function call
    const invoice = await nowpayments.createInvoice({
      apiKey: process.env.NOWPAYMENTS_API_KEY,
      price_amount: 50,
      price_currency: 'usd',
      pay_currency: 'BTC',
      order_description: 'Inquiry Application Fee',
      order_id: inquiry._id.toString(),
      order_name: `TravelPro ${category} Application`,
      success_url: `${process.env.APP_URL}/success`,
      cancel_url: `${process.env.APP_URL}/cancel`,
    });

    res.status(201).json({ message: 'Inquiry created', paymentUrl: invoice.invoice_url });
  } catch (error) {
    console.error('Payment error:', error);
    res.status(400).json({ error: error.message || 'Payment invoice creation failed' });
  }
};

exports.getInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find({ user: req.user.id });
    res.json(inquiries);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};