import { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/signup', { email, password });
      alert('Account created! Please login.');
      window.location.href = '/login';
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-md bg-white p-12 rounded-2xl shadow-2xl border border-gray-200">
        <h2 className="text-4xl font-bold text-indigo-900 text-center mb-10">Join TravelPro</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            required
          />
          <button
            type="submit"
            className="w-full bg-indigo-900 text-white py-4 rounded-xl font-semibold hover:bg-indigo-800 transition"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;