import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGlobeAmericas, FaCamera, FaWallet, FaCompass } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/map-journal', icon: FaGlobeAmericas, text: 'Map Journal' },
    { path: '/gallery', icon: FaCamera, text: 'Gallery' },
    { path: '/expenses', icon: FaWallet, text: 'Expenses' },
    { path: '/recommendations', icon: FaCompass, text: 'Discover' },
  ];

  return (
    <nav className="glass-effect fixed w-full z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent"
          >
            TravelLog
          </Link>
          <div className="flex space-x-6">
            {navItems.map(({ path, icon: Icon, text }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${
                  location.pathname === path
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                    : 'text-gray-600 hover:bg-primary-50'
                }`}
              >
                <Icon className={`mr-2 ${location.pathname === path ? 'text-white' : 'text-primary-500'}`} />
                <span className="font-medium">{text}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;