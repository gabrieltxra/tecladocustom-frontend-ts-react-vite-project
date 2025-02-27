import React from 'react';
import { Link } from 'react-router-dom';
import { Keyboard, Home, Users, PlusCircle } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Keyboard className="h-8 w-8 text-indigo-400" />
            <span className="text-xl font-bold">TecladoCustom</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="flex items-center space-x-1 hover:text-indigo-400 transition-colors">
              <Home className="h-5 w-5" />
              <span>Início</span>
            </Link>
            <Link to="/builder" className="flex items-center space-x-1 hover:text-indigo-400 transition-colors">
              <PlusCircle className="h-5 w-5" />
              <span>Construir</span>
            </Link>
            <Link to="/community" className="flex items-center space-x-1 hover:text-indigo-400 transition-colors">
              <Users className="h-5 w-5" />
              <span>Comunidade</span>
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button className="text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu - hidden by default */}
      <div className="hidden md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Início</Link>
          <Link to="/builder" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Construir</Link>
          <Link to="/community" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Comunidade</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;