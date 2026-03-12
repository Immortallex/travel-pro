import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Tech from './pages/Tech';
import Family from './pages/Family';
import Education from './pages/Education';
import Conference from './pages/Conference';
import Sports from './pages/Sports';
import Football from './pages/Football';
import Basketball from './pages/Basketball';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-indigo-50/30">
        <NavBar />
        <main className="container mx-auto max-w-5xl px-6 pt-52 pb-24"> {/* pt-52 clears dual nav, max-w-5xl centers tightly */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/family" element={<Family />} />
            <Route path="/education" element={<Education />} />
            <Route path="/conference" element={<Conference />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/sports/football" element={<Football />} />
            <Route path="/sports/basketball" element={<Basketball />} />
          </Routes>
        </main>
        <footer className="bg-indigo-950 text-white text-center py-8 border-t border-indigo-800/40">
          © 2026 TravelPro – Professional Travel Solutions | Lagos, Nigeria
        </footer>
      </div>
    </Router>
  );
}

export default App;