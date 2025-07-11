
import { useState } from 'react';
import Logo from './navbar/Logo';
import DesktopNavigation from './navbar/DesktopNavigation';
import SearchBar from './navbar/SearchBar';
import UserMenu from './navbar/UserMenu';
import MobileMenu from './navbar/MobileMenu';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Logo />
        <DesktopNavigation />
        <SearchBar />
        <UserMenu onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)} />
      </div>
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onItemClick={() => setMobileMenuOpen(false)} 
      />
    </header>
  );
};

export default Navbar;
