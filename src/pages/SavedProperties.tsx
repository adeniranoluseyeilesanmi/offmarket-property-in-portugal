
import Navbar from "@/components/Navbar";

const SavedProperties = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-property-navy mb-6">Saved Properties</h1>
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <p className="text-gray-600 mb-4">Your saved properties will appear here.</p>
          <p className="text-sm text-gray-500">Start saving properties from the dashboard to see them in this section.</p>
        </div>
      </div>
    </div>
  );
};

export default SavedProperties;
