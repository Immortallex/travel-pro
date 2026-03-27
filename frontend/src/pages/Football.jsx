import { useState } from 'react';
import axios from 'axios';
import footballImg from '../assets/football-tournament.jpg';

function Football() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    specialization: '',
    subSpec: ''
  });
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleFileChange = (e) => setFiles(e.target.files);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append('category', 'Football');
    data.append('details', JSON.stringify(formData));
    for (let file of files) data.append('files', file);

    try {
      const res = await axios.post(
        'https://travel-pro-3o9n.onrender.com/api/inquiries',
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      window.location.href = res.data.paymentUrl;
    } catch (err) {
      alert('Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-8">
        <div className="relative h-96 rounded-3xl overflow-hidden mb-12 shadow-2xl">
          <img src={footballImg} alt="Football" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-12">
            <h1 className="text-6xl font-bold text-white">Football Tournament Travel Solutions</h1>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-12 rounded-3xl shadow-xl space-y-8">
          <input name="name" placeholder="Full Name" onChange={handleChange} className="w-full p-5 border border-gray-300 rounded-2xl text-lg" required />
          <input name="email" type="email" placeholder="Email Address" onChange={handleChange} className="w-full p-5 border border-gray-300 rounded-2xl text-lg" required />
          <input name="specialization" placeholder="Tournament / Team Name" onChange={handleChange} className="w-full p-5 border border-gray-300 rounded-2xl text-lg" />
          <textarea name="message" placeholder="Tell us about your football travel needs" rows="5" onChange={handleChange} className="w-full p-5 border border-gray-300 rounded-2xl text-lg" required />
          <input type="file" multiple onChange={handleFileChange} className="w-full p-4 border border-gray-300 rounded-2xl" />
          <button type="submit" disabled={loading} className="w-full bg-teal-600 hover:bg-teal-700 text-white py-6 text-2xl font-semibold rounded-3xl transition">
            {loading ? 'Submitting & Processing Payment...' : 'Submit Application & Pay (BTC / USDT)'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Football;