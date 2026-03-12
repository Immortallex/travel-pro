import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="space-y-24 text-center"  // Massive vertical spacing
    >
      {/* Hero Section – Full width image, centered text */}
      <div className="space-y-10">
        <h1 className="text-6xl md:text-7xl font-extrabold text-indigo-950 tracking-tight drop-shadow-lg">
          Welcome to TravelPro
        </h1>
        <p className="text-2xl md:text-3xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
          Professional travel solutions tailored to your specialization. Choose from Tech, Family, Education, Conference, or Sports for customized visas, bookings, and itineraries.
        </p>
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&auto=format&fit=crop&q=80"
          alt="Global travel destinations"
          className="rounded-3xl shadow-2xl mx-auto w-full max-w-6xl object-cover h-[500px] md:h-[700px] hover:scale-105 transition duration-700"
        />
      </div>

      {/* Spaced Cards – Huge gap */}
      <div className="grid md:grid-cols-3 gap-16">  {/* gap-16 = very spaced */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-xl border border-indigo-100 hover:shadow-2xl hover:-translate-y-3 transition duration-500"
        >
          <h3 className="text-2xl font-bold text-indigo-900 mb-6">Quick Start</h3>
          <p className="text-gray-700 text-lg">Select a category above to begin your personalized travel journey.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-xl border border-indigo-100 hover:shadow-2xl hover:-translate-y-3 transition duration-500"
        >
          <h3 className="text-2xl font-bold text-indigo-900 mb-6">Featured Destinations</h3>
          <p className="text-gray-700 text-lg">From Silicon Valley tech hubs to Paris conferences – we cover it all.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-xl border border-indigo-100 hover:shadow-2xl hover:-translate-y-3 transition duration-500"
        >
          <h3 className="text-2xl font-bold text-indigo-900 mb-6">User Testimonials</h3>
          <p className="text-gray-700 text-lg">"TravelPro made my family trip seamless and unforgettable!" – Alex, Lagos</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Home;