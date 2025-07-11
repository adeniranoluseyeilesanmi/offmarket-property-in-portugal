
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Menu, Search, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="mr-2 text-property-blue">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <Link to="/">
            <h1 className="text-xl font-bold text-property-navy hidden sm:block">OffMarket AI</h1>
            <h1 className="text-xl font-bold text-property-navy sm:hidden">OMA</h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link 
            to="/" 
            className={`font-medium transition-colors ${
              isActive('/') 
                ? 'text-property-blue font-semibold' 
                : 'text-property-navy hover:text-property-blue'
            }`}
          >
            Dashboard
          </Link>
          <Link 
            to="/saved-properties" 
            className={`font-medium transition-colors ${
              isActive('/saved-properties') 
                ? 'text-property-blue font-semibold' 
                : 'text-property-navy hover:text-property-blue'
            }`}
          >
            Saved Properties
          </Link>
          <Link 
            to="/analytics" 
            className={`font-medium transition-colors ${
              isActive('/analytics') 
                ? 'text-property-blue font-semibold' 
                : 'text-property-navy hover:text-property-blue'
            }`}
          >
            Analytics
          </Link>
          <Link 
            to="/contacts" 
            className={`font-medium transition-colors ${
              isActive('/contacts') 
                ? 'text-property-blue font-semibold' 
                : 'text-property-navy hover:text-property-blue'
            }`}
          >
            Contacts
          </Link>
          <Link 
            to="/settings" 
            className={`font-medium transition-colors ${
              isActive('/settings') 
                ? 'text-property-blue font-semibold' 
                : 'text-property-navy hover:text-property-blue'
            }`}
          >
            Settings
          </Link>
        </nav>

        {/* Search bar - Desktop */}
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

        {/* User Menu & Notifications */}
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="relative">
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>
          
          <Avatar>
            <AvatarImage src="https://i.pravatar.cc/150?img=42" />
            <AvatarFallback>UD</AvatarFallback>
          </Avatar>

          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={20} />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white py-3 px-4 shadow-sm">
          <ul className="space-y-4">
            <li>
              <Link 
                to="/" 
                className={`block font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-property-blue font-semibold' 
                    : 'text-property-navy hover:text-property-blue'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link 
                to="/saved-properties" 
                className={`block font-medium transition-colors ${
                  isActive('/saved-properties') 
                    ? 'text-property-blue font-semibold' 
                    : 'text-property-navy hover:text-property-blue'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Saved Properties
              </Link>
            </li>
            <li>
              <Link 
                to="/analytics" 
                className={`block font-medium transition-colors ${
                  isActive('/analytics') 
                    ? 'text-property-blue font-semibold' 
                    : 'text-property-navy hover:text-property-blue'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Analytics
              </Link>
            </li>
            <li>
              <Link 
                to="/contacts" 
                className={`block font-medium transition-colors ${
                  isActive('/contacts') 
                    ? 'text-property-blue font-semibold' 
                    : 'text-property-navy hover:text-property-blue'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacts
              </Link>
            </li>
            <li>
              <Link 
                to="/settings" 
                className={`block font-medium transition-colors ${
                  isActive('/settings') 
                    ? 'text-property-blue font-semibold' 
                    : 'text-property-navy hover:text-property-blue'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
