import { motion } from 'framer-motion';
import { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [specialization, setSpecialization] = useState('');  // Input for custom
  const [subSpec, setSubSpec] = useState('General');  // Dropdown
  const [files, setFiles] = useState([]);
  const [savedDraft, setSavedDraft] = useState(false);
  const [paymentUrl, setPaymentUrl] = useState('');

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handleSaveDraft = () => {
    const draft = { name, email, message, subSpec, specialization };
    localStorage.setItem('contactDraft', JSON.stringify(draft));
    setSavedDraft(true);
    alert('Draft saved!');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/inquiries', { category: 'Contact', details: `${name} (${email}): ${message} - Sub: ${subSpec}, Spec: ${specialization}` });
      alert('Application submitted!');

      // OxaPay payment
      const response = await axios.post('https://api.oxapay.com/v1/createInvoice', {
        apiKey: 'YOUR_OXAPAY_API_KEY',
        amount: 50,
        currency: 'USDT',  // or 'BTC'
        returnUrl: 'http://localhost:5173/contact',
        description: 'Contact Application Fee'
      });
      setPaymentUrl(response.data.url);
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, rotate: -5 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, type: 'spring' }}
      className="py-12 md:py-20 bg-gradient-to-br from-white to-indigo-100 rounded-3xl shadow-2xl p-8"
    >
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-indigo-900 mb-4 drop-shadow-lg">Contact Us</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
          Reach out for custom travel advice. Available 24/7 in Lagos and globally.
        </p>
        <img
          src="/assets/contact-office.jpg"
          alt="TravelPro office"
          className="rounded-3xl shadow-2xl mx-auto w-full object-cover h-80 md:h-96 mb-8 hover:rotate-1 hover:scale-105 transition duration-500"
        />
      </div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-xl mb-12">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="w-full p-2 mb-4 border rounded focus:border-indigo-500 transition" required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full p-2 mb-4 border rounded focus:border-indigo-500 transition" required />
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" className="w-full p-2 mb-4 border rounded h-32 focus:border-indigo-500 transition" required />
        <select value={subSpec} onChange={(e) => setSubSpec(e.target.value)} className="w-full p-2 mb-4 border rounded focus:border-indigo-500 transition">
          <option>General</option>
          <option>Support</option>
          <option>Feedback</option>
        </select>
        <input type="text" value={specialization} onChange={(e) => setSpecialization(e.target.value)} placeholder="Custom Specialization" className="w-full p-2 mb-4 border rounded focus:border-indigo-500 transition" />
        <input type="file" multiple onChange={handleFileChange} className="w-full mb-4" />
        {files.length > 0 && <p className="mb-4 text-indigo-600">{files.length} documents uploaded.</p>}
        <button type="button" onClick={handleSaveDraft} className="w-full bg-gray-600 text-white p-2 rounded hover:bg-gray-700 mb-4 transition">Save Draft</button>
        <button type="submit" className="w-full bg-indigo-900 text-white p-2 rounded hover:bg-indigo-700 transition">Submit & Pay</button>
      </form>
      {paymentUrl && (
        <div className="text-center p-4 bg-green-100 rounded-xl">
          <p className="text-green-800 mb-4">Pay Application Fee in BTC/USDT:</p>
          <a href={paymentUrl} target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition">Proceed to Payment</a>
        </div>
      )}
      <div className="text-center text-gray-600 mt-8">
        <p>Email: info@travelpro.com | Phone: +1-800-555-TRAV | Address: Lagos, NG</p>
      </div>
    </motion.div>
  );
}

export default Contact;