import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scale } from 'lucide-react';
import { BRAND_NAME } from '../constants';
import { AccessConfig } from '../types';

interface HeaderProps {
  accessConfig: AccessConfig;
}

export const Header: React.FC<HeaderProps> = ({ accessConfig }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  
  const linkClasses = (path: string) => `
    block px-3 py-2 rounded-md text-base font-medium transition-colors
    ${isActive(path) 
      ? (accessConfig.highContrast ? 'bg-yellow-400 text-black font-bold underline' : 'text-teal-600 bg-teal-50') 
      : (accessConfig.highContrast ? 'text-white hover:text-yellow-400' : 'text-slate-600 hover:text-navy-900 hover:bg-slate-50')}
  `;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Practice Areas', path: '/practice-areas' },
    { name: 'Our Lawyers', path: '/our-lawyers' },
    { name: 'Our Approach', path: '/about' }, // Mapping "About" to Approach for warmer tone
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-40 border-b ${accessConfig.highContrast ? 'bg-black border-white' : 'bg-white/95 backdrop-blur-sm border-slate-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
             <Link to="/" className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded p-1">
                <div className={`p-2 rounded-lg ${accessConfig.highContrast ? 'bg-yellow-400 text-black' : 'bg-navy-900 text-white'}`}>
                  <Scale size={24} />
                </div>
                <span className={`font-bold text-lg sm:text-xl tracking-tight ${accessConfig.highContrast ? 'text-white' : 'text-navy-900'}`}>
                  {BRAND_NAME}
                </span>
             </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium 
                ${isActive(item.path)
                  ? (accessConfig.highContrast ? 'border-yellow-400 text-yellow-400' : 'border-teal-500 text-navy-900')
                  : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500
                ${accessConfig.highContrast ? 'text-white hover:bg-gray-800' : 'text-slate-400 hover:text-slate-500 hover:bg-slate-100'}
              `}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden ${accessConfig.highContrast ? 'bg-black border-t border-white' : 'bg-white border-t border-slate-100'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={linkClasses(item.path)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};