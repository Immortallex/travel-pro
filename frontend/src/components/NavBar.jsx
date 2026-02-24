import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-indigo-950 to-blue-950 text-white shadow-2xl">
      {/* Top Bar – General Nav with Wide Spacing */}
      <div className="container py-5 flex justify-between items-center">
        <Link to="/" className="text-3xl font-extrabold hover:text-indigo-300 transition duration-300">TravelPro</Link>
        <nav className="flex space-x-16 text-lg font-medium">
          <Link to="/" className="hover:text-indigo-300 hover:scale-105 transition duration-300">Home</Link>
          <Link to="/about" className="hover:text-indigo-300 hover:scale-105 transition duration-300">About</Link>
          <Link to="/contact" className="hover:text-indigo-300 hover:scale-105 transition duration-300">Contact</Link>
        </nav>
      </div>

      {/* Secondary Bar – Categories with Wide Spacing */}
      <div className="bg-gradient-to-r from-blue-950 to-indigo-950 border-t border-indigo-800/50 py-4 mt-2"> {/* mt-2 for bar separation */}
        <nav className="container flex justify-center space-x-16 text-base font-medium">
          <Link to="/tech" className="hover:text-indigo-300 hover:scale-105 transition duration-300">Tech</Link>
          <Link to="/family" className="hover:text-indigo-300 hover:scale-105 transition duration-300">Family</Link>
          <Link to="/education" className="hover:text-indigo-300 hover:scale-105 transition duration-300">Education</Link>
          <Link to="/conference" className="hover:text-indigo-300 hover:scale-105 transition duration-300">Conference</Link>
          <div className="relative group">
            <Link to="/sports" className="hover:text-indigo-300 hover:scale-105 transition duration-300">Sports</Link>
            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute left-0 mt-3 w-48 bg-indigo-950 rounded-xl shadow-2xl hidden group-hover:block"
            >
              <li><Link to="/sports/football" className="block px-4 py-2 hover:bg-indigo-900 transition">Football</Link></li>
              <li><Link to="/sports/basketball" className="block px-4 py-2 hover:bg-indigo-900 transition">Basketball</Link></li>
            </motion.ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;