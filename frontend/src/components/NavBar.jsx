import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-indigo-950 to-blue-950 text-white shadow-2xl">
      {/* Top nav – Home, About, Contact – very wide spacing */}
      <div className="container mx-auto px-8 py-6">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="text-3xl md:text-4xl font-extrabold tracking-wide hover:text-indigo-300 transition duration-300"
          >
            TravelPro
          </Link>

          <nav className="hidden md:flex items-center space-x-20 text-lg font-semibold">
            <Link to="/" className="hover:text-indigo-300 hover:scale-110 transition duration-300">Home</Link>
            <Link to="/about" className="hover:text-indigo-300 hover:scale-110 transition duration-300">About</Link>
            <Link to="/contact" className="hover:text-indigo-300 hover:scale-110 transition duration-300">Contact</Link>
          </nav>
        </div>
      </div>

      {/* Secondary nav – Tech Family etc – very wide spacing + centered dropdown */}
      <div className="bg-gradient-to-r from-blue-950 to-indigo-950 border-t border-indigo-800/50 py-5">
        <nav className="container mx-auto px-8 flex justify-center space-x-20 text-base font-medium">
          <Link to="/tech" className="hover:text-indigo-300 hover:scale-110 transition duration-300 px-4">Tech</Link>
          <Link to="/family" className="hover:text-indigo-300 hover:scale-110 transition duration-300 px-4">Family</Link>
          <Link to="/education" className="hover:text-indigo-300 hover:scale-110 transition duration-300 px-4">Education</Link>
          <Link to="/conference" className="hover:text-indigo-300 hover:scale-110 transition duration-300 px-4">Conference</Link>

          <div className="relative group">
            <Link 
              to="/sports" 
              className="hover:text-indigo-300 hover:scale-110 transition duration-300 flex items-center gap-2 px-4"
            >
              Sports
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            <motion.ul
              initial={{ opacity: 0, y: 12, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute left-1/2 -translate-x-1/2 mt-4 w-64 bg-indigo-950 rounded-2xl shadow-2xl hidden group-hover:block overflow-hidden border border-indigo-800/60"
            >
              <li><Link to="/sports/football" className="block px-8 py-4 text-center hover:bg-indigo-900/80 transition duration-300">Football</Link></li>
              <li><Link to="/sports/basketball" className="block px-8 py-4 text-center hover:bg-indigo-900/80 transition duration-300">Basketball</Link></li>
            </motion.ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;