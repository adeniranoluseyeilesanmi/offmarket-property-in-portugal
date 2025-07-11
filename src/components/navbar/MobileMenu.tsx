import { Link, useLocation } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onItemClick: () => void;
}

const MobileMenu = ({ isOpen, onItemClick }: MobileMenuProps) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Dashboard' },
    { path: '/saved-properties', label: 'Saved Properties' },
    { path: '/analytics', label: 'Analytics' },
    { path: '/contacts', label: 'Contacts' },
    { path: '/settings', label: 'Settings' },
  ];

  if (!isOpen) return null;

  return (
    <nav className="md:hidden bg-white py-3 px-4 shadow-sm">
      <ul className="space-y-4">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link 
              to={item.path}
              className={`block font-medium transition-colors ${
                isActive(item.path)
                  ? 'text-property-blue font-semibold' 
                  : 'text-property-navy hover:text-property-blue'
              }`}
              onClick={onItemClick}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenu;