import { motion } from 'framer-motion';
import { useState } from 'react';
import axios from 'axios';
import footballTournament from '../assets/football-tournament.jpg';

  const token = localStorage.getItem('token');
  if (!token) {
    window.location.href = '/login';
    return null;
  }

function Football() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [subSpec, setSubSpec] = useState('Pro League');
  const [files, setFiles] = useState([]);
  const [paymentUrl, setPaymentUrl] = useState('');

  const handleFileChange = (e) => setFiles(Array.from(e.target.files));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('category', 'Football');
    formData.append('details', `${name} (${email}): ${message} - Sub: ${subSpec}, Spec: ${specialization}`);
    files.forEach(file => formData.append('files', file));
    try {
      await axios.post('http://localhost:5000/api/inquiries', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
      alert('Application submitted!');
      const response = await axios.post('https://api.oxapay.com/v1/createInvoice', {
        apiKey: 'YOUR_OXAPAY_API_KEY',
        amount: 50,
        currency: 'USDT',
        returnUrl: window.location.href,
        description: 'Football Application Fee'
      });
      setPaymentUrl(response.data.url);
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-center py-20 px-6"
    >
      <div className="relative w-full max-w-5xl mb-16">
        <img
          src={footballTournament}
          alt="Football tournament"
          className="w-full rounded-2xl shadow-2xl object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-2xl" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-2xl leading-tight">
           
          </h1>
        </div>
      </div>

      <p className="text-center text-lg md:text-xl text-gray-700 max-w-3xl mb-16">
        Match tickets, team tours, FIFA visa support.
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-10 rounded-2xl shadow-xl border border-gray-200 space-y-6">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" required />
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your Message" className="w-full p-4 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-teal-500 focus:border-transparent" required />
        <select value={subSpec} onChange={(e) => setSubSpec(e.target.value)} className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
          <option>Pro League</option>
          <option>Amateur</option>
          <option>Tournament</option>
        </select>
        <input type="text" value={specialization} onChange={(e) => setSpecialization(e.target.value)} placeholder="Custom Specialization (optional)" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
        <input type="file" multiple onChange={handleFileChange} className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50" />
        {files.length > 0 && <p className="text-teal-600 text-sm">{files.length} file(s) selected</p>}

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button type="button" onClick={() => alert('Draft saved!')} className="flex-1 bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition">Save Draft</button>
          <button type="submit" className="flex-1 bg-indigo-900 text-white py-3 rounded-lg hover:bg-indigo-800 transition">Submit & Pay</button>
        </div>
      </form>

      {paymentUrl && (
        <a href={paymentUrl} target="_blank" rel="noopener noreferrer" className="block w-full max-w-lg mx-auto mt-8 bg-green-600 text-white text-center py-4 rounded-xl hover:bg-green-700 transition">
          Proceed to Payment (BTC/USDT)
        </a>
      )}
    </motion.div>
  );
}

export default Football;