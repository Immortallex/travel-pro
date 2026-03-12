import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('http://localhost:5000/api/inquiries', { headers: { Authorization: `Bearer ${token}` } })
        .then(res => setInquiries(res.data))
        .catch(() => alert('Please login to view dashboard'));
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-center py-20 px-6"
    >
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold text-indigo-900">Your TravelPro Dashboard</h1>
        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          View and manage all your travel applications in one place.
        </p>
      </div>

      <div className="w-full max-w-4xl space-y-8">
        {inquiries.length === 0 ? (
          <div className="bg-white p-12 rounded-2xl shadow-xl text-center">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">No Applications Yet</h2>
            <p className="text-gray-600 mb-6">
              Start by applying through any category page (Tech, Family, Education, etc.).
            </p>
            <Link
              to="/tech"
              className="inline-block bg-indigo-900 text-white px-8 py-4 rounded-xl hover:bg-indigo-800 transition"
            >
              Explore Categories
            </Link>
          </div>
        ) : (
          inquiries.map(inq => (
            <div key={inq._id} className="bg-white p-10 rounded-2xl shadow-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">{inq.category}</h3>
              <p className="text-gray-700 mb-4">{inq.details}</p>
              <p className="text-sm text-teal-600">
                Files uploaded: {inq.files ? inq.files.length : 0}
              </p>
            </div>
          ))
        )}
      </div>
    </motion.div>
  );
}

export default Dashboard;