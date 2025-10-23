
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClasses = "block py-2 px-3 rounded transition-colors duration-300 text-white hover:bg-gray-700 hover:text-brand-gold";
  const activeNavLinkClasses = "text-brand-gold bg-gray-800";

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${navLinkClasses} ${activeNavLinkClasses}` : navLinkClasses;


  return (
    <header className="bg-black/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-brand-gold/10">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="text-2xl font-bold text-brand-gold">
            ACADEMIA COIFFURE
          </NavLink>
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/" className={getNavLinkClass} end>Accueil</NavLink>
            <NavLink to="/services" className={getNavLinkClass}>Services</NavLink>
            <NavLink to="/produits" className={getNavLinkClass}>Produits</NavLink>
            <NavLink to="/galerie" className={getNavLinkClass}>Galerie</NavLink>
            <NavLink to="/contact" className={getNavLinkClass}>Contact</NavLink>
            <NavLink to="/commander" className="ml-4 bg-brand-gold text-brand-dark font-bold py-2 px-4 rounded-full hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">
              Commander
            </NavLink>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <NavLink to="/" className={getNavLinkClass} end onClick={() => setIsOpen(false)}>Accueil</NavLink>
            <NavLink to="/services" className={getNavLinkClass} onClick={() => setIsOpen(false)}>Services</NavLink>
            <NavLink to="/produits" className={getNavLinkClass} onClick={() => setIsOpen(false)}>Produits</NavLink>
            <NavLink to="/galerie" className={getNavLinkClass} onClick={() => setIsOpen(false)}>Galerie</NavLink>
            <NavLink to="/contact" className={getNavLinkClass} onClick={() => setIsOpen(false)}>Contact</NavLink>
            <NavLink to="/commander" className="block text-center mt-2 bg-brand-gold text-brand-dark font-bold py-2 px-4 rounded-full hover:bg-yellow-300 transition-all duration-300" onClick={() => setIsOpen(false)}>
              Commander
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;