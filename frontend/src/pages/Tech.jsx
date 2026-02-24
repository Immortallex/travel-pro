import { motion } from 'framer-motion';
import { useState } from 'react';
import axios from 'axios';

function Tech() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [subSpec, setSubSpec] = useState('Software Dev');
  const [files, setFiles] = useState([]);
  const [savedDraft, setSavedDraft] = useState(false);
  const [paymentUrl, setPaymentUrl] = useState('');

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handleSaveDraft = () => {
    const draft = { name, email, message, subSpec, specialization };
    localStorage.setItem('techDraft', JSON.stringify(draft));
    setSavedDraft(true);
    alert('Draft saved!');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('category', 'Tech');
    formData.append('details', `${name} (${email}): ${message} - Sub: ${subSpec}, Spec: ${specialization}`);
    files.forEach(file => formData.append('files', file));
    try {
      await axios.post('http://localhost:5000/api/inquiries', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
      alert('Application submitted!');
      // OxaPay payment
      const response = await axios.post('https://api.oxapay.com/v1/createInvoice', {
        apiKey: 'YOUR_OXAPAY_API_KEY',
        amount: 50,
        currency: 'BTC',
        returnUrl: window.location.href,
        description: 'Tech Application Fee'
      });
      setPaymentUrl(response.data.url);
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, type: 'spring' }}
      className="py-20 space-y-16"  // Wide vertical spacing
    >
      <div className="text-center space-y-8">
        <h1 className="text-5xl font-bold text-blue-900">Tech Travel Solutions</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Tailored for tech professionals: work visas, conference bookings, remote work hubs.
        </p>
        <img
          src="/assets/tech-event.jpg"
          alt="Tech conference"
          className="rounded-xl shadow-2xl mx-auto max-w-4xl w-full object-cover h-64 md:h-96"
        />
      </div>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6 bg-white p-8 rounded-xl shadow-xl">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="w-full p-2 border rounded" required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full p-2 border rounded" required />
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" className="w-full p-2 border rounded h-32" required />
        <select value={subSpec} onChange={(e) => setSubSpec(e.target.value)} className="w-full p-2 border rounded">
          <option>Software Dev</option>
          <option>AI</option>
          <option>ML</option>
        </select>
        <input type="text" value={specialization} onChange={(e) => setSpecialization(e.target.value)} placeholder="Custom Specialization" className="w-full p-2 border rounded" />
        <input type="file" multiple onChange={handleFileChange} className="w-full" />
        {files.length > 0 && <p>{files.length} files uploaded</p>}
        <button type="button" onClick={handleSaveDraft} className="w-full bg-gray-500 text-white p-2 rounded">Save Draft</button>
        <button type="submit" className="w-full bg-blue-900 text-white p-2 rounded">Submit & Pay</button>
      </form>
      {paymentUrl && <a href={paymentUrl} className="block text-center bg-green-500 text-white p-2 rounded max-w-lg mx-auto">Pay with BTC/USDT</a>}
      <div className="grid md:grid-cols-2 gap-12 mt-16">  // Spacious grid
        <div className="card p-6">
          <h3 className="text-xl font-semibold">Visa Guides</h3>
          <p>H-1B for tech talents.</p>
        </div>
        <div className="card p-6">
          <h3 className="text-xl font-semibold">Events</h3>
          <p>Book CES or local tech meets.</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Tech;