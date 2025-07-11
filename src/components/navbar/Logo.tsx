import { Link } from 'react-router-dom';

const Logo = () => {
  return (
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
  );
};

export default Logo;