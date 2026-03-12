const Inquiry = require('../models/Inquiry');
const NowPayments = require('nowpayments-api');
const nowPayments = new NowPayments(process.env.NOWPAYMENTS_API_KEY, { sandbox: process.env.NOWPAYMENTS_SANDBOX === 'true' });

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

    // Create NowPayments invoice
    const invoice = await nowPayments.createInvoice({
      price_amount: 50,
      price_currency: 'usd',
      pay_currency: 'BTC',  // or 'USDT' – can make dynamic later
      order_description: 'Inquiry Application Fee',
      success_url: `${process.env.APP_URL}/success`,
      cancel_url: `${process.env.APP_URL}/cancel`,
    });

    res.status(201).json({ message: 'Inquiry created', paymentUrl: invoice.invoice_url });
  } catch (error) {
    res.status(400).json({ error: error.message });
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
