import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="text-center"
    >
      <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-950 mb-6 tracking-tight drop-shadow-md">
        Welcome to TravelPro
      </h1>
      <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
        Professional travel solutions tailored to your specialization. Choose from Tech, Family, Education, Conference, or Sports for customized visas, bookings, and itineraries.
      </p>
      <img
        src="/assets/hero-travel.jpg"
        alt="Global travel destinations"
        className="rounded-3xl shadow-2xl mx-auto w-full max-w-5xl object-cover h-96 mb-16 transform hover:scale-105 transition duration-700"
      />
      <div className="grid md:grid-cols-3 gap-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-indigo-100 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
        >
          <h3 className="text-2xl font-bold text-indigo-900 mb-4">Quick Start</h3>
          <p className="text-gray-600">Select a category above to begin your personalized travel journey.</p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-indigo-100 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
        >
          <h3 className="text-2xl font-bold text-indigo-900 mb-4">Featured Destinations</h3>
          <p className="text-gray-600">From Silicon Valley tech hubs to Paris conferences – we cover it all.</p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-indigo-100 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
        >
          <h3 className="text-2xl font-bold text-indigo-900 mb-4">User Testimonials</h3>
          <p className="text-gray-600">"TravelPro made my family trip seamless and unforgettable!" – Alex, Lagos</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Home;