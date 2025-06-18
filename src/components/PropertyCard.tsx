
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, CreditCard } from "lucide-react";
import { Property } from "@/utils/mockData";
import { formatCurrency } from "@/utils/formatters";
import PropertyModal from './PropertyModal';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'off-market':
        return 'bg-blue-100 text-blue-800';
      case 'coming-soon':
        return 'bg-purple-100 text-purple-800';
      case 'lead':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <Card 
        className="overflow-hidden property-card-shadow cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative h-48 overflow-hidden">
          <img 
            src={property.images[0]} 
            alt={property.address}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsFavorite(!isFavorite);
            }}
            className="absolute top-3 right-3 p-1.5 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors"
          >
            <Heart 
              size={18} 
              fill={isFavorite ? "#ef4444" : "none"} 
              stroke={isFavorite ? "#ef4444" : "currentColor"}
            />
          </button>
          <div className="absolute bottom-3 left-3 flex gap-2">
            <Badge className={`${getStatusColor(property.listedStatus)}`}>
              {property.listedStatus === 'off-market' ? 'Fora do Mercado' : 
               property.listedStatus === 'coming-soon' ? 'Em Breve' : 'Lead'}
            </Badge>
            {property.vendorFinancing.available && (
              <Badge className="bg-green-100 text-green-800 flex items-center gap-1">
                <CreditCard size={12} />
                Financ. Vendedor
              </Badge>
            )}
          </div>
        </div>
        <CardContent className="p-4">
          <div className="mb-2 flex justify-between items-start">
            <h3 className="font-semibold text-lg truncate">{property.address}</h3>
          </div>
          <div className="text-sm text-gray-500 mb-3">{property.city}, {property.postcode}</div>
          <div className="font-bold text-lg text-property-navy mb-2">{formatCurrency(property.price)}</div>
          
          {property.vendorFinancing.available && (
            <div className="text-sm text-green-600 mb-2">
              Entrada: {property.vendorFinancing.downPaymentRequired}% • Taxa: {property.vendorFinancing.interestRate}%
            </div>
          )}
          
          <div className="flex justify-between items-center text-sm">
            <div className="flex space-x-3">
              <span>{property.bedrooms} quartos</span>
              <span>{property.bathrooms} wcs</span>
            </div>
            <div className="flex items-center">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1.5"></span>
              <span className="font-medium text-sm">{property.aiMatchScore}% match</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <PropertyModal 
        property={property} 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default PropertyCard;
