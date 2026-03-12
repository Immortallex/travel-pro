import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

function NavBar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);
  const closeMobileMenu = () => {
    setIsMobileOpen(false);
    setSearchQuery('');
  };

  // All searchable categories / sub-pages
  const categories = [
    { name: 'Tech', path: '/tech' },
    { name: 'Family', path: '/family' },
    { name: 'Education', path: '/education' },
    { name: 'Conference', path: '/conference' },
    { name: 'Sports', path: '/sports' },
    { name: 'Football', path: '/sports/football' },
    { name: 'Basketball', path: '/sports/basketball' },
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Filter categories based on search query
  const filteredResults = categories.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (filteredResults.length > 0) {
      // Go to the first/best match
      navigate(filteredResults[0].path);
      setSearchQuery('');
      closeMobileMenu();
    }
  };

  const handleResultClick = (path) => {
    navigate(path);
    setSearchQuery('');
    closeMobileMenu();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl md:text-4xl font-bold text-indigo-900 tracking-tight">
          TravelPro
        </Link>

        {/* Desktop Nav + Search */}
        <div className="hidden md:flex items-center gap-x-10 flex-1 justify-center">
          {/* Navigation Links */}
          <nav className="flex items-center gap-x-10 lg:gap-x-16 text-base font-medium text-gray-700">
            <Link to="/" className="hover:text-teal-600 transition duration-300">Home</Link>
            <Link to="/about" className="hover:text-teal-600 transition duration-300">About</Link>
            <Link to="/contact" className="hover:text-teal-600 transition duration-300">Contact</Link>
            <Link to="/tech" className="hover:text-teal-600 transition duration-300">Tech</Link>
            <Link to="/family" className="hover:text-teal-600 transition duration-300">Family</Link>
            <Link to="/education" className="hover:text-teal-600 transition duration-300">Education</Link>
            <Link to="/conference" className="hover:text-teal-600 transition duration-300">Conference</Link>

            {/* Sports Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-teal-600 transition duration-300">
                Sports
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 mt-3 hidden group-hover:block bg-white rounded-xl shadow-2xl border border-gray-200 min-w-[180px] overflow-hidden">
                <Link to="/sports/football" className="block px-6 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition">Football</Link>
                <Link to="/sports/basketball" className="block px-6 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition">Basketball</Link>
              </div>
            </div>
          </nav>

          {/* Search Bar */}
          <div className="relative flex-1 max-w-md mx-8">
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="       "
                className="w-full pl-10 pr-4 py-2.5 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition text-gray-800"
              />
              <button
                type="submit"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-teal-600 transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>

            {/* Search Results Dropdown */}
            {searchQuery.trim() && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 max-h-80 overflow-y-auto z-50">
                {filteredResults.length > 0 ? (
                  filteredResults.map((item) => (
                    <button
                      key={item.path}
                      onClick={() => handleResultClick(item.path)}
                      className="w-full text-left px-6 py-3 text-gray-800 hover:bg-teal-50 hover:text-teal-600 transition"
                    >
                      {item.name}
                    </button>
                  ))
                ) : (
                  <div className="px-6 py-4 text-gray-500 text-center">
                    No results found
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Desktop Login/Signup */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="px-7 py-2.5 border-2 border-amber-500 text-amber-600 font-medium rounded-xl hover:bg-amber-500 hover:text-white transition duration-300"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-7 py-2.5 bg-amber-500 text-white font-medium rounded-xl hover:bg-amber-600 transition duration-300"
          >
            Signup
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.4 }}
          className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
        >
          <div className="flex flex-col items-center gap-y-5 py-8 px-6">
            {/* Mobile Search */}
            <form onSubmit={handleSearchSubmit} className="w-full max-w-sm">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search categories..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                />
                <button type="submit" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-teal-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </form>

            {/* Mobile Search Results (if any) */}
            {searchQuery.trim() && (
              <div className="w-full max-w-sm bg-gray-50 rounded-lg shadow-inner border border-gray-200 max-h-60 overflow-y-auto">
                {filteredResults.length > 0 ? (
                  filteredResults.map((item) => (
                    <button
                      key={item.path}
                      onClick={() => handleResultClick(item.path)}
                      className="w-full text-left px-6 py-3 text-gray-800 hover:bg-teal-50 hover:text-teal-600 transition"
                    >
                      {item.name}
                    </button>
                  ))
                ) : (
                  <div className="px-6 py-4 text-gray-500 text-center">
                    No results found
                  </div>
                )}
              </div>
            )}

            {/* Mobile Links */}
            <Link to="/" onClick={closeMobileMenu} className="hover:text-teal-600 transition">Home</Link>
            <Link to="/about" onClick={closeMobileMenu} className="hover:text-teal-600 transition">About</Link>
            <Link to="/contact" onClick={closeMobileMenu} className="hover:text-teal-600 transition">Contact</Link>
            <Link to="/tech" onClick={closeMobileMenu} className="hover:text-teal-600 transition">Tech</Link>
            <Link to="/family" onClick={closeMobileMenu} className="hover:text-teal-600 transition">Family</Link>
            <Link to="/education" onClick={closeMobileMenu} className="hover:text-teal-600 transition">Education</Link>
            <Link to="/conference" onClick={closeMobileMenu} className="hover:text-teal-600 transition">Conference</Link>

            <div className="w-full text-center">
              <div className="font-medium text-gray-700 mb-2">Sports</div>
              <div className="bg-gray-50 rounded-lg shadow-inner border border-gray-200">
                <Link to="/sports/football" onClick={closeMobileMenu} className="block py-3 px-6 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition">Football</Link>
                <Link to="/sports/basketball" onClick={closeMobileMenu} className="block py-3 px-6 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition">Basketball</Link>
              </div>
            </div>

            <Link
              to="/login"
              onClick={closeMobileMenu}
              className="px-12 py-3 border-2 border-amber-500 text-amber-600 font-medium rounded-xl hover:bg-amber-500 hover:text-white transition w-full max-w-xs text-center"
            >
              Login
            </Link>
            <Link
              to="/signup"
              onClick={closeMobileMenu}
              className="px-12 py-3 bg-amber-500 text-white font-medium rounded-xl hover:bg-amber-600 transition w-full max-w-xs text-center"
            >
              Signup
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}

export default NavBar;