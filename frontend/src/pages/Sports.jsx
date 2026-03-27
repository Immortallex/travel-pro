import { Link } from 'react-router-dom';
import sportsImg from '../assets/sports-general.jpg';

function Sports() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-8">
        <div className="relative h-96 rounded-3xl overflow-hidden mb-12">
          <img src={sportsImg} alt="Sports" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 flex items-end p-12">
            <h1 className="text-6xl font-bold text-white">Sports Travel Solutions</h1>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <Link to="/sports/football" className="bg-white p-10 rounded-3xl shadow-xl text-center text-3xl font-semibold hover:shadow-2xl transition">Football</Link>
          <Link to="/sports/basketball" className="bg-white p-10 rounded-3xl shadow-xl text-center text-3xl font-semibold hover:shadow-2xl transition">Basketball</Link>
        </div>
      </div>
    </div>
  );
}

export default Sports;