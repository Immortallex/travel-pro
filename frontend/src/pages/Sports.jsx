import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import sportsGeneral from '../assets/sports-general.jpg';

  const token = localStorage.getItem('token');
  if (!token) {
    window.location.href = '/login';
    return null;
  }

function Sports() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-center py-20 px-6"
    >
      {/* Hero image with title overlaid */}
      <div className="relative w-full max-w-5xl mb-16">
        <img
          src={sportsGeneral}
          alt="Sports"
          className="w-full rounded-2xl shadow-2xl object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-2xl" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-2xl leading-tight">
            SPORTS TRAVEL SOLUTIONS<br />THAT FUEL YOUR<br />PASSION.
          </h1>
        </div>
      </div>

      {/* Description */}
      <p className="text-center text-lg md:text-xl text-gray-700 max-w-3xl mb-16">
        Tournament visas, team bookings, athlete support. Choose Football or Basketball.
      </p>

      {/* Category cards */}
      <div className="grid md:grid-cols-2 gap-10 w-full max-w-4xl">
        <Link
          to="/sports/football"
          className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition text-center"
        >
          <h3 className="text-3xl font-bold text-indigo-900 mb-4">Football</h3>
          <p className="text-gray-600">World Cup, leagues travel.</p>
        </Link>
        <Link
          to="/sports/basketball"
          className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition text-center"
        >
          <h3 className="text-3xl font-bold text-indigo-900 mb-4">Basketball</h3>
          <p className="text-gray-600">NBA, Olympics trips.</p>
        </Link>
      </div>
    </motion.div>
  );
}

export default Sports;