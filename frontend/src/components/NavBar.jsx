import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        <Link to="/" className="text-3xl font-bold text-teal-600">TravelPro</Link>

        {/* Desktop Nav - Large Spacing */}
        <div className="hidden md:flex items-center space-x-16 text-lg font-medium">
          <Link to="/" className="hover:text-teal-600 transition px-8">Home</Link>
          <Link to="/about" className="hover:text-teal-600 transition px-8">About</Link>
          <Link to="/contact" className="hover:text-teal-600 transition px-8">Contact</Link>
          <Link to="/login" className="hover:text-teal-600 transition px-8">Login</Link>
          <Link to="/signup" className="hover:text-teal-600 transition px-8">Signup</Link>
        </div>

        {/* Secondary Nav - Categories with Large Spacing */}
        <div className="hidden md:flex items-center space-x-16 text-lg font-medium">
          <Link to="/tech" className="hover:text-teal-600 transition px-8">Tech</Link>
          <Link to="/family" className="hover:text-teal-600 transition px-8">Family</Link>
          <Link to="/education" className="hover:text-teal-600 transition px-8">Education</Link>
          <Link to="/conference" className="hover:text-teal-600 transition px-8">Conference</Link>
          <Link to="/sports" className="hover:text-teal-600 transition px-8">Sports</Link>
        </div>

        {/* Mobile Hamburger */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-3xl">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-white border-t px-8 py-6 flex flex-col space-y-6 text-lg"
        >
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
          <Link to="/signup" onClick={() => setIsOpen(false)}>Signup</Link>
          <div className="pt-4 border-t">
            <Link to="/tech" onClick={() => setIsOpen(false)}>Tech</Link>
            <Link to="/family" onClick={() => setIsOpen(false)}>Family</Link>
            <Link to="/education" onClick={() => setIsOpen(false)}>Education</Link>
            <Link to="/conference" onClick={() => setIsOpen(false)}>Conference</Link>
            <Link to="/sports" onClick={() => setIsOpen(false)}>Sports</Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

export default NavBar;