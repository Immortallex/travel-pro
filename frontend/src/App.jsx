import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <NavBar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Routes - Upload & Payment only after login */}
          <Route path="/tech" element={<PrivateRoute><Tech /></PrivateRoute>} />
          <Route path="/family" element={<PrivateRoute><Family /></PrivateRoute>} />
          <Route path="/education" element={<PrivateRoute><Education /></PrivateRoute>} />
          <Route path="/conference" element={<PrivateRoute><Conference /></PrivateRoute>} />
          <Route path="/sports" element={<PrivateRoute><Sports /></PrivateRoute>} />
          <Route path="/sports/football" element={<PrivateRoute><Football /></PrivateRoute>} />
          <Route path="/sports/basketball" element={<PrivateRoute><Basketball /></PrivateRoute>} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;