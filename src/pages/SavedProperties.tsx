
import Navbar from "@/components/Navbar";
import PropertyCard from "@/components/PropertyCard";
import { useFavorites } from "@/contexts/FavoritesContext";
import { Heart } from "lucide-react";

const SavedProperties = () => {
  const { favorites } = useFavorites();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-property-navy mb-6">Saved Properties</h1>
        
        {favorites.length > 0 ? (
          <>
            <div className="mb-4">
              <p className="text-gray-600">You have {favorites.length} saved {favorites.length === 1 ? 'property' : 'properties'}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favorites.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="mb-4">
              <Heart size={48} className="mx-auto text-gray-300" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No saved properties yet</h3>
            <p className="text-gray-600 mb-4">Start saving properties by clicking the heart icon on any property card.</p>
            <p className="text-sm text-gray-500">Your saved properties will appear here for easy access.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedProperties;
