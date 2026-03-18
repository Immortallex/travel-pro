import { motion } from 'framer-motion';
import { useState } from 'react';
import axios from 'axios';
import contactOffice from '../assets/contact-office.jpg';

  const token = localStorage.getItem('token');
  if (!token) {
    window.location.href = '/login';
    return null;
  }

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', { name, email, message });
      alert('Message sent successfully!');
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
          src={contactOffice}
          alt="Contact us"
          className="w-full rounded-2xl shadow-2xl object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-2xl" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-2xl leading-tight">
           
          </h1>
        </div>
      </div>

      <p className="text-center text-lg md:text-xl text-gray-700 max-w-3xl mb-16">
        Reach out for custom travel advice. Available 24/7.
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-10 rounded-2xl shadow-xl border border-gray-200 space-y-6">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          required
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message"
          className="w-full p-4 border border-gray-300 rounded-lg h-40 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          required
        />
        <button
          type="submit"
          className="w-full bg-indigo-900 text-white py-4 rounded-xl font-semibold hover:bg-indigo-800 transition"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  );
}

export default Contact;