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
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <NavBar />
        <main className="pt-32 pb-20 centered">
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
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        <footer className="bg-[#001f3f] text-white text-center py-8">© 2026 TravelPro – Professional Travel Solutions | Lagos, Nigeria</footer>
      </div>
    </Router>
  );
}

export default App;