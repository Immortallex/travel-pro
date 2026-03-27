import { Link } from 'react-router-dom';
import heroImg from '../assets/hero-travel.jpg';

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Title on Top of Picture */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <img 
          src={heroImg} 
          alt="TravelPro Hero" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-7xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            WELCOME TO TRAVELPRO
          </h1>
          <p className="text-3xl md:text-4xl font-medium text-white mb-12">
            Professional Travel Solutions that define your Journey
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              to="/tech" 
              className="bg-white text-teal-600 px-12 py-5 rounded-2xl text-2xl font-semibold hover:bg-teal-50 transition-all active:scale-95 shadow-lg"
            >
              Start Tech Application
            </Link>
            <Link 
              to="/family" 
              className="bg-white text-teal-600 px-12 py-5 rounded-2xl text-2xl font-semibold hover:bg-teal-50 transition-all active:scale-95 shadow-lg"
            >
              Family Travel
            </Link>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-8 py-24">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-800">
          Choose Your Travel Specialization
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          <Link to="/tech" className="group">
            <div className="h-80 bg-gray-200 rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="/src/assets/tech-event.jpg" 
                alt="Tech" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
            </div>
            <p className="text-3xl font-semibold text-center mt-6 text-gray-800">Tech</p>
          </Link>

          <Link to="/family" className="group">
            <div className="h-80 bg-gray-200 rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="/src/assets/family-vacation.jpg" 
                alt="Family" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
            </div>
            <p className="text-3xl font-semibold text-center mt-6 text-gray-800">Family</p>
          </Link>

          <Link to="/education" className="group">
            <div className="h-80 bg-gray-200 rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="/src/assets/education-study.jpg" 
                alt="Education" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
            </div>
            <p className="text-3xl font-semibold text-center mt-6 text-gray-800">Education</p>
          </Link>

          <Link to="/conference" className="group">
            <div className="h-80 bg-gray-200 rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="/src/assets/conference-event.jpg" 
                alt="Conference" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
            </div>
            <p className="text-3xl font-semibold text-center mt-6 text-gray-800">Conference</p>
          </Link>

          <Link to="/sports" className="group">
            <div className="h-80 bg-gray-200 rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="/src/assets/sports-general.jpg" 
                alt="Sports" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
            </div>
            <p className="text-3xl font-semibold text-center mt-6 text-gray-800">Sports</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;