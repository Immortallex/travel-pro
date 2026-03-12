import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Sports() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, type: 'spring' }}
      className="py-20 space-y-16"
    >
      <div className="text-center space-y-8">
        <h1 className="text-5xl font-bold text-blue-900">Sports Travel Solutions</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Tournament visas, team bookings, athlete support. Choose Football or Basketball.
        </p>
        <img
          src="https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=1600&auto=format&fit=crop&q=80"
          alt="Sports events"
          className="rounded-xl shadow-2xl mx-auto max-w-4xl w-full object-cover h-64 md:h-96"
        />
      </div>
      <div className="grid md:grid-cols-2 gap-12 mt-16">
        <div className="card p-6 text-center">
          <h3 className="text-xl font-semibold">Football</h3>
          <p>World Cup, leagues travel.</p>
          <Link to="/sports/football" className="mt-4 inline-block bg-blue-900 text-white p-2 rounded">Explore</Link>
        </div>
        <div className="card p-6 text-center">
          <h3 className="text-xl font-semibold">Basketball</h3>
          <p>NBA, Olympics trips.</p>
          <Link to="/sports/basketball" className="mt-4 inline-block bg-blue-900 text-white p-2 rounded">Explore</Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Sports;