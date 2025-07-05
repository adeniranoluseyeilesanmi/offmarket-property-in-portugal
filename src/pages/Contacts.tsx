
import Navbar from "@/components/Navbar";

const Contacts = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-property-navy mb-6">Contacts</h1>
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <p className="text-gray-600 mb-4">Manage your real estate contacts and connections.</p>
          <p className="text-sm text-gray-500">Keep track of agents, buyers, sellers, and other important contacts.</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
