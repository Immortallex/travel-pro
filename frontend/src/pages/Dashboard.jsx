function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-8">
        <h1 className="text-5xl font-bold text-teal-600 mb-8">Welcome to Your Dashboard</h1>
        <div className="bg-white rounded-3xl shadow-xl p-10">
          <p className="text-2xl mb-6">Your Saved Applications &amp; Payments</p>
          <div className="text-gray-500 text-lg">
            You have no applications yet.<br />
            Start by applying in any category (Tech, Family, Education, etc.).
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;