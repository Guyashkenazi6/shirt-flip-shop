
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-black border-b border-white/10 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={handleNavClick} className="flex items-center">
            <img 
              src="/lovable-uploads/0fc157e6-7db0-49ee-8033-b272a9797a03.png" 
              alt="Guy Ashkenazi Logo" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              onClick={handleNavClick}
              className={`text-white hover:text-gray-300 transition-colors duration-200 ${
                location.pathname === '/' ? 'border-b border-white' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/#products" 
              onClick={handleNavClick}
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              Products
            </Link>
            <Link 
              to="/connect" 
              onClick={handleNavClick}
              className={`text-white hover:text-gray-300 transition-colors duration-200 ${
                location.pathname === '/connect' ? 'border-b border-white' : ''
              }`}
            >
              Connect Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                onClick={handleNavClick}
                className={`text-white hover:text-gray-300 transition-colors duration-200 ${
                  location.pathname === '/' ? 'border-b border-white pb-1' : ''
                }`}
              >
                Home
              </Link>
              <Link 
                to="/#products" 
                onClick={handleNavClick}
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                Products
              </Link>
              <Link 
                to="/connect" 
                onClick={handleNavClick}
                className={`text-white hover:text-gray-300 transition-colors duration-200 ${
                  location.pathname === '/connect' ? 'border-b border-white pb-1' : ''
                }`}
              >
                Connect Us
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
