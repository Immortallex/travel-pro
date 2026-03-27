import { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('https://travel-pro-3o9n.onrender.com/api/inquiries', {
        category: 'General Inquiry',
        details: formData
      });
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      alert('Failed to send message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="max-w-2xl w-full bg-white p-12 rounded-3xl shadow-2xl">
        <h1 className="text-5xl font-bold text-center mb-8">Get in Touch</h1>
        <form onSubmit={handleSubmit} className="space-y-8">
          <input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full p-5 border border-gray-300 rounded-2xl" required />
          <input name="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full p-5 border border-gray-300 rounded-2xl" required />
          <textarea name="message" placeholder="Your Message" rows="6" value={formData.message} onChange={handleChange} className="w-full p-5 border border-gray-300 rounded-2xl" required />
          <button type="submit" disabled={loading} className="w-full bg-teal-600 text-white py-6 text-xl rounded-2xl font-semibold hover:bg-teal-700">
            {loading ? 'Sending...' : 'Submit Message'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;