import { motion } from 'framer-motion';
import aboutTeam from '../assets/about-team.jpg';

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-12"
    >
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-900">About TravelPro</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Founded in 2026, TravelPro specializes in profession-tailored travel. Our team ensures seamless experiences for tech pros, families, students, and athletes.
        </p>
        <img
          src={aboutTeam}
          alt="TravelPro team"
          className="hero-img mx-auto"
        />
      </div>
      <div className="grid md:grid-cols-2 gap-12 mt-16">
        <div className="card">
          <h3 className="text-xl font-semibold text-indigo-900">Our Mission</h3>
          <p className="text-gray-600">To make travel accessible and customized for every profession worldwide.</p>
        </div>
        <div className="card">
          <h3 className="text-xl font-semibold text-indigo-900">Our Team</h3>
          <p className="text-gray-600">Expert travel agents, visa specialists, and tech innovators dedicated to your journey.</p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;