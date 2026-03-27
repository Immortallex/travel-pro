import aboutImg from '../assets/about-team.jpg';

function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-8">
        <h1 className="text-5xl font-bold text-center mb-6">About TravelPro</h1>
        <p className="text-xl text-center text-gray-600 max-w-2xl mx-auto mb-12">We provide professional visa, travel, and relocation solutions for individuals and families worldwide.</p>
        
        <img src={aboutImg} alt="Our Team" className="w-full rounded-3xl shadow-2xl mb-16" />
        
        <div className="grid md:grid-cols-2 gap-12 text-lg leading-relaxed">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p>Connecting talented professionals, families, students, and athletes with global opportunities through seamless travel and visa services.</p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4">Why Choose Us</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3"><span className="text-teal-600 text-2xl">✓</span> 100% success rate on visa applications</li>
              <li className="flex items-start gap-3"><span className="text-teal-600 text-2xl">✓</span> Crypto payment options (BTC & USDT)</li>
              <li className="flex items-start gap-3"><span className="text-teal-600 text-2xl">✓</span> Dedicated support 24/7</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;