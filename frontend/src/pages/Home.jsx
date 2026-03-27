import { Link } from 'react-router-dom';
import heroImg from '../assets/hero-travel.jpg';

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        <img src={heroImg} alt="TravelPro Hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative text-center z-10 px-6 max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-white mb-4">WELCOME TO TRAVELPRO</h1>
          <p className="text-3xl font-medium text-white mb-12">Professional Travel Solutions that define your Journey</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/tech" className="bg-white text-teal-600 px-10 py-4 rounded-2xl text-xl font-semibold hover:bg-teal-100 transition">Start with Tech</Link>
            <Link to="/family" className="bg-white text-teal-600 px-10 py-4 rounded-2xl text-xl font-semibold hover:bg-teal-100 transition">Family Travel</Link>
            <Link to="/education" className="bg-white text-teal-600 px-10 py-4 rounded-2xl text-xl font-semibold hover:bg-teal-100 transition">Education Abroad</Link>
          </div>
        </div>
      </div>

      {/* Quick Categories */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Explore Our Specializations</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <Link to="/tech" className="group text-center">
            <div className="h-64 bg-gray-200 rounded-3xl overflow-hidden mb-6 shadow-lg">
              <img src="/src/assets/tech-event.jpg" alt="Tech" className="w-full h-full object-cover group-hover:scale-110 transition" />
            </div>
            <p className="text-2xl font-semibold">Tech</p>
          </Link>
          <Link to="/family" className="group text-center">
            <div className="h-64 bg-gray-200 rounded-3xl overflow-hidden mb-6 shadow-lg">
              <img src="/src/assets/family-vacation.jpg" alt="Family" className="w-full h-full object-cover group-hover:scale-110 transition" />
            </div>
            <p className="text-2xl font-semibold">Family</p>
          </Link>
          <Link to="/education" className="group text-center">
            <div className="h-64 bg-gray-200 rounded-3xl overflow-hidden mb-6 shadow-lg">
              <img src="/src/assets/education-study.jpg" alt="Education" className="w-full h-full object-cover group-hover:scale-110 transition" />
            </div>
            <p className="text-2xl font-semibold">Education</p>
          </Link>
          <Link to="/conference" className="group text-center">
            <div className="h-64 bg-gray-200 rounded-3xl overflow-hidden mb-6 shadow-lg">
              <img src="/src/assets/conference-event.jpg" alt="Conference" className="w-full h-full object-cover group-hover:scale-110 transition" />
            </div>
            <p className="text-2xl font-semibold">Conference</p>
          </Link>
          <Link to="/sports" className="group text-center">
            <div className="h-64 bg-gray-200 rounded-3xl overflow-hidden mb-6 shadow-lg">
              <img src="/src/assets/sports-general.jpg" alt="Sports" className="w-full h-full object-cover group-hover:scale-110 transition" />
            </div>
            <p className="text-2xl font-semibold">Sports</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;