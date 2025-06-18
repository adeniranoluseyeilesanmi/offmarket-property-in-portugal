import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
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
    location: 'Qualquer Localização',
    propertyType: 'Qualquer Tipo',
    minPrice: 0,
    maxPrice: 10000000,
    bedrooms: 'Qualquer',
    aiMatchMin: 0,
    keywords: '',
    vendorFinancingOnly: false,
    maxDownPayment: 50,
    maxMonthlyPayment: 10000,
  });

  const [priceRange, setPriceRange] = useState([0]);
  const [aiMatchRange, setAiMatchRange] = useState([0]);
  const [downPaymentRange, setDownPaymentRange] = useState([50]);
  const [monthlyPaymentRange, setMonthlyPaymentRange] = useState([100]);
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

  const handleDownPaymentSliderChange = (newValue: number[]) => {
    setDownPaymentRange(newValue);
    handleFilterChange('maxDownPayment', newValue[0]);
  };

  const handleMonthlyPaymentSliderChange = (newValue: number[]) => {
    setMonthlyPaymentRange(newValue);
    handleFilterChange('maxMonthlyPayment', newValue[0] * 100);
  };

  const handleReset = () => {
    const defaultFilters = {
      location: 'Qualquer Localização',
      propertyType: 'Qualquer Tipo',
      minPrice: 0,
      maxPrice: 10000000,
      bedrooms: 'Qualquer',
      aiMatchMin: 0,
      keywords: '',
      vendorFinancingOnly: false,
      maxDownPayment: 50,
      maxMonthlyPayment: 10000,
    };
    setFilters(defaultFilters);
    setPriceRange([0]);
    setAiMatchRange([0]);
    setDownPaymentRange([50]);
    setMonthlyPaymentRange([100]);
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
              <SelectValue placeholder="Localização" />
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
              <SelectValue placeholder="Tipo de Propriedade" />
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
              <SelectValue placeholder="Faixa de Preço" />
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
              <SelectValue placeholder="Quartos" />
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
            Limpar
          </Button>
          <Button 
            className="w-full"
            onClick={() => setIsAdvancedFiltersVisible(!isAdvancedFiltersVisible)}
          >
            {isAdvancedFiltersVisible ? 'Menos Filtros' : 'Mais Filtros'}
          </Button>
        </div>
      </div>

      {/* Advanced Filters */}
      {isAdvancedFiltersVisible && (
        <div className="mt-4 pt-4 border-t space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block mb-2 text-sm font-medium">
                Faixa de Preço: {filters.maxPrice === 10000000 ? 'Qualquer' : `Até €${(filters.maxPrice).toLocaleString()}`}
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
                Score AI: {filters.aiMatchMin}%+
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
              <label className="block mb-2 text-sm font-medium">Palavras-chave (endereço, descrição)</label>
              <Input 
                placeholder="ex: jardim, renovação, venda rápida" 
                value={filters.keywords}
                onChange={(e) => handleFilterChange('keywords', e.target.value)}
              />
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="text-sm font-medium mb-4 text-green-700">Filtros de Financiamento do Vendedor</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Switch 
                  checked={filters.vendorFinancingOnly}
                  onCheckedChange={(checked) => handleFilterChange('vendorFinancingOnly', checked)}
                />
                <label className="text-sm">Apenas com Financiamento do Vendedor</label>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Entrada máxima: {downPaymentRange[0]}%
                </label>
                <Slider 
                  value={downPaymentRange}
                  onValueChange={handleDownPaymentSliderChange}
                  max={50}
                  min={10}
                  step={5}
                  className="py-4"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Pagamento mensal máximo: €{monthlyPaymentRange[0] * 100}
                </label>
                <Slider 
                  value={monthlyPaymentRange}
                  onValueChange={handleMonthlyPaymentSliderChange}
                  max={50}
                  min={5}
                  step={5}
                  className="py-4"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFilters;
