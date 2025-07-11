import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";

const SearchBar = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* Desktop Search */}
      <div className="hidden md:block relative w-64 lg:w-80">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-property-gray" />
        <Input 
          placeholder="Search properties..." 
          className="pl-9 bg-gray-50 border-gray-200"
        />
      </div>

      {/* Mobile Search Toggle */}
      <button 
        className="md:hidden text-property-navy"
        onClick={() => setSearchOpen(!searchOpen)}
      >
        {searchOpen ? <X size={20} /> : <Search size={20} />}
      </button>

      {/* Mobile Search Bar */}
      {searchOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white p-2 shadow-md z-50 md:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-property-gray" />
            <Input 
              placeholder="Search properties..." 
              className="pl-9 bg-gray-50 border-gray-200 w-full"
              autoFocus
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;