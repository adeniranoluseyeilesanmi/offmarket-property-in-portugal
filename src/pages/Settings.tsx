
import Navbar from "@/components/Navbar";

const Settings = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-property-navy mb-6">Settings</h1>
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <p className="text-gray-600 mb-4">Configure your account settings and preferences.</p>
          <p className="text-sm text-gray-500">Customize your experience and manage your account details.</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
