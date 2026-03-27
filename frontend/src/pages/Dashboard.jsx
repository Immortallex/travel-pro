function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-8">
        <h1 className="text-5xl font-bold mb-8">Welcome to Your Dashboard</h1>
        <div className="bg-white p-12 rounded-3xl shadow-xl">
          <p className="text-2xl mb-8">Your Applications</p>
          <div className="text-gray-500">No applications yet. Start by applying in any category.</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;