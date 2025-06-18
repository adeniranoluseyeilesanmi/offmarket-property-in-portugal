
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import SearchFilters from "@/components/SearchFilters";
import PropertyCard from "@/components/PropertyCard";
import AIAssistant from "@/components/AIAssistant";
import { mockProperties, Property } from "@/utils/mockData";
import { Button } from "@/components/ui/button";
import { BarChartIcon, Download, FileText, Plus, RefreshCw } from "lucide-react";

const Index = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API loading delay
    const timer = setTimeout(() => {
      setProperties(mockProperties);
      setFilteredProperties(mockProperties);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleFilterChange = (filters: any) => {
    let results = [...properties];
    
    // Apply location filter
    if (filters.location !== 'Any Location') {
      results = results.filter(property => property.city === filters.location);
    }
    
    // Apply property type filter
    if (filters.propertyType !== 'Any Type') {
      results = results.filter(property => property.propertyType === filters.propertyType);
    }
    
    // Apply price range filter
    results = results.filter(property => 
      property.price >= filters.minPrice && property.price <= filters.maxPrice
    );
    
    // Apply bedrooms filter
    if (filters.bedrooms !== 'Any') {
      const minBedrooms = parseInt(filters.bedrooms.replace('+', ''));
      results = results.filter(property => property.bedrooms >= minBedrooms);
    }
    
    // Apply AI match score filter
    results = results.filter(property => property.aiMatchScore >= filters.aiMatchMin);
    
    // Apply keyword filter
    if (filters.keywords.trim()) {
      const keywords = filters.keywords.toLowerCase().split(' ');
      results = results.filter(property => 
        keywords.some(keyword => 
          property.address.toLowerCase().includes(keyword) || 
          property.description.toLowerCase().includes(keyword) || 
          property.city.toLowerCase().includes(keyword)
        )
      );
    }
    
    setFilteredProperties(results);
  };

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-property-navy">Off-Market Properties in Portugal</h1>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="hidden md:flex">
              <Download size={16} className="mr-1" /> Export
            </Button>
            <Button variant="outline" size="sm" className="hidden md:flex">
              <BarChartIcon size={16} className="mr-1" /> Reports
            </Button>
            <Button size="sm" onClick={handleRefresh}>
              <RefreshCw size={16} className="mr-1" /> Refresh
            </Button>
          </div>
        </div>

        <SearchFilters onFilterChange={handleFilterChange} />

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden property-card-shadow h-[360px]">
                <div className="h-48 bg-gray-200 animate-pulse"></div>
                <div className="p-4">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-3 animate-pulse"></div>
                  <div className="h-6 bg-gray-200 rounded w-1/3 mb-3 animate-pulse"></div>
                  <div className="flex justify-between">
                    <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="bg-gray-100 p-4 rounded-full mb-4">
                  <FileText size={28} className="text-property-gray" />
                </div>
                <h3 className="text-lg font-medium mb-1">No properties found</h3>
                <p className="text-gray-500 text-center mb-6 max-w-md">
                  No properties match your current filters. Try adjusting your search criteria or adding a new property.
                </p>
                <Button size="sm" className="flex items-center">
                  <Plus size={16} className="mr-1" /> Add Property
                </Button>
              </div>
            )}
          </>
        )}
      </main>
      
      <AIAssistant />
    </div>
  );
};

export default Index;
