import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Property } from "@/utils/mockData";
import { formatCurrency, formatDate } from "@/utils/formatters";
import { ChevronLeft, ChevronRight, Copy, MapPin, Phone, Mail, CreditCard } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import FinancingCalculator from './FinancingCalculator';

interface PropertyModalProps {
  property: Property;
  isOpen: boolean;
  onClose: () => void;
}

const PropertyModal = ({ property, isOpen, onClose }: PropertyModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { toast } = useToast();

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

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const handleCopyAddress = () => {
    const fullAddress = `${property.address}, ${property.city}, ${property.postcode}`;
    navigator.clipboard.writeText(fullAddress);
    toast({
      title: "Address Copied",
      description: "Property address copied to clipboard",
    });
  };

  const handleContactOwner = () => {
    toast({
      title: "Contact Request Sent",
      description: "A meeting request has been sent to the property owner",
    });
  };

  const handleFinancingInquiry = () => {
    toast({
      title: "Financing Inquiry Sent",
      description: "Your financing inquiry has been sent to the property owner",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] h-[90vh] flex flex-col p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <div className="flex justify-between items-start">
            <div>
              <DialogTitle className="text-xl">{property.address}</DialogTitle>
              <DialogDescription className="flex items-center mt-1">
                <MapPin size={14} className="mr-1" />
                {property.city}, {property.postcode}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 ml-1"
                  onClick={handleCopyAddress}
                >
                  <Copy size={14} />
                </Button>
              </DialogDescription>
            </div>
            <div className="flex gap-2">
              <Badge className={`${getStatusColor(property.listedStatus)}`}>
                {property.listedStatus === 'off-market' 
                  ? 'Off Market' 
                  : property.listedStatus === 'coming-soon' 
                  ? 'Coming Soon' 
                  : 'Lead'}
              </Badge>
              {property.vendorFinancing.available && (
                <Badge className="bg-green-100 text-green-800 flex items-center gap-1">
                  <CreditCard size={12} />
                  Seller Finance
                </Badge>
              )}
            </div>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto px-6">
          {/* Image Gallery */}
          <div className="relative mt-4 mb-6 h-72 bg-gray-100 rounded-md overflow-hidden">
            <img
              src={property.images[currentImageIndex]}
              alt={property.address}
              className="w-full h-full object-cover"
            />
            <button
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 rounded-full p-1.5"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 rounded-full p-1.5"
            >
              <ChevronRight size={20} />
            </button>
            <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
              {currentImageIndex + 1} / {property.images.length}
            </div>
          </div>

          {/* Property Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-50 p-3 rounded-md">
              <div className="text-sm text-gray-500">Price</div>
              <div className="font-bold">{formatCurrency(property.price)}</div>
            </div>
            <div className="bg-gray-50 p-3 rounded-md">
              <div className="text-sm text-gray-500">Potential Value</div>
              <div className="font-bold">{formatCurrency(property.potentialValue)}</div>
            </div>
            <div className="bg-gray-50 p-3 rounded-md">
              <div className="text-sm text-gray-500">AI Score</div>
              <div className="font-bold flex items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1.5"></span>
                {property.aiMatchScore}%
              </div>
            </div>
            <div className="bg-gray-50 p-3 rounded-md">
              <div className="text-sm text-gray-500">Added</div>
              <div className="font-medium">{formatDate(property.dateAdded)}</div>
            </div>
          </div>

          <Tabs defaultValue="details">
            <TabsList className={`grid w-full ${property.vendorFinancing.available ? 'grid-cols-4' : 'grid-cols-3'}`}>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="owner">Owner</TabsTrigger>
              <TabsTrigger value="ai">AI Analysis</TabsTrigger>
              {property.vendorFinancing.available && (
                <TabsTrigger value="financing">Financing</TabsTrigger>
              )}
            </TabsList>
            
            <TabsContent value="details" className="pt-4">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Property Type</h4>
                    <p>{property.propertyType}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Area (m²)</h4>
                    <p>{property.squareFeet} m²</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Bedrooms</h4>
                    <p>{property.bedrooms}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Bathrooms</h4>
                    <p>{property.bathrooms}</p>
                  </div>
                </div>

                <Separator />
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Description</h4>
                  <p className="text-sm">{property.description}</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="owner" className="pt-4">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="font-medium">Contact Information</h4>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-2">Name:</span>
                      <span>{property.ownerInfo.name}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone size={14} className="text-gray-500 mr-2" />
                      <span>{property.ownerInfo.contact}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail size={14} className="text-gray-500 mr-2" />
                      <span>{property.ownerInfo.email}</span>
                    </div>
                  </div>
                </div>
                
                {property.ownerInfo.situation && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Owner Situation</h4>
                    <p className="text-sm">{property.ownerInfo.situation}</p>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="ai" className="pt-4">
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-md">
                  <h4 className="font-medium flex items-center">
                    <span className="text-property-blue mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 8V4m-1 2.5h2M4 10h4m-2 1V8m14 2h-4m2 1V8m-7 14a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"/>
                      </svg>
                    </span>
                    AI Analysis
                  </h4>
                  <div className="mt-2 text-sm space-y-2">
                    <p>This property has a <strong>high score of {property.aiMatchScore}%</strong> based on your criteria for the Portuguese market.</p>
                    <p>Potential profit: <strong>{formatCurrency(property.potentialValue - property.price)}</strong> after standard renovations and Portuguese market appreciation.</p>
                    <p>The seller appears <strong>motivated</strong> due to {property.ownerInfo.situation?.toLowerCase()}. Off-market properties in Portugal typically sell 8-15% below market value.</p>
                    <p>Similar properties in this Portuguese region typically receive multiple offers within 21 days of off-market listing.</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="font-medium">Portuguese Market Insights</h4>
                  <div className="mt-2 text-sm">
                    <p>Properties in {property.city} have appreciated 8.5% year-over-year, driven by Golden Visa and D7 programs.</p>
                    <p className="mt-1">Average days on market: 28 days</p>
                    <p className="mt-1">International buyer demand in this area: <strong>High</strong></p>
                    <p className="mt-1">Rental yield potential: <strong>4.5-6.2%</strong> annually</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {property.vendorFinancing.available && (
              <TabsContent value="financing" className="pt-4">
                <div className="space-y-6">
                  <div className="bg-green-50 p-4 rounded-md">
                    <h4 className="font-medium flex items-center mb-2">
                      <CreditCard size={16} className="mr-2 text-green-600" />
                      Seller Financing Available
                    </h4>
                    <p className="text-sm text-green-700 mb-3">{property.vendorFinancing.reasonForOffering}</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Minimum down payment:</span>
                        <span className="font-medium ml-2">{property.vendorFinancing.downPaymentRequired}%</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Interest rate:</span>
                        <span className="font-medium ml-2">{property.vendorFinancing.interestRate}%</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Maximum term:</span>
                        <span className="font-medium ml-2">{property.vendorFinancing.termYears} years</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Monthly payment:</span>
                        <span className="font-medium ml-2">{formatCurrency(property.vendorFinancing.monthlyPayment || 0)}</span>
                      </div>
                    </div>
                  </div>

                  <FinancingCalculator 
                    propertyPrice={property.price}
                    vendorFinancing={property.vendorFinancing}
                  />

                  <div className="bg-amber-50 p-4 rounded-md">
                    <h4 className="font-medium mb-2">Terms and Requirements</h4>
                    <ul className="text-sm space-y-1">
                      {property.vendorFinancing.conditions.map((condition, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-amber-600 mr-2">•</span>
                          {condition}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded">
                    <p className="mb-1"><strong>Legal Notice:</strong> Seller financing is subject to approval and financial verification.</p>
                    <p>We recommend consulting with a lawyer specialized in Portuguese real estate law before proceeding.</p>
                  </div>
                </div>
              </TabsContent>
            )}
          </Tabs>
        </div>

        <DialogFooter className="px-6 py-4 border-t">
          <Button variant="outline" onClick={onClose} className="mr-2">
            Close
          </Button>
          {property.vendorFinancing.available && (
            <Button variant="outline" onClick={handleFinancingInquiry} className="mr-2">
              <CreditCard size={16} className="mr-1" />
              Financing Inquiry
            </Button>
          )}
          <Button onClick={handleContactOwner}>
            Contact Owner
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PropertyModal;
