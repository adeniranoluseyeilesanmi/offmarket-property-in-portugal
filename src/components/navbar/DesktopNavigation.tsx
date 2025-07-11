import { Link, useLocation } from 'react-router-dom';

const DesktopNavigation = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Dashboard' },
    { path: '/saved-properties', label: 'Saved Properties' },
    { path: '/analytics', label: 'Analytics' },
    { path: '/contacts', label: 'Contacts' },
    { path: '/settings', label: 'Settings' },
  ];

  return (
    <nav className="hidden md:flex space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`font-medium transition-colors ${
            isActive(item.path)
              ? 'text-property-blue font-semibold'
              : 'text-property-navy hover:text-property-blue'
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default DesktopNavigation;