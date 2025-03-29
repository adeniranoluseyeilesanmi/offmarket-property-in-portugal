
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { 
  cities, 
  propertyTypes, 
  priceRanges,
  bedroomOptions 
} from "@/utils/mockData";

interface SearchFiltersProps {
  onFilterChange: (filters: any) => void;
}

const SearchFilters = ({ onFilterChange }: SearchFiltersProps) => {
  const [filters, setFilters] = useState({
    location: 'Any Location',
    propertyType: 'Any Type',
    minPrice: 0,
    maxPrice: 10000000,
    bedrooms: 'Any',
    aiMatchMin: 0,
    keywords: '',
  });

  const [priceRange, setPriceRange] = useState([0]);
  const [aiMatchRange, setAiMatchRange] = useState([0]);
  const [isAdvancedFiltersVisible, setIsAdvancedFiltersVisible] = useState(false);

  const handleFilterChange = (key: string, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handlePriceRangeSelect = (value: string) => {
    const selectedRange = priceRanges.find(range => range.label === value);
    if (selectedRange) {
      handleFilterChange('minPrice', selectedRange.min);
      handleFilterChange('maxPrice', selectedRange.max);
    }
  };

  const handlePriceSliderChange = (newValue: number[]) => {
    setPriceRange(newValue);
    handleFilterChange('minPrice', 0);
    handleFilterChange('maxPrice', Math.round(10000000 * (newValue[0] / 100)));
  };

  const handleAiMatchSliderChange = (newValue: number[]) => {
    setAiMatchRange(newValue);
    handleFilterChange('aiMatchMin', newValue[0]);
  };

  const handleReset = () => {
    const defaultFilters = {
      location: 'Any Location',
      propertyType: 'Any Type',
      minPrice: 0,
      maxPrice: 10000000,
      bedrooms: 'Any',
      aiMatchMin: 0,
      keywords: '',
    };
    setFilters(defaultFilters);
    setPriceRange([0]);
    setAiMatchRange([0]);
    onFilterChange(defaultFilters);
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-sm border mb-6">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Location */}
        <div className="w-full lg:w-1/5">
          <Select
            value={filters.location}
            onValueChange={(value) => handleFilterChange('location', value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              {cities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Property Type */}
        <div className="w-full lg:w-1/5">
          <Select
            value={filters.propertyType}
            onValueChange={(value) => handleFilterChange('propertyType', value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              {propertyTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Price Range */}
        <div className="w-full lg:w-1/5">
          <Select
            onValueChange={handlePriceRangeSelect}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>
            <SelectContent>
              {priceRanges.map((range) => (
                <SelectItem key={range.label} value={range.label}>
                  {range.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Bedrooms */}
        <div className="w-full lg:w-1/5">
          <Select
            value={filters.bedrooms}
            onValueChange={(value) => handleFilterChange('bedrooms', value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Bedrooms" />
            </SelectTrigger>
            <SelectContent>
              {bedroomOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Submit/Reset Buttons */}
        <div className="w-full lg:w-1/5 flex space-x-2">
          <Button 
            className="w-full" 
            variant="outline"
            onClick={handleReset}
          >
            Reset
          </Button>
          <Button 
            className="w-full"
            onClick={() => setIsAdvancedFiltersVisible(!isAdvancedFiltersVisible)}
          >
            {isAdvancedFiltersVisible ? 'Less Filters' : 'More Filters'}
          </Button>
        </div>
      </div>

      {/* Advanced Filters */}
      {isAdvancedFiltersVisible && (
        <div className="mt-4 pt-4 border-t grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-sm font-medium">
              Price Range: {filters.maxPrice === 10000000 ? 'Any' : `Up to £${(filters.maxPrice).toLocaleString()}`}
            </label>
            <Slider 
              defaultValue={[0]} 
              max={100} 
              step={1} 
              value={priceRange}
              onValueChange={handlePriceSliderChange}
              className="py-4"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              AI Match Score: {filters.aiMatchMin}%+
            </label>
            <Slider 
              defaultValue={[0]} 
              max={100} 
              step={5} 
              value={aiMatchRange}
              onValueChange={handleAiMatchSliderChange}
              className="py-4"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Keywords (address, description)</label>
            <Input 
              placeholder="e.g. garden, renovation, quick sale" 
              value={filters.keywords}
              onChange={(e) => handleFilterChange('keywords', e.target.value)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFilters;
