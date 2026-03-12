import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroTravel from '../assets/hero-travel.jpg';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="min-h-screen flex flex-col items-center py-20 px-6 space-y-16 bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Secondary Navigation Menu – centered, responsive, packed */}
      <nav className="w-full max-w-5xl">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 p-6 md:p-8 text-lg font-medium text-gray-700">
            <Link
              to="/tech"
              className="hover:text-teal-600 transition duration-300 hover:underline underline-offset-4"
            >
              Tech
            </Link>
            <Link
              to="/family"
              className="hover:text-teal-600 transition duration-300 hover:underline underline-offset-4"
            >
              Family
            </Link>
            <Link
              to="/education"
              className="hover:text-teal-600 transition duration-300 hover:underline underline-offset-4"
            >
              Education
            </Link>
            <Link
              to="/conference"
              className="hover:text-teal-600 transition duration-300 hover:underline underline-offset-4"
            >
              Conference
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-teal-600 transition duration-300">
                Sports
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block bg-white rounded-xl shadow-xl border border-gray-200 min-w-[160px] overflow-hidden">
                <Link
                  to="/sports/football"
                  className="block px-6 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition"
                >
                  Football
                </Link>
                <Link
                  to="/sports/basketball"
                  className="block px-6 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition"
                >
                  Basketball
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Hero Section */}
      <div className="text-center space-y-8 max-w-5xl">
        <h1 className="text-5xl md:text-7xl font-bold text-indigo-900 leading-tight">
          WELCOME TO TRAVELPRO
        </h1>
        <p className="text-2xl md:text-4xl font-medium text-gray-700 leading-relaxed">
          Professional Travel Solutions that define your Journey.
        </p>
      </div>

      {/* Centered Hero Image */}
      <div className="w-full max-w-5xl">
        <img
          src={heroTravel}
          alt="Global travel destinations"
          className="w-full rounded-3xl shadow-2xl object-cover"
        />
      </div>

      {/* Description */}
      <p className="text-center text-lg md:text-xl text-gray-600 max-w-3xl">
        Professional travel solutions tailored to your specialization. Choose from Tech, Family, Education, Conference, or Sports for customized visas, bookings, and itineraries.
      </p>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-12 w-full max-w-6xl">
        <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 text-center transition-transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Quick Start</h3>
          <p className="text-gray-600">Select a category above to begin your personalized travel journey.</p>
        </div>
        <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 text-center transition-transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Featured Destinations</h3>
          <p className="text-gray-600">From Silicon Valley for Tech or Paris for Conferences – we cover it all.</p>
        </div>
        <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 text-center transition-transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-indigo-900 mb-4">User Testimonials</h3>
          <p className="text-gray-600">"TravelPro made my family trip seamless and unforgettable!" – Olamide, Lagos</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;