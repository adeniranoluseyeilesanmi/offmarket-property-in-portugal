
import Navbar from "@/components/Navbar";

const Analytics = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-property-navy mb-6">Analytics</h1>
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <p className="text-gray-600 mb-4">Property market analytics and insights will be displayed here.</p>
          <p className="text-sm text-gray-500">Track market trends, property values, and investment opportunities.</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
