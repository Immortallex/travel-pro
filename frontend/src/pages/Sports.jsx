import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Sports() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, rotate: -5 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, type: 'spring' }}
      className="py-12 md:py-20 bg-gradient-to-br from-white to-indigo-100 rounded-3xl shadow-2xl p-8"
    >
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-indigo-900 mb-4 drop-shadow-lg">Sports Travel Solutions</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
          Tournament visas, team bookings, athlete support. Choose Football or Basketball.
        </p>
        <img
          src="/assets/sports-general.jpg"
          alt="Sports events"
          className="rounded-3xl shadow-2xl mx-auto w-full object-cover h-80 md:h-96 mb-8 hover:rotate-1 hover:scale-105 transition duration-500"
        />
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div initial={{ y: 20 }} animate={{ y: 0 }} className="bg-white p-6 rounded-2xl shadow-xl hover:scale-105 hover:rotate-2 transition duration-300 text-center">
          <h3 className="text-xl font-semibold mb-2 text-indigo-900">Football</h3>
          <p className="text-gray-600">World Cup, leagues travel.</p>
          <Link to="/sports/football" className="inline-block mt-4 bg-indigo-900 text-white p-2 rounded hover:bg-indigo-700 transition">Explore</Link>
        </motion.div>
        <motion.div initial={{ y: 20 }} animate={{ y: 0 }} className="bg-white p-6 rounded-2xl shadow-xl hover:scale-105 hover:rotate-2 transition duration-300 text-center">
          <h3 className="text-xl font-semibold mb-2 text-indigo-900">Basketball</h3>
          <p className="text-gray-600">NBA, Olympics trips.</p>
          <Link to="/sports/basketball" className="inline-block mt-4 bg-indigo-900 text-white p-2 rounded hover:bg-indigo-700 transition">Explore</Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Sports;